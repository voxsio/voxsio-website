import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import s from '../styles/contact.module.scss'


const Contact: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>UB-OK - Contact us</title>
                <meta name="description" content="UB/OK" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={s.container}>
                <p>Get in touch! We'd love to hear from you.</p>

                <form>
                    <div className="formGroup">
                        <input type="text" name="firstName" placeholder="First name" required />
                        <input type="text" name="lastName" placeholder="Last name" required />
                    </div>
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea placeholder="Message" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Layout>
    )
}

export default Contact
