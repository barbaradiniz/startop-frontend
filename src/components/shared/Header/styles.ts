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

        > span {
            height: 40px;
            width: 1px;
            background-color: #EEEEEE;
        }

        > div {
            display: flex;
            align-items: center;
            justify-content: space-around;
            background-color: #3D3D3D;
            border-radius: 8px;
            padding: 0 15px;
            height: 45px;

            > span {
                color: #F24236;
            }
        }
    }
`;

export const SignUpButton = styled(Link)`
    color: #F24236;
`;