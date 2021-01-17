import styled from 'styled-components';

interface ContainerProps {
    hasError: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    padding: 12px 16px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    border-radius: 8px;
    background-color: #333333;
    color: ${props => props.hasError ? '#F24236' : '#3D3D3D'};

    border: 2px solid ${props => props.hasError ? '#F24236' : '#333333'};

    & + div {
        margin-top: 8px;
    }

    svg + label {
        margin-left: 16px;
    }

    label {
        width: 100%;
        background-color: transparent;
        color: ${props => props.isFilled ? '#EEEEEE' : '#9E9E9E'};
    }

    input {
        display: none;
    }
`;

export const Error = styled.p`
    color: #F24236;
    font-size: 14px;
    font-weight: 700;
    width: 100%;
    text-align: left;
`;
