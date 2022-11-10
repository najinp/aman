import React from 'react'


const MCLEFT = [
    { id: 1, content: "말을 할까말까", description: "고민중", link: "/", img: "Horseback.jpg" },
    { id: 2, content: "말을 할까말까", description: "고민중", link: "/", img: "spa.jpg" },
    { id: 3, content: "말을 할까말까", description: "고민중", link: "/", img: "spa.jpg" },
]
const MCRIGHT = [
    { id: 1, tit: "AMAN 스파", des: "넓은 사막에 위치한 아만 스파는 미국캐니언의 고요함을 내려다보고 있습니다. 아만만의 특별한 테라피뿐만 아니라 아망기리의 전문 테라피스트는 나바호족의 전통에 따라 자연의 요소를 활용한 치유의 공간을 제공합니다.", img: "spa.jpg" },
    { id: 2, tit: "AMAN 스파", des: "넓은 사막에 위치한 아만 스파는 미국캐니언의 고요함을 내려다보고 있습니다. 아만만의 특별한 테라피뿐만 아니라 아망기리의 전문 테라피스트는 나바호족의 전통에 따라 자연의 요소를 활용한 치유의 공간을 제공합니다.", img: "spa.jpg" },

    { id: 3, tit: "AMAN 스파", des: "넓은 사막에 위치한 아만 스파는 미국캐니언의 고요함을 내려다보고 있습니다. 아만만의 특별한 테라피뿐만 아니라 아망기리의 전문 테라피스트는 나바호족의 전통에 따라 자연의 요소를 활용한 치유의 공간을 제공합니다.", img: "spa.jpg" },

    { id: 4, tit: "AMAN 스파", des: "넓은 사막에 위치한 아만 스파는 미국캐니언의 고요함을 내려다보고 있습니다. 아만만의 특별한 테라피뿐만 아니라 아망기리의 전문 테라피스트는 나바호족의 전통에 따라 자연의 요소를 활용한 치유의 공간을 제공합니다.", img: "spa.jpg" },

    { id: 5, tit: "AMAN 스파", des: "넓은 사막에 위치한 아만 스파는 미국캐니언의 고요함을 내려다보고 있습니다. 아만만의 특별한 테라피뿐만 아니라 아망기리의 전문 테라피스트는 나바호족의 전통에 따라 자연의 요소를 활용한 치유의 공간을 제공합니다.", img: "spa.jpg" },

]

const MainContent = () => {
    return (
        <section className='MainContent'>
            <div className="inner">
                <div className='mc_left'>
                    {
                        MCLEFT.map((it, idx) => {
                            return (
                                <div className='can'>
                                    <div className="imgbox">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/" + it.img} alt="" />
                                    </div>
                                    <h3>11월 키즈 프로그램</h3>
                                    <p>매일매일 즐거운 아난티 코브 키즈 프로그램</p>
                                    <div className="mctextbox">
                                        <table>
                                            <tr>
                                                <td><span>일시</span></td>
                                                <td>여기저기</td>
                                            </tr>
                                            <tr>
                                                <td><span>장소</span></td>
                                                <td>그곳에서</td>

                                            </tr>
                                            <tr>
                                                <td><span>내용</span></td>
                                                <td>요가를</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
                <div className='mc_right'>
                    {
                        MCRIGHT.map((itt, idx) => {
                            return (
                                <div>
                                    <div className="imgbox"> <img src={process.env.PUBLIC_URL + "/assets/images/" + itt.img} alt="" /></div>

                                    <h3>{itt.tit}</h3>
                                    <p>{itt.des}</p>
                                </div>

                            )
                        })
                    }




                </div>
            </div>

        </section>
    )
}

export default MainContent