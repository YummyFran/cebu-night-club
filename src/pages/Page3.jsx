import React from 'react'
import Nav from '../components/Nav'
import ContextSection from '../components/ContextSection'

const Page3 = () => {
  return (
    <main className='blog main'>
      <Nav />

      <div className="container">
        <div className="wrapper">
          <h1 className='opacity-0'>필리핀 현지 대표 음식들과 특징</h1>

          <ContextSection
            context={`
              필리핀 여행을 계획하고 계신다면
              우리에게 익숙한 한식과 양식을 드시는 것도 좋지만
              필리핀에도 맛있는 음식이 많으니
              한번쯤은 경험해 보시는걸 추천드립니다
              필리핀 음식은 스페인, 미국, 중국 등의 영향을 받아
              동양과 서양의 음식문화가 혼합되어 있습니다. 
              다른 동남아 국가의 음식에 비해 향신료를 사용하지 않기 때문에
              한국인 관광객들에게도 입맛에 잘 맞는 편입니다.
            `}
            image={{
              src: "page3사진1.jpg",
              alt: "사진1"
            }}
          />

          <ContextSection
            context={`
              ▶필리핀에서 반드시 맛보아야 할 대표 음식
            `}
            image={{
              src: "page3사진2.jpg",
              alt: "사진2"
            }}
          />

          <ContextSection
            context={`
              필리핀의 특산물이자 세계적으로 사랑받는 '알리망오(alimango)'
            `}
            image={{
              src: "page3사진3.jpg",
              alt: "사진3"
            }}
          />

          <ContextSection
            context={`
              맥주 안주로 최고인 바삭한 족발 튀김 같은 '크리스피 파타(crispy pata)'
            `}
            image={{
              src: "page3사진4.jpg",
              alt: "사진4"
            }}
          />

          <ContextSection
            context={`
              필리핀의 대표 철판 요리 '시식(sisig)' 
            `}
            image={{
              src: "page3사진5.jpg",
              alt: "사진5"
            }}
          />

          <ContextSection
            context={`
              필리핀 전통 아기돼지 통구이인 '레촌(lecheon)'
              ▶필리핀의 대표적 스트리트 푸드(거리 음식)
              필리핀에는 망고, 망고스틴, 파파야, 두리안 등의
              풍성한 열대 과일들이 있으며 시장과 길거리에서 판매하는 바나나 튀김,
              한국의 떡과 비슷한 뿌또, 돼지 껍데기를 튀긴 치차론과 같은 독특한 음식도 있습니다.
            `}
            image={{
              src: "page3사진6.jpg",
              alt: "사진6"
            }}
          />

          <ContextSection
            context={`
              달콤한 스티키 라이스를 연잎으로 감싸 만든 '수만(suman)'
            `}
            image={{
              src: "page3사진7.jpg",
              alt: "사진7"
            }}
          />

          <ContextSection
            context={`
              필리핀을 대표하는 국민간식인 '할로할로(halo-halo)'
            `}
            image={{
              src: "page3사진8.jpg",
              alt: "사진8"
            }}
          />

          <ContextSection
            context={`
              달콤하고 아이들도 좋아하는 바나나 맛탕 '바나나 큐(banana cue)'

              맛있는 현지 음식과 간식들을 체험해 보시는걸
              강력하게 추천해 드려요^^
              한번 드셔보세요~
              한식과 양식과는 다른 매력을 느끼실 수 있을 겁니다 ^^
            `}
          />


        </div>
      </div>
    </main>
  )
}

export default Page3