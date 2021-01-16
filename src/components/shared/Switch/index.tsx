import { useField } from 'formik';
import React from 'react';
import { Container } from './styles';

interface ISwitchProps {
    data: string[];
    name: string;
}

const Switch: React.FC<ISwitchProps> = React.memo(({ data, name }) => {
    const [{ value },, { setValue }] = useField(name);
    const [active, setActive] = React.useState(value);

    return (
        <Container activeIndex={active}>
            {data.map((tab, index) => (
                <span key={index} onClick={() => {
                    setActive(index + 1);
                    setValue(index + 1);
                }}>{tab}</span>
            ))}
        </Container>
    );
});

export default Switch;