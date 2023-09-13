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
			<body className="bg-cream selection:bg-blue-700 selection:text-cream">
				<header className={`relative h-28 flex items-center`}>
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
								key={link}
								href={link}
								className="flex flex-col items-center uppercase font-black"
							>
								{title}
							</Link>
						))}
					</nav>
				</header>

				<main className="relative">
					{children}
				</main>

				<footer className="w-full mt-16 mb-8">
					<div className="w-full max-w-[500px] flex flex-row justify-evenly mx-auto">
						{[
							["nhs", "The logo of NHS Scotland"],
							["sbri", "The logo of SBRI Healthcare"],
							["uoe", "The logo of the University of Edinburgh"]
						].map(([name, alt]) => (
							<div
								key={name}
								className="relative w-[20%] aspect-square"
							>
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

					<p className="mt-8 px-8 text-sm text-center">
						&copy; Voxsio {new Date().getFullYear()}. <Link href="/privacy">Privacy policy</Link>
					</p>
				</footer>

				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
