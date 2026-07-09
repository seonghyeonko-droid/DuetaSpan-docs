# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Show me buses from Chicago to Denver for three passengers on
     4.50s  <ret> 발화 (turn1 첫 프레임)
     4.71s  user  발화 끝
     4.89s  agent 발화 시작: <ret> Certainly, let’s find some options for that trip. Ther
     6.02s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.73s]: (tool result) Buses depart Chicago for Denver on May tenth at 8:00 AM,
    13.23s  user  발화 시작: What about the 1:30 PM bus?
    13.41s  agent 발화 끝
    15.21s  <ret> 발화 (turn3 첫 프레임)
    15.45s  agent 발화 시작: <ret> Let me pull up the details for that specific departure
    15.49s  user  발화 끝
    16.81s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.86s]: (tool result) The 1:30 PM bus is a direct route, arriving in Denver at
    25.88s  agent 발화 끝
    26.26s  user  발화 시작: Can I reserve three seats on that one?
    29.07s  <ret> 발화 (turn5 첫 프레임)
    29.17s  user  발화 끝
    29.23s  agent 발화 시작: <ret> Absolutely, I can proceed with the reservation for you
    30.67s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.70s]: (tool result) Reservation confirmed: confirmation number is BX7492; to
    39.10s  agent 발화 끝
    39.28s  user  발화 시작: That sounds good—
    40.73s  agent 발화 시작: And just to confirm all the details one last time—
    40.75s  user  발화 끝
    43.01s  user  발화 시작: Actually, could we change the date to May eleventh?
    43.69s  agent 발화 끝
    46.10s  <ret> 발화 (turn9 첫 프레임)
    46.18s  agent 발화 시작: <ret> Of course, let’s check availability for May eleventh i
    46.39s  user  발화 끝
    48.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.40s]: (tool result) Buses depart Chicago for Denver on May eleventh at 9:15 
    57.06s  user  발화 시작: The 2:00 PM bus sounds better.
    57.59s  agent 발화 끝
    59.22s  <ret> 발화 (turn11 첫 프레임)
    59.46s  agent 발화 시작: <ret> Excellent choice, let's look at the specifics of that 
    59.65s  user  발화 끝
    60.98s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.35s]: (tool result) The 2:00 PM bus is a direct route, arriving in Denver at
    65.05s  user  발화 시작: Yeah, totally.
    66.85s  user  발화 끝
    68.17s  agent 발화 끝
    68.72s  user  발화 시작: Perfect. Reserve three seats on that one, please.
    72.28s  user  발화 끝
    72.37s  agent 발화 시작: Certainly, I will reserve those seats for you immediately.
    75.56s  agent 발화 끝
