import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > div {
        width: 98vw;
        height: 80%;
        display: flex;
        align-items: center;
        background-color: #3D3D3D;
        border-radius: 0 50px 50px 0;
        justify-content: space-between;

        main {
            padding: 40px 50px;
            display: flex;
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;

            > h1 > span {
                margin-right: 30px;
            }
            > h1 {
                line-height: 130%;
            }

            span {
                color: #F24236;
            }
            > section > h2 {
                line-height: 80%;
            }
            > p {
                margin-bottom: 26px;
                color: #CFCFCF;
            }

        }

        video {
            border-radius: 50px;
            height: 100%;
            width: 65%;
            object-fit: cover;
        }

        button + button {
            margin-top: 8px;
        }
    }
`;

export const WhatsappButton = styled.a`
    padding: 10px 30px;
    border-radius: 8px;
    color: #EEEEEE;
    width: 100%;
    background-color: #36CF82;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 20px;

    svg {
        margin-right: 16px;
    }
`;