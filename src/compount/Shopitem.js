import React from "react";
import { Link } from "react-router-dom";
const Shopitem = (props) =>{
    let abcde = [];
    for(let i = 0; i<20; i++){
        abcde.push(
            <Link className={props.sort ? "shop-item col1" : "shop-item" } key={i}>
                <div className="shop-item-img-box">
                    <img className="shop-item-img" src="https://s3.ap-northeast-2.amazonaws.com/lomad/lomad/img/Product/2253/FXuZtt48hhUQnmkShWB3iMAbezlMPshLQ1gNCapY.jpg"></img>
                </div>
                <div className="shop-item-data">
                    <div className="item-brand">EASTERN EDITON</div>
                    <div className="item-name">[SET] 페블 티테이블 세트+ 누비소파</div>
                    <div className="price-now">8,060,000 <span className="day">NOW</span></div>
                    <div className="price-bnpl">217,800 <span className="day">X 36개월</span> <span className="sale">10%</span></div>
                </div>
            </Link>
        )
    }
    return (
        <div className={props.sort ? "item-box col1" : "item-box"}>
            {abcde}
        </div>
    )
}
export default Shopitem