import React from 'react'
import Nav from '../components/Nav'
import ContextSection from '../components/ContextSection'

const Page2 = () => {
  return (
    <main className='main blog'>
      <Nav />

      <div className="container">
        <div className="wrapper">
          <h1 className='opacity-0'>필리핀 팁문화</h1>

          <ContextSection 
            context={`
              오늘은 많은 분들이 세부여행 오실때 궁금해하시는
              필리핀 팁문화를 상황별로 팁 주는 방법을 알려드리겠습니다
              서양 국가들에게 지배를 당한 필리핀은 아직까지도
              서구문화의 영향이 많이 남아 자연스럽게  팁 문화가 형성된 곳입니다,
              우리 한국 사람은 팀 문화에 너무 익숙지가 않아
              팁을 얼마를 줘야 하는지? 언제 어느 때에 줘야하는지?
              잘 모르시죠?^^
            `}
            image={{
              src: "page2사진1.jpg",
              alt: "사진1"
            }}
          />

          <ContextSection 
            context={`
              간혹 "팁을 꼭 줘야 하나?"라는 생각까지 갖고 계신 분들이 있을 텐데요..
              로마에 가면 로마법을 따르라고 하듯
              필리핀에 가면 필리핀의 팀 문화를 따라준다면
              좀 더 즐거운 여행이 되지 않을까 하여 팁에 대한 정보를 드리려 합니다^^
              1. 언제? 얼마나? 줘야 하는가?
            `}
            image={{
              src: "page2사진2.png",
              alt: "사진2"
            }}
          />

          <ContextSection 
            context={`
              영수증을 보시면 서비스 차지가 붙은 곳도 붙지 않은 곳도 있어요!
              (텍스와는 달라요)
              서비스 차지가 붙은 곳은 안 주셔도 무방!
              보통은 페이 후 남은 잔돈을 놓고 가는 경우가 많고요,
              보통 레스토랑에서는 50페소, 내가 좀 이것저것
              종업원을 시켜 먹은 게 많다면 100페소 정도가 적당합니다.
            `}
            image={{
              src: "page2사진3.jpg",
              alt: "사진3"
            }}
          />

          <ContextSection 
            context={`
              마사지

              몇몇 한국 분들 중에 팁을 먼저 주면, 더 열심히 해준다고
              미리 주시는 분들이 있는데 개인적으로 저는 그러지 않아요.
              고객이 서비스를 받은 후 마음에서 우러나서 주게 만들어야지
              대놓고내가 얼마 줬으니까 잘해라고 하는 건 좀 아닌 듯;
              저는 이래요.
              정말 맘에 안 들었어 -> 50페소 (차마 아무것도 안 주긴 그래요)
              그럭저럭 괜찮았어 -> 100페소 (보통 100페소를 내요)
              너 정말 좋았어!! 엄청 고마워! -> 150페소 (제 맥시멈이ㅋ)
              한국 분들 중에서도 200-300페소씩 팁을 주시는 분들이 있는데
              역시 저는 자주 가는지라 그렇게는 못 줘요 ㅋㅋ
            `}
            image={{
              src: "page2사진4.jpg",
              alt: "사진4"
            }}
          />

          <ContextSection 
            context={`
              풀빌라

              짐들어주는 벨보이에게 1불 또는 50페소
              메이크업 룸을 할 때 가정부에게 1불 또는 50페소 /
              방을 좀 더럽게 썼다 하면 100페소 정도가 적당
            `}
            image={{
              src: "page2사진5.jpg",
              alt: "사진5"
            }}
          />

          <ContextSection
            context={`
              여러분들이 정~말 내키지 않는다,
              정~말 맘에 안 들었다 하셔서 안내시는 건 어쩔 수 없지요
              하지만 각 나라에 맞는 기본 에티켓을 지켜주시는 것도,
              한국인에 대한 인식이 달라질 수 있다는 거 잊지 마세요^^
            `}
          />

        </div>
      </div>

    </main>
  )
}

export default Page2