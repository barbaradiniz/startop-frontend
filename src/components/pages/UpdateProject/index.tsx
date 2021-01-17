import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { FiVideo, FiGrid, FiServer, FiUpload, FiAlignLeft, FiDollarSign } from 'react-icons/fi';
import { useRouteMatch } from 'react-router-dom';
import api from '../../../services/api';
import Button from '../../shared/Button';
import FileInput from '../../shared/FileInput';
import Header from '../../shared/Header';
import InputBlock from '../../shared/InputBlock';
import { Container } from './styles';

interface IProject {
    name: string,
    description: string,
    segment: string,
}

const UpdateProject = React.memo(() => {
    const [project, setProject] = useState<IProject>({} as IProject);
    const { id } = useRouteMatch<{ id: string }>().params;

    useEffect(() => {
        api.get(`projects/${id}`).then(res => setProject(res.data));
    }, []);

    const handleSubmit = React.useCallback(values => {
        console.log(values)
    }, []);

    return (
        <>
            <Header />
            <Container>
                <h1>Alterar dados</h1>
                <Formik
                    initialValues={{
                        name: project.name,
                        description: project.description,
                        segment: project.segment,
                        videoPitch: '',
                        businessPlan: '',
                        presentation: '',
                        investiment: ''
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <InputBlock Icon={FiGrid} name="name" placeholder="Título" />
                        <InputBlock Icon={FiAlignLeft} name="description" placeholder="Descrição" textarea />
                        <InputBlock Icon={FiServer} name="segment" placeholder="Segmento" />
                        <InputBlock Icon={FiDollarSign} name="investment" placeholder="Investimento" />
                        <FileInput Icon={FiVideo} accept="video/*" name="videoPitch" placeholder="Vídeo Pitch" />
                        <FileInput Icon={FiUpload} accept="application/pdf" name="businessPlan" placeholder="Plano de negócios (PDF)" />
                        <FileInput Icon={FiUpload} accept="application/pdf" name="presentation" placeholder="Apresentação (PDF)" />
                        <Button type="submit">Salvar</Button>
                    </Form>
                </Formik>
            </Container>
        </>
    );
});

export default UpdateProject;