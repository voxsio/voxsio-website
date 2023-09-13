import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';


const Contact: NextPage = () => (
	<Layout>
		<Head>
			<title>UB-OK - Contact us</title>
			<meta name="description" content="UB-OK" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className="px-8 py-20 bg-light-500 rounded-[4rem]">
			<div className="max-w-[500px] mx-auto">
				<p>Get in touch! We'd love to hear from you at <a href="mailto:chat@ubok.app">chat@ubok.app</a>.</p>

				<p>Alternatively, come say hi in person! We are based in the Bayes Centre at the University of Edinburgh and we are always open for visitors.</p>
				<div className="relative w-[200px] aspect-[125/27] mt-8 ml-[calc(50%-250px)]">
					<Image
						src="/images/bayes.png"
						alt="The Bayes Centre wordmark"
						fill
					/>
				</div>
				<address className="not-italic">
					<b>Bayes Centre</b><br />
					Office 4.35<br />
					47 Potterrow<br />
					Edinburgh EH8 9BT
				</address>
			</div>
		</div>
	</Layout>
);

export default Contact;
