import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, EThemeButton } from "shared/ui/Button";
import cls from "./ThemeSwitcher.module.scss";

interface IThemeSwitcher {
  className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcher) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={EThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
