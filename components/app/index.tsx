import Events from '../todos/Events'
import Planets from '../common/Planets'
import ControlPanel from '../app/ControlPanel'
import RoleSidebar from '../app/RoleSidebar'
import PerformanceSidebar from '../app/PerformanceSidebar'
import Journey from '../app/Journey'
import { useEffect, useState } from 'react'
import todoFixture from '../todos/todos.json'

export default function App() {
	const [todos, setTodos] = useState<object[]>([])
	useEffect(() => {
		setTodos(todoFixture)
	}, [])

	return (
		<div className="relative w-full">
			<main className="h-full">
				<header className="fixed top-0 z-10 w-full">
					<Events
						events={[
							{
								id: '1',
								description: 'Meeting with Steve',
								role: 'Software Creator',
								start: new Date(),
								end: new Date(),
							},
						]}
					/>
				</header>
				<div className="left-column fixed left-0 top-24 z-10 hidden w-1/6 p-4 text-white lg:block">
					<PerformanceSidebar />
				</div>
				<div className="right-column fixed right-0 top-24 z-10 hidden w-1/6 p-4 lg:block">
					<RoleSidebar />
				</div>
				<div className="parallax-container no-scrollbar h-full scroll-p-[calc(100vh-10rem)]">
					<div
						className={`plane-negative-1 h-[calc(${8 * 100}vh)] absolute
							-z-10`}
					>
						<Planets height="h-[800vh]" />
					</div>
					{todos.length ? <Journey todos={todos} /> : 'Loading!'}
				</div>
				<ControlPanel />
			</main>
		</div>
	)
}
