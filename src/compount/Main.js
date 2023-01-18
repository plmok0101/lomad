import React from "react";
import { Link } from "react-router-dom";
import Shopitem from "./Shopitem";
const Main = (props) =>{
    return(
        <div className="main-container">
        <div className="main-box">
            <div className="main-header">
                <div className="installment-box">
                    <input type="range" min="0" max="61" step="12"></input>
                    <p className="mesege">선택한 개월로 나눠내는 <span>BNPL결제</span></p>
                </div>
                <div className="data-filter">
                    <div className="card">
                        제휴카드가
                        <label className="swich-box">
                            <input type="checkbox"></input>
                            <span></span>
                        </label>
                    </div>
                    <div className="filter-btn">
                        <button className={props.sort ? "sort col1" : "sort"} onClick={props.chsort}>정렬</button>
                        <button className="filter">필터 설정</button>
                    </div>
                </div>
                <div className="shop-category-box">
                    <div className="shop-category-tema">
                        <button className={props.tog ? "shop-category-list" : "shop-category-list on"} onClick={props.pctog}>FURNITURE</button>
                        <div className={props.tog ? "pc-shop-item" : "pc-shop-item none"}>
                            <ul>
                                <li><Link className={props.category == "HOKEY" ? "category on" : "category"} onClick={e=>props.chcategory("HOKEY")}>HOKEY</Link></li>
                                <li><Link className={props.category == "FURNITURE" ? "category on" : "category"} onClick={e=>props.chcategory("FURNITURE")}>FURNITURE</Link></li>
                                <li><Link className={props.category == "LIGHTING" ? "category on" : "category"} onClick={e=>props.chcategory("LIGHTING")}>LIGHTING</Link></li>
                                <li><Link className={props.category == "AUDIO" ? "category on" : "category"} onClick={e=>props.chcategory("AUDIO")}>AUDIO</Link></li>
                                <li><Link className={props.category == "HOME APPLIANCES" ? "category on" : "category"} onClick={e=>props.chcategory("HOME APPLIANCES")}>HOME APPLIANCES</Link></li>
                                <li><Link className={props.category == "LIFE" ? "category on" : "category"} onClick={e=>props.chcategory("LIFE")}>LIFE</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="shop-category">
                        <li><Link className={props.subcategory == 0 ? "sub-category on" : "sub-category"} onClick={e=>props.chsubcategory(0)}>전체</Link> </li>
                        <li><Link className={props.subcategory == 1 ? "sub-category on" : "sub-category"} onClick={e=>props.chsubcategory(1)}>소파</Link></li>
                        <li><Link className={props.subcategory == 2 ? "sub-category on" : "sub-category"} onClick={e=>props.chsubcategory(2)}>테이블</Link></li>
                        <li><Link className={props.subcategory == 3 ? "sub-category on" : "sub-category"} onClick={e=>props.chsubcategory(3)}>의자</Link></li>
                        <li><Link className={props.subcategory == 4 ? "sub-category on" : "sub-category"} onClick={e=>props.chsubcategory(4)}>스토리지</Link></li>
                        <li><Link className={props.subcategory == 5 ? "sub-category on" : "sub-category"} onClick={e=>props.chsubcategory(5)}>매트리스</Link></li>
                        <li><Link className={props.subcategory == 6 ? "sub-category on" : "sub-category"} onClick={e=>props.chsubcategory(6)}>리클라이너</Link></li>
                        <li><Link className={props.subcategory == 7 ? "sub-category on" : "sub-category"} onClick={e=>props.chsubcategory(7)}>거울</Link></li>
                        <li><Link className={props.subcategory == 8 ? "sub-category on" : "sub-category"} onClick={e=>props.chsubcategory(8)}>시니어라이프</Link></li>
                        <li><Link className={props.subcategory == 9 ? "sub-category on" : "sub-category"} onClick={e=>props.chsubcategory(9)}>침대</Link></li>
                        <li><Link className={props.subcategory == 10 ? "sub-category on" : "sub-category"} onClick={e=>props.chsubcategory(10)}>파티션</Link></li>
                    </ul>
                </div>
            </div>
            <div className={props.stopaction ? "main-item stop-action" : "main-item"}>
                <Shopitem sort = {props.sort}></Shopitem>
            </div>
        </div>
        </div>
    )
}
export default Main