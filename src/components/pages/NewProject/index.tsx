import { Form, Formik } from 'formik';
import React from 'react';
import { FiVideo, FiGrid, FiUpload, FiAlignLeft, FiDollarSign } from 'react-icons/fi';
import segments from '../../../config/segments';
import { useProject } from '../../../hooks/project';
import Button from '../../shared/Button';
import FileInput from '../../shared/FileInput';
import Header from '../../shared/Header';
import InputBlock from '../../shared/InputBlock';
import Switch from '../../shared/Switch';
import { Container } from './styles';

const NewProject = React.memo(() => {
    const { createProject } = useProject();

    const handleSubmit = React.useCallback(async values => {
        const segment = Object.keys(segments).find(key => segments[key] === Object.values(segments)[values.segment - 1]);

        await createProject({...values, segment });
    }, [createProject]);

    return (
        <>
            <Header />
            <Container>
                <h1>Novo projeto</h1>
                <Formik
                    initialValues={{
                        name: '',
                        description: '',
                        segment: 3,
                        videoPitch: '',
                        businessPlan: '',
                        presentation: '',
                        investment: 0
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Switch name="segment" data={Object.values(segments)} />
                        <InputBlock Icon={FiGrid} name="name" placeholder="Título" />
                        <InputBlock Icon={FiAlignLeft} name="description" placeholder="Descrição" textarea />
                        <InputBlock Icon={FiDollarSign} type="number" name="investment" placeholder="Investimento" />
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