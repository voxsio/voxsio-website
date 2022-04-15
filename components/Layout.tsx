import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import s from '../styles/layout.module.scss'
import { Dot, Instagram, Twitter } from 'react-bootstrap-icons'
import SignUp from './SignUp'


type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter();

    return (
        <div className={s.container}>
            <header>
                <div className={s.title}>
                    <Link href="/">
                        <a>
                            <Image
                                src="/images/logo.png"
                                layout="fill"
                                objectFit="contain"
                                alt="The UB-OK logo, with the four letters in different colours"
                                priority
                            />
                        </a>
                    </Link>
                </div>

                <nav>
                    <Link href="/">
                        <a className={router.pathname === "/" ? s.active : ""}>
                            Home
                            <Dot />
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className={router.pathname === "/about" ? s.active : ""}>
                            About
                            <Dot />
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className={router.pathname === "/contact" ? s.active : ""}>
                            Contact
                            <Dot />
                        </a>
                    </Link>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <p className={s.signUp}>
                    Try the free preview!
                </p>
                <div className={s.signUpContainer}>
                    <SignUp />
                </div>

                <hr />

                <div className={s.logoContainer}>
                    <div className={s.logo}>
                        <Image
                            src="/images/nhs.png"
                            layout="fill"
                            objectFit="contain"
                            alt="The logo of NHS Scotland"
                            priority
                        />
                    </div>
                    <div className={s.logo}>
                        <Image
                            src="/images/sbri.png"
                            layout="fill"
                            objectFit="contain"
                            alt="The logo of SBRI Healthcare"
                            priority
                        />
                    </div>
                    <div className={s.logo}>
                        <Image
                            src="/images/uoe.png"
                            layout="fill"
                            objectFit="contain"
                            alt="The logo of the University of Edinburgh"
                            priority
                        />
                    </div>
                </div>

                <div className={s.social}>
                    <a href="https://twitter.com/ubok_app" className={s.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter />
                    </a>
                    <a href="https://www.instagram.com/ubok_app/" className={s.insta} target="_blank" rel="noopener noreferrer">
                        <Instagram />
                    </a>
                </div>

                <p className={s.copy}>
                    &copy; Voxsio { new Date().getFullYear() }. <Link href="/privacy"><a>Privacy policy</a></Link>
                </p>
            </footer>
        </div>
    )
}

export default Layout;