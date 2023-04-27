import { memo } from "react";

import styles from "@/components/content.module.scss";
export const Content = memo(() => {
	console.log("contents");
	return (
		<div
			className={styles.content}
			style={{ display: "flex", gap: "20px", position: "relative" }}
		>
			content
		</div>
	);
});
