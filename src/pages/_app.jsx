import "@/styles/reset.scss";
import "@/styles/app.scss";

import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { useCallback, useState } from "react";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	const [isHideNav, setIsHideNav] = useState(false);
	const toggleShowNavHandler = useCallback(() => {
		setIsHideNav((prev) => !prev);
	}, [isHideNav]);

	return (
		<div
			className={`${jakarta.className} wrapper ${isHideNav ? "is-hide" : null}`}
		>
			<Navigation onToggleNav={toggleShowNavHandler} isHide={isHideNav} />
			<Header isHide={isHideNav} />
			<Component
				{...pageProps}
				isHide={isHideNav}
				onToggleNav={toggleShowNavHandler}
			/>
		</div>
	);
}
