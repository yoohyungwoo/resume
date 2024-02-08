import { useTranslation } from 'react-i18next';

export default function Index() {
  const { t } = useTranslation();

  return (
    <main className="flex">
      <p>{t('menu.study')}</p>
    </main>
  );
}
