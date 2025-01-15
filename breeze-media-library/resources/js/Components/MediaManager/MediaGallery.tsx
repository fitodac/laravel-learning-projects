import { useState, createContext, useEffect } from 'react'
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Button,
} from '@nextui-org/react'
import {
	MediaManager,
	type MediaManagerModalContextType,
	type Image,
	type MediaGalleryComponent,
} from '.'
import { ModalNavbar } from './components'

export const mediaManagerModalContext =
	createContext<MediaManagerModalContextType>({})

export const MediaGallery = ({
	btnText = 'Insert an image',
	selectMultiple = false,
	images,
}: MediaGalleryComponent): JSX.Element => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [collection, setCollection] = useState<Image[] | any[]>([])

	const contextValue = { collection, setCollection, images, onClose }

	// useEffect(() => {
	// 	images(collection)
	// }, [collection])

	return (
		<>
			<Button color="primary" onPress={onOpen}>
				{btnText}
			</Button>

			<Modal
				size="full"
				isOpen={isOpen}
				isDismissable={false}
				hideCloseButton={true}
				backdrop="opaque"
				onClose={onClose}
				className="max-w-[90vw] max-h-[90vh]"
			>
				<ModalContent className="bg-transparent">
					{(onClose) => (
						<>
							<mediaManagerModalContext.Provider value={contextValue}>
								<ModalHeader className="bg-white border-b border-gray-100 rounded-t-2xl dark:bg-gray-900 dark:border-gray-800">
									Media manager
								</ModalHeader>

								<ModalBody className="bg-white h-full p-0 overflow-hidden dark:bg-gray-900">
									<div className="h-full pt-3">
										<MediaManager />
									</div>
								</ModalBody>

								<ModalFooter className="p-0">
									<ModalNavbar />
								</ModalFooter>
							</mediaManagerModalContext.Provider>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
