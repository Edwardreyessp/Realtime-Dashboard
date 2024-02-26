import { Header } from '../components/templates';
import { useTranslations } from 'next-intl';

export default function Home() {
	const t = useTranslations('Index');
	return (
		<main>
			<Header />
			<p>{t('title')}</p>
			<p>description</p>
			<p>buttons</p>
			<p>example</p>
			<p>footer</p>
		</main>
	);
}
