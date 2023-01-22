import { ThreeDots } from "react-loader-spinner";
import styles from "./Spinner.module.css";

export default function Spinner() {
	return (
		<div className={styles.backdrop}>
			<ThreeDots
				height="80"
				width="80"
				radius="9"
				color="#3F51B5"
				ariaLabel="three-dots-loading"
				wrapperStyle={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
				visible={true}
			/>
		</div>
	);
}
