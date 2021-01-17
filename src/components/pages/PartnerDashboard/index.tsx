import React from 'react';
import Header from '../../shared/Header';
import newProject from '../../../assets/images/new-project.png';
import { Container } from './styles';
import ProjectCard from '../../shared/ProjectCard';

const PartnerDashboard = React.memo(() => {

    return (
        <>
            <Header />
            <Container>
                <h1>Seus projetos</h1>
                <section>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <img src={newProject} alt="new project"/>
                </section>
            </Container>
        </>
    );
});

export default PartnerDashboard;