import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { ProdutosContextItem } from "./ProductsProvider"; // Importando o contexto externo

// Defina uma interface para os produtos
interface Product {
  product_name: string;
  imgUrl: string;
  preco: number;
  category: string; // Propriedade categoria
  description: string; // Propriedade descrição
  rating: string; // Propriedade
  id: number;
  quantity?: number | undefined; // Quantidade no carrinho
  ImgUrls?: string[]; //
  detailedDescription: string
}

// Defina o tipo para o contexto
interface ProductContextType {
  produtosFiltrados: Product[]; // Array de produtos filtrados
  setFilter: React.Dispatch<React.SetStateAction<string>>; // Função para atualizar o filtro
  filter: string; // O filtro aplicado
  isFavoriteReady: Product[]; // Produtos favoritos
  setIsFavoritos: React.Dispatch<React.SetStateAction<Product[]>>;
}

// Criação do contexto com valor inicial tipado
export const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  // Consumindo o contexto dos produtos (ProdutoContextItem)
  const context = useContext(ProdutosContextItem);

  // Garantindo que o contexto seja válido antes de acessar
  if (!context) {
    throw new Error("ProdutosContextItem não encontrado.");
  }

  const { produtos } = context; // Obtém os produtos do contexto externo
  
  const [isFavoriteReady, setIsFavoritos] = useState<Product[]>([]); // Correção do tipo para Product[]
  const [filter, setFilter] = useState<string>(""); // Filtro de busca
    
  
  const [produtosFiltrados, setProdutosFiltrados] = useState<Product[]>(produtos); // Estado para armazenar os produtos filtrados

  // Aplica o filtro ao array de produtos
  useEffect(() => {
    const filtered = filter
      ? produtos.filter((item) =>
          item.category.toLowerCase().includes(filter.toLowerCase().trim()) // Melhorado para 'includes' (mais flexível)
        )
      : produtos;

    setProdutosFiltrados(filtered); // Atualiza o estado com os itens filtrados
  }, [filter, produtos]); // Dependências: filter e produtos (importante, pois 'produtos' pode ser alterado)

  console.log(filter); // Apenas para verificar se o filtro está sendo atualizado corretamente

  return (
    <ProductContext.Provider value={{ produtosFiltrados, setFilter, filter, isFavoriteReady, setIsFavoritos }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom Hook para consumir o contexto de produtos
export const useProductContext = (): ProductContextType => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProductContext deve ser usado dentro de um ProductProvider");
  }

  return context;
};
