import styled from "styled-components";

export const GetStartHome = styled.div`
 
 width: 100%;
    flex: 1;
 position: relative;
 flex-direction: column;
 display: flex;
 background-color: black;
 color: white; 
 align-items: center;
 font-family: 'Sora';


 footer {
    display: flex;
    padding: 1rem;
    width: 100%;
    flex: 1;
    align-items: center;
    flex-direction: column; 
    position: relative;
    top: -8rem;
     
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
       top: -5rem;
        
    span {
        font-size: 3rem;
        font-weight: bold;
        line-height: 1.3;
        display: flex;
        margin-bottom: 0;
        padding: 0;

        @media screen and (max-width: 768px) {
            font-size: 2rem;
            
        } 


        }
       
    
    }
    button {
        width: 100%;    
        padding: 1.5rem;
        border-radius: 1.5rem;
        margin-bottom: 100px;
        font-size: 1.5rem;
        background-color: ${props => props.theme['Primary']};
        color: white;
    cursor: pointer;    
        font-weight: bold;
    }
   span p {
    color: gray;
    margin-bottom: 1rem;
    position: relative;
    top: -2rem;
   }
   
 }
  img {
  width: 100%;
  position: relative;
  height: 55vh;
  top: -4rem;
  }
  @media screen and (max-width: 768px){
    footer {
        top: -4rem;
    }
    img {
        height: auto;
    }
    
}
`