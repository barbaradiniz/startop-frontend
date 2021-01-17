import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    background-color: #333333;
    flex-direction: row;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    position: relative;

    > a {
        display: flex;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: center;

        > * + * {
            margin-left: 10px;
        }

        span {
            height: 40px;
            width: 1px;
            background-color: #EEEEEE;
        }
    }
`;

export const SignUpButton = styled(Link)`
    color: #F24236;
`;