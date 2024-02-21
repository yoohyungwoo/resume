import { Link } from 'react-router-dom';
import Menu from '@components/layouts/header/menu.tsx';
import MobileMenu from '@components/layouts/header/mobileMenu.tsx';
import ToggleLanguage from '@components/layouts/header/toggleLanguage.tsx';
import ToggleDark from '@components/layouts/header/toggleDark.tsx';
import { useTranslation } from 'react-i18next';
import Study from '@components/layouts/header/study.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar.tsx';

function Header() {
  const { t } = useTranslation();

  const mobileMenuItems = [{ path: '/example', name: t('menu.example') }, { path: '/study', name: t('menu.study') }];
  const menuItems = [{ path: '/example', name: t('menu.example') }];
  const studyItems = [{ path: '/study', name: t('menu.study') }];
  return (
    <header className="z-50 flex w-full flex-wrap justify-start py-4 text-sm ">
      <nav className="mx-auto flex w-full max-w-[85rem] items-center justify-between px-4">
        <div className="sm:hidden">
          <MobileMenu menuItems={mobileMenuItems} />
        </div>
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="/yoohyungwoo.jpeg" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <Link to="/" className="text-xl w-96 font-semibold flex items-center">
            {t('project.title')}
          </Link>
        </div>

        <div className="hidden grow basis-full sm:block">
          <Study studyItems={studyItems} />
        </div>
        <div className="hidden grow basis-48 sm:block">
          <Menu menuItems={menuItems} />
        </div>
        <div className="flex items-center justify-end sm:px-10">
          <div
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-center transition focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <ToggleDark />
          </div>
          <div
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-center transition focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <ToggleLanguage />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
