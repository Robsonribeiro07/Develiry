import React, { createContext, ReactNode, useState } from 'react';

// Definição do tipo Product
export interface Product {
  product_name: string;
  imgUrl: string;
  ImgUrls?: string[] 
  preco: number;
  category: string;
  description: string; // Descrição resumida
  detailedDescription: string; // Descrição detalhada
  id: number;
  rating: string; // Avaliação do produto
  Size?: string[]; // Tamanhos disponíveis do produto
}

// Tipo do contexto
interface ProductContextType {
  produtos: Product[]; // Array de produtos
  setProdutos: React.Dispatch<React.SetStateAction<Product[]>>; // Função para atualizar os produtos
}

// Props do Provider
interface ProductProviderProps {
  children: ReactNode; // Os filhos do Provider
}

// Criação do contexto
export const ProdutosContextItem = createContext<ProductContextType>({
  produtos: [],
  setProdutos: () => {}, // Função para atualizar os produtos
});

// Implementação do Provider
export const ProdutosProviderItem = ({ children }: ProductProviderProps) => {
  const [produtos, setProdutos] = useState<Product[]>([
    {
      id: 1,
      product_name: 'Hambúrguer',
      preco: 15.99,
      description: "Hambúrguer",
      detailedDescription: "Hambúrguer com 2 carnes, queijo derretido, alface fresca e molho especial, ideal para quem busca uma refeição rápida e saborosa.",
      imgUrl: 'https://media.istockphoto.com/id/2061716709/pt/foto/grilled-rib-burger.jpg?s=2048x2048&w=is&k=20&c=4wSjb7tewMWXwQUpExn0ofN-fIDQ9llUgabRqN5P8EA=',
      category: 'Fast Food',
      rating: '230',
      Size: [
        'L',
        "M",
        "S"
      ]
    },
    {
      id: 2,
      product_name: 'Pizza',
      preco: 25.99,
      description: "Pizza",
      detailedDescription: "Pizza com 10 fatias generosas de queijo, molho de tomate caseiro e uma crosta perfeita, ideal para compartilhar com amigos e família.",
      imgUrl: 'https://media.istockphoto.com/id/1442417585/pt/foto/person-getting-a-piece-of-cheesy-pepperoni-pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=7B46BggEf-G4vKPJWSIc6Goqk0JnVDNsoIpxD06epBw=',
      category: 'Fast Food',
      rating: '235',
      ImgUrls: [
        'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D'
      ]

    },
    {
      id: 3,
      product_name: 'Cachorro quente',
      preco: 25.99,
      description: "Cachorro quente",
      detailedDescription: "Cachorro quente com 2 salsichas, pão fresquinho e molho especial. Uma refeição simples e deliciosa, perfeita para um lanche rápido.",
      imgUrl: 'https://media.istockphoto.com/id/143175178/pt/foto/chili-c%C3%A3o-de-queijo.webp?a=1&b=1&s=612x612&w=0&k=20&c=V-0-31dxz80xDG2kpcOnMw8ejTjCkNWABUQ9tujOthI=',
      category: 'Fast Food',
      rating: '230'

    },
    {
      id: 4,
      product_name: 'Sushi',
      preco: 35.99,
      description: "Sushi",
      detailedDescription: "Sushi com peixe fresco, preparado com arroz temperado e alga nori, oferecendo um sabor autêntico da culinária japonesa.",
      imgUrl: 'https://media.istockphoto.com/id/1162840352/pt/foto/california-sushi-roll-with-salmon.webp?a=1&b=1&s=612x612&w=0&k=20&c=xi00lhd0aOnzsb9CSXwIl9ZTuFN4q7wOeolghjRfX6Q=',
      category: 'Fast Food',
      rating: '230'

    },
    {
      id: 5,
      product_name: 'Lasanha',
      preco: 40.99,
      description: "Lasanha",
      detailedDescription: "Lasanha tradicional italiana, feita com camadas de massa fresca, molho de tomate, carne moída e queijo derretido.",
      imgUrl: 'https://plus.unsplash.com/premium_photo-1671559021019-0268c54511b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFzYW5oYXxlbnwwfHwwfHx8MA%3D%3D',
      category: 'Fast Food',
      rating: '230'

    },
    {
      id: 6,
      product_name: 'Cheeseburger',
      preco: 12.99,
      description: "Cheeseburger",
      detailedDescription: "Hambúrguer suculento com queijo derretido, servido em um pão macio, ideal para quem ama uma combinação clássica de sabores.",
      imgUrl: 'https://media.istockphoto.com/id/485968191/pt/foto/queijo-com-alface-hamburger-de-carne-de-tomate.webp?a=1&b=1&s=612x612&w=0&k=20&c=f31kLfsYyfji34hincOJxAwGg8VAlUVMaQZyRyO0SDE=',
      category: 'Fast Food',
      rating: '230'

    },
    {
      id: 7,
      product_name: 'Frango à Parmegiana',
      preco: 18.50,
      description: "Frango à Parmegiana",
      detailedDescription: "Frango empanado, coberto com molho de tomate caseiro e queijo parmesão derretido, servido com arroz e batata frita.",
      imgUrl: 'https://media.istockphoto.com/id/523263890/pt/foto/frango-parmes%C3%A3o-com-esparguete.webp?a=1&b=1&s=612x612&w=0&k=20&c=YYhOQBezcSKuO6Oq6vupxp9B2JIjt23d83dIVNwLmps=',
      category: 'Fast Food',
      rating: '230'

    },
    {
      id: 8,
      product_name: 'Taco',
      preco: 5.99,
      description: "Taco",
      detailedDescription: "Taco com carne moída, alface crocante, tomate e queijo, servido em uma tortilha macia e quente.",
      imgUrl: 'https://media.istockphoto.com/id/614313140/pt/foto/soft-beef-tacos-with-fries.webp?a=1&b=1&s=612x612&w=0&k=20&c=yHNkj-IM43lP391SkZ3Ay2rR2TD4Mvvzp_XQreRSm6M=',
      category: 'Fast Food',
      rating: '230'
    },
    {
      id: 9,
      product_name: 'Sanduíche',
      preco: 9.49,
      description: "Sanduíche",
      detailedDescription: "Sanduíche de frango desfiado com maionese, alface e tomate, servido em um pão macio e fresquinho.",
      imgUrl: 'https://plus.unsplash.com/premium_photo-1675864534274-3652b78bfff1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbmR1aWNoZSUyMGRlJTIwZnJhbmdvfGVufDB8fDB8fHww',
      category: 'Fast Food',
      rating: '230'
    },
    {
      id: 10,
      product_name: 'Wrap de Frango',
      preco: 10.99,
      description: "Wrap",
      detailedDescription: "Wrap com frango grelhado, alface, queijo e molho especial, enrolado em uma tortilha macia e fácil de comer.",
      imgUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d3JhcCUyMGRlJTIwZnJhbmdvfGVufDB8fDB8fHww',
      category: 'Fast Food',
      rating: '230'
    },
    {
      id: 11,
      product_name: 'Coca-Cola',
      preco: 4.99,
      description: "Coca-Cola",
      detailedDescription: "Refrigerante de cola, lata 350ml, com sabor refrescante e o clássico gosto de Coca-Cola.",
      imgUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29jYS1jb2xhfGVufDB8fDB8fHww',
      category: 'Bebidas',
      rating: '200',  
      ImgUrls: [
        'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D',
       'https://images.unsplash.com/photo-1630404365865-97ff92feba6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29jYSUyMGNvbGElMjBsYXRhfGVufDB8fDB8fHww',
       'https://images.unsplash.com/photo-1609857545224-d1246e91588b?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       'https://images.unsplash.com/photo-1609857545224-d1246e91588b?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       'https://images.unsplash.com/photo-1609857545224-d1246e91588b?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

      ]
    },

      {
        id: 12,
        product_name: 'Suco de Laranja',
        preco: 6.99,
        description: "Suco de Laranja",
        detailedDescription: "Suco natural de laranja, fresco e 100% puro, ideal para um café da manhã saudável e energético.",
        imgUrl: 'https://images.unsplash.com/photo-1650460069032-3c410224fe55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VjbyUyMGRlJTIwbGFyYW5qYXxlbnwwfHwwfHx8MA%3D%3D',
        category: 'Bebidas',
        rating: '230'
      },
      {
        id: 13,
        product_name: 'Café',
        preco: 3.50,
        description: "Café",
        detailedDescription: "Café espresso com um sabor forte e encorpado, ideal para quem busca uma dose de energia e sabor no dia a dia.",
        imgUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D',
        category: 'Bebidas',
        rating: '230'
      },
      {
        id: 14,
        product_name: 'Água Mineral',
        preco: 2.99,
        description: "Água Mineral",
        detailedDescription: "Água mineral fresca e purificada, ideal para manter a hidratação ao longo do dia.",
        imgUrl: 'https://images.unsplash.com/photo-1560847468-5eef330f455a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWd1YSUyMG1pbmVyYWx8ZW58MHx8MHx8fDA%3D',
        category: 'Bebidas',
        rating: '230'

      },
      {
        id: 15,
        product_name: 'Milkshake',
        preco: 8.99,
        description: "Milkshake de Morango",
        detailedDescription: "Milkshake cremoso de morango com sorvete e leite, perfeito para quem ama um doce refrescante e suave.",
        imgUrl: 'https://plus.unsplash.com/premium_photo-1695927469213-5ca44dc89b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlsa3NoYWRlJTIwZGUlMjBtb3JhbmdvfGVufDB8fDB8fHww%3D%3D',
        category: 'Bebidas',
        rating: '230'

      },
      {
        id: 16,
        product_name: 'Fanta Laranja',
        preco: 4.99,
        description: "Fanta Laranja",
        detailedDescription: "Refrigerante de laranja, refrescante e doce, perfeito para quem quer uma pausa saborosa durante o dia.",
        imgUrl: 'https://images.unsplash.com/photo-1632818924360-68d4994cfdb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGElMjBsYXJuYWphfGVufDB8fDB8fHww',
        category: 'Bebidas',
        rating: '230'
        
      },
      {
        id: 17,
        product_name: 'Chá Gelado',
        preco: 7.49,
        description: "Chá Gelado",
        detailedDescription: "Chá gelado refrescante, perfeito para os dias quentes, com sabor suave e refrescante.",
        imgUrl: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhJTIwZ2VsYWRvfGVufDB8fDB8fHww',
        category: 'Bebidas',
        rating: '230'

      },
      {
        id: 18,
        product_name: 'Cerveja',
        preco: 9.99,
        description: "Cerveja",
        detailedDescription: "Cerveja gelada com sabor leve e refrescante, ideal para socializar em momentos de descontração.",
        imgUrl: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2VydmVqYXxlbnwwfHwwfHx8MA%3D%3D',
        category: 'Bebidas',
        rating: '230'

      },
      {
        id: 19,
        product_name: 'Batata Frita',
        preco: 7.99,
        description: "Batata Frita",
        detailedDescription: "Batatas fritas crocantes e douradas, perfeitas como acompanhamento ou lanche rápido.",
        imgUrl: 'https://media.istockphoto.com/id/1443993866/pt/foto/french-fries-with-ketchup-and-cocktail-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=RYcsg-t5sb6YAVpw_u50l3LqkXOEqJyi76wQeTB5uq8=',
        category: 'Fast Food',
        rating: '230'

        
      },
      {
        id: 20,
        product_name: 'Onion Rings',
        preco: 5.49,
        description: "Onion Rings",
        detailedDescription: "Anéis de cebola empanados e crocantes, ideais para acompanhar o seu hambúrguer ou como lanche delicioso.",
        imgUrl: 'https://media.istockphoto.com/id/534716619/pt/foto/aros-de-cebola.webp?a=1&b=1&s=612x612&w=0&k=20&c=tYc7_qy8T2COENFoD5-EUI4ECQSpA5saP_3X-OUgkVQ=',
        category: 'Fast Food',
        rating: '230'

      },
      {
        id: 21,
        product_name: 'Guaraná Antarctica',
        preco: 3.99,
        description: "Guaraná Antarctica",
        detailedDescription: "Refrigerante de guaraná com sabor refrescante e único, perfeito para quem gosta de bebidas mais doces.",
        imgUrl: 'https://images.unsplash.com/photo-1667204651371-5d4a65b8b5a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGd1YXJhbmElMjBsYXRhfGVufDB8fDB8fHww',
        category: 'Bebidas',
        rating: '230'

      },
      {
        id: 22,
        product_name: 'Açaí',
        preco: 11.99,
        description: "Açaí na tigela",
        detailedDescription: "Açaí na tigela com granola e frutas frescas, uma opção saudável e deliciosa para o café da manhã ou lanche.",
        imgUrl: 'https://plus.unsplash.com/premium_photo-1663840135837-7e250a6accce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YSVDMyVBN2FpfGVufDB8fDB8fHww',
        category: 'Sobremesas',
        rating: '230'

      },
      {
        id: 23,
        product_name: 'Pudim',
        preco: 4.99,
        description: "Pudim ",
        detailedDescription: "Pudim de leite condensado, com uma calda de caramelo deliciosa e uma textura cremosa.",
        imgUrl: 'https://media.istockphoto.com/id/1240513924/pt/foto/condensed-milk-pudding.webp?a=1&b=1&s=612x612&w=0&k=20&c=9XqsaoIPpfBM4sV8O7z2qyF55jqwSuQ8foiMY63pfzo=',
        category: 'Sobremesas',
        rating: '230'

      },
  
  ]);

  return (
    <ProdutosContextItem.Provider value={{ produtos, setProdutos }}>
      {children}
    </ProdutosContextItem.Provider>
  );
};