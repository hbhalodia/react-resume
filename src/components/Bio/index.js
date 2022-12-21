import BioLeft from "./BioLeft";
import BioRight from "./BioRight";

export default function Bio() {
	return (
		<div className="flex justify-between items-center mobile:flex-col">
			<BioLeft />
			<BioRight />
		</div>
	);
}
