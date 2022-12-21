import { ExperienceData } from "./experience-data";

export default function Experience() {
	return(
		<div className="flex flex-col relative">
			<h2 className="font-semibold font-Tungsten text-Tungsten-heading-font border-b-2 py-4 border-black">
				Work Experience
			</h2>
			{
				ExperienceData.map(
					( data,index ) => (
						<div key={index} className="font-HelveticaNeueLTPro-BdCn text-description-font relative my-5 before:left-2 before:top-4 before:-translate-x-2/4 before:-translate-y-2/4 before:h-4 before:w-4 before:bg-black before:rounded-full before:absolute after:top-4 after:-translate-x-2/4 after:-translate-y-2/4 after:left-2 after:h-3 after:w-3 after:bg-white after:rounded-full after:absolute">
							<div className="ml-10">
								{data.position}
							</div>
							<div className="ml-10">
								{data.company}
							</div>
							<div className="ml-10">
								{data.date}
							</div>
							<ul className="list-inside list-none relative mt-10 ml-10 before:content-[' '] before:p-[5px] before:-left-[5px] before:-top-[10px] before:-bottom-[10px] before:absolute before:border-l-2 before:border-t-2 before:border-b-2 mr-10 before:border-solid before:border-[#000] after:p-[5px] after:absolute after:-right-[5px] after:-top-[10px] after:-bottom-[10px] after:content-[' '] after:border-r-2 after:border-t-2 after:border-b-2 mr-10 after:border-solid after:border-[#000]">
								{
									data.tasks.map(
										( innerData, innerIndex ) => (
											<li key={innerIndex} className="p-[10px] before:content-['-']">
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
	);
}
