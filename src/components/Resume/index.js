import ResumeLeft from "./ResumeLeft";
import ResumeRight from "./ResumeRight";

export default function Resume() {
	return (
		<div className="mx-4 my-20 grid grid-cols-2 gap-10 mobile:grid-cols-1 mobile:my-10">
			<ResumeLeft />
			<ResumeRight />
		</div>
	);
}
