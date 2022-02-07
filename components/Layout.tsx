import Link from 'next/link';
import { useRouter } from 'next/router';
import s from '../styles/layout.module.scss'


type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter();

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
                    <span className={s.signUp}>Sign up now&nbsp;</span>
                    <span className={s.getAccess}><span className={s.manicule}>&#9758;</span> to get access to the <span className={s.preview}>free preview</span></span>
                    
                    <form>
                        <div className="formGroup">
                            <input type="text" name="firstName" placeholder="First name" required />
                            <input type="text" name="lastName" placeholder="Last name" required />
                        </div>
                        <input type="email" name="email" placeholder="Email" required />
                        <button type="submit">Sign up</button>
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