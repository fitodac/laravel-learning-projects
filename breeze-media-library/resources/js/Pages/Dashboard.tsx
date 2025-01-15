import { useState } from 'react'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import { MediaGallery } from '@/Components/MediaManager'

export default function Dashboard({ auth }: PageProps) {
	const [img, setImg] = useState<any>(null)

	return (
		<AuthenticatedLayout
			user={auth.user}
			header={
				<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
					Dashboard
				</h2>
			}
		>
			<Head title="Dashboard" />

			<div className="py-12">
				<div className="max-w-7xl mx-auto space-y-7 sm:px-6 lg:px-8">
					<div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
						<div className="p-6 text-gray-900 space-y-6 dark:text-gray-100">
							<div className="">Single image</div>

							<div className="">
								{img && (
									<figure>
										<img
											src={img.filepath}
											alt="Demo image"
											className="h-52 object-cover aspect-video rounded-2xl"
										/>
										{img.caption && <figcaption>{img.caption}</figcaption>}
									</figure>
								)}
							</div>

							<div className="dark">
								<MediaGallery
									images={(images) => {
										setImg(images[0])
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	)
}
