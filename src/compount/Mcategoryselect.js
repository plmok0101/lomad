import React, {useRef} from "react";
import { Link } from "react-router-dom";
const Mcategoryselect = (props) =>{
        return(
        <div className={props.tog ? "m-shop-category-select block" : "m-shop-category-select none"}>
            <div className="m-shop-category-selectbox">
                <div className="m-shop-filter">
                    <ul>
                        <li><Link>NEW</Link></li>
                        <li><Link>BEST</Link></li>
                        <li><Link>SALE</Link></li>
                        <li><Link>최근 본</Link></li>
                    </ul>
                </div>
                <div className="m-shop-category">
                    <ul>
                        <li><Link>FURNITURE</Link></li>
                        <li><Link>LIGHTING</Link></li>
                        <li><Link>AUDIO</Link></li>
                        <li><Link>HOME APPLIANCES</Link></li>
                        <li><Link>LIFE</Link></li>
                    </ul>
                </div>
            </div>
            <div className="m-s-c-s-backgorund" onClick={props.setmenu}></div>
        </div>
    )
}
export default Mcategoryselect