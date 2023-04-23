import styles from "@/components/navigation.module.scss";

export const Navigation = (props) => {
	console.log(props.isHide);
	return (
		<div className={`${styles.nav} ${props.isHide ? styles["is-hide"] : null}`}>
			<nav className={`${styles.content}`}>
				Navigation
				{props.isHide !== true && (
					<button
						style={{ display: "block" }}
						type="button"
						onClick={props.onToggleNav}
						className={`${styles.button}`}
					>
						Hide Sidebar
					</button>
				)}
			</nav>
			{props.isHide === true && (
				<button
					style={{
						display: "block",
						backgroundColor: "purple",
						color: "white",
					}}
					type="button"
					onClick={props.onToggleNav}
					className={`${styles.show} ${styles.button}`}
				>
					show
				</button>
			)}
		</div>
	);
};
