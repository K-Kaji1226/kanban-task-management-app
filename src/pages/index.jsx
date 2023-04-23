import { Content } from "@/components/content";

export default function Home(props) {
	return (
		<>
			<Content isHide={props.isHide} onShow={props.onToggleNav} />
		</>
	);
}
