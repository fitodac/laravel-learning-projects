import { useEffect } from 'react'
import { AuthenticatedLayout } from '@/layouts'
import { t } from '@/i18n'
import { PageHeader } from '@/components'
import { PageProps } from '@/types'
import { useStoreMain } from '@/store'
import {
	UpdateProfile,
	// VerifyEmail,
	UpdatePassword,
	DeleteAccount,
} from './components'

interface Props {}

const Edit = ({
	auth,
	mustVerifyEmail,
	status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) => {
	const { setAuth, profileTab, setProfileTab } = useStoreMain()

	useEffect(() => {
		if (setAuth) setAuth(auth)
	}, [])

	return (
		<>
			<PageHeader title={t('My account')} />

			<div className="space-y-6 lg:max-w-xl">
				<div className="bg-white p-10 shadow-xl rounded-2xl dark:bg-black/20">
					<UpdateProfile {...{ mustVerifyEmail, status }} />
				</div>

				<div className="bg-white p-10 shadow-xl rounded-2xl dark:bg-black/20">
					<UpdatePassword />
				</div>

				<div className="bg-white p-10 shadow-xl rounded-2xl dark:bg-black/20">
					<DeleteAccount />
				</div>
			</div>

			<div className="h-20" />
		</>
	)
}

Edit.layout = (page: JSX.Element) => (
	<AuthenticatedLayout {...{ children: page, pageTitle: t('My account') }} />
)

export default Edit
