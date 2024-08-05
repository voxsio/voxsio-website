import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
	title: "Voxsio | About",
	description: "At Voxsio, our team shares a deep passion for creating ethical and innovative digital health products that enhance healthcare and improve lives."
};


const Page = () => (
	<div className="px-8 pt-20 pb-60">
		<div className="max-w-[600px] mx-auto">
			<p className="mb-8">
				At Voxsio, our team shares a deep passion for creating ethical and innovative digital health products that enhance healthcare and improve lives.
			</p>

			<figure className="w-full flex flex-row flex-wrap md:flex-nowrap items-center gap-8 mb-8">
				<Image
					src="/images/michael.webp"
					alt="Michael McTernan"
					width={200}
					height={250}
				/>
				<figcaption>
					CEO and founder <strong>Michael McTernan</strong> has been CEO four times, including at Rapid Mobile where he led investment rounds and the sale of the business in 2011. He is a trained NHS counsellor and works with CoCo Counselling one day a week. Michael is also a co-applicant on the Medical Research Council-funded UK-wide DataMind project.
				</figcaption>
			</figure>
			<figure className="w-full flex flex-row-reverse flex-wrap md:flex-nowrap items-center gap-8 mb-8">
				<Image
					src="/images/rayo.webp"
					alt="Rayo Verweij"
					width={200}
					height={250}
				/>
				<figcaption className="grow">
					CTO <strong>Rayo Verweij</strong> has been building websites and apps for over 10 years. He is part of the Centre for Doctoral Training in Designing Responsible Natural Language Processing at the University of Edinburgh and has previously conducted research on computational psychiatry and brain imaging.
				</figcaption>
			</figure>
			<figure className="w-full flex flex-row flex-wrap md:flex-nowrap items-center gap-8 mb-8">
				<Image
					src="/images/clarissa.webp"
					alt="Clarissa Yung"
					width={200}
					height={250}
				/>
				<figcaption>
					Clinical researcher <strong>Clarissa Yung</strong> manages content research and development in tandem with our partnered clinicians. She is a postgraduate in Human-Computer Interaction at University College London.
				</figcaption>
			</figure>
			<figure className="w-full flex flex-row-reverse flex-wrap md:flex-nowrap items-center gap-8 mb-8">
				<Image
					src="/images/juvia.webp"
					alt="Juvia Tian"
					width={200}
					height={250}
				/>
				<figcaption className="grow">
					Digital illustrator <strong>Juvia Tian</strong> brings our applications to life with hundreds of hand-drawn images. She holds an MA in Illustration from the University of Edinburgh.
				</figcaption>
			</figure>
		</div>
	</div>
);

export default Page;
