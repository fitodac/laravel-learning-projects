import { useState, createContext, useContext, Fragment } from 'react'
import { Link } from '@inertiajs/react'
import { Transition } from '@headlessui/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const DropDownContext = createContext()

export const Dropdown = ({ children }) => {
	const [open, setOpen] = useState(false)

	const toggleOpen = () => {
		setOpen((previousState) => !previousState)
	}

	return (
		<>
			<DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
				{/* <div className="relative"></div> */}
				<DropdownMenu.Root>
					{children}

					<DropdownMenu.Portal></DropdownMenu.Portal>
				</DropdownMenu.Root>
			</DropDownContext.Provider>
		</>
	)
}

const Trigger = ({ children }) => {
	const { open, setOpen, toggleOpen } = useContext(DropDownContext)

	return (
		<>
			<DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
			{/* <div onClick={toggleOpen}>{children}</div>

			{open && (
				<div
					className="fixed inset-0 z-40"
					onClick={() => setOpen(false)}
				></div>
			)} */}
		</>
	)
}

const Content = ({
	align = 'right',
	width = '48',
	contentClasses = 'py-1 bg-white dark:bg-stone-700',
	children,
}) => {
	const { open, setOpen } = useContext(DropDownContext)

	let alignmentClasses = 'origin-top'

	if (align === 'left') {
		alignmentClasses = 'ltr:origin-top-left rtl:origin-top-right start-0'
	} else if (align === 'right') {
		alignmentClasses = 'ltr:origin-top-right rtl:origin-top-left end-0'
	}

	let widthClasses = ''

	if (width === '48') {
		widthClasses = 'w-48'
	}

	return (
		<>
			<DropdownMenu.Content
				className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
				sideOffset={5}
			>
				<DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
					New Tab{' '}
					<div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
						⌘+T
					</div>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
			{/* <Transition
				as={Fragment}
				show={open}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<div
					className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
					onClick={() => setOpen(false)}
				>
					<div
						className={
							`rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses
						}
					>
						{children}
					</div>
				</div>
			</Transition> */}
		</>
	)
}

const DropdownLink = ({ className = '', children, ...props }) => {
	return (
		<Link
			{...props}
			className={
				'block w-full px-4 py-2 text-start text-sm leading-5 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 focus:outline-none focus:bg-stone-100 dark:focus:bg-stone-800 transition duration-150 ease-in-out ' +
				className
			}
		>
			{children}
		</Link>
	)
}

Dropdown.Trigger = Trigger
Dropdown.Content = Content
Dropdown.Link = DropdownLink
