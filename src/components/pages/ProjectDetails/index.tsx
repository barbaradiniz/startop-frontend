import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { useRouteMatch } from 'react-router-dom';
import api from '../../../services/api';
import Button from '../../shared/Button';
import Header from '../../shared/Header';
import { Container } from './styles';

interface IProject {
    name: string,
    description: string,
    videoPitch: string,
    businessPlan: string,
    presentation: string,
    investment: number,
    owner: {
        name: string;
    }
}

const ProjectDetails = React.memo(() => {
    const [project, setProject] = React.useState<IProject>({} as IProject);
    const { id } = useRouteMatch<{ id: string }>().params;

    React.useEffect(() => {
        api.get(`projects/${id}`).then(res => setProject(res.data));
    }, [id]);

    
    if (!project.name) {
        return (<div></div>);
    }

    return (
        <>
            <Header />
            <Container>
                <div>
                    <main>
                        <section>
                            <h2>{project.name}</h2>
                            <p>Em parceria com <span>{project.owner.name}</span></p>
                        </section>
                        <h1><span>R$</span>{project.investment}</h1>
                        <p>{project.description}</p>
                        <Button onClick={() => window.open(`http://173.249.38.45:8080/files/${project.businessPlan}`)}><FiDownload /> Baixar Plano de negócios</Button>
                        <Button onClick={() => window.open(`http://173.249.38.45:8080/files/${project.presentation}`)}><FiDownload /> Baixar Apresentação</Button>
                    </main>
                    <video onClick={e => {
                        if(e.currentTarget.paused) e.currentTarget.play();
                        else e.currentTarget.pause();
                    }} src={`http://173.249.38.45:8080/uploads/${project.videoPitch}`} />
                </div>
            </Container>
        </>
    );
});

export default ProjectDetails;