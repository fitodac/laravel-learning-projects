import { useContext, useState, FormEvent, useEffect } from 'react'
import { Input, Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { mediaManagerContext, useMediaLibrary } from '..'

export const Sidebar = (): JSX.Element => {
	const {
		selectedImage: img,
		setMediaGallery,
		setSelectedImage,
	} = useContext(mediaManagerContext)

	const { data, setData, gallery, updateImage, deleteImage } = useMediaLibrary()
	const [copied, setCopied] = useState<boolean>(false)

	useEffect(() => {
		if (img) setData(img)
	}, [img])

	useEffect(() => {
		if (gallery && setMediaGallery) setMediaGallery(gallery)
	}, [gallery])

	const copyUrl = () => {
		const input = document.getElementById('mediaFileUrl') as HTMLInputElement
		input.select()
		document.execCommand('copy')
		window.getSelection()?.removeAllRanges()
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		updateImage()
	}

	const handleDelete = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		deleteImage()
		if (setSelectedImage) setSelectedImage(null)
	}

	return (
		<aside className="w-60 hidden top-0 bottom-0 right-0 absolute md:block lg:w-72 xl:w-96">
			<div id="mediaManagerSidebar" className="h-full overflow-auto">
				<div className="text-sm px-5 pb-24">
					{img && (
						<>
							<img
								src={`/${img.filepath}`}
								alt={img.alt}
								className="bg-white/10 w-full object-cover aspect-square rounded-xl"
							/>

							<div className="space-y-2 mt-6">
								<div className="dark:text-gray-400">Name:</div>
								<div className="font-semibold leading-tight break-words max-w-fit">
									{img.name}
								</div>
							</div>

							<div className="space-y-14 mt-10">
								<form onSubmit={handleUpdate} className="space-y-7">
									<Input
										type="text"
										name="alt"
										label="Alt text"
										labelPlacement="outside"
										size="sm"
										value={data.alt ?? ''}
										onChange={(e) =>
											setData({ ...data, [e.target.name]: e.target.value })
										}
									/>

									<Input
										type="text"
										name="caption"
										label="Caption"
										labelPlacement="outside"
										size="sm"
										value={data.caption ?? ''}
										onChange={(e) =>
											setData({ ...data, [e.target.name]: e.target.value })
										}
									/>

									<div className="">
										<Button fullWidth color="primary" size="sm" type="submit">
											Save
										</Button>
									</div>
								</form>

								<div className="relative">
									<Input
										id="mediaFileUrl"
										type="text"
										label="File URL"
										labelPlacement="outside"
										size="sm"
										defaultValue={`${window.location.origin}/${img.filepath}`}
										description={
											<div className="select-none">Click to copy</div>
										}
										readOnly
										onClick={copyUrl}
										className="cursor-pointer"
									/>

									<motion.div
										className="text-success text-xs font-medium -bottom-3 absolute"
										initial={{ opacity: 0, display: 'none' }}
										animate={copied ? { opacity: 1, display: 'block' } : {}}
										transition={{ duration: 0.3 }}
									>
										URL copied to clipboard
									</motion.div>
								</div>
							</div>

							<form onSubmit={handleDelete} className="mt-8">
								<Button color="danger" type="submit" fullWidth>
									Delete image
								</Button>
								<div className="text-danger font-medium tracking-wide text-center pt-1 select-none">
									This action cannot be undone
								</div>
							</form>
						</>
					)}
				</div>
			</div>
		</aside>
	)
}
