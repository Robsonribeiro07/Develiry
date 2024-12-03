import styled from "styled-components";

interface ActiveProps {
    isActive?: boolean; // Propriedade para controlar se o botão está ativo
}

export const ListCategory = styled.button<ActiveProps>`


 width: 100px;
 height: 20px;
 background-color: ${props => props.isActive ? "#C67C4E" : '#F5F5F5'};
 color: ${props => props.isActive ? "White" : 'Black'};
 display: flex;
 justify-content: center;
 align-items: center;;
 padding: 1.2rem 2rem;
 border-radius: 0.5rem;
border: 0;
font-family: "Sora";
font-size: 1rem;


 user-select: none;
 margin-bottom: 20px;
  


`