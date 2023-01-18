import React from "react";
import { Link } from "react-router-dom";
const Mbar = (props) =>{
    return(
        <div className="m-bar">
            <ul className="m-bar-menu">
                <li>
                    <Link className={props.barmenu == "HOME" ? "m-menu-item on" : "m-menu-item"} onClick={e=>props.chmenu("HOME")}><div className="home icon"></div>HOME</Link>
                </li>
                <li>
                    <Link className={props.barmenu == "CATEGORY" ? "m-menu-item on" : "m-menu-item"} onClick={e=>props.chmenu("CATEGORY")}><div className="category icon"></div>CATEGORY</Link>
                </li>
                <li>
                    <Link className={props.barmenu == "BRAND" ? "m-menu-item on" : "m-menu-item"} onClick={e=>props.chmenu("BRAND")}><div className="brand icon"></div>BRAND</Link>
                </li>
                <li>
                    <Link className={props.barmenu == "EVENT" ? "m-menu-item on" : "m-menu-item"} onClick={e=>props.chmenu("EVENT")}><div className="event icon"></div>EVENT</Link>
                </li>
                <li>
                    <Link className={props.barmenu == "MY" ? "m-menu-item on" : "m-menu-item"} onClick={e=>props.chmenu("MY")}><div className="my icon"></div>MY</Link>
                </li>
            </ul>
        </div>
    )
}
export default Mbar