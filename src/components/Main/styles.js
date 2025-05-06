import { Link } from 'react-router-dom';
import styled from 'styled-components'

//Styled components ( Container - SobreMim)
export const IMG = styled.img`
    width: 220px;
    height: 220px;
    border-radius:50%;
    margin-bottom: 10px;
`;
export const Title = styled.h1`
    color:#000000df;
    font-family: "JetBrains Mono", monospace !important;
    font-size:30px;
    font-weight: bold;
    letter-spacing:0.5px;
    text-align:center;
    text-shadow:1px 2px 3px #000;
`;
export const SubTitle = styled.h3`
    color:#000000df;
    font-family: "JetBrains Mono", monospace !important;
    font-size:20px;
    font-weight: bold;
    letter-spacing:0.5px;
    text-align:center;
    text-shadow:1px 2px 3px #000;
`;

export const Button = styled.button`
    color: #ffffff;
    background: linear-gradient(90deg, #ffde59, #ff914d);
    border:none;
    padding: 10px;
    width: 200px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing:0.5px;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
    font-family: "JetBrains Mono", monospace !important;

    &:hover{
        opacity: 0.8;
    }
`;
//Styled components ( Container - SobreMim)



//Styled components ( Container - Projetos )
export const P = styled.p`
    color:#FFF;
    font-family: "JetBrains Mono", monospace !important;
    font-size:15px;
    font-weight: bold;
    letter-spacing:0.5px;
    text-align:center;
`;
export const SobreMim = styled.h1`
    color: #FFF;
    font-family: "JetBrains Mono", monospace !important;
    font-size:50px;
    font-weight: bold;
    letter-spacing:0.5px;
    cursor:pointer;
    text-align:center;

    @media (max-width: 917px){
    font-size:42px
    }

`;
export const Button2 = styled.button`
    color: #ffffff;
    background: linear-gradient(90deg, #ffde59, #ff914d);
    border:none;
    padding: 10px;
    width:200px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing:0.5px;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
    text-align:center;
    text-decoration:none;
    font-family: "JetBrains Mono", monospace !important;
    transition: all 0.3s ease;
    &:hover{
        opacity: 0.8;
    }


    @media (max-width: 917px){
        padding: 10px;
        width: 200px;
    }
`;
//Styled components ( Container - Projetos )