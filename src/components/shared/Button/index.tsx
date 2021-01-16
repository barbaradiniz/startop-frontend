import React from 'react';
import { Container } from './styles';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = React.memo(({ children, ...rest }) => {
    return (
        <Container {...rest}>
            {children}
        </Container>
    );
});

export default Button;