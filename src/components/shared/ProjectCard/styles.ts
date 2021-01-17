import styled from 'styled-components';

export const Container = styled.div`
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
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 5px 15px 10px 10px;

        > h3 {
            line-height: 80%;
        }

        > h4 > span {
            color: #F24236;
        }
    }
`;

export const Image = styled.span<{ src: string }>`
    flex: 1;
    background: url(${props => props.src}) no-repeat center;
    background-size: cover;
`;