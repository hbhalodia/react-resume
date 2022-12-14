import { ProjectData } from "./project-data";

export default function Projects() {
	return (
		<div className="flex flex-col relative">
			<h2 className="border-b-2 py-4 border-black">
				Personal Projects
			</h2>
			<div className="my-5 flex flex-col">
				{
					ProjectData.map(
						( data, index ) => (
							<div key={index} className="mb-5">
								<div>
									{data.name}
								</div>
								<ul className="list-outside list-none">
									{
										data.information.map(
											( innerData, innerIindex ) => (
												<li key={innerIindex} className="p-2 before:content-['-']">
													&nbsp;{innerData}
												</li>
											)
										)
									}
								</ul>
							</div>
						)
					)
				}
			</div>
		</div>
	);
}
