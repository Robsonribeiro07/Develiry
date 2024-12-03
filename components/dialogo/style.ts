import styled from "styled-components";

interface Props {
    active?: boolean;
}

export const ContainerDialogo = styled.div<Props>`

position: absolute;
height: 10%;
top: 50vh;
width: 70%;
background-color: #ffffff;
padding: 2.5rem 1rem;
display: flex;
align-items: center;
border-radius: 1rem;
font-family: 'Sora';
left: ${props => props.active ? '15%' : '-100%'};
outline: 2px solid ${props => props.theme['Primary']};
transition: 1s;


&:hover {
    transform: scale(1.1);
}
z-index: 2;
 .dialog {
    align-items: center;
    font-weight: bold;
    display: flex;
    width: 100%;
    flex-direction: column;

    .dialog-actions {
        display: flex;  
        justify-content: space-around;
        gap: 1rem;
        width: 100%;
    }
 }
button {
    background-color: transparent;
    border: 0;
    font-family: 'Sora';
    padding: 0.5rem;
    outline: 2px solid ${props => props.theme['Black']};
    background-color: white;
    border-radius: 8px;
    flex: 1;
    font-weight: bold;


    &:hover {
        background-color: ${props => props.theme['Primary']};
    }

}


`




