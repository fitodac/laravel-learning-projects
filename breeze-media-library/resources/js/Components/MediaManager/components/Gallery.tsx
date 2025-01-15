import { useContext, useEffect } from 'react'
import { Card, CardBody } from '@nextui-org/react'
import {
	mediaManagerContext,
	mediaManagerModalContext,
	useMediaLibrary,
	type Image,
} from '..'

export const Gallery = (): JSX.Element => {
	const {
		mediaGallery,
		setMediaGallery,
		selectedImage,
		setSelectedImage,
		setCsrfToken,
	} = useContext(mediaManagerContext)

	const { collection, setCollection } = useContext(mediaManagerModalContext)

	const { csrf, gallery, getLibrary } = useMediaLibrary()

	const select = (e: Image) => {
		if (!setSelectedImage) return

		if (selectedImage) {
			if (selectedImage.id === e.id) {
				setSelectedImage(null)
				if (setCollection) setCollection([])
			} else {
				setSelectedImage(e)
				if (setCollection && collection) setCollection([...collection, e])
			}
		} else {
			setSelectedImage(e)
			if (setCollection && collection) setCollection([...collection, e])
		}
	}

	useEffect(() => {
		getLibrary()
	}, [])

	useEffect(() => {
		if (gallery && setMediaGallery) setMediaGallery(gallery)
	}, [gallery])

	useEffect(() => {
		if (csrf && setCsrfToken) setCsrfToken(csrf)
	}, [csrf])

	return (
		<div
			id="mediaManagerGallery"
			className="h-full pr-5 overflow-auto md:pr-8 md:mr-60 lg:mr-72 xl:mr-96"
		>
			<div className="grid grid-cols-2 gap-7 pb-24 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
				{mediaGallery &&
					mediaGallery.map((img) => (
						<Card
							key={img.id}
							isPressable
							onPress={() => select(img)}
							className={`${selectedImage?.id === img.id && 'bg-primary'}`}
						>
							<CardBody
								className={` ${
									selectedImage?.id === img.id && 'bg-primary'
								} p-0`}
							>
								<img
									src={`/${img.filepath}`}
									alt={img.alt}
									className={`w-full object-cover aspect-square ${
										selectedImage?.id === img.id && 'opacity-60 multiply'
									}`}
								/>

								<span className="text-gray-400 text-xs right-3 bottom-1 absolute">
									{img.id}
								</span>
							</CardBody>
						</Card>
					))}
			</div>
		</div>
	)
}
