import { useTranslations } from 'next-intl';
import { ArtistCard } from '../molecules';
import styles from './Introduction.module.scss';

export const Introduction = () => {
	const t = useTranslations('Landing');
	return (
		<main className={styles.container}>
			<h2>{t('introTitle')}</h2>
			<ArtistCard />
		</main>
	);
};
