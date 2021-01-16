import React from 'react';
import { Container } from './styles';

const Button = React.memo(({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
});

export default Button;