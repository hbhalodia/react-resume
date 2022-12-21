import img from "../../../images/bio-image.jpg";

export default function BioLeft() {
	return (
		<div className="flex items-start justify-start content-start mobile:flex-col mobile:items-center">
			<div className="mx-4">
				<img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 object-cover w-[100px]" src={img} alt="Bio Pic" height={100} width={100} />
			</div>
			<div className="mobile:text-center font-Tungsten text-Tungston-Bio-font mx-4 my-4">
				<h3 className="font-semibold">Hit Bhalodia</h3>
				<h5 className="font-thin">WordPress Engineer</h5>
			</div>
		</div>
	);
}
