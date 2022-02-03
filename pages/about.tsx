import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import s from '../styles/about.module.scss'


const About: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>About - UB-OK</title>
                <meta name="description" content="UB/OK" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={s.main}>
                About.
            </main>
        </Layout>
    )
}

export default About
