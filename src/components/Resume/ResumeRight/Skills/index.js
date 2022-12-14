import { SkillData } from "./skill-data";

export default function Skills() {
	return (
		<div className="flex flex-col relative">
			<h2 className="border-b-2 py-4 border-black">
				Skills
			</h2>
			<div className="my-5 flex flex-wrap">
			{
				SkillData.map(
					( data, index ) => (
						<span key={index} className="py-2 px-4 rounded-lg m-2 bg-slate-400">
							{data.name}
						</span>
					)
				)
			}
			</div>
		</div>
	);
}
