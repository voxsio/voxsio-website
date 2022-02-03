import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import s from '../styles/contact.module.scss'


const Contact: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Contact us - UB-OK</title>
                <meta name="description" content="UB/OK" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={s.main}>
                Contact us.
            </main>
        </Layout>
    )
}

export default Contact
