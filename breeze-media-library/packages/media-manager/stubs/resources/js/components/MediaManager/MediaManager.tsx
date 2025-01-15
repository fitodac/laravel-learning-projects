import React from 'react'
import { useState } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import { Tabs, Tab } from '@nextui-org/react'

import 'filepond/dist/filepond.min.css'

export const MediaManager = (): JSX.Element => {
	const [loading, setLoading] = useState(false)
	const [imgSrc, setImgSrc] = useState(false)

	return (
		<>
			<div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
				<div className="p-6 text-gray-900 dark:text-gray-100">
					Media Manager (resources)
					<div className="mt-5">
						<FilePond
							allowMultiple={true}
							credits={false}
							// maxFiles={3}
							// files={this.state.files}
							onaddfilestart={(file) => {
								// console.log('addfilestart', file)
								// setLoading(true)
							}}
							onaddfile={(error, file) => {
								console.log('onaddfile', file)
							}}
							onprocessfile={(error, file) => {
								if (error) console.log('error', error)
								console.log('onprocessfile', file)

								// setImageSrc(URL.createObjectURL(file.file))
								setLoading(false)
							}}
							onprocessfiles={() => {
								console.log('onprocessfiles')
							}}
							server={{
								process: route('mediaManager.upload'),
								// url: route('mediaManager.upload'),
								// fetch: ('/api/upload', {}) => {},
								// process: (fieldName, file, metadata, load) => {
								// 	load(`${Date.now()}`)
								// }
							}}
							className="h-96"
						/>

						{/* <pre>{JSON.stringify('./api')}</pre> */}
					</div>
				</div>
			</div>
		</>
	)
}
