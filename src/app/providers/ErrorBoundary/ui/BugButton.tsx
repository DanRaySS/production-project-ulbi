import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface IBugButtonProps {
  className?: string;
}

// Компонент для тестирования ErrorBoundary
// eslint-disable-next-line no-unused-vars
export const BugButton = ({ className }: IBugButtonProps) => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const throwHandler = () => setError(true);

    useEffect(() => {
        if (error) { throw new Error(); }
    }, [error]);

    return (
        <Button onClick={throwHandler}>
            {t('throw error')}
        </Button>
    );
};
