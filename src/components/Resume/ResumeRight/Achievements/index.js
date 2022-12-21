import { AchivementsData } from "./achievements-data";

export default function Achievements() {
	return (
		<div className="flex flex-col relative">
			<h2 className="font-semibold font-Tungsten text-Tungsten-heading-font border-b-2 py-4 border-black">
				Achievements
			</h2>
			<div className="font-HelveticaNeueLTPro-BdCn text-description-font my-5 flex flex-col">
			{
				AchivementsData.map(
					( data, index ) => (
						<div key={index} className="mb-5">
							<h3>{data.name}</h3>
							<p>{data.content}</p>
						</div>
					)
				)
			}
			</div>
		</div>
	);
}
