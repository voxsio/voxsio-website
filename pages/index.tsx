import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import s from '../styles/Home.module.scss'


const Home: NextPage = () => {
    return (
        <div className={s.container}>
            <Head>
                <title>Home - UB-OK</title>
                <meta name="description" content="UB/OK" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={s.main}>
                Hiya.
            </main>

            <footer className={s.footer}>
                
            </footer>
        </div>
    )
}

export default Home
