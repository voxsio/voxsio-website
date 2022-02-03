import type { NextPage } from 'next'
import Head from 'next/head'
import s from '../styles/About.module.scss'


const About: NextPage = () => {
    return (
        <div className={s.container}>
            <Head>
                <title>About - UB-OK</title>
                <meta name="description" content="UB/OK" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={s.main}>
                About.
            </main>

            <footer className={s.footer}>
                
            </footer>
        </div>
    )
}

export default About
