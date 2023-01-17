import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
	<Html>
		<Head>
			<link
				href="https://fonts.googleapis.com/css2?family=DM+Mono&family=Nunito:wght@400;700;900&display=swap"
				rel="stylesheet"
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<body className="bg-cream selection:bg-blue-700 selection:text-white">
			<Main />
			<NextScript />
		</body>
	</Html>
);

export default Document;
