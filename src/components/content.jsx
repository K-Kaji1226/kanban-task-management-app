import styles from "@/components/content.module.scss";
import { Test } from "@/components/test";
export const Content = () => {
	return (
		<div className={styles.content} style={{ display: "flex", gap: "20px" }}>
			<div
				style={{
					width: "500px",
					minWidth: "500px",
					height: "calc(100vh - 100px)",
					background: "#5f2929",
					display: "flex",
					flexDirection: "column",
					gap: "10px",
				}}
			>
				<div
					style={{ height: "300px", minHeight: "300px", background: "orange" }}
				/>
				<div
					style={{ height: "300px", minHeight: "300px", background: "orange" }}
				/>
				<div
					style={{ height: "300px", minHeight: "300px", background: "orange" }}
				/>
				<div
					style={{ height: "300px", minHeight: "300px", background: "orange" }}
				/>
				<div
					style={{ height: "300px", minHeight: "300px", background: "orange" }}
				/>
			</div>
			<div
				style={{
					width: "500px",
					minWidth: "500px",
					height: "calc(100vh - 100px)",
					background: "#5f2929",
				}}
			></div>
			<div
				style={{
					width: "500px",
					minWidth: "500px",
					height: "calc(100vh - 100px)",
					background: "#5f2929",
				}}
			></div>
			<div
				style={{
					width: "500px",
					minWidth: "500px",
					height: "calc(100vh - 100px)",
					background: "#5f2929",
				}}
			></div>
			<div
				style={{
					width: "500px",
					minWidth: "500px",
					height: "calc(100vh - 100px)",
					background: "#5f2929",
				}}
			></div>
		</div>
	);
};
