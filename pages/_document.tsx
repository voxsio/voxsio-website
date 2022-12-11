import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
    return (
        <Html>
            <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Aclonica&family=Nunito:wght@400;700;900&display=swap"
                rel="stylesheet"
            />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document