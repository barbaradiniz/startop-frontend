import React from 'react';
import Header from '../../shared/Header';
import { Background, Container, TopBorder } from './styles';
import InputBlock from '../../shared/InputBlock';
import { FiMail, FiLock } from 'react-icons/fi';
import Button from '../../shared/Button';
import { Link } from 'react-router-dom';

const Login = React.memo(() => {
    return (
        <>
            <Header />
            <Container>
                <Background />
                <div>
                    <TopBorder />
                    <form>
                        <h1>Login</h1>
                        <div>
                            <InputBlock Icon={FiMail} name="email" placeholder="E-mail" />
                            <InputBlock Icon={FiLock} type="password" name="password" placeholder="Senha" />
                        </div>
                        <Button>Enviar</Button>
                        <p>Não tem uma conta? <Link to="/signup">Cadastre-se</Link></p>
                    </form>
                </div>
            </Container>
        </>
    );
});

export default Login;