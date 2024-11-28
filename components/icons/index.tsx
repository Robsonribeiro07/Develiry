import { House } from "@phosphor-icons/react"
import React, { useState } from "react"
import { IconList } from "./style"
import { Link } from "react-router-dom"


export function Icons (){
    const [active, setActive] = useState("House")

     

    const handleClick = (icon) => {
        setActive(icon)
    }
   


    return (
            <>
            <Link to={"/Start"}>
            <IconList Border={active === "House" }>
                <House color={active === "House" ? "red" : "Black"} onClick={()=> {
                    handleClick("House")
                }}/>
            </IconList>

            </Link>
            <IconList Border={active === "Heart" }>
                <House color={active === "Heart" ? "red" : "Black"} onClick={()=> {
                    handleClick("Heart")
                }}/>
            </IconList>
             <IconList>
                <House/>
            </IconList>
            <IconList>
                <House/>
            </IconList>
            </> 
    )
}