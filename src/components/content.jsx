import styles from "@/components/content.module.scss";
export const Content = (props) => {
	return (
		<div
			className={styles.content}
			style={{ display: "flex", gap: "20px", position: "relative" }}
		>
			content
		</div>
	);
};
