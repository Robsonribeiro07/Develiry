import styled from "styled-components";

interface IconProps {
  Border?: boolean; // Propriedade para controlar se o ícone tem borda
}

export const IconList = styled.button<IconProps>`
  display: inline-block;
  padding: 8px;
  font-size: 2rem;
  background-color: transparent;
  border: 0;
  border-top: 2px solid transparent; /* Sem aspas em "transparent" */
  border-bottom: 2px solid ${props => (props.Border ? "Red" : "transparent")}; /* Condicional para borda */
  transition: border 0.5s ease-out; /* Transição suave para a borda */
  
  /* Se a classe 'active' for aplicada, pode-se mudar o fundo ou outras propriedades */
  &.active {
    background-color: red;  /* Cor de fundo quando estiver ativo */
  }
`;
