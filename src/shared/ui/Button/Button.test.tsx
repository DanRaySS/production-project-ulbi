// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button, EThemeButton } from './Button';

describe('classNames', () => {
    test('button w/o params', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('button with \'clear\' param', () => {
        render(<Button theme={EThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
