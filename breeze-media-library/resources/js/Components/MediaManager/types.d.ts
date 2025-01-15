export type Image = {
	id?: number
	name?: string
	filepath?: string
	alt?: string
	caption?: string
	created_at?: string
	updated_at?: string
}

export interface MediaLibrary {
	gallery: Image[] | null
	setGallery: (images: Image[]) => void
	getLibrary: () => void
	csrf?: string
	data: Image
	setData: (data: {}) => void
	updateImage: () => void
	deleteImage: () => void
}

export interface MediaManagerContext {
	mediaGallery?: Image[] | null
	setMediaGallery?: (images: Image[]) => void
	selectedImage?: Image | null
	setSelectedImage?: (image: Image | null) => void
	csrfToken?: string
	setCsrfToken?: (token: string) => void
}

export type FormImage = {
	alt: string
	caption: string
}

export interface MediaGalleryComponent {
	btnText?: string
	selectMultiple?: boolean
	images?: (images: Image[]) => void
}

export interface MediaManagerModalContextType {
	collection?: Image[] | any[]
	setCollection?: (images: Image[]) => void
	images?: (images: Image[]) => void
	onClose?: () => void
}
