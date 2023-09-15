import Image from "next/image";


const Page = () => (
	<div className="px-8 pt-20 pb-60">
		<div className="max-w-[550px] mx-auto">
			<figure className="mb-24">
				<div className="relative w-full aspect-[1769/1063] mb-4">
					<Image
						src="/images/team.png"
						alt="The UB-OK team posing in front of a window of the Bayes Centre"
						fill
						className="border-4 border-blue-700 rounded-lg"
						priority
					/>
				</div>
				<figcaption>
					From left to right: Michael McTernan, CEO; Juvia Tian, digital artist; Clarissa Yung, content lead; Ubee, our best friend; Siobhan Brady, sales and marketing lead; and Rayo Verweij, CTO.
				</figcaption>
			</figure>

			<p className="mb-4">
				At Voxsio, our team shares a deep passion for creating ethical and innovative digital health products that enhance healthcare and improve lives.
			</p>

			<p>
				This part of our website is currently under construction - check back soon or email <a href="mailto:chat@ubok.app" className="underline hover:text-red-700">chat@ubok.app</a> with any questions!
			</p>
		</div>
	</div>
);

export default Page;
