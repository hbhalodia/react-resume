import BioLeft from "./BioLeft";
import BioRight from "./BioRight";

export default function Bio() {
	return (
		<div className="flex justify-between">
			<BioLeft />
			<BioRight />
		</div>
	);
}
