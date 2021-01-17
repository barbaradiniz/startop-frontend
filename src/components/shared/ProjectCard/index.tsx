import React from 'react';
import { Container, Image } from './styles';
import image from '../../../assets/images/login-page-background.png';

const ProjectCard: React.FC = React.memo(() => {
    return (
        <Container>
            <Image src={image} />
            <div>
                <h4><span>R$</span> 15.000</h4>
                <h3>Projeto</h3>
                <p>Um projeto movide de fj</p>
            </div>
        </Container>
    );
});

export default ProjectCard;