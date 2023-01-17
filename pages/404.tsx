import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';


const NotFound: NextPage = () => (
	<Layout headerStyle="bg-sky">
		<Head>
			<title>UB-OK - Page not found</title>
			<meta name="description" content="Page not found" />
		</Head>

		<div className="w-full h-[500px] flex flex-row bg-sky">
			<Image
				src="/images/ubee-internet.png"
				alt=""
				width={500}
				height={500}
				className="ml-[20%] mr-[10%]"
				priority
			/>
			<div className="flex flex-col justify-center">
				<h1 className="font-hand font-black text-9xl">
					404
				</h1>
				<p className="font-hand text-5xl">
					Page not found!
				</p>
			</div>
		</div>
	</Layout>
);

export default NotFound;
