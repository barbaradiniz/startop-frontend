import styled, { keyframes } from 'styled-components';

interface IContainerProps {
    activeIndex: number;
}

const rise = keyframes`
    to {
        border-bottom-color: #F24236;
    }
`;

export const Container = styled.section<IContainerProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    color: #CFCFCF;

    span + span {
        margin-left: 26px;
    }

    span {
        cursor: pointer;
        border-bottom-color: #3D3D3D;
        border-bottom-width: 3px;
        border-bottom-style: solid;
    }

    span:nth-child(${props => props.activeIndex}) {
        color: #EEEEEE;
        animation: ${rise} forwards ease-out .2s;
    }
`;
