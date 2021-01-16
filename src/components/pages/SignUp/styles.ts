import styled from 'styled-components';
import background from '../../../assets/images/signup-page-background.png';
import { Form as FormikForm } from 'formik';

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: calc(100vh - 60px);
    justify-content: space-between;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100%;
    }
`;

export const Background = styled.span`
    flex: 1;
    background: url(${background}) no-repeat center;
    background-size: cover;
    border-top-left-radius: 30px;
`;

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    padding: 50px 30px;
    background-color: #3D3D3D;
    border-radius: 0 0 10px 10px;

    h1 {
        line-height: 100%;
        text-align: center;
        margin-bottom: 15px;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 40px;
    }

    > p {
        color: #CFCFCF;
        margin-top: 49px;
        a {
            color: #F24236;
        }
    }
`;

export const TopBorder = styled.span`
    width: 80%;
    height: 2px;
    border-radius: 2px 2px 0px 0px;
    background-color: #F24236;
    margin-bottom: -2px;
    z-index: 1;
`;