import { useContext, useState, useEffect } from "react";
import { DescriptiomHome } from "./style";
import { CaretLeft, CaretRight, Heart } from "@phosphor-icons/react";


import Motoboy from "../../src/assets/assetsDetails/motoboy.svg";

import Extra from "../../src/assets/assetsDetails/extra.svg";

import Quality from "../../src/assets/assetsDetails/quality.svg";
import { ReadMore } from "../../components/textoLongos";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../ProvideActive";
import React from "react";
import { Product } from "../../components/product/style";

interface Product {
  Size?: string[]
  product_name: string;
  ImgUrls: string[];
  category: string;
  detailedDescription: string;
  imgUrl: string;
  id: number;
  rating: string;
  quantity: number;
  preco: number;
}

export function DescriptionHome() {
  const navigate = useNavigate();
  const [IsFavorite, setIsfavorite] = useState(false);
  const [favoritos, setFavritos] = useState<Product[]>([]);
  const [ativarImages, setAtivarImages] = useState(false);

// @ts-expect-error na tipagem de ISfavoriteReady

  const { isFavoriteReady, setIsFavoritos } = useContext(ProductContext);
  const [selectedImage, SetSelectedImage] = useState(0);
  const [imageKey, setImageKey] = useState(Date.now());
  const [SelectedTamanho, setselectedTamanho] = useState("S");
  const [firstProduct, setFirstProduct] = useState<Product | null>(null);
  const [totalprice, setTotalPrice] = useState(0);

  const disabledTrocadeImagem = ativarImages ? true : false;

  useEffect(() => {
    if (isFavoriteReady && isFavoriteReady.length > 0) {
      setFirstProduct(isFavoriteReady[0]); // Armazenando o primeiro produto

      const total = isFavoriteReady.reduce(
        (acc: number, product: Product) => acc + product.preco * product.quantity,
        0
      );

      setTotalPrice(total);

      console.log(isFavoriteReady);
    }
  }, [isFavoriteReady]);

  const handleImageNext = (product: Product) => {
    SetSelectedImage((prevIndex) => {
      const nextIndex =
        prevIndex === product.ImgUrls.length - 1 ? 0 : prevIndex + 1;
      setImageKey(Date.now()); // Mudando a chave para forçar o re-render
      return nextIndex;
    });
  };

  const handleImageAnterior = (product: Product) => {
    SetSelectedImage((prevIndex) => {
      const prevIndexNew =
        prevIndex === 0 ? product.ImgUrls.length - 1 : prevIndex - 1;
      setImageKey(Date.now()); // Mudando a chave para forçar o re-render
      return prevIndexNew;
    });
  };

  const adicionar = (produtos: Product) => {
    const produtosFavoritos = favoritos.find(
      (prev) => prev.product_name === produtos.product_name
    );

    if (produtosFavoritos) {
      setFavritos(
        favoritos.filter((fav) => fav.product_name !== produtos.product_name)
      );
      setIsfavorite(false);
    } else {
      setFavritos([...favoritos, produtos]);
      setIsfavorite(true);
    }
  };

  useEffect(() => {
    if (!isFavoriteReady || isFavoriteReady.length === 0) {
      navigate("/home");
    }
  }, [isFavoriteReady, navigate]);

  const handleRating = (product: Product) => {
    const currentRating = product.rating ? parseFloat(product.rating) : 1;
    setIsFavoritos((prev: Product[]) =>
      prev.map((item) =>
        item.product_name === product.product_name
          ? { ...item, rating: currentRating + 1 }
          : item
      )
    );
  };

  const handleTamanho = (e: React.MouseEvent<HTMLButtonElement>) => {
    setselectedTamanho(
      SelectedTamanho === e.currentTarget.textContent ? "" : e.currentTarget.textContent!
    );
  };

  const AumentaQuantity = (produto: Product, event: React.MouseEvent<HTMLSpanElement>) => {
        
    const target = event.target as HTMLButtonElement;

   
    
    if (target.classList.contains("aumentar")) {
      setIsFavoritos((prev: Product[]) =>
        prev.map((item: Product) =>
          item.id === produto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else if(target.classList.contains('diminuir')) {

      if(produto.quantity === 1){
        const confirm =  window.confirm('desejaremover')
        
       if(confirm){
        setIsFavoritos((prev: Product[]) => prev.filter(item => item.id !== produto.id))
       } else {
        return
       }


      }
      setIsFavoritos((prev: Product[]) =>
        prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
            : item
        )
      );
    }
  };

  const ativarImagem = (product: Product) => {
 
    if(product.ImgUrls && product.ImgUrls.length > 0) {
      setAtivarImages(true)
    } else {
      setAtivarImages(false)
    }
  }

  return (
    <DescriptiomHome activeAlterarImage={disabledTrocadeImagem}>
      {firstProduct && (
        <div className="topSide">
          <CaretLeft size={30} onClick={() => navigate("/home")} />
          <span>Detail</span>
          <Heart
            size={30}
            color={IsFavorite ? "orange" : "black"}
            onClick={() => adicionar(firstProduct)}
          />
        </div>
      )}

      {isFavoriteReady && isFavoriteReady.length > 0 ? (
        isFavoriteReady.map((product: Product) => (
          <React.Fragment key={product.product_name}>
            <div className="assets">
              <CaretLeft
                className="Anterior"
                onClick={() => handleImageAnterior(product)}
              />
              <CaretRight
                className="Next"
                onClick={() => handleImageNext(product)}
              />

              <img
                key={imageKey}
                src={ativarImages ? product.ImgUrls[selectedImage] : product.imgUrl}
                alt={product.product_name}
                onClick={() => ativarImagem(product)}
              />
              <span>{product.product_name}</span>
              <div className="category">
                <p>{product.category}</p>
                <ul>
                  <li>
                    <img src={Motoboy} alt="Delivery" className="motoboy" />
                  </li>
                  <li>
                    <img src={Extra} alt="Extra" />
                  </li>
                  <li>
                    <img src={Quality} alt="Qualidade" />
                  </li>
                </ul>
              </div>

              <span>
                <div className="AssetsProdutc">
                  <div
                    className="leftSides"
                    onClick={() => handleRating(product)}
                  >
                    ⭐4.8 <b>({product.rating})</b>
                  </div>
                  <span onClick={(e) => AumentaQuantity(product, e)}>
                    <button className="aumentar">+</button>
                    {product.quantity.toString().padStart(2, "0")}
                    <button className="diminuir">-</button>
                  </span>
                </div>
              </span>
              <p></p>
            </div>

            <div className="BotSide">
              <h1>Description</h1>
              <ReadMore
                text={product.detailedDescription || "No description available"}
                maxLength={30}
              />
              {product.Size && product.Size.length > 0 && (
                <>
                <h3>size</h3>
                <div className="Tamanhos">
                  {product.Size.map(size => (

                    <button 
                    key={size}
                     onClick={(e) => handleTamanho(e)}
                     className={SelectedTamanho === size ? "active" : ""}
                     >
                      {size} 
                      </button>
                  ))}
                </div>
                
                
                </>

              )}
              
              </div>
          </React.Fragment>
        ))
      ) : (
        <div>No favorite product selected</div>
      )}

      <div className="price">
        <div className="left-side">
          <p>Price</p>
          <span>$ {totalprice.toFixed(2)}</span>
        </div>

        <button>Buy now</button>
      </div>
    </DescriptiomHome>
  );
}
