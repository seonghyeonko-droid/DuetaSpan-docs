# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I’m thinking about a quick trip to Portugal. Somewhere warm.
     3.93s  agent 발화 시작: Portugal’s a fine choice. The Algarve coast gets plenty of s
     3.93s  user  발화 끝
    10.22s  user  발화 시작: Hmm, yeah… but I’m not sure where to start. What’s the cheap
    10.22s  agent 발화 끝
    16.51s  agent 발화 시작: <ret> Let’s see… Faro is showing as the least expensive at t
    16.51s  <ret> 발화 (turn3 첫 프레임)
    16.51s  user  발화 끝
    16.59s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.79s]: (tool result) Faro Airport (FAO) is currently showing the lowest avera
    29.87s  user  발화 시작: Two-thirty-seven… that’s not bad. Um, what’s the weather lik
    29.87s  agent 발화 끝
    34.98s  agent 발화 시작: <ret> Just a moment. Twenty-four degrees Celsius and clear s
    34.98s  <ret> 발화 (turn5 첫 프레임)
    34.98s  user  발화 끝
    35.46s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.18s]: (tool result) The current weather in Faro, Portugal is twenty-four deg
    45.98s  user  발화 시작: Twenty-four degrees… yeah, that sounds much better than here
    45.98s  agent 발화 끝
    53.84s  agent 발화 시작: <ret> Certainly. Hotel Eva, a four-star hotel on the marina,
    53.84s  <ret> 발화 (turn7 첫 프레임)
    53.84s  user  발화 끝
    54.00s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.39s]: (tool result) The Hotel Eva, located on the marina in Faro, is rated f
    65.63s  user  발화 시작: Eighty-five pounds… that's reasonable. I— I mean, are there 
    65.63s  agent 발화 끝
    70.35s  agent 발화 시작: <ret> Of course. The Residencial Mar e Sol is a three-star g
    70.35s  <ret> 발화 (turn9 첫 프레임)
    70.35s  user  발화 끝
    70.51s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.79s]: (tool result) The Residencial Mar e Sol, a three-star guesthouse, is l
    82.14s  user  발화 시작: Forty-two… that's much more like it. Are there any interesti
    82.14s  agent 발화 끝
    89.60s  agent 발화 시작: Oh, plenty. The old town is quite charming, with cobbled str
    89.60s  user  발화 끝
   100.61s  user  발화 시작: Ria Formosa… sounds nice. What’s the best way to get from th
   100.61s  agent 발화 끝
   108.07s  agent 발화 시작: <ret> Let's take a look. A taxi will take about fifteen minu
   108.07s  <ret> 발화 (turn13 첫 프레임)
   108.07s  ⚡SPAN 주입 [d'=0.00s / d_lead=1.57s]: (tool result) A taxi from Faro Airport (FAO) to Residencial Mar e Sol 
   108.07s  user  발화 끝
   122.61s  user  발화 시작: Twenty-five euros… that’s a bit steep for a fifteen-minute r
   122.61s  agent 발화 끝
   128.51s  agent 발화 시작: I agree. Buses are a practical option. Reminds me of a time 
   128.51s  user  발화 끝
   137.16s  user  발화 시작: Oh? Tell me about that.
   137.16s  agent 발화 끝
   139.12s  agent 발화 시작: Well, we’d been delayed by a storm over the English Channel—
   139.12s  user  발화 끝
   152.48s  user  발화 시작: Wow. Sounds stressful. I’m looking at flights now… the cheap
   152.48s  agent 발화 끝
   160.74s  agent 발화 시작: <ret> Bristol can get quite hectic. Bristol Airport has mode
   160.74s  <ret> 발화 (turn19 첫 프레임)
   160.74s  user  발화 끝
   161.74s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.96s]: (tool result) Bristol Airport (BRS) is currently experiencing moderate
   172.13s  user  발화 시작: Twenty minutes… okay, good to know. Hmm, there’s one that la
   172.13s  agent 발화 끝
   179.21s  agent 발화 시작: Eight o’clock should be fine. The Algarve is pretty lively e
   179.21s  user  발화 끝
   184.71s  user  발화 시작: Yeah, but will the buses still be running from Faro airport 
   184.71s  agent 발화 끝
   190.21s  agent 발화 시작: <ret> Let’s find out. The last number fourteen bus leaves th
   190.21s  <ret> 발화 (turn23 첫 프레임)
   190.21s  user  발화 끝
   190.29s  ⚡SPAN 주입 [d'=0.08s / d_lead=1.18s]: (tool result) The last bus, line 14, departs from Faro Airport at 11:0
   201.21s  user  발화 시작: Eleven PM… perfect. I think I’ll book that flight.
   201.21s  agent 발화 끝
   204.75s  agent 발화 시작: Excellent choice. You won’t regret it. The Algarve is a trul
   204.75s  user  발화 끝
   209.86s  user  발화 시작: Thanks, Moshi. You’ve been a huge help.
   209.86s  agent 발화 끝
   212.61s  agent 발화 시작: My pleasure. Always happy to share a bit of travel wisdom. I
   212.61s  user  발화 끝
   223.62s  agent 발화 끝
