import { Img } from 'react-image'

export const Hero = () => {
	return (
		<>
			<Img
				src="/img/home/hero.gif"
				className="w-full max-h-full"
				container={(children) => (
					<div className="bg-[#fde26d] h-[50vh] flex justify-center">
						{children}
					</div>
				)}
			/>
		</>
	)
}
