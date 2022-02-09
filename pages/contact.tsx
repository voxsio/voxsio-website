import { FormEvent, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import s from '../styles/contact.module.scss'


const Contact: NextPage = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [body, setBody] = useState("")
    const [thanks, setThanks] = useState(false)
    const [error, setError] = useState(false)

    const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(!firstName || !lastName || !email || !body) return

        const res = await fetch('/api/contact', {
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                body: body
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        if(res.status === 200) {
            setThanks(true)
            setFirstName("")
            setLastName("")
            setEmail("")
            setBody("")
        }
        else {
            setError(true)
        }
    }

    return (
        <Layout>
            <Head>
                <title>UB-OK - Contact us</title>
                <meta name="description" content="UB/OK" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={s.container}>
                <p>Get in touch! We'd love to hear from you.</p>

                <form onSubmit={sendMessage}>
                    <div className="formGroup">
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.currentTarget.value)}
                            placeholder="First name"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={e => setLastName(e.currentTarget.value)}
                            placeholder="Last name"
                            required
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                        placeholder="Email"
                        required
                    />
                    <textarea
                        name="body"
                        value={body}
                        onChange={e => setBody(e.currentTarget.value)}
                        placeholder="Message"
                        required
                    />
                    { thanks &&
                        <p>Thank you for your message! We will get back to you shortly.</p>
                    }
                    { error &&
                        <p>Whoops - something went wrong, try again later!</p>
                    }
                    { !thanks &&
                        <button type="submit">Submit</button>
                    }
                </form>
            </div>
        </Layout>
    )
}

export default Contact
