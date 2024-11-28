import styled from "styled-components";
interface PropsColor {
    ColorFooter?: string
}
 export const Footer = styled.footer<PropsColor>`
 
  width: 100%;
  background-color: white;
  position: absolute;
 bottom: 0;;
 display: flex;
 padding: 1rem;
 background-color: ${props => props.ColorFooter};
 justify-content: center;   ;
 align-items: center;
  
 span {
    width: 40%;
    height: 5px;
    background-color: ${props => props.color};
    border-radius: 8px;
 
 }
 `