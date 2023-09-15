"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import bayes from "./logos/bayes.webp";
import civtech from "./logos/civtech.webp";
import cso from "./logos/cso.webp";
import dhi from "./logos/dhi.svg";
import eca from "./logos/eca.svg";
import innovateuk from "./logos/innovateuk.webp";
import mdmc from "./logos/mdmc.webp";
import nesta from "./logos/nesta.webp";
import nhsgrampian from "./logos/nhsgrampian.webp";
import nhshighland from "./logos/nhshighland.svg";
import nhstayside from "./logos/nhstayside.webp";
import sbri from "./logos/sbri.webp";
import scottishaisummit from "./logos/scottishaisummit.webp";
import scottishedge from "./logos/scottishedge.png";
import ship from "./logos/ship.webp";
import uoe from "./logos/uoe.svg";
import wayra from "./logos/wayra.webp";


const Page = () => {
	return (
		<div className="max-w-[75vw] lg:max-w-[988px] mx-auto">
			<section className="min-h-[60vh] mt-12 lg:flex items-center justify-evenly">
				<Image
					src={`/images/clinicians.png`}
					alt="Three clinicians wearing medical outfits standing next to our mascot, Ubee, who looks like a sunflower with arms and legs and a cute little face"
					width={300}
					height={300}
					priority
					className="mx-auto lg:mx-0"
				/>
				<div className="lg:w-96">
					<h1 className="text-4xl leading-snug text-center lg:text-left">
						Support your patients with ethical digital health apps.
					</h1>
					<Button
						className="block mt-12 mx-auto lg:mx-0"
						onClick={() => {
							const el = document.getElementById("storySection");
							el?.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Find out how
					</Button>
				</div>
			</section>

			<section className="mt-48" id="storySection">
				<div className="max-w-[600px] mx-auto">
					<p className="text-2xl font-bold text-center">
						We believe healthcare should be ethical, engaging, and instantly accessible.
					</p>
					<p className="text-xl text-center">
						Let's work together to make it a reality for your patients. Here's how:
					</p>
				</div>
				<div className="md:flex justify-between space-y-6 md:space-y-0 mt-16 md:-mx-8 lg:mx-0">
					<div className="md:w-[30%] p-4 bg-light-500 border-2 border-light-700 rounded-lg">
						<Image
							src={`/images/chat.png`}
							alt="Two chat bubbles"
							width={72}
							height={72}
							className="-mt-12 -ml-4"
						/>
						<h3>Lived experience</h3>
						<p>We co-create solutions with patients to answer their questions and address their needs.</p>
					</div>
					<div className="md:w-[30%] p-4 bg-light-500 border-2 border-light-700 rounded-lg">
						<Image
							src={`/images/checklist.png`}
							alt="Checklist"
							width={72}
							height={72}
							className="-mt-12 -ml-4"
						/>
						<h3>Clinical collaboration</h3>
						<p>We work with clinicians to create evidence-based content that is accurate, safe, and genuinely useful.</p>
					</div>
					<div className="md:w-[30%] p-4 bg-light-500 border-2 border-light-700 rounded-lg">
						<Image
							src={`/images/lightbulb.png`}
							alt="Lightbulb"
							width={72}
							height={72}
							className="-mt-12 -ml-4"
						/>
						<h3>Digital innovation</h3>
						<p>We deliver support through engaging, instantly accessible digital health solutions.</p>
					</div>
				</div>
				<div className="w-fit h-12 mx-auto mt-12">
					<Link href="/contact">
						<Button>
							Contact us
						</Button>
					</Link>
				</div>
			</section>

			<section className="mt-48 md:flex items-center justify-evenly">
				<div className="relative h-[400px] md:h-[600px] w-[75vw] md:w-[300px] mx-auto md:mx-0">
					<Image
						src={`/images/screenshot_gratitude.png`}
						alt="A mobile phone displaying the UB-OK app on the conversation screen. The user is in the middle of a gratitude exercise, and has just been asked to write down one thing they're grateful for today"
						fill
						className="object-contain"
					/>
				</div>
				<div className="mt-8 md:w-[440px] md:ml-12 lg:ml-0">
					<Image
						src={`/images/ubok.png`}
						alt="The UB-OK wordmark"
						width={150}
						height={150*724/2308}
						className="object-contain mx-auto md:mx-0"
					/>
					<h2 className="mt-8 md:mt-4 font-bold text-2xl">
						Finding engaging solutions for functional symptoms
					</h2>
					<p className="mt-4">
						<strong>UB-OK</strong> is our AI-powered chatbot that gives young people with gastrointestinal functional disorders access to personalised, evidence-based therapies and clinical expertise.
					</p>
				</div>
			</section>

			<section className="md:flex justify-between items-center space-y-6 md:space-y-0 mt-16 md:-mx-8 lg:mx-0">
				<div className="md:w-[30%] p-4 bg-sun-300/50 border-2 border-sun-500 rounded-lg">
					<p>&quot;UB-OK helped me make sense of the symptoms I have when I'm feeling anxious. Now I have a better idea of how to manage my anxiety.&quot;</p>
				</div>
				<div className="md:w-[30%] p-4 bg-grass-300/50 border-2 border-grass-500 rounded-lg">
					<p>&quot;I think the conversational style makes it a bit more personal and a bit less clinical - having someone who is a bit more human, even if they are a bot!&quot;</p>
				</div>
				<div className="md:w-[30%] p-4 bg-aqua-300/50 border-2 border-aqua-500 rounded-lg">
					<p>&quot;There is a huge tie between your physical and your mental health, and I like that the app captures that link.&quot;</p>
				</div>
			</section>

			<section className="mt-8">
				<p className="text-center italic">
					Testimonials from NHS user testing and closed beta feedback.
				</p>
			</section>

			<section className="mt-48 mb-72 w-[calc(100vw-10px)] -ml-[12.5vw] lg:max-w-[988px] lg:mx-auto">
				<h2 className="font-bold text-3xl text-center">
					Our partners
				</h2>
				<div className="relative mt-12 flex overflow-hidden">
					{ [0, 1].map(i => (
						<div key={i} className={`relative flex w-auto shrink-0 animate-marquee [&>*]:block [&>*]:h-[100px] [&>*]:w-auto [&>*]:mr-20`}>
							<Image src={nhsgrampian} alt="NHS Grampian logo" />
							<Image src={nhstayside} alt="NHS Tayside logo" />
							<Image src={nhshighland} alt="NHS Highland logo" />
							<Image src={ship} alt="Scottish Health and Industry Partnership logo" />
							<Image src={cso} alt="Chief Scientist Office logo" />
							<Image src={sbri} alt="Small Business Research Initiative logo" />
							<Image src={innovateuk} alt="InnovateUK logo" />
							<Image src={nesta} alt="Nesta logo" />
							<Image src={scottishedge} alt="Scottish EDGE logo" />
							<Image src={civtech} alt="CivTech logo" />
							<Image src={wayra} alt="Wayra logo" />
							<Image src={scottishaisummit} alt="Scottish AI Summit logo" />
							<Image src={mdmc} alt="Medical Device Manufacturing Centre logo" />
							<Image src={dhi} alt="Digital Health & Care Innovation Centre logo" />
							<Image src={uoe} alt="University of Edinburgh logo" />
							<Image src={bayes} alt="Bayes Centre logo" />
							<Image src={eca} alt="University of Edinburgh College of Art logo" />
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Page;
