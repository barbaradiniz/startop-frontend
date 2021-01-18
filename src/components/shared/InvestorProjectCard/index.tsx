import React from 'react';
import { Container } from './styles';

interface IProject {
    name: string;
    description: string,
    segment: string,
    videoPitch: string,
    businessPlan: string,
    presentation: string,
    investment: number,
    owner: { name: string },
    _id: string;
}

interface IProjectCardProps {
    project: IProject;
}

const ProjectCard: React.FC<IProjectCardProps> = React.memo(({ project }) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const playVideo = React.useCallback(() => {
        videoRef.current?.play();
    }, [videoRef]);

    const stopVideo = React.useCallback(() => {
        videoRef.current?.pause();
    }, [videoRef]);

    return (
        <Container onMouseOver={playVideo} onMouseOut={stopVideo} to={`/project/${project._id}`}>
            <video ref={videoRef} src={`http://173.249.38.45:8080/uploads/${project.videoPitch}`} />
            <section>
                <h4><span>R$</span> {project.investment}</h4>
                <h3>{project.name}</h3>
                <p>{project.owner.name}</p>
            </section>
        </Container>
    );
});

export default ProjectCard;