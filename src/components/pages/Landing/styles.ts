import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    margin-bottom: 100px;

    div {
        display: flex;
        padding: 0 30px;
        flex-direction: column;
        align-items: center;

        h1 {
            line-height: 100%;
            text-align: center;
            margin-bottom: 16px;

            span {
                color: #F24236;
            }
        }

        a {
            background-color: #F24236;
            padding: 10px 30px;
            border-radius: 8px;
        }
    }

    img {
        height: 100%;
    }
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
    background-color: #3D3D3D;
    border-top: 2px solid #F24236;
    flex-direction: column;

    h1 {
        line-height: 100%;
        text-align: center;
        margin-bottom: 16px;
        span {
            color: #F24236;
        }
    }

    > a {
        background-color: #F24236;
        padding: 10px 30px;
        border-radius: 8px;
    }

    p {
        margin-top: 26px;
        color: #CFCFCF;

        > a {
            color: #F24236;
        }
    }
`;
