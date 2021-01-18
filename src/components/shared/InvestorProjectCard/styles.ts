import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
    display: flex;
    flex: 0 0 320px;
    height: 100%;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-between;
    background-color: #333333;
    border-radius: 10px;
    overflow: hidden;

    & + * {
        margin-left: 32px;
    }

    > div {
        flex: 1;
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    > section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 10px 10px 10px;

        > h3 {
            line-height: 80%;
        }

        > h4 > span {
            color: #F24236;
        }
    }
`;