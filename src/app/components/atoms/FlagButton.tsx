'use client';
import { usePathname, useRouter } from 'next/navigation';
import { IconFlagMexico, IconFlagUnitedStates } from '../utils';
import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';

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
		router.push(newRoute);
	};

	return (
		<div style={{ cursor: 'pointer' }} onClick={toogleRoute}>
			{localLang === 'es' ? <IconFlagMexico /> : <IconFlagUnitedStates />}
		</div>
	);
};
