import { styled } from 'styled-components';

export const darkColor = "#040F0F";
export const primaryColor = "#57737A";
export const secondaryColor = "#85BDBF";
export const lightColor = "white";

export const H1 = styled.h1`
    text-align: center;
    font-size: 4em;
    padding: 10px;

    @media (max-width: 1300px) {
        font-size : 2em;
    }

    @media (max-width: 800px) {
        font-size : 1em;
    }
`;

export const H2 = styled.h2`
    text-align: center;
    font-size : 3em;
    padding: 5px;

    @media (max-width: 1300px) {
        font-size : 2em;
    }
`;

type Props = {
    border? : string;
    bordertype? : string;
}

export const H3 = styled.h3<Props>`
    font-size : 2em;
    padding: 2px;
    border-top: ${(props) => (props.border != null ? (`${props.border} ${((props.bordertype != null) ? props.bordertype : "solid")}`) : "none") };
    border-bottom: ${(props) => (props.border != null ? (`${props.border} ${((props.bordertype != null) ? props.bordertype : "solid")}`) : "none") };

    @media (max-width: 1300px) {
        font-size : 1em;
    }
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${darkColor};
    color: ${lightColor};
    border: 1px solid ${secondaryColor};
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: ${lightColor};
        color: ${darkColor};
    }
`;