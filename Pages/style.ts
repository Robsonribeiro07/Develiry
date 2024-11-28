import styled from "styled-components";


export const HomeContainer = styled.div`

height: 100%;
width: 100%;
display: flex;
flex-direction: column;
position: relative;



`

export const TopSide = styled.div`
height: 40%;
background-color: ${props => props.theme['BLACK']};


`

export const MiddleSide = styled.div`
position: relative;
flex: 1;
align-items: center;
display: flex;
justify-content: center;

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

    span {
        border-bottom: 1px solid transparent;
        border-top: 1px solid transparent
    }
} 

`