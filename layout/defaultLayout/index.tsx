import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./style";  
import { useLocation } from "react-router-dom";
import { FooterContent } from "../../components/footer";
// Tipagem para as cores de cada rota
interface RouteColors {
    backgroundColor: string;
    color: string;
    footerBackgroundColor: string;
    footerColor: string;
}

// Mapeamento de rotas para cores
const routeColors: Record<string, RouteColors> = {

    "/Start": { 
        backgroundColor: "Black", 
        color: "White", 
        footerBackgroundColor: "gray", 
        footerColor: "Black" 
    },
    "/home": { 
        backgroundColor: '#313131',
        color: "White", 
        footerBackgroundColor: "#C67C4E", 
        footerColor: "White" 
    },
    "/about": { 
        backgroundColor: "#f0f0f0", 
        color: "Black", 
        footerBackgroundColor: "#A9A9A9", 
        footerColor: "White" 
    },
    "/contact": { 
        backgroundColor: "#282828", 
        color: "White", 
        footerBackgroundColor: "#4F4F4F", 
        footerColor: "White" 
    },
    // Adicione mais rotas conforme necessário
};

export function DefaultLayout() {
    const location = useLocation();
    const disabled = ['Start', 'about'  ]

    // Obter as cores para a rota atual
    const currentRoute: RouteColors = routeColors[location.pathname] || {
        backgroundColor: "black",
        color: "Black",
        footerBackgroundColor: "#C67C4E",
        footerColor: "White"
    };

    return (
        <LayoutContainer>
            <Header 
               
                backgroundColor={currentRoute.backgroundColor} 
                Color={currentRoute.color} 
            />
            
            <Outlet />
       
            
           <footer>
            <FooterContent 
                disabled={disabled.some(route => location.pathname.toLocaleLowerCase().includes(route.toLocaleLowerCase()))  ? true : false}
                BackgroundColor={currentRoute.footerBackgroundColor} 
                ColorFooter={currentRoute.footerColor} 
            />
            </footer>
        </LayoutContainer>
    );
}
