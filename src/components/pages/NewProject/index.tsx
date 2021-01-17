import { Form, Formik } from 'formik';
import React from 'react';
import { FiVideo, FiGrid, FiServer, FiUpload, FiAlignLeft } from 'react-icons/fi';
import Button from '../../shared/Button';
import FileInput from '../../shared/FileInput';
import Header from '../../shared/Header';
import InputBlock from '../../shared/InputBlock';
import { Container } from './styles';

const NewProject = React.memo(() => {
    const handleSubmit = React.useCallback(values => {
        console.log(values)
    }, []);

    return (
        <>
            <Header />
            <Container>
                <h1>Novo projeto</h1>
                <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        segment: '',
                        videoPitch: '',
                        businessPlan: '',
                        presentation: ''
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <InputBlock Icon={FiGrid} name="title" placeholder="Título" />
                        <InputBlock Icon={FiAlignLeft} name="description" placeholder="Descrição" textarea />
                        <InputBlock Icon={FiServer} name="segment" placeholder="Segmento" />
                        <FileInput Icon={FiVideo} accept="video/*" name="videoPitch" placeholder="Vídeo Pitch" />
                        <FileInput Icon={FiUpload} accept="application/pdf" name="businessPlan" placeholder="Plano de negócios (PDF)" />
                        <FileInput Icon={FiUpload} accept="application/pdf" name="presentation" placeholder="Apresentação (PDF)" />
                        <Button type="submit">Enviar</Button>
                    </Form>
                </Formik>
            </Container>
        </>
    );
});

export default NewProject;