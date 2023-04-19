import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<div className={jakarta.className}>Kanban</div>
		</>
	);
}
