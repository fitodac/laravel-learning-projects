import { useState, createContext } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import { type Image, type MediaManagerContext } from '.'
import { Gallery, Sidebar } from './components'
import { Tabs, Tab } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'react-toastify/dist/ReactToastify.css'
import './style.css'

registerPlugin(FilePondPluginImagePreview)

export const mediaManagerContext = createContext<MediaManagerContext>({})
const tabsGroup = ['mediaLibrary', 'uploadFiles']

export const MediaManager = (): JSX.Element => {
	const [tabsEnabled, setTabsEnabled] = useState<string[] | any[]>([])
	const [selectedImage, setSelectedImage] = useState<Image | null>(null)
	const [mediaGallery, setMediaGallery] = useState<Image[]>([])
	const [csrfToken, setCsrfToken] = useState<string>('')

	const contextValue = {
		mediaGallery,
		setMediaGallery,
		selectedImage,
		setSelectedImage,
		csrfToken,
		setCsrfToken,
	}

	return (
		<>
			<div className="text-gray-900 h-full dark:text-gray-100">
				<Tabs
					aria-label="Media manager"
					variant="light"
					color="primary"
					disabledKeys={tabsEnabled}
					defaultSelectedKey="mediaLibrary"
					className=""
				>
					<Tab key="mediaLibrary" title="Media library" className="h-full ml-5">
						<mediaManagerContext.Provider value={contextValue}>
							<section className="h-full relative">
								<Gallery />
								<Sidebar />
							</section>
						</mediaManagerContext.Provider>
					</Tab>

					<Tab key="uploadFiles" title="Upload files">
						<div className="px-5">
							<FilePond
								allowMultiple={true}
								credits={false}
								onaddfilestart={(file) => {
									// console.log('addfilestart', file)
									// setLoading(true)
								}}
								onaddfile={(error, file) => {
									// console.log('onaddfile', file)
									setTabsEnabled([...tabsGroup])
								}}
								onprocessfile={(error, file) => {
									if (error) console.log('error', error)
									console.log('onprocessfile', file)

									// setImageSrc(URL.createObjectURL(file.file))
								}}
								onprocessfiles={() => {
									// console.log('onprocessfiles')
									setTabsEnabled([])
								}}
								server={{
									process: {
										url: route('mediaManager.upload'),
										headers: { 'X-CSRF-TOKEN': csrfToken },
									},
								}}
								allowImagePreview={true}
								className="h-full min-h-96 grid grid-cols-2"
							/>
						</div>
					</Tab>
				</Tabs>
			</div>

			<ToastContainer autoClose={2000} position="bottom-right" />
		</>
	)
}
