import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import s from '../styles/layout.module.scss'


type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter();


    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [thanks, setThanks] = useState(false)
    const [error, setError] = useState(false)

    const signUp = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(!firstName || !lastName || !email) return

        const res = await fetch('/api/register', {
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email
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
        }
        else {
            setError(true)
        }
    }


    return (
        <div className={s.container}>
            <header>
                <Link href="/">
                    <a className={router.pathname === "/" ? "active" : ""}>
                        <h1>UB-OK</h1>
                    </a>
                </Link>
                
                <nav>
                    <Link href="/">
                        <a className={router.pathname === "/" ? "active" : ""}>
                            Home
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className={router.pathname === "/about" ? "active" : ""}>
                            About
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className={router.pathname === "/contact" ? "active" : ""}>
                            Contact us
                        </a>
                    </Link>
                </nav>

                <aside>
                    <span className={s.signUp}>Sign up now!</span>
                    <span className={s.getAccess}><span className={s.manicule}>&#9758;</span> to get access to the <span className={s.preview}>free preview</span></span>
                    
                    <form onSubmit={signUp}>
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
                        { thanks &&
                            <p>Thanks for signing up! You will receive an invitation shortly.</p>
                        }
                        { error &&
                            <p>Whoops - something went wrong, try again later!</p>
                        }
                        { !thanks &&
                            <button type="submit">Sign up</button>
                        }
                    </form>
                </aside>
            </header>

            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;