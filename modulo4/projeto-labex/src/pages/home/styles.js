import styled from 'styled-components';

export const MainHomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 20%;
`
export const MainHomeButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`
export const MainHomeButtons = styled.button`
    position: absolute;
    width: 500px;
    height: 90px;
    left: center;
    top: 460px;

    background: rgb(150,255,200);
    border-radius: 30px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 49px;

    filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.5));
    :hover{
        cursor: pointer;
        background-color: rgb(152,100,255);
    }
    `
export const HomeText = styled.h1`
    position: absolute;
    width: 513px;
    height: 183px;
    left: center;
    top: 177px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 61px;

    color: #FFFFFF;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`