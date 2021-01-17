import React from 'react';
import { Container, Error } from './styles';
import { IconBaseProps } from 'react-icons';
import { Field, useField } from 'formik';

interface IInputBlockProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder: string;
    Icon: React.ComponentType<IconBaseProps>;
}

const InputBlock: React.FC<IInputBlockProps> = React.memo(({ Icon, name, placeholder, ...rest }) => {
    const [{ value }, { error }, { setValue }] = useField(name);

    return (
        <>
            <Container isFilled={!!value} hasError={!!error}>
                <Icon size={24} />
                <label htmlFor={name}>{!!value ? value.name : placeholder}</label>
                <input id={name} type="file" onChange={e => setValue(e.currentTarget.files?.item(0))} {...rest} />
            </Container>
            {!!error && <Error>{error}</Error>}
        </>
    );
});

export default InputBlock;