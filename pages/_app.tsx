import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.scss';


const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</Head>

		<Component {...pageProps} />
		<Analytics />
	</>
);

export default App;
