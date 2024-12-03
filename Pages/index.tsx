import React, { useRef, useState } from "react";
import { Assets, BannerTop, HomeContainer, MiddleSide, TopSide } from "./style";
import { CaretDown, MagnifyingGlass, SlidersHorizontal } from "@phosphor-icons/react";
import { Categorias } from '../components/category/index.tsx';
import ImageBannerBackground from '../src/assets/img/backgroundBanner.svg';
import { ProductList } from "../components/product/index.tsx";

export function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isMouseActive, setIsMouseActive] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [startX, setStartX] = useState(0);
  const [filterItem, setFilterItem] = useState('');  // Estado para filtro

  const [input, setValueInput] = useState('')




  // Tipo de evento pode ser MouseEvent ou TouchEvent
  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    // Verifique se o evento é de mouse ou toque
    const posX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    setStartX(posX - translateX);
    setIsMouseActive(true);
  };

  // Handle mouse move for category
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isMouseActive) return;

    const moveX = 'touches' in event ? event.touches[0].clientX : event.clientX;

    const maxTranslate = -(scrollRef.current!.scrollWidth - scrollRef.current!.clientWidth);
    const newTranslate = Math.min(0, Math.max(moveX - startX, maxTranslate));

    setTranslateX(newTranslate);
  };

  // Handle mouse up to stop the scroll
  const handleMouseUp = () => {
    setIsMouseActive(false);
  };
  const handleMouseLeave = () => {
    setIsMouseActive(false);
    setTranslateX(0)
  }

  return (
    <HomeContainer>
      <TopSide>
        <span>Location</span>
        <span>Cruz das Almas, BA <CaretDown /></span>

        <Assets>
          <div className="Search">
            <MagnifyingGlass className="SearchIcon"  onClick={() => {setFilterItem(input)
              setValueInput('')
            }}/>
            <input 
              type="text" 
              placeholder="Choose your coffee" 
              list="coffeeList"
              value={input}
              onChange={(e) => setValueInput(e.target.value) }  // Atualiza o filtro ao digitar
            />
            <datalist id="coffeeList">
              <option value="Espresso" />
              <option value="Cappuccino" />
              <option value="Latte" />
              <option value="Mocha" />
              <option value="Americano" />
            </datalist>
          </div>

          <button>
            <SlidersHorizontal size={30} color="white" />
          </button>
        </Assets>

        <BannerTop BackgroundImg={ImageBannerBackground}>
          <p>Promo</p>
          <p>Buy one get <br/> one FREE</p>
        </BannerTop>
      </TopSide>

      <MiddleSide translateX={translateX} >
        {/* Categoria */}
        <div 
          className="category" 
          ref={scrollRef} 
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown} // Adiciona o suporte a toque
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove} // Adiciona o suporte a toque
          onMouseUp={handleMouseUp}
          onTouchEnd={handleMouseUp}  // Adiciona o suporte a toque
          onMouseLeave={handleMouseLeave} // Tratar quando o mouse sai da área
        >
          <ul>
            <Categorias ValueInput={setValueInput} setFilterItem={setFilterItem} />
          </ul>
        </div>

        {/* Produtos */}
        <div className="listProducts">
          <div 
            className="products" 
          >
            <ProductList filterItem={filterItem}/>  {/* Passa o filtro de texto */}
          </div>
        </div>
      </MiddleSide>
    </HomeContainer>
  );
}
