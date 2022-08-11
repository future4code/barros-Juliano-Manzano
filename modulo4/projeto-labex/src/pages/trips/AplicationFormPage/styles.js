import styled from 'styled-components'

export const ApplyText = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 37px;
    text-align: center;
    
    color: #FFFFFF;
    
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const ApplyFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;

    position: absolute;
    width: 400px;
    height: fit-content;
    left: 50%;
    transform: translate(-50%);

    background: #FFFFFF;

    border: 1px solid #D7DEDD;
    box-sizing: border-box;
`
export const ApplyInput = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;

    position: static;
    width: 95%;
    height: 3vh;

    background: #FFFFFF;

    box-shadow: inset 0px -1px 0px #484747;

    flex: none;
    order: 1;
    flex-grow: 1;
    margin: 0px 4px;
    margin-top: 10px;
`
export const ApplySelect = styled.select`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;

    position: static;
    width: 100%;
    height: 5vh;
    left: 0px;
    top: 0px;

    background: #FFFFFF;

    box-shadow: inset 0px -1px 0px #484747;

    flex: none;
    order: 1;
    flex-grow: 1;
    margin: 0px 4px;
    margin-top: 10px;
`
export const ApplyButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;

    position: static;
    width: 100%;
    height: 5vh;

    background: #000000;
    color: white;

    flex: none;
    order: 3;
    flex-grow: 0;
    margin: 16px 0px;
    :hover{
        background-color: #1a1a1a;
    }
`