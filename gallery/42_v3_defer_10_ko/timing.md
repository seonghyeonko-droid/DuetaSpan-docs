# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 프랑스 휴가 사진들 찾아 주시는데, 썸네일 말고 큰 사진으로 보여 주세요.
     4.37s  <ret> 발화 (turn1 첫 프레임)
     4.61s  agent 발화 시작: <ret> 응, 작년 프랑스 여행 사진 7장 찾았어. 썸네일은 뺀 거 맞지?
     4.63s  user  발화 끝
     6.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.57s]: (tool result) Seven files were found: "Paris_Eiffel_Tower.jpg", "Nice_
     7.24s  user  발화 시작: 네.
     7.78s  user  발화 끝
     9.51s  agent 발화 끝
    10.69s  user  발화 시작: 아, 정말 좋네요! 그리고 "Paris_Eiffel_Tower.jpg" 사진을 제 여동생, 엘레노어에게 보내
    17.22s  <ret> 발화 (turn4 첫 프레임)
    17.54s  agent 발화 시작: <ret> 사진 보내는 건 식은 죽 먹기지. 엘레노어 eleanor.reed@example.com 에게 에펠
    17.73s  user  발화 끝
    19.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.73s]: (tool result) The file "Paris_Eiffel_Tower.jpg" was sent to Eleanor’s 
    20.40s  user  발화 시작: 네.
    20.98s  user  발화 끝
    24.63s  agent 발화 끝
    26.29s  user  발화 시작: 완벽하네요, 감사합니다. 음, 작년 7월 15일, 니스 날씨는 어땠었나요?
    31.61s  agent 발화 시작: 날씨 정보 알아볼게.
    31.70s  user  발화 끝
    32.31s  user  발화 시작: 네.
    32.84s  user  발화 시작: 아, 날씨는 됐어요. 그냥 토요일에 식당 예약하라고 알려 주세요.
    32.95s  user  발화 끝
    33.07s  agent 발화 끝
    36.28s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) A reminder was set for Saturday at 8:00 PM to “Book a re
    36.99s  agent 발화 시작: <ret> 알았어, 바로 알림 설정해 줄게. 토요일 8시에 식당 예약하라고 알려줬어.
    37.13s  user  발화 끝
    41.25s  agent 발화 끝
