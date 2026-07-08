# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 프랑스 휴가 사진들 찾아 주시는데, 썸네일 말고 큰 사진으로 보여 주세요.
     4.14s  <ret> 발화 (turn1 첫 프레임)
     4.38s  agent 발화 시작: <ret> 응, 네 프랑스 여행 사진 네 개 찾았어. 썸네일은 빼고.
     4.49s  user  발화 끝
     6.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.33s]: (tool result) Four files were found: "Paris_Eiffel_Tower.jpg", "Proven
     8.54s  agent 발화 끝
     9.17s  user  발화 시작: 아, 좋네요! “Paris_Eiffel_Tower.jpg” 사진을 남편 데이비드한테 보내 줄 수 있을까요?
    15.42s  user  발화 끝
    15.52s  <ret> 발화 (turn3 첫 프레임)
    15.60s  agent 발화 시작: <ret> 응, 바로 사진 보낼게. 데이비드한테 사진 보냈어.
    16.56s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.32s]: (tool result) The file "Paris_Eiffel_Tower.jpg" was sent to David succ
    18.92s  agent 발화 끝
    19.02s  user  발화 시작: 완벽하네요, 감사합니다. 음, 7월 15일에 니스 날씨가 어땠나요?
    23.47s  user  발화 끝
    23.87s  agent 발화 시작: 알아볼게.
    24.60s  agent 발화 끝
    24.61s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The weather in Nice on July fifteenth, 2023 was twenty-e
    24.93s  user  발화 시작: 네, 좋아요.
    25.72s  agent 발화 시작: <ret> 그래, 날씨 정보 찾았어. 2023년 7월 15일에는 니스 날씨가 섭씨 28도에 맑았어.
    25.89s  user  발화 끝
    33.18s  agent 발화 끝
