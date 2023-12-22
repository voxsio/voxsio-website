import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import '../styles/globals.scss';
import { Twitter, Instagram, Linkedin, Icon } from "react-bootstrap-icons";


export const metadata: Metadata = {
	title: "Voxsio | Home",
	description: "Voxsio - support your patients with ethical digital health apps.",
	icons: {
		icon: "/favicon.ico"
	},
	themeColor: "#FFF9ED",
	openGraph: {
		title: "Voxsio",
		description: "Support your patients with ethical digital health apps",
		url: "https://voxsio.com",
		locale: "en_GB"
	},
	twitter: {
		title: "Voxsio",
		description: "Support your patients with ethical digital health apps",
		creator: "@ubok_app"
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

					<nav className="w-full max-w-[600px] flex items-center justify-evenly flex-wrap my-8 mx-auto md:my-0 md:mr-0">
						{[["/", "Home"], ["/about", "About"], ["/contact", "Contact"]].map(([link, title]) => (
							<Link
								key={link}
								href={link}
								className="flex flex-col items-center uppercase font-bold hover:text-red-500"
							>
								{ title }
							</Link>
						))}
						<Link
							href={"/nhsFeasibilityStudy"}
							className="flex flex-col items-center px-2 py-1 bg-blue-300/30 rounded-lg uppercase font-bold hover:text-red-500 hover:bg-red-300/30"
						>
							NHS Feasibility Study
						</Link>
					</nav>
				</header>

				<main className="relative">
					{ children }
				</main>

				<footer className="relative w-full bg-cover bg-[url(/images/characters_banner.jpg)] min-h-[200px] max-h-[300px] aspect-[1128/191] border-t-2 border-light-700">
					<div className="absolute w-fit bottom-12 right-[15%] p-4 bg-light-300 border-2 border-light-700 rounded-lg">
						<div className="w-full flex flex-row justify-evenly gap-8">
							{([
								["https://twitter.com/ubok_app", Twitter, "text-aqua-500"],
								["https://www.instagram.com/ubok_app/", Instagram, "text-pink-500"],
								["https://linkedin.com/company/ubok", Linkedin, "text-ocean-500"]
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

						<p className="text-sm mt-4">
							&copy; Voxsio {new Date().getFullYear()}. <Link href="/privacy">Privacy policy</Link>
						</p>
					</div>
				</footer>

				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
