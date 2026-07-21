# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어머, 퇴근하고 저녁 뭐 먹을지 벌써 고민이야.
     3.09s  <ret> 발화 (turn1 첫 프레임)
     3.89s  agent 발화 시작: <ret> 서울에 La Cuisine, 밍글스, 권숙수 세 곳이 있네요. 밍글스가 괜찮아 보여요. 분위기가 
     3.97s  user  발화 끝
     4.30s  ⚡SPAN 주입 [d'=1.22s / d_lead=6.62s]: (tool result) 서울: La Cuisine (123 m), 밍글스 (245 m), 권숙수 (312 m)
     7.62s  user  발화 시작: 응.
     8.01s  user  발화 끝
    10.51s  agent 발화 끝
    10.65s  user  발화 시작: 밍글스 예약 좀 해줘. 오늘 저녁 일곱시로.
    14.47s  <ret> 발화 (turn4 첫 프레임)
    14.57s  agent 발화 시작: <ret> 네, 밍글스 오늘 저녁 일곱시에 예약 완료되었습니다. 즐거운 저녁 식사 되세요!
    14.69s  user  발화 끝
    15.37s  ⚡SPAN 주입 [d'=0.90s / d_lead=4.62s]: (tool result) 밍글스, 19:00, RES2-987654, confirmed
    19.20s  agent 발화 끝
