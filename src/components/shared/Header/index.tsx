import React from 'react';
import { Container, SignUpButton } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/startop.svg';

const Header = React.memo(() => {
    return (
        <Container>
            <img src={logo} alt="Logo"/>
            <div>
                <Link to="/">sobre</Link>
                <Link to="/">contato</Link>
                <span/>
                <Link to="/">Entrar</Link>
                <SignUpButton to="/">Cadastre-se</SignUpButton>
            </div>
        </Container>
    );
});

export default Header;