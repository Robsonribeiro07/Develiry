import React, { useState } from "react";
import { ListCategory } from "./style";
import { useProductContext } from "../../ProvideActive"; // Importando o custom hook

interface PropsDisabled {
  disabled?: boolean;
  setFilterItem: React.Dispatch<React.SetStateAction<string>>;
  ValueInput: React.Dispatch<React.SetStateAction<string>>; // Função para atualizar o filtro
}

export function Categorias({ disabled, ValueInput, setFilterItem }: PropsDisabled) {
  // Estado para armazenar o item ativo
  const [active, setActive] = useState<string>("");

  // Lista de categorias (fictícia, poderia vir de uma API, por exemplo)
  const listas = ["Italian", "Bebidas", "Fast Food", "Pizza"];

  // Usando o contexto de produtos
  const { setFilter } = useProductContext(); // Usando o custom hook

  // Função que captura o texto do item clicado
  const handleActive = (event: React.MouseEvent<HTMLButtonElement>) => {
    const itemText = event.currentTarget.textContent || ""; // Captura o texto do elemento clicado

    if (itemText.trim() === active) {
      setFilter(""); // Limpa o filtro
      setActive("");  // Reseta o estado de item ativo
    } else {
      setActive(itemText.trim());  // Define o item ativo
      setFilter(itemText.trim().toLocaleLowerCase()); // Aplica o filtro baseado na categoria
      ValueInput(""); // Reseta o valor do input
      setFilterItem(""); // Reseta o filtro extra
    }
  };

  return (
    <>
      {/* Cada item da lista chama a função handleActive */}
      {listas.map((itemText) => (
        <ListCategory
          as="button"
          key={itemText}  // Define uma chave única para cada item
          isActive={active === itemText}  // Compara se o item atual é o ativo
          onClick={handleActive}  // Atualiza o estado quando o item é clicado
          disabled={disabled}  // Verifica se o item está desabilitado com a prop disabled
        >
          {itemText} {/* Exibe o texto do item */}
        </ListCategory>
      ))}
    </>
  );
}

