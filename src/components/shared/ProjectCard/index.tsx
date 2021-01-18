import React from 'react';
import { Container } from './styles';
import segments from '../../../config/segments';

interface IProject {
    name: string;
    description: string,
    segment: string,
    videoPitch: string,
    businessPlan: string,
    presentation: string,
    investment: number,
    _id: string;
}

interface IProjectCardProps {
    project: IProject;
}

const ProjectCard: React.FC<IProjectCardProps> = React.memo(({ project }) => {
    return (
        <Container to={`/project/update/${project._id}`}>
            <video src={`http://173.249.38.45:8080/uploads/${project.videoPitch}`} />
            <section>
                <h4><span>R$</span> {project.investment}</h4>
                <h3>{project.name}</h3>
                <p>{segments[project.segment]}</p>
            </section>
        </Container>
    );
});

export default ProjectCard;