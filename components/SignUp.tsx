import { FormEvent, useState } from 'react'
import s from '../styles/signup.module.scss'


const SignUp = () => {
    const [email, setEmail] = useState("")
    const [thanks, setThanks] = useState(false)
    const [error, setError] = useState(false)

    const signUp = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(!email) return

        const res = await fetch('/api/register', {
            body: JSON.stringify({
                email: email
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        if(res.status === 200) {
            setThanks(true)
            setEmail("")
        }
        else {
            setError(true)
        }
    }

    return (
        <div className={s.container}>
            <form onSubmit={signUp}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.currentTarget.value)}
                    placeholder="Email"
                    required
                />
                <div className={s.btnContainer}>
                    <button type="submit">Sign up</button>
                </div>
            </form>

            { thanks &&
                <p>Thanks for signing up! You will receive an invitation shortly.</p>
            }
            { error &&
                <p>Whoops - something went wrong, try again later!</p>
            }
        </div>
    );
}

export default SignUp;