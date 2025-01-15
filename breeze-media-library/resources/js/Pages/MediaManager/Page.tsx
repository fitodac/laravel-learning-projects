import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import { MediaManager } from '@/Components/MediaManager'

export default function Page({
	auth,
	errors,
}: {
	auth: PageProps
	errors: any
}) {
	return (
		<AuthenticatedLayout
			user={auth.user}
			header={
				<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
					Media Library
				</h2>
			}
		>
			<Head title="Media Library" />

			<div className="py-6">
				<div className="mx-auto space-y-7 sm:px-6 lg:px-8">
					<div className="h-[68vh]">
						<MediaManager />
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	)
}
