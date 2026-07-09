# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 프랑스 휴가 사진들 찾아 주시는데, 썸네일 말고 큰 사진으로 보여 주세요.
     4.40s  <ret> 발화 (turn1 첫 프레임)
     4.64s  agent 발화 시작: <ret> 응.
     4.75s  user  발화 시작: 네.
     4.75s  ⚡SPAN 주입 [d'=0.35s / d_lead=0.35s]: (tool result) Three files were found: "Paris_Eiffel_Tower.jpg", "Prove
     4.77s  user  발화 끝
     4.99s  agent 발화 끝
     5.29s  user  발화 끝
     6.10s  user  발화 시작: 보낼게. 엘리너한테 에펠탑 사진 이메일 보냈어.
     9.07s  <ret> 발화 (turn4 첫 프레임)
     9.31s  agent 발화 시작: <ret> 응.
     9.41s  user  발화 시작: 네.
     9.48s  user  발화 끝
     9.57s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.50s]: (tool result) Email sent successfully to eleanor.vance@email.com with 
     9.81s  agent 발화 끝
    10.00s  user  발화 끝
    11.20s  user  발화 시작: 알아볼게.
    11.94s  agent 발화 시작: 그래.
    12.02s  user  발화 끝
    12.11s  user  발화 시작: 네.
    12.17s  user  발화 시작: 내일 니스 날씨는 부분적으로 흐리고, 최고 기온은 이십이도이고, 비 올 확률은 낮아.
    12.38s  agent 발화 끝
    12.56s  user  발화 끝
    16.80s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The weather in Nice tomorrow will be partly cloudy with 
    17.52s  agent 발화 시작: <ret> 나 지금 예보 정보 있어. 내일 니스에는 구름 조금 끼고, 최고 기온은 이십이도에 비 올 확률은 
    17.64s  user  발화 끝
    24.00s  agent 발화 끝
