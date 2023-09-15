import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import '../styles/globals.scss';
import { Twitter, Instagram, Linkedin, Icon } from "react-bootstrap-icons";


export const metadata: Metadata = {
	title: "Voxsio",
	description: "Welcome to Voxsio!",
	icons: {
		icon: "/favicon.ico"
	}
};


type RootLayoutProps = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en">
			<body className="text-[18px] -mb-4 bg-light-300 selection:bg-blue-700 selection:text-light-300">
				<header className="relative max-w-[988px] mx-auto md:h-28 md:flex md:items-center">
					<div className="relative h-12 w-60 mt-4 mx-auto md:-mt-2 md:mx-0">
						<Link href="/">
							<Image
								src="/images/voxsio.png"
								alt="The Voxsio wordmark"
								fill
								className="object-contain hover:opacity-70 active:opacity-50"
								priority
							/>
						</Link>
					</div>

					<nav className="w-full max-w-[400px] flex justify-evenly my-8 mx-auto md:my-0 md:mr-0">
						{[["/", "Home"], ["/about", "About"], ["/contact", "Contact"]].map(([link, title]) => (
							<Link
								key={link}
								href={link}
								className="flex flex-col items-center uppercase font-bold hover:text-red-500"
							>
								{ title }
							</Link>
						))}
					</nav>
				</header>

				<main className="relative">
					{children}
				</main>

				<footer className="relative w-full mt-16">
					<div className="w-full mt-8 flex flex-row justify-center gap-8">
						{([
							["https://twitter.com/ubok_app", Twitter, "text-aqua"],
							["https://www.instagram.com/ubok_app/", Instagram, "text-pink"],
							["https://linkedin.com/company/ubok", Linkedin, "text-ocean"]
						] as [string, Icon, string][]).map(([link, Icon, className]) => (
							<a
								key={link}
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								className={`hover:border-b-0 hover:opacity-80 ${className}`}
							>
								<Icon className="w-6 h-6" />
							</a>
						))}
					</div>


					<div className="relative w-full min-h-[200px] aspect-[1128/191] border-t-2 border-light-700">
						<Image
							src="/images/character_banner.jpg"
							alt=""
							fill
						/>

						<div className="absolute w-fit bottom-8 right-[20%] px-4 py-2 bg-light-300 border-2 border-light-700 rounded-lg">
							<p className="text-sm mb-0">
								&copy; Voxsio {new Date().getFullYear()}. <Link href="/privacy">Privacy policy</Link>
							</p>
						</div>
					</div>
				</footer>

				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
