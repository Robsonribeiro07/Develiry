  import React, { useContext } from "react";
  import { Product } from "./style";
  import { ProductContext } from "../../ProvideActive";

  
  import swape from "../../src/audios/swape.mp3"

  interface ProductProps {
    filterItem: string;
  }

  interface ProductType {
    product_name: string;
    preco: number;
    imgUrl: string;
    description?: string; // Opcional
    id: number;
    quantity?: number | undefined ; // Quantidade no carrinho
    ImgUrls?: string[];
  }

  export function ProductList({ filterItem }: ProductProps) {
    const context = useContext(ProductContext);
    
    const audioSwape = new Audio(swape)
  
    // @ts-expect-error erro na tipagem

    const {setIsFavoritos} = useContext(ProductContext)
    


    const handleCart = (products: ProductType) => {
     audioSwape.play()
    setIsFavoritos((prevcart: ProductType[]) => {
      const isProduct = prevcart.find((item) => item.id === products.id);

      if (isProduct) {
        console.log(products)

        return prevcart.map((item) =>
          item.id === products.id
            ? { ...item, quantity: (item.quantity ?? 0) + 1 }
            : item
        );
      } else {
        return [...prevcart, { ...products, quantity: 1 }];
      }
    });
  };

  // Atualizar o preço total quando o carrinho mudar


  // Logar o preço atualizado
  
    if (!context) {
      return <p>Loading</p>;
    }

    const { produtosFiltrados } = context;

    // Filtro dos produtos baseado no filtro recebido
    const filteredProduct =
      filterItem.length > 0
        ? produtosFiltrados.filter((product) =>
            product.product_name.toLowerCase().includes(filterItem.toLowerCase())
          )
        : produtosFiltrados
    // Adicionar produto ao carrinho
    
    return (
      <>
        {filteredProduct.map((product: ProductType) => (
          <Product key={product.id}>
            <img src={product.imgUrl} alt={product.imgUrl}  />
            <span>{product.product_name}</span>
            <p>{product.description}</p>

            <div className="assets">
              <p>$ {product.preco}</p>  
              <button onClick={()=> {handleCart(product) }} >+</button>
            </div>
          </Product>
        ))}
      </>
    );
  }
