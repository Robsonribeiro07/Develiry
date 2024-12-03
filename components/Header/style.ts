import styled from "styled-components";

interface PropsHeader {
   ColorText?: string;
 
}
export const HeaderContainer = styled.header<PropsHeader>`
 padding: 1.5rem;
 height: 5%;
 justify-content: space-between;
 display: flex;
 align-items: center;
 background-color: ${props => props.color};
 z-index: 1;

 @media screen and (max-width: 768px) {

   display: none;
 }

 span {
    display: flex;
    gap: 0.5rem;
   color: ${props => props.ColorText};


    img {
        width: 1.5rem;
        color: white;
    }
 } 
  
 span:first-child{
    font-size: 1.5rem;
 }
  



`