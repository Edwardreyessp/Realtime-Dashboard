import Image from 'next/image';
import artist from '../../../../public/images/dubioza.jpg';
import styles from './ArtistCard.module.scss';

export const ArtistCard = () => {
	return (
		<main className={styles.container}>
			<div className={styles.image}>
				<Image
					priority
					fill
					src={artist}
					alt='Artist name'
					sizes={'(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'}
				/>
			</div>
			<p className={styles.name}>Nombre</p>
			<p className={styles.followers}>Followers</p>
			<p className={styles.genres}>Género</p>
			<p className={styles.popularity}>Popularidad</p>
		</main>
	);
};
