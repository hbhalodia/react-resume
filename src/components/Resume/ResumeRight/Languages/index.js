import { LanguagesData } from "./languages-data";

export default function Languages() {

	return (
		<div className="flex flex-col relative">
			<h2 className="border-b-2 py-4 border-black">
				Languages
			</h2>
			<div className="my-5 flex flex-row justify-between flex-wrap">
			{
				LanguagesData.map(
					( data, index ) => (
						<div key={index} className="mb-5">
							<h3>{data.language}</h3>
							<p>{data.prof}</p>
						</div>
					)
				)
			}
			</div>
		</div>
	);
}
