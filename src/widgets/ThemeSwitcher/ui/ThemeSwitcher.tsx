import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EThemeButton } from 'shared/ui/Button/Button';

import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';

interface IThemeSwitcher {
  className?: string;
}

export function ThemeSwitcher({ className }: IThemeSwitcher) {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={EThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
}
