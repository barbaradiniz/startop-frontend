import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-top: 50px;

    > section {
        width: 95%;
        background-color: #3D3D3D;
        border-radius: 0 30px 30px 0;
        padding: 20px 50px;

        h1 {
            margin-bottom: 30px;
        }

        > div {
            width: 100%;
            display: flex;
            overflow-x: auto;
            align-items: center;
            justify-content: flex-start;

            ::-webkit-scrollbar {
                display: none;
            }
        }
    }

    section + section {
        margin-top: 80px;
    }
`;