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

            <div className={s.homeContainer}>
                <div className={s.screenshotContainer}>
                    <Image
                        src="/images/screenshot.png"
                        layout="fill"
                        objectFit="contain"
                        alt="A screenshot of the UB-OK app, featuring a conversation between a user and the chatbot. The chatbot has told the user they have reached a two-day streak, and has suggested new topics for discussion, such as dealing with panic attacks."
                        priority
                    />
                </div>

                <div className={s.contentContainer}>
                    <section>
                        <h2>Be part of the change</h2>
                        <p>Help us <b>change the way</b> people manage their <b>health and wellbeing</b>, by trying <b>UB-OK</b> and giving feedback!</p>
                    </section>

                    <section>
                        <h2>What is UB-OK?</h2>
                        <ul>
                            <li>UB-OK is an app that uses <b>evidence-based</b> psychological approaches to improve wellbeing</li>
                            <li>We use <b>engaging and effective</b> digital technology to allow young people to self-manage how they feel, and live a fuller life</li>
                            <li>UB-OK is being developed in partnership with the <b>NHS and young people</b></li>
                        </ul>
                    </section>

                    <section>
                        <h2>How does UB-OK work?</h2>
                        <ul>
                            <li>A <b>safe space</b> to talk about and understand your health and wellbeing</li>
                            <li><b>Practical activities</b> using evidence-based techniques</li>
                            <li>A <b>library of resources</b> to help you make sense of how you feel and develop skills to manage it</li>
                            <li><b>Track and monitor</b> how you are doing, what's working, and what isn't </li>
                        </ul>
                    </section>
                </div>
            </div>

        </Layout>
    )
}

export default Home
