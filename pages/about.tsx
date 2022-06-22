import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
                <figure>
                    <div>
                        <Image
                            src="/images/team.jpg"
                            layout="fill"
                            alt="The UB-OK team posing in front of a window of the Bayes Centre"
                        />
                    </div>
                    <figcaption>From left to right: Michael McTernan, CEO; Juvia Tian, digital artist; Rayo Verweij, technical lead; and Clarissa Yung, research assistant.</figcaption>
                </figure>

                <p>
                    <b>UB-OK</b> is a digital mental health start-up based in Edinburgh, Scotland.
                </p>

                <p>
                    We are developing intelligent conversational technology for improving mental health.
                </p>

                <p>
                    Our team have backgrounds in couselling, business, technology, psychology and design.
                </p>

                <p>
                    We're a tiny team and this part of the website is still under construction. Check back later or <Link href="/contact"><a>contact us</a></Link> for more information!
                </p>
            </div>
        </Layout>
    )
}

export default About
