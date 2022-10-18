import AppDemo from './AppDemo'
import HeroMessage from './HeroMessage'

export default function LandingScreen(props) {
	return (
		<section
			id="landing-screen"
			className="relative flex h-[calc(100vh-5rem)] flex-col"
		>
			{/* <h1
			id="title"
			className="supernova text-center text-6xl font-extralight uppercase tracking-widest text-white"
		>
			Starfocus
		</h1> */}
			{/* <h2
				id="title"
				className="text-center text-5xl font-light uppercase tracking-wide text-white"
			>
				<span className="supernova">Starfocus</span>
			</h2> */}
			<HeroMessage />
			<div className="left-0 right-0 m-auto my-4 w-10/12 flex-grow overflow-hidden">
				{/* Make this sticky too */}
				<AppDemo />
			</div>
		</section>
	)
}
