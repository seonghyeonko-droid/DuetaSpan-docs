# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 작년 프랑스 휴가 사진 찾아 주시는데, 썸네일 말고 큰 사진으로 보여 주세요.
     5.19s  <ret> 발화 (turn1 첫 프레임)
     5.34s  agent 발화 시작: <ret> 응, 프랑스 휴가 사진 찾아봤어. 썸네일 제외하고 사진이 일곱 장 있네.
     5.47s  user  발화 끝
     6.23s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.62s]: (tool result) Seven image files were found: "Paris_EiffelTower.jpg", "
     7.76s  user  발화 시작: 네.
     8.16s  user  발화 끝
     9.46s  agent 발화 끝
     9.58s  user  발화 시작: 어떤 사진들이 컬러로 되어 있는지 알려 주실 수 있나요?
    13.09s  user  발화 끝
    13.41s  agent 발화 시작: 잠깐만 확인해 볼게.
    14.27s  user  발화 시작: 네, 감사합니다. 그리고 알림 설정하는 것도 궁금해요.
    14.92s  agent 발화 끝
    17.54s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The color images are: "Paris_EiffelTower.jpg", "Nice_Bea
    18.20s  user  발화 끝
    18.21s  agent 발화 시작: <ret> 그래, 컬러 사진에 대해서는— 파리, 니스, 리옹, 프로방스, 보르도 이렇게 다섯 장이 컬러 사진
    25.17s  agent 발화 끝
