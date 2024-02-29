'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import { Icon } from '@iconify/react/dist/iconify.js';

export const FlagButton = () => {
	const locale = useLocale();
	const [localLang, setLocalLang] = useState(locale);

	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		setLocalLang(locale);
	}, [locale]);

	const toogleRoute = () => {
		const newRoute =
			localLang === 'es'
				? pathname.replace('/es', '/en')
				: pathname.replace('/en', '/es');
		router.replace(newRoute);
	};

	return (
		<span style={{ cursor: 'pointer', height: '1.5rem' }} onClick={toogleRoute}>
			{localLang === 'es' ? (
				<Icon icon='openmoji:flag-mexico' width='1.5rem' height='1.5rem' />
			) : (
				<Icon
					icon='openmoji:flag-united-states'
					width='1.5rem'
					height='1.5rem'
				/>
			)}
		</span>
	);
};
