import React from 'react';
import Header from '../../shared/Header';
import newProject from '../../../assets/images/new-project.png';
import { Container } from './styles';
import ProjectCard from '../../shared/ProjectCard';
import { Link } from 'react-router-dom';
import { useProject } from '../../../hooks/project';

const PartnerDashboard = () => {
    const { projects } = useProject();

    if(!projects) {
        return <div></div>;
    }

    return (
        <>
            <Header />
            <Container>
                <h1>Seus projetos</h1>
                <section>
                    {projects.map(project => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                    <Link to="/project/new"><img src={newProject} alt="new project"/></Link>
                </section>
            </Container>
        </>
    );
};

export default PartnerDashboard;