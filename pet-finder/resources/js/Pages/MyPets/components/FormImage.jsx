import { useContext, useState, useEffect } from 'react'
import { FilePond } from 'react-filepond'
import { Img } from 'react-image'
import { myPetContext } from '../context'
import { useForm, usePage } from '@inertiajs/react'
import { useLaravelReactI18n } from 'laravel-react-i18n'

export const FormImage = () => {
	const { data, setData, setLoading } = useContext(myPetContext)

	const {
		data: imageData,
		setData: setImage,
		post,
		processing,
		errors,
	} = useForm({})

	const {
		props: {
			ziggy: { url },
		},
	} = usePage()

	const [imgSrc, setImgSrc] = useState(null)

	useEffect(() => {
		if (data.id) {
			setImgSrc(`${url}/storage/pets/${data.picture}?${Date.now()}`)
		}
	}, [data])

	/**
	 * Si el item existe se actualiza la imagen independientemente del resto del formulario
	 */
	const updateImage = () => {
		post(route('images.upload'))
		setData('picture', `${data.id}.webp`)
	}

	return (
		<>
			<div
				className={`transition-all ${
					processing ? 'opacity-30 pointer-events-none' : ''
				}`}
			>
				{imgSrc && <Img src={imgSrc} alt={data?.name} />}

				<FilePond
					allowMultiple={false}
					onaddfilestart={() => {
						setLoading(true)
					}}
					onprocessfile={(error, file) => {
						if (error) console.log('error', error)

						if (data.id) {
							updateImage()
						}

						setImgSrc(URL.createObjectURL(file.file))
						setLoading(false)
					}}
					server={{
						process: (fieldName, file, metadata, load) => {
							if (data.id) {
								setImage({
									id: data.id,
									image: file,
								})
							} else {
								setData('picture', file)
							}

							load(Date.now())
						},
					}}
				/>
			</div>
		</>
	)
}
