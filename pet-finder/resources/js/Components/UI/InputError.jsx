import { useLaravelReactI18n } from 'laravel-react-i18n'

export const InputError = ({ error }) => {
	const { t } = useLaravelReactI18n()

	if (error) {
		return (
			<div className="text-red-500 text-xs leading-tight mt-1">{error}</div>
		)
	} else {
		return null
	}
}
