import React from 'react';
import { Container, SignUpButton } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/startop.svg';

const Header = React.memo(() => {
    return (
        <Container>
            <Link to="/"><img src={logo} alt="Logo"/></Link>
            <div>
                <Link to="/">sobre</Link>
                <Link to="/">contato</Link>
                <span/>
                <Link to="/login">Entrar</Link>
                <SignUpButton to="/signup">Cadastre-se</SignUpButton>
            </div>
        </Container>
    );
});

export default Header;