import styled from 'styled-components'

export const TripCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    
    background: #FFFFFF;
    width: 22vw;
    min-height: 40vh;
    height: fit-content;
    overflow-wrap: break-word;
    
    border: 1px solid #D7DEDD;
    box-sizing: border-box;

    font-family: 'Montserrat';
    font-style: normal;
    font-size: 18px;
    line-height: 20px;
    
    filter: drop-shadow(0px 3.17336px 19.0401px rgba(189, 189, 189, 0.23));    
`

export const TripListHeader = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: 5px;
    margin-right: 5px;
    height: 10vh;
    
`
export const TripsCardFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    color: rgb(152,162,255);
    padding: 8px;
    


`
export const div = styled.div`
    color: rgb(152,162,255);
`
export const TripTextClick = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 37px;
    text-align: center;
    
    color: rgb(152,162,255);
    
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    :hover{
        cursor: pointer;
        color: lightgrey;
    }
`
export const TripDesc = styled.p`
    border: 2px solid #819894;
`
