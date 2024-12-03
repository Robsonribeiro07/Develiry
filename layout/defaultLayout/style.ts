import styled from "styled-components";

export const LayoutContainer = styled.div`

 border: 1px solid black;
 height: calc(100vh - 10rem);
 width: 100vw;
 max-width: 500px;
 border-radius: 2rem;
    display: flex;
 flex-direction: column;
 overflow: hidden ;
 position: relative;
  
 @media screen and (max-width: 500px) {
    height: 100vh;
    border-radius: 0;
    border: 0;
    width: 100vw;;
 }
 footer {
   bottom: 0;
   z-index: 1
 }


`
