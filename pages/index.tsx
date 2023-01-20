import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';


const Home: NextPage = () => (
	<Layout>
		<Head>
			<title>UB-OK - Home</title>
			<meta name="description" content="UB-OK" />
		</Head>

		<div className="relative flex flex-col lg:flex-row mb-16 lg:pl-8 bg-light-500 rounded-[4rem]">
			<div className="relative aspect-[14/27] w-full md:w-[50%] md:mx-auto lg:sticky lg:height-[70vh] lg:width-[30vh] lg:top-[15vh] lg:mt-[10vh] 2xl:h-[95vh] 2xl:w-[40%] 2xl:-mt-16 2xl:ml-5 2xl:mb-8 2xl:top-[2.5vh]">
				<Image
					src="/images/screenshot.png"
					alt="A screenshot of the UB-OK app, featuring a conversation between a user and the chatbot. The chatbot has explained that waking up with nausea in the mornings is a common occurrence, and has just asked the user what their morning nausea is like."
					fill
					className="object-contain"
					priority
				/>
			</div>
		</div>
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
