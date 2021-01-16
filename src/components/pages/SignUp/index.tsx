import React from 'react';
import Header from '../../shared/Header';
import { Background, Container, Form, TopBorder } from './styles';
import InputBlock from '../../shared/InputBlock';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import Button from '../../shared/Button';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import Switch from '../../shared/Switch';

const SignUp = React.memo(() => {

    const handleSubmit = React.useCallback(values => {
        console.log(values);
    }, []);

    return (
        <>
            <Header />
            <Container>
                <div>
                    <TopBorder />
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={{ name: '', userType: 1, email: '', password: '', confirmPassword: '' }}
                    >
                        <Form>
                            <h1>Cadastro</h1>
                            <Switch
                                name="userType"
                                data={[
                                    'Parceiro',
                                    'Investidor'
                                ]}
                            />
                            <div>
                                <InputBlock Icon={FiUser} name="name" placeholder="Nome" />
                                <InputBlock Icon={FiMail} name="email" placeholder="E-mail" />
                                <InputBlock Icon={FiLock} type="password" name="password" placeholder="Senha" />
                                <InputBlock Icon={FiLock} type="password" name="confirmPassword" placeholder="Confirmar senha" />
                            </div>
                            <Button type="submit">Enviar</Button>
                            <p>Já tem uma conta? <Link to="/login">Entrar</Link></p>
                        </Form>
                    </Formik>
                </div>
                <Background />
            </Container>
        </>
    );
});

export default SignUp;