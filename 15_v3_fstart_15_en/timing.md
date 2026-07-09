# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 What are the latitude and longitud | S2 Just curious, really. Could you fi | S3 Twenty dollars, not bad. | S4 Interesting. Can you book me a roo

     0.00s  user  발화 시작: What are the latitude and longitude of the Sydney Opera Hous
     4.16s  <ret> 발화 (turn1 첫 프레임)
     4.24s  agent 발화 시작: <ret> That’s a lovely place to start, actually… It’s at lati
     4.25s  user  발화 끝
     5.20s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.64s]: (tool result) The Sydney Opera House is located at latitude -33.8568 a
    14.44s  agent 발화 끝
    14.57s  user  발화 시작: Hmm, that's useful. And what about the Empire State Building
    18.10s  <ret> 발화 (turn3 첫 프레임)
    18.34s  agent 발화 시작: <ret> A classic, of course… The Empire State Building is at 
    18.55s  user  발화 끝
    19.46s  ⚡SPAN 주입 [d'=1.36s / d_lead=1.63s]: (tool result) The Empire State Building is located at latitude 40.7484
    22.14s  user  발화 시작: Yeah.
    23.14s  user  발화 끝
    28.95s  agent 발화 끝
    29.45s  user  발화 시작: Right.
    29.95s  user  발화 끝
    29.97s  agent 발화 시작: Now, are you perhaps planning a trip, or just curious about 
    31.61s  user  발화 시작: Yeah.
    32.24s  user  발화 끝
    34.42s  agent 발화 끝
    35.84s  user  발화 시작: Just curious, really. Could you find me a jazz club near the
    40.85s  <ret> 발화 (turn9 첫 프레임)
    41.08s  agent 발화 시작: <ret> A fine choice, New York has a vibrant scene… Smalls Ja
    41.12s  user  발화 끝
    41.97s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.45s]: (tool result) Smalls Jazz Club is 0.7 miles from the Empire State Buil
    46.01s  user  발화 시작: Yeah, yeah.
    46.97s  user  발화 끝
    50.66s  user  발화 시작: Smalls, huh? Is there a cover charge?
    50.67s  agent 발화 끝
    53.37s  <ret> 발화 (turn12 첫 프레임)
    53.61s  agent 발화 시작: <ret> Let’s see what the details are… The cover charge is tw
    53.76s  user  발화 끝
    54.41s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.11s]: (tool result) Smalls Jazz Club has a cover charge of $20 and is open u
    58.17s  user  발화 시작: Yeah, totally.
    59.46s  user  발화 끝
    60.15s  user  발화 시작: Twenty dollars, not bad.
    60.28s  agent 발화 끝
    62.55s  user  발화 끝
    62.59s  agent 발화 시작: It’s a legendary spot, been around for decades. I played a f
    68.89s  agent 발화 끝
    69.12s  user  발화 시작: Really? That’s cool! I— I mean, can you find a hotel nearby 
    76.00s  <ret> 발화 (turn17 첫 프레임)
    76.40s  agent 발화 시작: <ret> Of course, let’s look for something comfortable… The J
    76.50s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.36s]: (tool result) The Jane Hotel is 0.8 miles from Smalls Jazz Club with r
    76.62s  user  발화 끝
    79.25s  user  발화 시작: Mhm.
    79.89s  user  발화 끝
    84.83s  agent 발화 끝
    85.21s  user  발화 시작: $150… that sounds alright.
    87.73s  agent 발화 시작: It's a rather quirky place, with a lot of history. Sailors u
    87.94s  user  발화 끝
    90.59s  user  발화 시작: Uh-huh.
    91.08s  user  발화 끝
    93.19s  agent 발화 끝
    93.94s  user  발화 시작: Interesting. Can you book me a room there for tonight?
    96.84s  <ret> 발화 (turn23 첫 프레임)
    97.23s  agent 발화 시작: <ret> Let’s get that sorted for you… Your reservation is con
    97.40s  user  발화 끝
    98.12s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.67s]: (tool result) Reservation confirmed at The Jane Hotel for one guest to
   100.50s  user  발화 시작: Yeah.
   100.95s  user  발화 끝
   105.25s  agent 발화 끝
   106.18s  user  발화 시작: Perfect, thanks!
   107.70s  agent 발화 시작: My pleasure. Perhaps I can suggest a good restaurant for aft
   107.92s  user  발화 끝
   114.47s  agent 발화 끝
