import { useEffect } from 'react'

export default function Feature(props) {
	useEffect(() => {
		setupAnimations(props.id)
	}, [])

	return (
		<section
			id={props.id}
			className="relative h-screen"
		>
			<div
				className={`content absolute left-0 right-0 top-[${props.top}] mx-auto my-2 max-w-prose transition-all`}
			>
				<h1 className="supernova text-5xl font-black uppercase text-white">
					{props.heading}
				</h1>
				<p className="glass rounded-2xl text-justify text-white">
					{props.children}
				</p>
			</div>
		</section>
	)
}

function setupAnimations(id) {
	const element = document.getElementById(id)
	const content = document.querySelector(`#${id} .content`)
	;(content as HTMLElement).style.opacity = '0.5'

	let observer = new IntersectionObserver(
		entries => {
			if (entries[0].isIntersecting) {
				;(content as HTMLElement).style.opacity = '1'
			}
		},
		{
			threshold: 0.9,
			// root: document.getElementById('starship'),
		}
	)

	observer.observe(element)
}
