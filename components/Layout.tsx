import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dot, Icon, Instagram, Twitter, Linkedin } from 'react-bootstrap-icons';


type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const router = useRouter();

	return (
		<div className="relative w-full">
			<header className="relative h-28 flex items-center">
				<div className="relative h-16 w-[17.5rem] ml-12">
					<Link href="/">
						<Image
							src="/images/logo.png"
							alt="The UB-OK logo, with the four letters in different colours"
							fill
							className="object-contain hover:opacity-80 active:opacity-70"
							priority
						/>
					</Link>
				</div>

				<nav className="w-full max-w-[600px] ml-auto flex justify-evenly">
					{[["/", "Home"], ["/about", "About"], ["/contact", "Contact"]].map(([link, title]) => (
						<Link
							href={link}
							className={`flex flex-col items-center uppercase font-black ${router.pathname === link ? "" : ""}`}
						>
							{title}
							<Dot />
						</Link>
					))}
				</nav>
			</header>

			<main className="relative">
				{children}
			</main>

			<footer className="w-full mt-20 mb-8">
				<div className="w-full max-w-[500px] flex flex-row justify-evenly mx-auto">
					{[
						["nhs", "The logo of NHS Scotland"],
						["sbri", "The logo of SBRI Healthcare"],
						["uoe", "The logo of the University of Edinburgh"]
					].map(([name, alt]) => (
						<div className="relative w-[20%] aspect-square">
							<Image
								src={`/images/${name}.png`}
								fill
								alt={alt}
								className="object-contain"
								priority
							/>
						</div>
					))}
				</div>

				<div className="pt-8 px-8 pb-4">
					{([
						["https://twitter.com/ubok_app", Twitter, ""],
						["https://www.instagram.com/ubok_app/", Instagram, ""],
						["https://linkedin.com/company/ubok", Linkedin, ""]
					] as [string, Icon, string][]).map(([link, Icon, className]) => (
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className={className}
						>
							<Icon />
						</a>
					))}
				</div>

				<p className="px-8 text-sm">
					&copy; Voxsio {new Date().getFullYear()}. <Link href="/privacy">Privacy policy</Link>
				</p>
			</footer>
		</div>
	);
};

export default Layout;
