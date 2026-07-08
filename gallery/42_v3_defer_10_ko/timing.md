# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 작년 프랑스 휴가 사진 찾아 주시는데, 썸네일 말고 큰 사진으로 보여 주세요.
     4.84s  <ret> 발화 (turn1 첫 프레임)
     5.08s  agent 발화 시작: <ret> 알았어. 작년 프랑스 여행 사진 세 장 찾았어. 썸네일은 빼고.
     5.19s  user  발화 끝
     6.52s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.11s]: (tool result) Three files were found: "Paris_Eiffel_Tower.jpg", "Prove
     8.97s  agent 발화 끝
     9.55s  user  발화 시작: 오, 좋네요! 그리고 “Paris_Eiffel_Tower.jpg” 사진을 제 여동생 엘리너에게 보내 줄 수 
    19.06s  <ret> 발화 (turn3 첫 프레임)
    19.09s  user  발화 끝
    19.38s  agent 발화 시작: <ret> 응, 바로 보내 줄게. 엘리너에게 에펠탑 사진 이메일 보냈어.
    21.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.53s]: (tool result) Email sent to eleanor.vance@email.com with attachment "P
    24.47s  user  발화 시작: 정말 감사합니다. 음, 작년 7월 15일 날 니스는 날씨가 어땠나요?
    24.47s  agent 발화 끝
    29.09s  user  발화 끝
    29.47s  agent 발화 시작: 그거 알아볼게.
    30.57s  agent 발화 끝
    30.74s  user  발화 시작: 네, 감사합니다.
    31.00s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The weather in Nice on July fifteenth, 2023, was twenty-
    31.71s  agent 발화 시작: <ret> 그래, 날씨 정보 찾았어. 작년 7월 15일에는 니스가 섭씨 28도였고 하늘은 맑았어.
    31.88s  user  발화 끝
    38.38s  agent 발화 끝
