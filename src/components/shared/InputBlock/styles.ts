import styled from 'styled-components';

export const Container = styled.div`
    padding: 0px 16px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;
    border-radius: 8px;
    background-color: #333333;
    color: #3D3D3D;

    & + div {
        margin-top: 8px;
    }

    svg + input {
        margin-left: 16px;
    }

    input {
        width: 100%;
        background-color: transparent;

        color: #EEEEEE;
    }
`;
