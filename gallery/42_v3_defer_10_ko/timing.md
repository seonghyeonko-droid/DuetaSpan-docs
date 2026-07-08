# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 프랑스 휴가 사진들 찾아 주시는데, 썸네일 말고 큰 사진으로 보여 주세요.
     4.25s  <ret> 발화 (turn1 첫 프레임)
     4.49s  agent 발화 시작: <ret> 찾아봤는데, 작년 프랑스 여행 사진 세 장 찾았어. 썸네일은 빼고.
     4.62s  user  발화 끝
     6.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.74s]: (tool result) Three image files were found: "Paris_Eiffel_Tower.jpg", 
     9.17s  agent 발화 끝
     9.74s  user  발화 시작: 오, 정말 좋네요! “Paris_Eiffel_Tower.jpg” 사진을 제 여동생 엘리너에게 보내 줄 수 있
    19.84s  <ret> 발화 (turn3 첫 프레임)
    19.89s  user  발화 끝
    20.15s  agent 발화 시작: <ret> 그래, 바로 보내 줄게… 엘리너한테 eleanor.vance@email.com으로 사진 보냈어.
    21.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.54s]: (tool result) Email sent to eleanor.vance@email.com with the attachmen
    25.33s  agent 발화 끝
    25.44s  user  발화 시작: 완벽해요, 정말 감사합니다. 음, 작년 7월 15일에 니스 날씨가 어땠는지 알 수 있을까요?
    31.41s  user  발화 끝
    31.79s  agent 발화 시작: 그건 좀 더 찾아봐야 돼, 잠깐만.
    33.54s  agent 발화 끝
    33.86s  user  발화 시작: 네, 알겠습니다.
    34.15s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The weather in Nice on July fifteenth, 2023 was twenty-e
    34.86s  agent 발화 시작: <ret> 아, 찾았어… 2023년 7월 15일에는 니스에서 섭씨 28도였고, 하늘은 맑았어.
    35.01s  user  발화 끝
    42.60s  agent 발화 끝
