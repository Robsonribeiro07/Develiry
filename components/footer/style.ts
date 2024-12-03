import styled from "styled-components";

interface PropsColor {
  $colorFooter?: string;  // Adicionando o $ ao nome da propriedade
  disabled?: boolean;
}

export const Footer = styled.footer<PropsColor>`
  width: 100%;
  background-color: white;
  position: absolute;
  bottom: 0;
  display: ${props => props.disabled ? "none" : "flex"};
  padding: 1rem;
  background-color: ${(props) => props.$colorFooter};  // Usando $colorFooter
  align-items: center;
  justify-content: space-around;


  
`;
