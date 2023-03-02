import Todo from './Todo'
import { Event } from '../todos/interfaces'

export default function Events({
	events,
	expanded = false,
}: {
	events: Event[]
	expanded: boolean
}) {
	return (
		<div
			className={`events glass z-10 flex items-end rounded-md ${
				expanded ? 'translate-y-0' : '-translate-y-[10rem]'
			} duration-500 ease-out`}
		>
			<div className="left-column w-1/6 grow p-4">
				<p className="hidden text-left text-base font-light uppercase tracking-wide text-slate-400 md:block">
					Up next
				</p>
				<p className="text-left text-xs font-light tracking-wide text-slate-200 md:text-base">
					30m
				</p>
			</div>
			<div className="relative w-4/6 px-20">
				{events.length ? (
					<div className="flex flex-wrap">
						{events.map(event => (
							<Todo
								key={event.id}
								todo={event}
							/>
						))}
					</div>
				) : (
					'No events here. Sync your calendar to see them.'
				)}
			</div>
			<div className="right-column w-1/6 grow p-4">
				<p className="hidden text-right text-base font-light uppercase tracking-wide text-slate-400 md:block">
					Events
				</p>
				<p className="text-right text-xs font-light tracking-wide text-slate-200 md:text-base">
					3/5
				</p>
			</div>
		</div>
	)
}
