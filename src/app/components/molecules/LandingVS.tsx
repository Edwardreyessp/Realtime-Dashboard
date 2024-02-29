'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import styles from './LandingVS.module.scss';

export const LandingVS = () => {
	return (
		<section className={styles.vs}>
			<Icon
				className={styles['boxing-glove-left']}
				icon='noto-v1:boxing-glove'
				rotate={1}
				width={'100%'}
			/>
			<h1>VS</h1>
			<Icon
				className={styles['boxing-glove-right']}
				icon='noto-v1:boxing-glove'
				rotate={1}
				width={'100%'}
				vFlip
			/>
		</section>
	);
};
