import React, { Fragment, useEffect, useRef, useState } from 'react';
import Header from './compount/header';
import Mbar from './compount/Mbar';
import Main from './compount/Main';
import Mcategoryselect from './compount/Mcategoryselect';
import { Form } from 'react-router-dom';

const App2 = () =>{
    const [mMenu ,setMmenu] = useState(false)
    const changemenu = ()=>{
        setMmenu(mMenu => !mMenu);
    }
    const [pcmemu, setPcmemu] = useState(false)
    const pctog = () =>{
        setPcmemu(pcmemu => !pcmemu)
    }
    const[hide, setHide] = useState(false)
    const truehide = ()=>{
        setHide(true)
    }
    const falsehide= () =>{
        setHide(false)
    }
    const[sort, setSort] = useState(false)
    const changesort = ()=>{
        setSort(sort => !sort)
    }
    const[category, setCategory] = useState();
    const changeCateegory = (data)=>{
        setCategory(data)
    }
    const[subcategory, setSubcategory] = useState();
    const changeSubcategory = (data)=>{
        setSubcategory(data)
    }
    const[barmenu, setBarmenu] = useState();
    const changebarmenu = (data) =>{
        setBarmenu(data)
    }
    return(
        <Fragment>
            <Header changemenu={changemenu} tog={mMenu} truehide={truehide} falsehide={falsehide} hide={hide}></Header>
            <Mbar chmenu={e=>changebarmenu(e)} barmenu={barmenu}></Mbar>
            <Main stopaction={mMenu} pctog={pctog} tog={pcmemu} sort={sort} chsort={changesort} category={category} chcategory={e =>changeCateegory(e)} subcategory={subcategory} chsubcategory={e=>changeSubcategory(e)}></Main>
            <Mcategoryselect tog={mMenu} setmenu={changemenu}></Mcategoryselect>
        </Fragment>
    )
}
export default App2;