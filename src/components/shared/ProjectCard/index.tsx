import React from 'react';
import { Container, Image } from './styles';
import image from '../../../assets/images/login-page-background.png';

interface IProject {
    name: string;
    description: string,
    segment: string,
    videoPitch: string,
    businessPlan: string,
    presentation: string,
    investment: number
}

interface IProjectCardProps {
    project: IProject;
}

const ProjectCard: React.FC<IProjectCardProps> = React.memo(({ project }) => {
    return (
        <Container>
            <Image src={image} />
            <div>
                <h4><span>R$</span> {project.investment}</h4>
                <h3>{project.name}</h3>
            </div>
        </Container>
    );
});

export default ProjectCard;