import styled from "styled-components";


export const HomeContainer = styled.div`

height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
position: relative;
overflow: hidden;



`
interface Props {
  activeStart?: boolean;
}

export const TopSide = styled.div<Props>`
display: flex;
flex-direction: column;
color: white;
padding: 4rem 2rem;
height: 40%;
background-color: ${props => props.theme['BLACK']};


span:first-child {
    color: gray;
    font-size: 1.2rem;
}



span {
    font-size: 1.2rem;
    gap: 0.5rem;
    display: flex;
    align-items: center;


   &:nth-child(2) {
    margin-bottom: 2rem

   }
   &:nth-child(3){
    width: 50%;
    height: 70px;
    padding: 1rem;;
    border-radius: 8px;
    background-color: orange;
    position: absolute;
    left: 40%;
    top: 15%;
    display: ${props => props.activeStart ? "" : "none"};

   }
}


 
`

interface PropsMiddle {
  translateX?: number
  translateY?: number
}

export const MiddleSide = styled.div<PropsMiddle>`
position: relative;
align-items: center;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #F9F9F9;
padding-bottom: 1rem;
footer {
    position: absolute;
    width: 100%;
    z-index: 1;
    bottom: 0;
    margin-bottom: 3rem;
    font-size: 2rem;
    justify-content: space-around;
    display: flex;
    width: 80%;
    align-items: center;

    
} 
.category {
  width: 100%;
  height: 10%;
  margin-top: 5rem;
  display: flex;
  align-items:  center;


  transform: ${props => `translateX(${props.translateX}px)`};  
  
  ul {
    display: flex;
    gap: 1rem;
    padding-left: 1.5rem;
  }
}
.products {
  display: flex;
  flex-wrap: wrap;
  transform: ${props => `translateY(${props.translateY}px)`};  
  flex: 1;
  justify-content: center
  

}
.listProducts{
  display: flex;
    gap: 1rem;
  height: 100%;
  overflow: auto;
  justify-content: center;
  
flex-wrap: wrap;
}

`
export const Assets = styled.div`

  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 1.5rem;


  button {
    height: 4rem;
    width: 4rem;
    background-color: ${props => props.theme["Primary"]};
    border-radius: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border: 0;

    .SearchIcon{
    }

   

  }
  
  .Search {
    padding: 1rem;
    flex: 1;
    display: flex;
    align-items: center;
    background-color: #2A2A2A; 
    border-radius: 1rem;
    color: white;;
    font-size: 2rem;
    
    .SearchIcon {
        cursor: pointer;
    }

    input {
        border: none;
       width: 100%;
       background-color: transparent;
       transition: 0.5s;
       
       padding: 0.5rem;
       font-family: "Sora";
          color: white;
          font-size: 1rem;
      &::placeholder {
        font-size: 1.2rem;
       color: #A2A2A2;
      
      }

       &:focus{
        outline: none; 
        transform: scale(1.1);
        transition: 0.5s;
       }
    }
  }
`
interface backgroundProps {
    BackgroundImg: string;
}
export const BannerTop = styled.div<backgroundProps>`
  min-width: 100%;
  min-height: 80%;
  background-image: url(${props => props.BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;  // Garante que a imagem cubra a área
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;    
  border-radius: 1.5rem;  // Borda arredondada
  z-index: 1;
  overflow: hidden;  // Garante que a imagem fique dentro da borda

  p:first-child {
    border-radius: 0.7rem;
    height: 30px;
    padding: 1.2rem 2rem;
    width: 80px;
    background-color: #ED5151;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p:last-child {
    font-size: 2.2rem;
    font-weight: bold;
    line-height: 1.2;
    margin-top: 1rem;
  }
`;
