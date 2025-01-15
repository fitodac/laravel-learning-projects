import { useState } from 'react'
import { type MediaLibrary, type Image } from '..'
import { useForm } from '@inertiajs/react'
import { toast } from 'react-toastify'

export const useMediaLibrary = (): MediaLibrary => {
	const [gallery, setGallery] = useState<Image[] | null>(null)
	const [csrf, setCsrf] = useState('')
	const { data, setData, patch, delete: destroy } = useForm({})

	/**
	 * Get library
	 * @returns
	 */
	const getLibrary = async () => {
		const resp = await fetch(route('mediaManager.library'))
		const respJSON = await resp.json()
		setGallery(respJSON.gallery)
		setCsrf(respJSON.csrf)
	}

	/**
	 * Update image
	 * @param image
	 */
	const updateImage = () => {
		patch(route('mediaManager.edit', { media: data }), {
			preserveScroll: true,
			onSuccess: (): void => {
				toast.success('Image updated')
				getLibrary()
			},
			onError: (err: any): void => {
				toast.error('Patch error')
				console.error('Patch error:', err)
			},
		})
	}

	/**
	 * Delete image
	 * @param image
	 */
	const deleteImage = () => {
		destroy(route('mediaManager.delete', { media: data }), {
			preserveScroll: true,
			onSuccess: (): void => {
				getLibrary()
				toast.success('Image deleted')
			},
			onError: (err: any): void => {
				toast.error('Delete error')
				console.error('Patch error:', err)
			},
		})
	}

	return {
		gallery,
		setGallery,
		getLibrary,
		csrf,
		data,
		setData,
		updateImage,
		deleteImage,
	}
}
