import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import s from '../styles/home.module.scss'
import { Book, ChevronDown, GraphUpArrow, Puzzle, ShieldShaded } from 'react-bootstrap-icons'


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

                {/* <p className={s.tag}>
                    Try the free preview now!
                </p>

                <div className={s.signUpContainer}>
                    <SignUp />
                </div> */}
                
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
                    <div className={s.largeTag}>
                        <h1>
                            Improve your mental health, <span>one conversation a day.</span>
                        </h1>
                        <p>
                            <b>Join the public preview now:</b><br />
                        </p>
                        <div>
                            <a
                                href='https://testflight.apple.com/join/pAsYu0rE'
                                className={s.storeBtnLink}
                            >
                                <img
                                    alt='Download on the App Store'
                                    src='/images/downloadAppStore.svg'
                                    className={s.storeBtnApple}
                                />
                            </a>
                            <a
                                href='https://play.google.com/store/apps/details?id=com.ubok.ubok&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                                className={s.storeBtnLink}
                            >
                                <img
                                    alt='Get it on Google Play'
                                    src='https://play.google.com/intl/en_gb/badges/static/images/badges/en_badge_web_generic.png'
                                    className={s.storeBtnGoogle}
                                />
                            </a>
                        </div>
                    </div>

                    <section>
                        <h2>Meet UB-OK!</h2>
                        <p>
                            UB-OK is a friendly app that <b>helps you try out daily activities</b> that can help improve your mental health.
                            <br /><br />
                            Help us <b>change the way</b> people manage their health and wellbeing, by trying UB-OK and giving feedback!
                        </p>
                    </section>

                    <section>
                        <h2>What is UB-OK?</h2>
                        <div className={s.featureGrid}>
                            <div>
                                <ShieldShaded />
                                A <b>safe space</b> to talk about and understand your health and wellbeing
                            </div>
                            <div>
                                <Puzzle />
                                Programmes of <b>practical activities</b> using evidence-based psychological approaches
                            </div>
                            <div>
                                <Book />
                                A <b>library of resources</b> developed in partnership with NHS Scotland and young people
                            </div>
                            <div>
                                <GraphUpArrow />
                                <b>Track and monitor</b> how you are doing, what's working, and what isn't
                            </div>
                        </div>
                    </section>

                    <div className={s.blankspace} />
                </div>
            </div>
        </Layout>
    )
}

export default Home
