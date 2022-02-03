import Link from 'next/link';
import s from '../styles/layout.module.scss'


type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={s.container}>
            <header>
                <h1>UB-OK</h1>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <Link href="/contact">
                        <a>Contact us</a>
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