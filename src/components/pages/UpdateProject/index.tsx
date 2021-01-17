import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { FiVideo, FiGrid, FiUpload, FiAlignLeft, FiDollarSign } from 'react-icons/fi';
import { useRouteMatch } from 'react-router-dom';
import Switch from '../../shared/Switch/index';
import segments from '../../../config/segments';
import api from '../../../services/api';
import Button from '../../shared/Button';
import FileInput from '../../shared/FileInput';
import Header from '../../shared/Header';
import InputBlock from '../../shared/InputBlock';
import { Container } from './styles';
import { useProject } from '../../../hooks/project';

interface IProject {
    name: string,
    description: string,
    segment: string,
    investment: string
}

const UpdateProject = React.memo(() => {
    const [project, setProject] = useState<IProject>({} as IProject);
    const { id } = useRouteMatch<{ id: string }>().params;
    const { updateProject } = useProject();

    useEffect(() => {
        api.get(`projects/${id}`).then(res => setProject(res.data));
    }, []);

    const handleSubmit = React.useCallback(values => {
        const segment = Object.keys(segments).find(key => segments[key] === Object.values(segments)[values.segment - 1]);

        Object.keys(values).forEach(key => {
            if (!values[key]) {
                delete values[key];
            }
        });

        const result = { ...project, ...values, segment };

        updateProject(id, result);
    }, []);

    if (!project.name) {
        return (<div></div>);
    }

    return (
        <>
            <Header />
            <Container>
                <h1>Alterar dados</h1>
                <Formik
                    initialValues={{
                        name: project.name,
                        description: project.description,
                        segment: Object.keys(segments).findIndex(key => key === project.segment) + 1,
                        videoPitch: '',
                        businessPlan: '',
                        presentation: '',
                        investiment: project.investment
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Switch name="segment" data={Object.values(segments)} />
                        <InputBlock Icon={FiGrid} name="name" placeholder="Título" />
                        <InputBlock Icon={FiAlignLeft} name="description" placeholder="Descrição" textarea />
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