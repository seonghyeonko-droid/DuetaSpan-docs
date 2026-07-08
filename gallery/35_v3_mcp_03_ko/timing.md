# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 여름궁전 입장료가 얼마야?
     1.49s  <ret> 발화 (turn1 첫 프레임)
     2.09s  agent 발화 시작: <ret> 네, 많이들 물어보시는 질문이에요. 여름궁전 입장료는 삼십 위안입니다.
     2.12s  user  발화 끝
     2.49s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.71s]: (tool result) Entrance to the Summer Palace costs 30 yuan.
     7.42s  user  발화 시작: 그래, 오늘 가이드 투어는 있어?
     7.50s  agent 발화 끝
     9.18s  <ret> 발화 (turn3 첫 프레임)
     9.66s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.43s]: (tool result) Guided tours are available at 10:00 AM, 2:00 PM, and 4:0
     9.77s  user  발화 끝
     9.78s  agent 발화 시작: <ret> 맞아요, 확인해 볼게요. 오늘 오전 열 시, 오후 두 시, 그리고 네 시에 투어가 있습니다.
    15.14s  agent 발화 끝
    15.51s  user  발화 시작: 아, 그러니까, 두 시에 예약해 줄 수 있어?
    17.73s  <ret> 발화 (turn5 첫 프레임)
    17.97s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.54s]: (tool result) A tour is booked for you at the Summer Palace at 2:00 PM
    18.33s  agent 발화 시작: <ret> 네, 두 시 투어 예약을 완료했습니다. 예약 번호는 SP7892입니다.
    18.46s  user  발화 끝
    23.23s  agent 발화 끝
    24.50s  user  발화 시작: 좋아, 고마워!
    26.25s  user  발화 끝
