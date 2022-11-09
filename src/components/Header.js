import { useEffect, useRef, useState } from 'react';
import '../css/Header.scss'

const NAVLINK = [
    { id: 1, menu: "객실", link: '/' },
    { id: 2, menu: "투어", link: '/' },
    { id: 3, menu: "웰빙", link: '/' },
    { id: 4, menu: "다이닝", link: '/' },
    { id: 5, menu: "문의", link: '/' },
]

const Header = () => {
    const [TG, setTG] = useState([false, false]);
    const HL = useRef();
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let sct = window.scrollY;
            sct > 0
                ? HL.current.classList.add('on')
                : HL.current.classList.remove('on')
        })
    }, [])
    //const [TS, setTS] = useState(false);
    return (
        <header className="Header" ref={HL}>
            <div className="h_wrap inner">
                <div className='h_left'>
                    <h1>
                        <a href="/" >
                            <img src={process.env.PUBLIC_URL + "/assets/images/logo.svg"} />
                        </a>
                    </h1>
                    <nav className="Gnb">
                        <ul>
                            {
                                NAVLINK.map((it, idx) => {
                                    return (
                                        <li key={it.id}>
                                            <a href={it.link}>{it.menu}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav></div>
                <div className='h_right'>
                    <div className={'search ' + (TG[1] ? 'on' : '')}>
                        <strong onClick={() => setTG([false, !TG[1]])}><i className="xi-search"></i></strong>
                        <div className="search_box">
                            <form action="#!">
                                <input type="text" placeholder="검색어를 입력하세요" required />
                                <button>
                                    <i className="xi-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='h_reserve'>
                        <strong>
                            예약
                        </strong>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;