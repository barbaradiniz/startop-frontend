import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 60px;

    > section {
        width: 95%;
        padding: 50px 30px;
        display: flex;

        ::-webkit-scrollbar {
            display: none;
        }

        align-items: center;
        overflow-x: auto;
        justify-content: flex-start;
        background-color: #3D3D3D;
        border-top-right-radius: 30px;

        > a > img {
            width: 320px;
            height: 320px;
        }

        > *:last-child {
            width: 352px;
            padding-right: 32px;
        }
    }

    > h1 {
        margin-left: 40px;
    }
`;