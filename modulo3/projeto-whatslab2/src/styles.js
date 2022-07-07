import { createGlobalStyle } from "styled-components";

import styled from "styled-components";

export default createGlobalStyle`
  * {
    background-color: white;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
    
  }
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    /*width: 100%;*/
`;

export const Img = styled.img`
   width: 100px;
`;

export const Title = styled.h2`
   color: black;
   position: relative;
   bottom: -40px;

`;

export const Container = styled.div`
    background-color: orangered;
    
    padding-left: 20vh ;
    height: 80vh;

`;

export const ContainerFloat = styled.div`
    
    float: left;
    position: fixed;
`;

export const Center = styled.main`
    justify-content: center;
    text-align: center;
    position: fixed;
   
    width: 80vw;
    height: 80vh;
`;

export const Form = styled.div`
    position: absolute;
    bottom: 70px;
    justify-content: space-between;
    right:35%;
      
`;

export const Input = styled.form`

`;

export const Footer = styled.footer`
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    clear: both;
`;

export const Menssage = styled.input`
    background-color: red;
    height: 50px;
`