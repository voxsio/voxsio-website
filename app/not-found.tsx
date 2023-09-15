import Image from 'next/image';


const NotFound = () => (
	<section className="w-full min-h-[75vh] lg:min-h-[65vh] mt-12 lg:flex items-center justify-evenly">
		<Image
			src={`/images/ubee-internet.png`}
			alt="Our mascot Ubee pointing to an icon representing disconnected internet"
			width={300}
			height={300}
			className="mx-auto lg:mx-0 border-b-2 border-dark-500"
			priority
		/>
		<div className="lg:w-96 mt-12 lg:mt-0">
			<h1 className="font-hand font-bold text-8xl text-center lg:text-left">
				404
			</h1>
			<p className="mt-4 text-4xl text-center lg:text-left">
				Page not found!
			</p>
		</div>
	</section>
);

export default NotFound;
