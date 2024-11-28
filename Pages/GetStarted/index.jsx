import { GetStartHome } from "./style";
import BackgroundSvg from '../../src/assets/img/coffeBackground.svg'

import {useNavigate} from 'react-router-dom'

export function GetStartPage(){

    const Navigate = useNavigate()

    function HandlePage(){
        Navigate("/home")

    }

    return (

        <GetStartHome>
            <div>
            <img src={BackgroundSvg} alt="" />
            </div>

            <footer>
               <div className="content">
                <span>Fall in love with</span>
                <span>coffe in Blissful</span>
                <span>Delight</span>
               </div>

               <span>
                <p>Welcome to our cozy coffe corner, where <br/> every cup is a delightfull for you</p>
               </span>


               <button type="button" onClick={HandlePage}>Get Stated</button>
            </footer>
            
        </GetStartHome>
    )
}