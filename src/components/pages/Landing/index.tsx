import React from 'react';
import Header from '../../shared/Header';
import startupImage from '../../../assets/images/startup.png';
import ideaImage from '../../../assets/images/idea.png';
import investorsImage from '../../../assets/images/investors.png';
import { Section } from './styles';
import { Link } from 'react-router-dom';

const Landing = React.memo(() => {
    return (
        <>
            <Header />
            <Section>
                <div>
                    <h1><span>Realize</span> seu sonho</h1>
                    <Link to="/">Cadastrar-se</Link>
                </div>
                <img src={startupImage} alt="Startup"/>
            </Section>
            <Section style={{ height: '65vh' }}>
                <img src={ideaImage} alt="Ideia"/>
                <div>
                    <h1><span>Publique</span> sua ideia</h1>
                    <p>Escreva em uma publicação sua ideia, o investimento necessário, e o cronograma. Sua ideia será avaliada pelos inúmeros investidores usuários da Startop.</p>
                </div>
            </Section>
            <Section style={{ height: '60vh' }}>
                <div>
                    <h1><span>Conquiste</span> investidores</h1>
                    <p>A Startop exibe seu negócio para os melhores e mais renomados investidores do Brasil. Eles avaliarão seu plano e investimento, e decidirão se irão apoiá-lo em seu ramo e jornada.</p>
                </div>
                <img src={investorsImage} alt="Talking to investors"/>
            </Section>
        </>
    );
});

export default Landing;