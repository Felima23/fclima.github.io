import styled from 'styled-components'

//Styled components ( Container - QuemSouEu)
export const Title = styled.h1`
    color: #1C494C;
    font-family: "Bitter", serif;
    font-size:70px;
    font-weight: 700;
    position: relative;

     span {
    color: #73CADC;
  }
    ::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  width: 120px;
  height: 4px;
  background-color:#73CADC;
  border-radius: 2px;
}

`;
export const P = styled.p`
    color:#1C494C;
    font-family: "JetBrains Mono", monospace !important;
    font-size:22px;
    font-weight: 300;
    letter-spacing:0.5px;
    width: 85%;

    span{
    color:#1C494C;
    font-weight: 900;
    }
`;

export const H2 = styled.h2`
    color:#1C494C;
    font-family: "Bitter", serif;
    font-size:35px;
    font-weight: 600;

    span{
    color:#73CADC;
    font-size:40px;
    }
`;
export const LI = styled.li`
    color: #1C494C;
    font-family: "JetBrains Mono", monospace !important;
`;
export const IMG = styled.img`
    width: 400px;
    height: 400px;
    border-radius:50%;
    
`;

export const PP = styled.p`
    color:#1C494C;
    font-family: "JetBrains Mono", monospace !important;
    font-size:17px;
    font-weight: 300;
    letter-spacing:0.5px;

    span{
    color:#1C494C;
    font-weight: 900;
    }
`;
