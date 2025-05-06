import styled from 'styled-components'

export const Logo = styled.h1`
    color: #000;
    font-family: "JetBrains Mono", monospace !important;
    font-size:50px;
    font-weight: 700;
    letter-spacing:0.5px;
    cursor:pointer;
    text-shadow:1px 2px 3px #000;
    text-decoration:none;
`;

export const Contato = styled.a`
    color: #000;
    font-family: "JetBrains Mono", monospace !important;
    font-size:16px;
    font-weight: 900;
    letter-spacing:0.5px;
    text-decoration:none;
    cursor:pointer;
`;

export const A = styled.a`
    color: #000;
    font-family: "JetBrains Mono", monospace !important;
    font-size:16px;
    font-weight: 900;
    letter-spacing:0.5px;
    text-decoration:none;
    position: relative;
    padding: 4px 0px;

    &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after,
  &.ativo::after {
    transform: scaleX(1);
  }
`;
