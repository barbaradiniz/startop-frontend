import React from 'react';
import Header from '../../shared/Header';
import { Background, Container, Form, TopBorder } from './styles';
import InputBlock from '../../shared/InputBlock';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import Button from '../../shared/Button';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import Switch from '../../shared/Switch';
import * as Yup from 'yup';
import { useAuth } from '../../../hooks/auth';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    username: Yup.string().required('Username obrigatório'),
    type: Yup.number(),
    email: Yup.string().email('Email inválido').required('Email obrigatório'),
    password: Yup.string().min(6, 'Mínimo de 6 caracteres').required('Senha obrigatória'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Senha não corresponde à anterior').min(6, 'Mínimo de 6 caracteres').required('Senha obrigatória')
});

const SignUp = React.memo(() => {

    const { signUp } = useAuth();
    const { push } = useHistory();

    const handleSubmit = React.useCallback(async values => {
        await signUp(values);
        push('/');
    }, [signUp, push]);

    return (
        <>
            <Header />
            <Container>
                <div>
                    <TopBorder />
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={{ name: '', type: 1, email: '', password: '', confirmPassword: '' }}
                        validationSchema={validationSchema}
                        validateOnBlur={false}
                    >
                        <Form>
                            <h1>Cadastro</h1>
                            <Switch
                                name="type"
                                data={[
                                    'Parceiro',
                                    'Investidor'
                                ]}
                            />
                            <div>
                                <InputBlock Icon={FiUser} name="name" placeholder="Nome" />
                                <InputBlock Icon={FiUser} name="username" placeholder="Username" />
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