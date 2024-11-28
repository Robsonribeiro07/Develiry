import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./style";  
import React from "react";
import { useLocation } from "react-router-dom";
import { FooterContent } from "../../components/footer";
export function DefaultLayout(){
    const location = useLocation()

    const locationColorStart = location.pathname.includes("Start")


    return(
        <LayoutContainer>
            <Header backgroundColor={locationColorStart ? "Black" : "white"} Color={locationColorStart ? "White" : 'Black'}/>
           
             <Outlet/>
             <FooterContent BackgroundColor={locationColorStart ? "gray" : '#C67C4E'} ColorFooter={locationColorStart ? "Black" : "White"}/>
        </LayoutContainer>
    )
}