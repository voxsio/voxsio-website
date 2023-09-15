import { MouseEventHandler, ReactNode } from "react";


type ButtonProps = {
	children: ReactNode;
	className?: string;
	frontStyle?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, className, frontStyle, onClick }: ButtonProps) => (
	<button
		className={`p-0 border-0 bg-blue-700 rounded-lg outline outline-offset-4 [&:not(:focus-visible)]:outline-none cursor-pointer fancyBtnBack ${className}`}
		onClick={onClick}
	>
		<span className={`block px-4 py-2 bg-blue-500 rounded-lg font-black text-light-300 uppercase translate-y-[-4px] will-change-transform fancyBtnFront ${frontStyle}`}>
			{ children }
		</span>
	</button>
);

export default Button;
