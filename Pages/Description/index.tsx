  import { useContext, useState, useEffect } from "react";
  import { DescriptiomHome } from "./style.ts";
  import { CaretLeft, CaretRight, Heart } from "@phosphor-icons/react";


  import Motoboy from "../../src/assets/assetsDetails/motoboy.svg";

  import Extra from "../../src/assets/assetsDetails/extra.svg";

  import swape from "../../src/audios/swape.mp3"

  import Quality from "../../src/assets/assetsDetails/quality.svg";
  import { ReadMore } from "../../components/textoLongos";
  import { useNavigate } from "react-router-dom";
  import { ProductContext } from "../../ProvideActive";
  import React from "react";
  import { Product } from "../../components/product/style";

  import {ConfirmDialog} from '../../components/dialogo/index.tsx'
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
    const [selectedImage, SetSelectedImage] = useState  (0);
    const [imageKey, setImageKey] = useState(Date.now());
    const [SelectedTamanho, setselectedTamanho] = useState("S");
    const [firstProduct, setFirstProduct] = useState<Product | null>(null);
    const [totalprice, setTotalPrice] = useState(0);

    const [ItemToRemove, SetItemToRemove] = useState<Product>()
    const [IsdialogoOpen, SetDialogoOpen] = useState(false)
    const [isDialogoOpenList, SetIsDialogoOpenList] = useState(false)
    const disabledTrocadeImagem = ativarImages ? true : false;
    

    const audioSwapeAument = new Audio(swape)
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
      audioSwapeAument.play()

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
      audioSwapeAument.play()

        setIsFavoritos((prev: Product[]) =>
          prev.map((item: Product) =>
            item.id === produto.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else if(target.classList.contains('diminuir')) {
      audioSwapeAument.play()
        
      setIsFavoritos((prev: Product[]) =>
        
          prev.map((item) =>
            item.id === produto.id
              ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
              : item
          )
        );
        
        if(produto.quantity === 1) {
          SetDialogoOpen(true)
          SetItemToRemove(produto)

         const timeOut =    setTimeout(() => {
            SetDialogoOpen(false)

            setIsFavoritos((prev: Product[]) => prev.map(item => item.id === ItemToRemove?.id ? {...item, quantity: 1 } : item))
          }, 3000);
         return () => clearTimeout(timeOut)
        }


      }
    };
    
    const ConfirmRemov = () => {

        setIsFavoritos((prev: Product[]) => ItemToRemove ? prev.filter((item: Product) => item.id !== ItemToRemove.id) : null)
        SetDialogoOpen(false)

    }
    const CancellRemove = () => {
      SetItemToRemove(undefined)
      SetDialogoOpen(false)
      setIsFavoritos(prev => prev.map(item => item.id === ItemToRemove?.id ? {...item, quantity: 1}: item))

    }
    const ativarImagem = (product: Product) => {
      

      isFavoriteReady.map((item: Product) => {
        if(item.id === product.id) {
          if(item.ImgUrls?.length > 0) {
            setAtivarImages(prev => item.id === product.id ? prev = !prev : prev);
          } else {
            setAtivarImages(false)

          } 
        }
      }
      )

    
    } 

    const handleLimpList = () => {
      setTimeout(()=> {
        audioSwapeAument.play()
        setIsFavoritos([])
        SetIsDialogoOpenList(false)
      }, 1000)
    }
    const handleLimpListCancel = () => {
      SetIsDialogoOpenList(false)
      return
    }

    const AumentateWhitoutInput = (event: React.ChangeEvent<HTMLInputElement>,product: Product) => {

       let value = event.currentTarget.value
       
       
       if(value.length > 2) {
          value = value.slice(1)
       }
       setIsFavoritos(prev => prev.map(item => item.id === product.id ? {...item, quantity: parseInt(value) }: item))


    }
    return (
      <DescriptiomHome activeAlterarImage={disabledTrocadeImagem}>
        <ConfirmDialog isOpen={IsdialogoOpen} message="Deseja remove este Item?" onConfirm={ConfirmRemov}  onCancel={CancellRemove}/>
         {isFavoriteReady?.length > 1 && (
          <ConfirmDialog isOpen={isDialogoOpenList} message="Deseja limpa lista?" onConfirm={handleLimpList} onCancel={handleLimpListCancel}/>
         )}
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


              
              
              <div className="trocaImagem">
              <div >
                  {product.ImgUrls?.length > 0 && ativarImages ? (
                    <>
                    <CaretLeft
                  className="Anterior"
                  onClick={() => handleImageAnterior(product)}
                />
                <CaretRight
                  className="Next"
                  onClick={() => handleImageNext(product)}
                />
                    </>
                  ) : null
                  }
                </div>
                <img
                  key={imageKey}
                  src={product.ImgUrls?.length > 0 ? product.ImgUrls[selectedImage] : product.imgUrl}
                  alt={product.product_name}
                  onClick={() => ativarImagem(product)}
                />
              </div>

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

                <span className="ProductRating">
                  <div className="AssetsProdutc">
                    <div
                      className="leftSides"
                      onClick={() => handleRating(product)}
                    >
                      ⭐4.8 <b className="Rating">({product.rating})</b>
                    </div>
                    <span onClick={(e) => AumentaQuantity(product, e)}>
                      <button className="diminuir">-</button>
                      <input type="number" value={product.quantity} 
                      onChange={(e)=> {
                        AumentateWhitoutInput(e, product) }}
                   />
                      
                      <button className="aumentar">+</button>
                    </span>

                  </div>

                </span>
                <span className="Price">$ {product.preco}</span>

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
            <p>Preço Total</p>
            <span>$ {totalprice.toFixed(2)}</span>
          </div>
          <div className="rigt-side">
          <button>Buy now</button>
          {isFavoriteReady.length > 1 && (
            <span onClick={() => SetIsDialogoOpenList(true)}>limpa lista</span>
          )}
          </div>
        
       
        </div>
      </DescriptiomHome>
    );
  }
