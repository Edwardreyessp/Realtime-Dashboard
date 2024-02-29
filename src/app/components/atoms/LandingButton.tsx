import { Link } from '@/navigation';
import styles from './LandingButton.module.scss';

interface Props {
	children: React.ReactNode;
}

export const LandingButton = ({ children }: Props) => {
	return (
		<div className={styles.button}>
			<Link href='/fight' className={`${styles.btn} ${styles.fx01}`}>
				<span>{children}</span>
			</Link>
		</div>
	);
};
