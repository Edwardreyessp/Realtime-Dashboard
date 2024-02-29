import { useTranslations } from 'next-intl';
import styles from './Header.module.scss';
import { LandingVS } from '../molecules';
import { LandingButton } from '../atoms';
import Image from 'next/image';
import Landing from '../../../../public/images/Landing2.jpg';
import Landing2 from '../../../../public/images/DJ.png';

export const Header = () => {
	const t = useTranslations('Landing');
	return (
		<main className={styles.container}>
			<div className={styles.imageLeft}>
				<Image fill src={Landing2} alt='Landing' priority />
			</div>
			<div className={styles.imageRight}>
				<Image fill src={Landing} alt='Landing' priority />
			</div>
			<h1>Spotify</h1>
			<LandingVS />
			<p className={styles.desc}>{t('welcome')}</p>
			<LandingButton>{t('button')}</LandingButton>
		</main>
	);
};
