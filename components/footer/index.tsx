import React from "react";
import { Footer } from "./style";

interface PropsColor {
    BackgroundColor?: string
    ColorFooter: string
}
export function FooterContent(props: PropsColor){
    return(
        <Footer color={props.BackgroundColor} ColorFooter={props.ColorFooter}>
         <span></span>
        </Footer>
    )
}