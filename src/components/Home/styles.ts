import styled from 'styled-components';
import { lightColor, primaryColor, secondaryColor } from '../../styles/generalStyles';

export const Main = styled.main``;

export const Section = styled.section`
    background-color: ${secondaryColor};
    padding: 2em;
`;

export const SectionTasks = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${lightColor};
    padding: 1em 0 1em 0;
    height: 1000px;

    @media (max-height: 850px) {
        height: 700px;
    }

    @media (max-height: 600px) {
        height: 500px;
    }
`;

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const PendingTasks = styled.div`
    width: 50%;
    border-right: 2px dotted ${primaryColor};
    
`;

export const CompletedTasks = styled.div`
    width: 50%;
`;

export const Ul = styled.ul`
    display: flex;
    align-content: flex-start;
    list-style: none;
    flex-flow: row wrap;
    width: 50vw;
    padding-left: 0;
    height: 900px;

    @media (max-height: 850px) {
        height: 550px;
    }

    @media (max-height: 600px) {
        height: 400px;
    }

    overflow-y: auto;
`;