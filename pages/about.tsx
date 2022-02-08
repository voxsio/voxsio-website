import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import s from '../styles/about.module.scss'


const About: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>UB-OK - About</title>
                <meta name="description" content="UB/OK" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={s.about}>
                <p>
                    <b>UB-OK</b> is a digital mental health start-up based in Edinburgh, Scotland
                </p>

                <p>
                    For the past few years, we have been developing intelligent conversational technology towards improving mental health
                </p>

                <p>
                    Our team have backgrounds in couselling, business, technology, psychology and design
                </p>
            </div>
        </Layout>
    )
}

export default About
