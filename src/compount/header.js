import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <div className="header">
        <div className='header-box'>
          <div className='header-menu-box'>
            <div className='h-brand'><Link className='logo'>Lomad</Link></div>
            <ul className='header-menu-bar'>
              <li className='menu-item'onMouseEnter={props.truehide} onMouseLeave={props.falsehide}>
                <div className={props.hide ? 'sub-menu block' : 'sub-menu none'}>
                  <div className='sub-menu-box'>
                  <ol>
                  <li>
                    <Link className='menu-category'>HOTKEY</Link>
                    <ul>
                      <li><Link>NEW</Link></li>
                      <li><Link>BEST</Link></li>
                      <li><Link>SALE</Link></li>
                      <li><Link>최근 본</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link className='menu-category'>FURNITURE</Link>
                    <ul>
                      <li><Link>소파</Link></li>
                      <li><Link>테이블</Link></li>
                      <li><Link>의자</Link></li>
                      <li><Link>스토리지</Link></li>
                      <li><Link>매트리스</Link></li>
                      <li><Link>리클라이너</Link></li>
                      <li><Link>거울</Link></li>
                      <li><Link>시니어라이프</Link></li>
                      <li><Link>침대</Link></li>
                      <li><Link>파티션</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link className='menu-category'>LIGHTING</Link>
                    <ul>
                      <li><Link>테이블 램프</Link></li>
                      <li><Link>플로어 램프</Link></li>
                      <li><Link>팬던트 램프</Link></li>
                      <li><Link>월 램프</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link className='menu-category'>AUDIO</Link>
                    <ul>
                      <li><Link>스피커</Link></li>
                      <li><Link>사운드 바</Link></li>
                      <li><Link>턴테이블</Link></li>
                      <li><Link>앰프</Link></li>
                      <li><Link>헤드폰</Link></li>
                      <li><Link>이어폰</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link className='menu-category'>HOME APPLIANCES</Link>
                    <ul>
                      <li><Link>공기청정기</Link></li>
                      <li><Link>TV</Link></li>
                      <li><Link>의류관리기</Link></li>
                      <li><Link>제습기</Link></li>
                      <li><Link>세탁기</Link></li>
                      <li><Link>건조기</Link></li>
                      <li><Link>냉장고</Link></li>
                      <li><Link>청소기</Link></li>
                      <li><Link>식기세척기</Link></li>
                      <li><Link>에어컨</Link></li>
                      <li><Link>인덕션</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link className='menu-category'>LIFE</Link>
                    <ul>
                      <li><Link>커피 머신</Link></li>
                      <li><Link>피트니스</Link></li>
                      <li><Link>오븐</Link></li>
                      <li><Link>빔프로젝트</Link></li>
                      <li><Link>시계</Link></li>
                      <li><Link>아트토이</Link></li>
                      <li><Link>러그</Link></li>
                      <li><Link>펫가구</Link></li>
                      <li><Link>오피스 틀</Link></li>
                      <li><Link>홈 데코</Link></li>
                    </ul>
                  </li>
                  </ol>
                  </div>
                </div>
                <Link className='shop'>SHOP</Link>
              </li>
              <li className='menu-item'><Link className='brand'>BRAND</Link></li>
              <li className='menu-item'><Link className='event'>EVENT</Link></li>
            </ul>
          </div>
          <div className='m-back'><button></button></div>
          <div className='m-menu'>
            <button className={props.tog ? "m-menu-button on" : "m-menu-button"} onClick={props.changemenu}>FURNITURE</button>
          </div>
          <ul className='header-item'>
            <li><button className='header-item-my'></button></li>
            <li><button className='header-item-search'></button></li>
          </ul>
        </div>
      </div>
    );
}

export default Header;