import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import s from '../styles/home.module.scss'


const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>UB-OK - Home</title>
                <meta name="description" content="UB/OK" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={s.screenshotContainer}>
                <Image
                    src="/images/screenshot.png"
                    layout="fill"
                    objectFit="contain"
                    alt="A screenshot of the UB-OK app, featuring a conversation between a user and the chatbot. The chatbot has told the user they have reached a two-day streak, and has suggested new topics for discussion, such as dealing with panic attacks."
                    priority
                />
            </div>
        </Layout>
    )
}

export default Home
