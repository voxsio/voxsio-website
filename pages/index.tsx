import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';


const stories = [
	["How to help low self-esteem", "howtohelplowselfesteem.jpg", "border-choco mt-10", "bg-choco"],
	["Overcoming problems", "overcomingproblems.jpg", "border-ocean", "bg-ocean"],
	["Building your strengths", "buildingyourstrengths.jpg", "border-choco mt-10", "bg-choco"],
	["What happens when you contact a helpline?", "whathappenswhenyoucontactahelpline.jpg", "border-aqua", "bg-aqua"],
	["Stomach pains", "stomachpains.jpg", "border-ketchup -mt-10", "bg-ketchup"],
	["Stress and the body", "stressandthebody.jpg", "border-ocean", "bg-ocean"],
	["Feeling sick in the morning", "feelingsickinthemorning.jpg", "border-grass", "bg-grass"],
	["What is burnout?", "whatisburnout.png", "border-orange -mt-10", "bg-orange"],
	["Needing the toilet all the time", "needingthetoiletallthetime.jpg", "border-ocean", "bg-ocean"],
	["Letting go of worries", "lettinggoofworries.jpg", "border-ocean", "bg-ocean"],
	["Pain and the brain", "painandthebrain.jpg", "border-ketchup -mt-10", "bg-ketchup"]
];


const Home: NextPage = () => (
	<Layout>
		<Head>
			<title>UB-OK - Home</title>
			<meta name="description" content="UB-OK" />
		</Head>

		<section className="w-full h-[50vh] flex items-center justify-center border-y border-blue-500">
			<div className="text-2xl">
				<h1>Welcome to UBBBBBOK!</h1>
				{/* <Image
					src="/images/screenshot.png"
					alt="A screenshot of the UB-OK app, featuring a conversation between a user and the chatbot. The chatbot has explained that waking up with nausea in the mornings is a common occurrence, and has just asked the user what their morning nausea is like."
					fill
					className="object-contain"
					priority
				/> */}
			</div>
		</section>

		<section className="w-full h-[40vh] flex items-center justify-center bg-choco">
			<div className="text-2xl text-white font-bold">
				<h1>Help us change the way we deliver mental health</h1>
			</div>
		</section>

		<section className="w-full h-[90vh] overflow-hidden">
			<div className="w-fit ml-8 -mt-8 grid grid-cols-3 gap-4">
				{ stories.map(([title, img, containerClassName, titleClassName], index) => (
					<div
						key={index}
						className={`relative w-[250px] h-[250px] border-4 rounded-lg overflow-hidden ${containerClassName}`}
					>
						<Image
							src={`/images/${img}`}
							alt=""
							fill
							className="object-contain"
						/>
						<span className={`absolute max-w-[95%] bottom-0 pt-1 px-2 rounded-tr-lg font-black text-white ${titleClassName}`}>
							{ title }
						</span>
					</div>
				))}
			</div>
		</section>

		<section className="w-full h-[50vh] bg-grass">
			
		</section>
	</Layout>
);

export default Home;





{/* <div>
	<a
		href='https://testflight.apple.com/join/pAsYu0rE'
		className={s.storeBtnLink}
	>
		<img
			alt='Download on the App Store'
			src='/images/downloadAppStore.svg'
			className={s.storeBtnApple}
		/>
	</a>
	<a
		href='https://play.google.com/store/apps/details?id=com.ubok.ubok&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
		className={s.storeBtnLink}
	>
		<img
			alt='Get it on Google Play'
			src='https://play.google.com/intl/en_gb/badges/static/images/badges/en_badge_web_generic.png'
			className={s.storeBtnGoogle}
		/>
	</a>
</div> */}
