import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import SignUp from '../components/SignUp'
import s from '../styles/home.module.scss'
import { ChevronDown } from 'react-bootstrap-icons'


const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>UB-OK - Home</title>
                <meta name="description" content="UB/OK" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={s.preamble}>
                <p className={s.tag}>
                    Improve&nbsp;your&nbsp;mental&nbsp;health, <wbr />one&nbsp;conversation&nbsp;a&nbsp;day.
                </p>

                <p className={s.tag}>
                    Sign up for the free preview now.
                </p>

                <SignUp />
                
                <div className={s.chevron}>
                    <ChevronDown />
                </div>
            </div>

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
                    <p className={s.largeTag}>
                        Improve your mental health, one conversation a day.
                    </p>

                    <section>
                        <h2>Meet UB-OK!</h2>
                        <p>
                            UB-OK is a friendly bot who <b>helps you try out daily activities</b> that can help improve your mental health.
                            <br /><br />
                            Help us <b>change the way</b> people manage their health and wellbeing, by trying UB-OK and giving feedback!
                        </p>
                    </section>

                    <section>
                        <h2>What is UB-OK?</h2>
                        <ul>
                            <li>A <b>safe space</b> to talk about and understand your health and wellbeing</li>
                            <li><b>Practical activities</b> using evidence-based techniques</li>
                            <li>A <b>library of resources</b> to help you make sense of how you feel and develop skills to manage it</li>
                            <li><b>Track and monitor</b> how you are doing, what's working, and what isn't </li>
                        </ul>
                    </section>

                    <section>
                        <h2>How does UB-OK work?</h2>
                        <ul>
                            <li>UB-OK uses <b>evidence-based</b> psychological approaches to improve wellbeing</li>
                            <li>We use <b>engaging and effective</b> modern conversational technology to tailor the content to be relevant to you</li>
                            <li>UB-OK is being developed in partnership with <b>NHS Scotland and young people</b></li>
                            <li>Sign up for the preview and <b>give feedback</b> to help improve the bot!</li>
                        </ul>
                    </section>

                    <div className={s.blankspace} />
                </div>
            </div>

        </Layout>
    )
}

export default Home
