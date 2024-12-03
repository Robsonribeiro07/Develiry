import { House, Heart, Bell } from "@phosphor-icons/react" // Importando o ícone Heart também
import { useEffect, useState } from "react"
import { IconList } from "./style"
import { Link } from "react-router-dom"
import { Bag } from "@phosphor-icons/react/dist/ssr"

import { useLocation } from "react-router-dom"

type IconName = "House" | "Heart" | "Bag" | "Bel" // Tipagem dos ícones possíveis

export function Icons() {
    const [active, setActive] = useState<IconName>("House") // Definindo o tipo de "active" para o ícone
 

    const location = useLocation() // Utilizando o hook useLocation para pegar a rota atual


    useEffect(()=>{

        if(location.pathname.includes('/home')){
            setActive("House")
        }




    }, [location])


    

    // Modificando o handleClick para aceitar apenas strings do tipo IconName
    const handleClick = (icon: IconName) => {
        setActive(icon)
    }

    return (
        <>
            <Link to={"/home"}>
                <IconList Border={active === "House"}>
                    <House 
                        color={active === "House" ? "red" : "black"} 
                        onClick={() => handleClick("House")} // Passando a string "House"
                    />
                </IconList>
            </Link>
             
            <Link to={'/about'} > 
            <IconList Border={active === "Heart"}>
                <Heart 
                    color={active === "Heart" ? "red" : "black"} 
                    onClick={() => handleClick("Heart")} // Passando a string "Heart"
                />
            </IconList>
            </Link>
            {/* Outros ícones podem ser adicionados aqui */}
            <IconList Border={active === "Bag"}>
                <Bag color={active === "Bag" ? "red" : "black"}
                onClick={(()=> handleClick("Bag"))}/>
            </IconList>
            <IconList Border={active === "Bel"}>
                <Bell  color={active === "Bel" ? "red" : "Black"}
                onClick={() => handleClick("Bel")}
                />
            </IconList>
        </>
    )
}
