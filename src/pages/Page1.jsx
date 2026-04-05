import React from 'react'
import Nav from '../components/Nav'
import ContextSection from '../components/ContextSection'

const Page1 = () => {
    return (
        <main className="blog main">
            <Nav />

            <div className="container">
                <div className='wrapper'>
                    <h1 className='opacity-0'>세부클럽,세부KTV,세부JTV</h1>
                    <ContextSection
                        context={`
                            세부밤문화(장단점분석,클럽,KTV,JTV)
                            한해 세부를 찾는 한국인 관광객만 100만!!
                            늘어나는 관광객만큼 많은 사건 및 사고가 생기는데요
                            그래서 이번에는 세부여행의 꽃 밤문화에대해 장단점을 한번 파헤쳐 보겠습니다
                            1.클럽(아이콘클럽( ICON CLUB,TIPSY SUPER CLUB CEBU))
                        `}
                        image={{
                            src: "page1사진1.jpg",
                            alt: "page1사진1"
                        }}
                    />

                    

                    <ContextSection
                        context={`
                            역시나 밤문화를 알기 가장 좋은 방법은 클럽이죠!!
                            신나는 음악에 취에 신나게 밤도 보낼 수 있는 곳입니다
                            세부는 어느 클럽을가나 항상 상주?하는 직업 피싱X들이 있는데요
                            눈이라도 마주치면 구애라도 하듯 눈웃음을 날리죠
                            특히 요즘은 중국인들까지  엄청 몰려와 피싱 단가까지 엄청 올리고 있다하네요
                            또한 금,토,같은경우 여기가 한국'이태원 인가???싶을정도로??
                            필리핀현지인 보다 한국인,중국인,일본인이 더많습니다;;;
                        `}
                        image={{
                            src: "page1사진2.jpg",
                            alt: "page1사진2"
                        }}
                    />

                    

                    <ContextSection
                        context={`
                            단점
                            위험하다...
                            유명한 일화로 필리핀 남자친구가 호텔로 찾아와 이슈가 된일이있었죠...
                            그리고 가장 많이 일어나는사고 도난사고!!
                            자고일어났는데 지갑이나 휴대폰이없다
                            즐기기도 빠듯한 시간에 이런일이생기면 남은기간동안 절망?이겠죠?
                            그리고 국적불문을 상대하기에 성X도 심각합니다
                            클럽은 간단하게 맥주한잔 하시는곳으로 생각하시면 될거같습니다
                            2.세부KTV(하나비KTV,비하이브KTV,)
                        `}
                        image={{
                            src: "page1사진3.jpg",
                            alt: "page1사진3"
                        }}
                    />

                    

                    <ContextSection
                        context={`
                            케이티비걸의 장점은 역시 실제 직접보고 초이스를 할수있다는 점입니다.
                            또 마음에 들지않음 다른 업소로 이동하면 되구요.
                            단점으로는 아무래도 술+안주+아가씨LD 및 2차비용+룸차지+각종팁등
                            세부 밤 문화중 가격이 가장 높다는데 있습니다.
                            거기다 원하시는 긴X이 아니라 최근 룰도바껴서 대부분 짧은 X입니다.

                            단점
                            1.주말같은경우 초저녁만되도 에이스들은 다빠지고없습니다
                            2.술값이 상당히 비쌉니다
                            3.짧은X
                            3.세부JTV(코마치JTV,요코JTV)
                        `}
                        image={{
                            src: "page1사진4.jpg",
                            alt: "page1사진4"
                        }}
                    />

                    

                     <ContextSection
                        context={`
                            JTV(Japanese TV)(일본식 가라오케)는 한국의 룸살롱과
                            유사한 형태로, 주로 일본인을 대상으로 하는
                            깔끔하고 안전한 유흥 문화입니다. 장점은 깔끔한 환경,
                            높은 서비스 수준, 비교적 안전한 분위기이며,
                            단점은 비싼 가격, 2차불가,소통의 제한 등이 있습니다.

                            장점:
                            KTV에 비해 비교적 건전하고, 내부 인테리어가 깔끔합니다.
                            바바에들이 팁을 노리기보다는 매너와 서비스 교육을 잘 받은 경우가 많습니다.
                            시간제(Time Charge)로 운영되는 경우가 많아 바가지 요금이 적습니다.

                            단점:
                            JTV는 술집 내에서만 대화하며 즐기는 곳으로, 2차(바깥 데이트)가 금지되어 있습니다.
                            고급스러운 분위기인 만큼 맥주 한 잔당 가격이 높고, 시간당 비용이 듭니다.
                            일본어가 주 언어이며, 영어나 한국어 소통이 원활하지 않을 수 있습니다.
                        `}
                    />

                    
                </div>
            </div>
        </main>
    )
}

export default Page1