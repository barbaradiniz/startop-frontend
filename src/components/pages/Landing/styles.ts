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

