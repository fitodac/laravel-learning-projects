import './bootstrap'

import '../css/app.css'
import 'remixicon/fonts/remixicon.css'
import '@radix-ui/themes/styles.css'
import '../css/radix-custom.css'

import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { LaravelReactI18nProvider } from 'laravel-react-i18n'
import { Theme } from '@radix-ui/themes'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: (name) =>
		resolvePageComponent(
			`./Pages/${name}.jsx`,
			import.meta.glob('./Pages/**/*.jsx')
		),
	setup({ el, App, props }) {
		const root = createRoot(el)

		root.render(
			<LaravelReactI18nProvider
				locale={'es'}
				fallbackLocale={'en'}
				files={import.meta.glob('/lang/*.json')}
			>
				<Theme accentColor="amber">
					<App {...props} />
				</Theme>
			</LaravelReactI18nProvider>
		)
	},
	progress: {
		color: '#4B5563',
	},
})
