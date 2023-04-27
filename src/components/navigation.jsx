import Logo from "images/logo-light.svg";
import styles from "@/components/navigation.module.scss";

export const Navigation = (props) => {
	console.log("nav");
	return (
		<div className={`${styles.nav} ${props.isHide ? styles["is-hide"] : null}`}>
			<nav className={`${styles.content}`}>
				<Logo />
				{props.isHide !== true && (
					<>
						<button
							style={{ display: "block" }}
							type="button"
							onClick={props.onToggleNav}
							className={`${styles.button}`}
						>
							Hide Sidebar
						</button>
						<div>TEST</div>
						<div>TEST</div>
						<div>TEST</div>
					</>
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
