import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';


const About: NextPage = () => (
	<Layout>
		<Head>
			<title>UB-OK - About</title>
			<meta name="description" content="UB-OK" />
		</Head>

		<div className="px-8 py-20 bg-light-500 rounded-[4rem]">
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
					<figcaption className="italic">
						From left to right: Michael McTernan, CEO; Juvia Tian, digital artist; Clarissa Yung, content lead; Ubee, our best friend; Siobhan Brady, sales and marketing lead; and Rayo Verweij, CTO.
					</figcaption>
				</figure>

				<p>
					<b>UB-OK</b> was started with one mission: to make clinicians' mental health expertise engaging, accessible and scalable for all children and young people.
				</p>

				<p>
					We are redefining digital mental health support in collaboration with the NHS and young people with lived experience, creating content that is useful, relevant and proven to work.
				</p>

				<p>
					Through evidence-based therapeutic conversations, UB-OK educates, empowers and creates a safe, supportive environment for children and young people to learn more about their mental health and find ways to improve it.
				</p>

				<p className="mb-24">
					Our traditional mental health services are overwhelmed, and too many young people are not receiving the support that they need before they reach a crisis point. Using digital innovation, and with a little help from our pal Ubee, UB-OK ensures support is available anytime, right in the palm of your hand.
				</p>
			</div>
		</div>
	</Layout>
);

export default About;
