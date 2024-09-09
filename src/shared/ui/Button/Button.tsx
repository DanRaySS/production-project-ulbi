import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum EThemeButton {
  CLEAR = 'clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EThemeButton;
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className, children, theme, ...otherProps
    } = props;
    return (
        <button
            type="button"
            {...otherProps}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};
