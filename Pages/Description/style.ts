import styled from "styled-components";


interface DescriptProps {
    activeAlterarImage: boolean;
}
export const DescriptiomHome = styled.div<DescriptProps>`
     

     height: 100vh;
     width: 100vw;
     padding: 2rem;
     flex-direction: column;
     user-select: none;
     display: flex;
     background-color: #F9F9F9;
     overflow: auto;
     font-family: 'Sora';
     gap: 1rem;
   

     .AssetsProdutc{
        align-items: center;
        width: 100%;
        justify-content: space-between;
        display: flex;
        font-family: 'Roboto mono';
        text-align: center;

        .leftSides {
            display: flex;
            align-items: center;
        }
        input {
            width: 15%;
            background-color: transparent;
            border: 0;
            display: flex;
            align-items: center;
            margin-left: 10px;
        }
        span {
            display: flex;
            gap: 0.5rem;
            justify-content: end ;
            align-content: center;
            text-align: center;
            button {
                border: 0;
                background-color: transparent;
                font-size: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
 .Next {
    font-size: 1.5rem;
    position: absolute;
    right: -30px;
    top: 40%;
    display: ${props => props.activeAlterarImage ? 'flex' : 'none'};
 }
 .Anterior {
    position: absolute;
    top: 40%;
    display: ${props => props.activeAlterarImage ? 'flex' : 'none'};

    font-size: 1.5rem;
    left: -30px;
 }
 .topSide {
     display: flex;
     justify-content: space-between;
     font-weight: 400;
     margin-bottom: 2rem;
     font-size: 1.3rem;
     color: #313131;
    
     span {
        font-weight: 600;
     }
     
 }
 .assets {
    width: 100%;
        border-radius: 8px;
            display: flex;
        flex-direction: column;
        align-content: center;
        position: relative;

         .trocaImagem {
            position: relative;
            z-index: 1;
         }
         .Price {
        color: #A2A2A2;
        text-align: end;
    }

        p:last-child{
            width: 90%;
            height: 1.5px;
            border-radius: 10px;
            background-color: #E3E3E3;
            margin: auto;

            margin-top: 1rem;
         }
         
        .category {
            display: flex;
            justify-content: space-between;
            align-items: center;;


            ul {
                display: flex;
                gap: 5px;
                align-items: center;

                .motoboy {
                    width: 100%;
                }

               
 

                li {
                    height: 60px;
                    width: 60px;
                    list-style: none;
                    border-radius: 8px;
                    background-color: #F5F5F5;
                    justify-content: center;
                    display: flex;

                    align-items: center;
                    img {
                        width: 50%;
                        height: 70%;
                        object-fit: contain;

                      
                    }
                    
                }
            }
        }
        span {
            font-size: 1.4rem;
            font-weight: 500;
            color: #242424;
              
            }
            .ProductRating{
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;

                    .Rating {
                        color: #A2A2A2;
                        font-size: 1rem;

                        }

                       
        }

        p {
            color: #A2A2A2
        }


    img {
        width: 100%;
     
        border-radius: 1rem;
        height: 200px;
        object-fit: cover;
        user-select: none;
        object-position: center;
        opacity: 1; /* Por padrão, a imagem será visível */
    }
    
   
 }

 .BotSide {
    font-weight: 300; 
    line-height: 1.6;
    color: #A2A2A2;  
    
    flex: 1;
    .active {
        border-color: #C67C4E;
        background-color: wheat;
    }

    
   

    }
    h1 {
        font-size: 1.2rem;
        margin-top: 1rem;
        font-weight: 600;
        line-height: 1.6;
        color: black;
    }

    h3 {
        font-weight: 500;
        font-size: 1rem;
        margin-bottom: 0.4rem;
        color: black;
    }
    .Tamanhos {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0 0.5rem;
        button {
            flex: 1;
            font-family: 'Sora';
            border-radius: 0.8rem;
            background-color: #ffff;; 
            font-size: 1rem;
            padding: 0.5rem;
            border: 2px solid #E3E3E3;
        }
    }
    .price {
        justify-content: space-between;
        display: flex;
        position: relative;
        width: 100%;
        .rigt-side{
            display: flex;
            flex-direction: column-reverse; 
            align-items: center;
        }
         p {
            color: #A2A2A2;
            font-weight: 500;
         } 
         span {
            color: #C67C4E;
            font-weight: bold;
         }

        button {
            border-radius: 1rem;
            padding: 1rem 2rem;
            font-family: 'sora';
            border: 0;
            background-color: #C67C4E;
            color: white;
        }
    }
`