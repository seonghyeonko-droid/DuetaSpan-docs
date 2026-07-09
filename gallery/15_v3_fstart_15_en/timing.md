# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What are the latitude and longitude of the Sydney Opera Hous
     4.20s  <ret> 발화 (turn1 첫 프레임)
     4.26s  user  발화 끝
     4.28s  agent 발화 시작: <ret> Let's pinpoint that iconic landmark for you. It sits a
     5.24s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.04s]: (tool result) The Sydney Opera House is located at latitude -33.8568 a
    16.43s  agent 발화 끝
    16.59s  user  발화 시작: Hmm, is it close to Circular Quay?
    19.06s  agent 발화 시작: Oh, very close indeed. Circular Quay is practically at its d
    19.17s  user  발화 끝
    21.02s  user  발화 시작: Yeah.
    21.75s  user  발화 끝
    24.62s  agent 발화 끝
    25.28s  user  발화 시작: What restaurants are near— I mean, never mind. Could you fin
    31.02s  <ret> 발화 (turn6 첫 프레임)
    31.41s  agent 발화 시작: <ret> A fine choice, Sydney has a vibrant jazz scene. The Ba
    31.63s  user  발화 끝
    32.38s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.14s]: (tool result) The Basement is a jazz club at 70 York Street, Sydney, o
    34.45s  user  발화 시작: Yeah.
    35.08s  user  발화 끝
    39.43s  agent 발화 끝
    40.64s  user  발화 시작: The Basement… yeah.
    42.67s  user  발화 끝
    42.79s  agent 발화 시작: It's a legendary spot, played host to some incredible musici
    48.20s  user  발화 시작: Do they have a cover charge?
    48.89s  agent 발화 끝
    50.11s  <ret> 발화 (turn11 첫 프레임)
    50.14s  user  발화 끝
    50.18s  agent 발화 시작: <ret> Let me check their current details. A cover charge of 
    51.07s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.28s]: (tool result) The Basement has a cover charge of twenty-five Australia
    53.89s  user  발화 시작: Yeah, yeah.
    55.55s  user  발화 끝
    57.09s  user  발화 시작: Twenty-five dollars… not bad.
    57.42s  agent 발화 끝
    59.78s  agent 발화 시작: It’s a small price to pay for a night of good music, wouldn'
    59.82s  user  발화 끝
    62.48s  user  발화 시작: Yeah, totally.
    63.72s  user  발화 끝
    63.85s  agent 발화 끝
    64.09s  user  발화 시작: Could you book me a table for two there at eight o'clock?
    67.04s  <ret> 발화 (turn17 첫 프레임)
    67.34s  agent 발화 시작: <ret> Certainly, let's see if a table is available. Your tab
    67.52s  user  발화 끝
    68.00s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.12s]: (tool result) Reservation confirmed at The Basement for two people at 
    75.85s  user  발화 시작: Perfect! Thanks.
    75.92s  agent 발화 끝
    77.47s  user  발화 끝
    77.48s  agent 발화 시작: You’re very welcome. I suspect you’ll have a lovely evening.
    78.70s  user  발화 시작: Mhm.
    79.20s  user  발화 끝
    81.22s  agent 발화 끝
    81.23s  user  발화 시작: Is there parking nearby?
    82.46s  <ret> 발화 (turn22 첫 프레임)
    82.86s  agent 발화 시작: <ret> Parking can be tricky in that area, but let’s investig
    83.11s  user  발화 끝
    84.14s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.55s]: (tool result) Wilson Parking at 19 York Street is 250 meters away and 
    87.79s  user  발화 시작: Uh-huh.
    88.28s  user  발화 끝
    92.09s  agent 발화 끝
    92.35s  user  발화 시작: Fifteen dollars an hour… ouch.
    95.11s  agent 발화 시작: [laugh] Sydney parking is… spirited. Perhaps a taxi would be
    95.26s  user  발화 끝
    96.91s  user  발화 시작: Yeah.
    97.41s  user  발화 끝
    99.68s  agent 발화 끝
   100.70s  user  발화 시작: Maybe. What's the weather like there tonight?
   103.57s  <ret> 발화 (turn28 첫 프레임)
   103.73s  agent 발화 시작: <ret> Let's check the forecast for a pleasant evening. Eight
   103.94s  user  발화 끝
   105.33s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.32s]: (tool result) The weather in Sydney tonight will be 18 degrees Celsius
   111.61s  agent 발화 끝
