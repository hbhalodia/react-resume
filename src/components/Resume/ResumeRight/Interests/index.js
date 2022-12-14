import { InterestData } from "./interests-data";

export default function Interests() {
	return (
		<div className="flex flex-col relative">
			<h2 className="border-b-2 py-4 border-black">
				Interests
			</h2>
			<div className="my-5 flex flex-wrap">
			{
				InterestData.map(
					( data, index ) => (
						<span key={index} className="py-2 px-4 border-2 border-slate-200 rounded-lg m-2">
							{data.interest}
						</span>
					)
				)
			}
			</div>
		</div>
	);
}
