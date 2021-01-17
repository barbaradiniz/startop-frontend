import React from 'react';
import Header from '../../shared/Header';
import newProject from '../../../assets/images/new-project.png';
import { Container } from './styles';
import ProjectCard from '../../shared/ProjectCard';
import { Link } from 'react-router-dom';

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
                    <Link to="/project/new"><img src={newProject} alt="new project"/></Link>
                </section>
            </Container>
        </>
    );
});

export default PartnerDashboard;