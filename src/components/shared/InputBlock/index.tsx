import React from 'react';
import { Container } from './styles';
import { IconBaseProps } from 'react-icons';
import { Field } from 'formik';

interface IInputBlockProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder: string;
    Icon: React.ComponentType<IconBaseProps>;
}

const InputBlock: React.FC<IInputBlockProps> = React.memo(({ Icon, name, placeholder, ...rest }) => {
    return (
        <Container>
            <Icon size={24} />
            <Field placeholder={placeholder} name={name} {...rest} />
        </Container>
    );
});

export default InputBlock;