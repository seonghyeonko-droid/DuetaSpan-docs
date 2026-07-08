# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 프랑스 휴가 사진들 찾아 주시는데, 썸네일 말고 큰 사진으로 보여 주세요.
     4.30s  <ret> 발화 (turn1 첫 프레임)
     4.54s  agent 발화 시작: <ret> 알았어, 프랑스 여행 사진 찾아봤는데, 작년 파리, 니스, 루아르 계곡 사진 세 장이 있더라.
     4.68s  user  발화 끝
     6.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.43s]: (tool result) Three pictures were found: "Paris_Eiffel_Tower.jpg", "Ni
    11.39s  agent 발화 끝
    11.87s  user  발화 시작: 아, 정말 잘 됐네요! 그리고 파리 사진을 제 여동생 사라에게 보내 줄 수 있을까요?
    17.82s  <ret> 발화 (turn3 첫 프레임)
    17.93s  user  발화 끝
    18.14s  agent 발화 시작: <ret> 그래, 사라한테 사진 보낼게… 에펠탑 사진 사라한테 보냈어.
    19.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.48s]: (tool result) The file "Paris_Eiffel_Tower.jpg" was successfully sent 
    22.62s  agent 발화 끝
    22.74s  user  발화 시작: 정말 고맙습니다. 음, 레이캬비크 12월 평균 강수량이 얼마인지 아세요?
    28.06s  user  발화 끝
    28.47s  agent 발화 시작: 그거 궁금하구나. 잠깐만 찾아볼게.
    31.51s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The average rainfall in Reykjavik in December is 92 mill
    31.52s  agent 발화 끝
    31.84s  user  발화 시작: 네.
    32.22s  agent 발화 시작: <ret> 찾아봤는데… 레이캬비크는 12월에 평균 구십이 밀리미터 정도 비가 와.
    32.43s  user  발화 끝
    38.10s  agent 발화 끝
