export const SideBackground = () => {
	return (
		<div 
			className="bg-sky-200 w-3/4 min-h-full hidden relative md:block
									bg-[url('/background.jpg')] bg-no-repeat bg-cover 
									bg-center lg:bg-bottom lg:w-full">
			<div className="text-white text-opacity-70 text-xs left-3 bottom-3 absolute">
				Photography by <b>Štefan Štefančík</b> on Unsplash
			</div>
		</div>
	)
}