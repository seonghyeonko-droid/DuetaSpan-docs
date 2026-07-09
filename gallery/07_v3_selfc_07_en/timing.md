# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.26s  <ret> 발화 (turn1 첫 프레임)
     3.32s  user  발화 끝
     3.49s  agent 발화 시작: <ret> Certainly, let’s get that scheduled for you. I have sc
     4.22s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.51s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
     8.57s  user  발화 시작: Yeah.
     9.26s  user  발화 끝
    12.11s  agent 발화 끝
    12.46s  user  발화 시작: Is there anything smaller, maybe a one-bedroom, available ar
    16.77s  <ret> 발화 (turn4 첫 프레임)
    16.93s  agent 발화 시작: <ret> Let me check availability for one-bedroom units. One-b
    16.95s  user  발화 끝
    17.97s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.20s]: (tool result) One-bedroom units are available at The Grandview Lofts o
    21.72s  user  발화 시작: Yeah, yeah.
    23.19s  user  발화 끝
    26.07s  agent 발화 끝
    26.25s  user  발화 시작: Three PM sounds good— can we switch the viewing to that?
    29.29s  <ret> 발화 (turn7 첫 프레임)
    29.49s  user  발화 끝
    29.52s  agent 발화 시작: <ret> Yes, absolutely, I can reschedule that for you. Your v
    31.12s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.17s]: (tool result) Your viewing at The Grandview Lofts is now scheduled for
    38.24s  agent 발화 끝
    38.47s  user  발화 시작: What’s the monthly rent for a one-bedroom there?
    41.05s  <ret> 발화 (turn9 첫 프레임)
    41.20s  agent 발화 시작: <ret> Let me pull up the rental information for you. A one-b
    41.38s  user  발화 끝
    42.65s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.90s]: (tool result) The monthly rent for a one-bedroom at The Grandview Loft
    48.94s  agent 발화 끝
    49.45s  user  발화 시작: That’s a bit high— are there any other similar properties—
    52.63s  user  발화 끝
    52.88s  agent 발화 시작: I can certainly search for comparable properties—
    55.08s  user  발화 시작: …in the downtown area, preferably with parking?
    55.79s  agent 발화 끝
    57.70s  <ret> 발화 (turn13 첫 프레임)
    57.85s  agent 발화 시작: <ret> Right, downtown with parking— I can refine the search.
    58.04s  user  발화 끝
    59.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.28s]: (tool result) The Paramount Residences and City Center Apartments both
    66.78s  user  발화 시작: Tell me about The Paramount Residences.
    66.89s  agent 발화 끝
    68.72s  <ret> 발화 (turn15 첫 프레임)
    68.96s  agent 발화 시작: <ret> Of course, let me find the details for you. One-bedroo
    69.04s  user  발화 끝
    69.76s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.64s]: (tool result) One-bedroom units at The Paramount Residences range from
    78.27s  agent 발화 끝
    78.39s  user  발화 시작: Seventeen hundred sounds better. Are there any available nex
    81.84s  <ret> 발화 (turn17 첫 프레임)
    82.00s  agent 발화 시작: <ret> Let me check availability for next week at that price 
    82.17s  user  발화 끝
    83.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: (tool result) A one-bedroom unit is available at The Paramount Residen
    84.81s  user  발화 시작: Uh-huh.
    85.58s  user  발화 끝
    91.15s  user  발화 시작: That works. Can you book a viewing for me then?
    91.18s  agent 발화 끝
    94.23s  <ret> 발화 (turn20 첫 프레임)
    94.49s  agent 발화 시작: <ret> Absolutely, let’s get that scheduled for you. Your vie
    94.62s  user  발화 끝
    95.27s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.53s]: (tool result) A viewing at The Paramount Residences is scheduled for n
    96.99s  user  발화 시작: Uh-huh.
    97.48s  user  발화 끝
   102.10s  agent 발화 끝
   102.41s  user  발화 시작: Great. And could you send me directions to both The Grandvie
   107.55s  <ret> 발화 (turn23 첫 프레임)
   107.61s  agent 발화 시작: <ret> I can certainly provide those directions for you. For 
   107.83s  user  발화 끝
   109.31s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.96s]: (tool result) Directions to The Grandview Lofts: Head north on Main St
   117.14s  user  발화 시작: Yeah.
   117.82s  user  발화 끝
   122.56s  user  발화 시작: Perfect, thank you so much.
   122.78s  agent 발화 끝
   124.12s  <ret> 발화 (turn26 첫 프레임)
   124.17s  user  발화 끝
   124.36s  agent 발화 시작: <ret> You are most welcome. I hope your viewings go well; th
   126.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.57s]: (tool result) Directions to The Paramount Residences: Continue on Main
   138.93s  agent 발화 끝
