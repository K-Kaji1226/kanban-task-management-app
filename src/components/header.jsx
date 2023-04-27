import styles from "@/components/header.module.scss";

export const Header = (props) => {
	console.log("header");
	return (
		<header
			className={` ${props.isHide && styles["is-hide"]} ${styles.header}`}
		>
			header
		</header>
	);
};
