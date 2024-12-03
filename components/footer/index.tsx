import { Footer } from "./style";
import { Icons } from "../icons";

interface PropsColor {
    BackgroundColor?: string
    ColorFooter: string
    disabled: boolean
}
export function FooterContent(props: PropsColor){
    return(
        <Footer color={props.BackgroundColor} $colorFooter={props.ColorFooter} disabled={props.disabled}>
                   <Icons />
          
        </Footer>
    )
}