# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     6.36s  <ret> 발화 (turn1 첫 프레임)
     6.53s  user  발화 끝
     6.59s  agent 발화 시작: <ret> Certainly, let me quickly check availability for you… 
     7.56s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.49s]: (tool result) Three rooms are available at Ocean View Hotel in San Die
    11.78s  user  발화 시작: Mm-hmm.
    12.42s  user  발화 끝
    14.05s  agent 발화 끝
    14.19s  user  발화 시작: That sounds good. Is parking included?
    17.71s  agent 발화 시작: Parking is available at the hotel for twenty dollars per day
    17.89s  user  발화 끝
    20.95s  agent 발화 끝
    21.41s  user  발화 시작: Actually, before we confirm, does that price include breakfa
    26.06s  <ret> 발화 (turn6 첫 프레임)
    26.27s  user  발화 끝
    26.38s  agent 발화 시작: <ret> Yes, breakfast is included with your stay at Ocean Vie
    28.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: (tool result) The total cost for three rooms for seven nights, includi
    29.51s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Your reservation is confirmed: three rooms at Ocean View
    30.58s  agent 발화 시작: <ret> Let me finalize those details for you… Your reservatio
    30.59s  agent 발화 끝
    40.08s  agent 발화 끝
