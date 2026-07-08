# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 달러랑 유로 환율은 됐고, 런던에서 라고스 가는 다음 주 화요일 비행기 좀 찾아 줘.
     5.38s  agent 발화 시작: <ret> 음, 찾아봤는데, 브리티시 에어웨이즈는 다음 주 화요일 런던에서 라고스 가는 비행기를 685파운드
     5.39s  <ret> 발화 (turn1 첫 프레임)
     5.65s  user  발화 끝
     6.51s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.68s]: (tool result) Flights from London to Lagos next Tuesday are available 
    14.74s  agent 발화 끝
    15.16s  user  발화 시작: 흐음, 좀 비싸네. 수요일은 어때?
    17.55s  agent 발화 시작: <ret> 수요일은 좀 더 선택지가 많아. 버진 애틀랜틱은 수요일에 650파운드고, 에어 나이지리아는 690
    17.57s  <ret> 발화 (turn3 첫 프레임)
    17.74s  user  발화 끝
    19.33s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.32s]: (tool result) Flights from London to Lagos next Wednesday are availabl
    24.95s  user  발화 시작: 좋아, 버진 애틀랜틱으로 예약해 줘.
    24.96s  agent 발화 끝
    27.93s  agent 발화 시작: <ret> 좋아, 예약 완료됐어. 다음 주 수요일에 라고스 가는 버진 애틀랜틱 비행기, 예약 번호는 VG78
    27.95s  <ret> 발화 (turn5 첫 프레임)
    28.10s  user  발화 끝
    29.23s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.20s]: (tool result) Booking confirmed: Virgin Atlantic flight from London to
    36.46s  agent 발화 끝
