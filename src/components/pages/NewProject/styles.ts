import styled from 'styled-components';
import background from '../../../assets/images/new-project-background.png';

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    background: url(${background}) no-repeat center;
    background-size: cover;

    > h1 {
        margin-bottom: 12px;
    }

    > form {
        background-color: #3D3D3D;
        padding: 25px 30px;
        width: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 10px 10px 0 0;

        button {
            margin-top: 32px;
        }
    }
`;