import styled, { css } from 'styled-components';

interface ContainerProps {
    hasError: boolean
    isTextarea?: boolean
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

    svg + input {
        margin-left: 16px;
    }

    ${({ isTextarea }) => isTextarea && 
    css`
        textarea {
            background-color: #333333;
            border: 0;
            width: 100%;
            height: 80px;
            margin-left: 16px;

            resize: none;

            font-family: 'Mukta Mahee', serif;
            font-size: 18px;

            color: #EEEEEE;

            ::-webkit-scrollbar {
                display: none;
            }
        }
        height: unset;
    `}

    input {
        width: 100%;
        background-color: transparent;

        color: #EEEEEE;
    }
`;

export const Error = styled.p`
    color: #F24236;
    font-size: 14px;
    font-weight: 700;
    width: 100%;
    text-align: left;
`;
