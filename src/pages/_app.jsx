import "@/styles/reset.scss";
import "@/styles/app.scss";

import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	return (
		<div className={`${jakarta.className} wrapper`}>
			<Navigation />
			<Header />
			<Component {...pageProps} />
		</div>
	);
}
