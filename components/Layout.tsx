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
            </header>

            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;