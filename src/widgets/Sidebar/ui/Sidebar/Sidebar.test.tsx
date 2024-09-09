// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslation,
} from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('button w/o params', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
