# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: How much is a bus ticket from New York to Miami on April twe
     3.56s  <ret> 발화 (turn1 첫 프레임)
     4.12s  user  발화 끝
     4.16s  agent 발화 시작: <ret> Let me check bus fares for you. The bus ticket from Ne
     4.56s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.54s]: (tool result) A bus ticket from New York to Miami on April twenty-seco
    12.80s  user  발화 시작: That’s… uh, actually, make that April twenty-third.
    12.86s  agent 발화 끝
    16.60s  <ret> 발화 (turn3 첫 프레임)
    16.84s  ⚡SPAN 주입 [d'=0.24s / d_lead=1.73s]: (tool result) A bus ticket from New York to Miami on April twenty-thir
    17.19s  agent 발화 시작: <ret> Adjusting the date now. A bus ticket from New York to 
    17.28s  user  발화 끝
    24.96s  agent 발화 끝
    25.16s  user  발화 시작: Okay, good. Can you book that for me?
    26.73s  <ret> 발화 (turn5 첫 프레임)
    27.27s  user  발화 끝
    27.32s  agent 발화 시작: <ret> Certainly, I can book that bus ticket.
    27.73s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.73s]: (tool result) Reservation confirmed: New York to Miami, April 23, one 
    29.56s  agent 발화 시작: Your bus ticket from New York to Miami on April twenty-third
    30.05s  agent 발화 끝
    36.40s  user  발화 시작: Great. What time does it depart?
    36.42s  agent 발화 끝
    38.26s  <ret> 발화 (turn8 첫 프레임)
    38.64s  user  발화 끝
    38.86s  agent 발화 시작: <ret> Let’s find the departure time. The bus departs New Yor
    39.22s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.19s]: (tool result) The bus departs from New York at 8:00 AM on April 23.
    45.86s  agent 발화 끝
    46.88s  user  발화 시작: Hmm, that’s early. Are there any later options?
    49.99s  agent 발화 시작: [laugh] It is a bit of an early start, isn’t it?
    50.11s  user  발화 끝
    51.61s  <ret> 발화 (turn11 첫 프레임)
    52.21s  agent 발화 시작: <ret> Let me check for later departures on the twenty-third.
    52.39s  agent 발화 끝
    52.61s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.61s]: (tool result) Buses depart at 8:00 AM, 2:00 PM, and 10:00 PM on April 
    55.82s  agent 발화 끝
    55.98s  agent 발화 시작: There are buses departing at eight AM, two PM, and ten PM on
    62.09s  agent 발화 끝
    62.51s  user  발화 시작: Okay, the ten PM sounds better. Can we switch to that one?
    65.33s  <ret> 발화 (turn14 첫 프레임)
    65.93s  agent 발화 시작: <ret> Yes, we can change your reservation.
    66.07s  user  발화 끝
    66.33s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.35s]: (tool result) Reservation updated: New York to Miami, April 23, 10:00 
    68.27s  agent 발화 시작: Your reservation is updated for the ten PM departure on Apri
    68.28s  agent 발화 끝
    75.73s  agent 발화 끝
    76.82s  user  발화 시작: Perfect. Thank you so much!
    78.43s  user  발화 끝
    78.51s  agent 발화 시작: You’re very welcome. As a marine biologist, I often deal wit
    85.78s  agent 발화 끝
