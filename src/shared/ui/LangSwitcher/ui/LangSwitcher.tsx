import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EThemeButton } from 'shared/ui/Button';
import cls from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
  className?: string;
}

export function LangSwitcher({ className }: ILangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={EThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
}
