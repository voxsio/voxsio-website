import type { NextPage } from 'next'
import Head from 'next/head'
import s from '../styles/Contact.module.scss'


const Contact: NextPage = () => {
    return (
        <div className={s.container}>
            <Head>
                <title>Contact us - UB-OK</title>
                <meta name="description" content="UB/OK" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={s.main}>
                Contact us.
            </main>

            <footer className={s.footer}>
                
            </footer>
        </div>
    )
}

export default Contact
