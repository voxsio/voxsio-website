import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import s from '../styles/error.module.scss'


const About: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>UB-OK - Page not found</title>
                <meta name="description" content="UB/OK" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={s.container}>
                <h1>404</h1>
                <p>Page not found!</p>
            </div>
        </Layout>
    )
}

export default About
