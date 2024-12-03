import styled from "styled-components";

export const Product = styled.div`

width: 180px;
border-radius: 1rem;
height: 280px;
display: flex;
background-color: #FFFFFF;
padding: 10px;
align-items: center;
flex-direction: column;
justify-content: flex-start;
align-items: start;
font-family: 'Sora';
font-weight: 500;
-webkit-font-smoothing: antialiased;
user-select: none;
margin-bottom: 2rem;
position: relative;

.assets {
   display: flex;
   width: 100%;
   align-items: center;
   left: 0;
   position: absolute;
    bottom: 10px;
    justify-content: space-between;
    padding: 0 1rem;


   button {
      font-family: 'Sora';
      height: 40px;
      font-size: 1.5rem;
      width: 40px;
      border-radius: 12px;
      border: 0;
      background-color: #C67C4E;
      color: white;

   }
}
span {
   font-size: 1.1rem;
   margin-top: 0.6rem;
   
}
p:nth-child(3){
   color: #A2A2A2;
}
   
   img {
    width: 100%;
    object-fit: cover;  
    height: 130px;;
    max-height: 150px;;
    border-radius: 8px;
    user-select: none;
    -webkit-user-drag: none;
   }
`