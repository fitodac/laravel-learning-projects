import { useEffect } from 'react'
import { AuthenticatedLayout } from '@/layouts'
import { t } from '@/i18n'
import { PageHeader } from '@/components'
import { PageProps } from '@/types'
import { useStoreMain } from '@/store'

const Dashboard = ({ auth }: PageProps) => {
	const { setAuth } = useStoreMain()

	useEffect(() => {
		if (setAuth) setAuth(auth)
	}, [])

	return (
		<>
			<PageHeader title={t('Dashboard')} />
		</>
	)
}

Dashboard.layout = (page: JSX.Element) => (
	<AuthenticatedLayout {...{ children: page, pageTitle: t('Dashboard') }} />
)

export default Dashboard
