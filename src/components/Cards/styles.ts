import styled from 'styled-components';
import { darkColor, lightColor, primaryColor, secondaryColor } from '../../styles/generalStyles';

export const CardContainer = styled.div`
    border: 1px dotted ${darkColor};
    background-color: ${secondaryColor};
    border-radius: 10px;
    margin: 1em;
    width: 200px;
    overflow: hidden;

    @media (max-width: 500px) {
        width: 150px;
        margin: 10px;
    }
`;

export const CardHeader = styled.div`
    display: flex;
    width: 100%;
`;

export const CardTitle = styled.div`
    background-color: ${primaryColor};
    text-align: center;
    border-radius: 10px 0 0 0;
    padding: 0.5em 0 0.5em 0;
    width: 80%;
    color:${lightColor};
    font-weight: bold;
`;

export const CardDelete = styled.div`
    width: 20%;
    text-align: center;
    background-color: ${primaryColor};
    color:${lightColor};
    padding: 0.5em 0 0.5em 0;
    font-weight: bolder;
    cursor: pointer;
`;

export const CardDescription = styled.div`
    text-align: start;
    background-color: ${secondaryColor};
    padding: 1em;
    color:${darkColor};
`;

type Props = {
    start : string;
};

export const CardMoveTask = styled.div<Props>`
    font-weight: bolder;
    display: flex;
    justify-content: ${props => props.start === "true" ? "flex-start" : "flex-end"};

    span {
        cursor: pointer;
        color: ${primaryColor};
        ${props => props.start === "true" ? "padding-left: 10px" : "padding-right: 10px"};
    }
`;