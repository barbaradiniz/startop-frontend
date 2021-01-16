import React from 'react';
import Header from '../../shared/Header';
import { Background, Container, Form, TopBorder } from './styles';
import InputBlock from '../../shared/InputBlock';
import { FiMail, FiLock } from 'react-icons/fi';
import Button from '../../shared/Button';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Email obrigatório'),
    password: Yup.string().required('Senha obrigatória').min(6, 'Mínimo de 6 caracteres')
});

const Login = React.memo(() => {
    const handleSubmit = React.useCallback(values => {
        console.log(values);
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Background />
                <div>
                    <TopBorder />
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        validateOnBlur={false}
                    >
                        <Form>
                            <h1>Login</h1>
                            <div>
                                <InputBlock Icon={FiMail} name="email" placeholder="E-mail" />
                                <InputBlock Icon={FiLock} type="password" name="password" placeholder="Senha" />
                            </div>
                            <Button type="submit">Enviar</Button>
                            <p>Não tem uma conta? <Link to="/signup">Cadastre-se</Link></p>
                        </Form>
                    </Formik>
                </div>
            </Container>
        </>
    );
});

export default Login;