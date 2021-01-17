import React from 'react';
import { Container, Error } from './styles';
import { IconBaseProps } from 'react-icons';
import { Field, useField } from 'formik';

interface IInputBlockProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder: string;
    Icon: React.ComponentType<IconBaseProps>;
    textarea?: boolean;
}

const InputBlock: React.FC<IInputBlockProps> = React.memo(({ Icon, name, placeholder, textarea, ...rest }) => {
    const [, { error }] = useField(name);

    return (
        <>
            <Container isTextarea={textarea} hasError={!!error}>
                <Icon size={24} />
                <Field component={textarea && 'textarea'} placeholder={placeholder} name={name} {...rest} />
            </Container>
            {!!error && <Error>{error}</Error>}
        </>
    );
});

export default InputBlock;