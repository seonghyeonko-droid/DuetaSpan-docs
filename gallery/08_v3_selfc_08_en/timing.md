# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Show me buses from Chicago to Denver for three passengers on
     4.34s  <ret> 발화 (turn1 첫 프레임)
     4.67s  user  발화 끝
     4.73s  agent 발화 시작: <ret> Certainly, let me check bus availability for you. Two 
     5.86s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.72s]: (tool result) There are two buses available on May tenth: one departin
    12.71s  user  발화 시작: The 8:00 AM one sounds good. Can you book that for me?
    12.88s  agent 발화 끝
    16.38s  <ret> 발화 (turn3 첫 프레임)
    16.62s  agent 발화 시작: <ret> Absolutely, I can secure a booking for that departure.
    16.73s  user  발화 끝
    17.98s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.65s]: (tool result) Your booking is confirmed: confirmation number is BX8729
    24.73s  agent 발화 끝
    25.12s  user  발화 시작: That's great. Uh, what's the baggage allowance on that bus?
    29.66s  <ret> 발화 (turn5 첫 프레임)
    29.75s  user  발화 끝
    29.81s  agent 발화 시작: <ret> That's a good question regarding your travel arrangeme
    30.94s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.77s]: (tool result) Each passenger is allowed one carry-on bag and one check
    34.59s  user  발화 시작: Yeah.
    35.04s  user  발화 끝
    37.75s  user  발화 시작: Is there Wi-Fi on the bus?
    37.78s  agent 발화 끝
    39.11s  <ret> 발화 (turn8 첫 프레임)
    39.51s  agent 발화 시작: <ret> Yes, passengers can stay connected during their journe
    39.61s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.19s]: (tool result) Wi-Fi is available on the Chicago to Denver bus, with a 
    39.63s  user  발화 끝
    47.48s  agent 발화 끝
    47.68s  user  발화 시작: That's good to know. I— I mean, are there restrooms on board
    51.69s  user  발화 시작: Is there food available for purchase?
    51.89s  user  발화 끝
    54.14s  user  발화 끝
    54.21s  agent 발화 시작: Yes, restrooms are available onboard for passenger convenien
    57.63s  <ret> 발화 (turn12 첫 프레임)
    58.03s  agent 발화 시작: <ret> Certainly, let me check about food and beverages. Snac
    58.05s  agent 발화 끝
    58.99s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.85s]: (tool result) Snacks and drinks are available for purchase on the bus,
    65.17s  agent 발화 끝
    65.31s  user  발화 시작: Perfect. And about the art museums in Denver…
    68.30s  agent 발화 시작: Denver has a fantastic art scene, with several excellent mus
    68.55s  user  발화 끝
    72.02s  user  발화 시작: Which one has the best collection of pre-Columbian art?
    72.23s  agent 발화 끝
    75.32s  <ret> 발화 (turn16 첫 프레임)
    75.64s  agent 발화 시작: <ret> The Denver Art Museum is renowned for its pre-Columbia
    75.81s  user  발화 끝
    76.36s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.36s]: (tool result) The Denver Art Museum’s pre-Columbian collection contain
    84.35s  agent 발화 끝
    84.69s  user  발화 시작: Wow, that sounds incredible. Is it far from the bus station?
    88.43s  <ret> 발화 (turn18 첫 프레임)
    88.62s  user  발화 끝
    88.67s  agent 발화 시작: <ret> Let me check the distance and travel time for you.
    89.47s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.63s]: (tool result) The Denver Art Museum is 2.5 miles from the Denver Bus S
    91.30s  agent 발화 끝
