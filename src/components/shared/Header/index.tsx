import React from 'react';
import { Container, SignUpButton } from './styles';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/startop.svg';
import { useAuth } from '../../../hooks/auth';

const Header = React.memo(() => {
    const { user } = useAuth();

    return (
        <Container>
            <Link to="/"><img src={logo} alt="Logo"/></Link>
            <div>
                <Link to="/">sobre</Link>
                <Link to="/">contato</Link>
                <span/>

                {user ? (
                    <div>
                        {user.name}
                        (<span>{user.username}</span>)
                    </div>
                ) : (
                    <>
                        <Link to="/login">Entrar</Link>
                        <SignUpButton to="/signup">Cadastre-se</SignUpButton>
                    </>
                )}
                
            </div>
        </Container>
    );
});

export default Header;