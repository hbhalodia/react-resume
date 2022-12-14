import { AchivementsData } from "./achievements-data";

export default function Achievements() {
	return (
		<div className="flex flex-col relative">
			<h2 className="border-b-2 py-4 border-black">
				Skills
			</h2>
			<div className="my-5 flex flex-col">
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
