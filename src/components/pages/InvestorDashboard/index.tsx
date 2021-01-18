import React from 'react';
import segments from '../../../config/segments';
import { useProject } from '../../../hooks/project';
import Header from '../../shared/Header';
import InvestorProjectCard from '../../shared/InvestorProjectCard';
import { Container } from './styles';

const InvestorDashboard = React.memo(() => {
    const { projects } = useProject();

    if(!projects) {
        return (<div></div>);
    }

    return (
        <>
            <Header />
            <Container>
                {Object.keys(segments).map(key => projects.filter(project => project.segment === key).length > 0 && (
                    <section>
                        <h2>{segments[key]}</h2>
                        <div>
                            {projects.filter(project => project.segment === key).map(project => (
                                <InvestorProjectCard key={project._id} project={project} />
                            ))}
                        </div>
                    </section>
                ))}
            </Container>
        </>
    );
});

export default InvestorDashboard;