import styled from 'styled-components'



export const Header=styled.div`

    background-color: white;
    padding: 20px;
    height: 5vw;

        img{
            width: 80px;
            
        }
`

export const Body=styled.body`
    background-color: beige;
    

    
`
export const ItemLista=styled.li`
    background-color: yellow; 
   
    list-style: none;   
    
    div{
       
       
        padding-right: 0;
        p:nth-child(){
            color: orange;
        }
    }
    p{  
        margin-left:0px;
        text-align: left;
        font-weight: bold;
    }
`


export const MyForm=styled.form`
    background-Color:blue;
    position: absolute;
    bottom: 7vw;

    
    div{
        display: inline-flex;
       
       
   }
    
    .rem input{
        margin: 12px 4px;
        font-size: 2vw;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        border-radius: 20px;
    }

    .msg input{
        margin: 12px 4px;
        font-size: 2vw;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        border-radius: 20px;
    }

    button{
        background: red;
        color:green;
        font-size: 2vw;
        width: 200px;
        height: 40px;
        margin-right:100px;
        margin-left: 25px;
        border-radius: 20px;
    }
`

export const Footer=styled.div`
    background-color:red;
    
    height: 6vw;

    
`