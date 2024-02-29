import styles from './Navbar.module.scss';
import icon from '../../favicon.ico';
import Image from 'next/image';
import Link from 'next/link';
import { FlagButton } from '../atoms';

export const Navbar = () => {
	return (
		<main className={styles.container}>
			<Image priority src={icon} alt='icon' width={50} height={50} />
			<div className={styles.interaction}>
				<Link href='/fight'>Versus</Link>
				<FlagButton />
			</div>
		</main>
	);
};
