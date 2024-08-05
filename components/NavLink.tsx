"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


type NavLinkProps = {
	url: string;
	title: string;
};

const NavLink = ({ url, title }: NavLinkProps) => {
	const pathname = usePathname();
	const isCurrent = url === pathname;

	return (
		<Link
			key={url}
			href={url}
			className={`flex flex-col items-center my-2 uppercase font-bold ${isCurrent ? "text-red-500" : "hover:text-red-500"}`}
		>
			{ title }
		</Link>
	);
};

export default NavLink;
