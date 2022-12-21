import { EduData } from "./edu-data";

export default function Education() {
	return (
		<div className="flex flex-col relative">
			<h2 className="font-semibold font-Tungsten text-Tungsten-heading-font border-b-2 py-4 border-black">
				Education
			</h2>
			<div>
				{
					EduData.map(
						( data,index ) => (
							<>
								<div key={index} className="font-HelveticaNeueLTPro-BdCn text-description-font relative my-5 before:left-2 before:top-4 before:-translate-x-2/4 before:-translate-y-2/4 before:h-4 before:w-4 before:bg-black before:rounded-full before:absolute after:top-4 after:-translate-x-2/4 after:-translate-y-2/4 after:left-2 after:h-3 after:w-3 after:bg-white after:rounded-full after:absolute">
									<div className="ml-10">
										{data.InstituteName}
									</div>
									<div className="ml-10">
										{data.StreamName}
									</div>
								</div>
							</>
						)
					)
				}
			</div>
		</div>
	);
}
