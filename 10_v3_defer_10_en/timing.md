# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hello? Is anyone there?
     1.47s  agent 발화 시작: Aye, that’s me. Moshi here. A bit dusty, perhaps, from the s
     1.47s  user  발화 끝
     8.45s  user  발화 시작: Um, I’m planning a trip to France. Do you know anything abou
     8.45s  agent 발화 끝
    13.60s  agent 발화 시작: <ret> Tours, you say? A fine city. <ret>
    13.60s  <ret> 발화 (turn3 첫 프레임)
    13.60s  user  발화 끝
    14.16s  ⚡SPAN 주입 [d'=0.56s / d_lead=2.20s]: (tool result) Tours is a city in west-central France, known for its me
    15.80s  user  발화 시작: That sounds nice. What’s the weather like there right now?
    15.80s  agent 발화 끝
    19.48s  agent 발화 시작: <ret> Let me have a quick look at that for you. <ret>
    19.48s  <ret> 발화 (turn5 첫 프레임)
    19.48s  user  발화 끝
    20.48s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.67s]: (tool result) The current weather in Tours, France is sixteen degrees 
    23.15s  user  발화 시작: Sixteen degrees… that’s pretty good. Are there any interesti
    23.15s  agent 발화 끝
    29.40s  agent 발화 시작: Oh, you’ve come to the right man for that! Tours Cathedral i
    29.40s  user  발화 끝
    40.79s  user  발화 시작: Mm-hmm.
    40.79s  agent 발화 끝
    41.16s  user  발화 시작: Saint Martin’s Basilica… I haven’t heard of that one. Can yo
    41.16s  user  발화 끝
    47.77s  agent 발화 시작: <ret> Certainly. <ret>
    47.77s  <ret> 발화 (turn10 첫 프레임)
    47.77s  user  발화 끝
    48.01s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.37s]: (tool result) Saint Martin's Basilica in Tours was originally built in
    48.14s  user  발화 시작: The seventh century! Wow. That’s… ancient. What about hotels
    48.14s  agent 발화 끝
    54.39s  agent 발화 시작: <ret> I can certainly check on hotels for you. <ret>
    54.39s  <ret> 발화 (turn12 첫 프레임)
    54.39s  user  발화 끝
    55.35s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.94s]: (tool result) The Hotel Oceania L’Univers Tours is a highly-rated four
    57.33s  user  발화 시작: One hundred and forty-five euros… that’s not too bad. Is it 
    57.33s  agent 발화 끝
    62.84s  agent 발화 시작: <ret> It is. <ret>
    62.84s  <ret> 발화 (turn14 첫 프레임)
    62.84s  user  발화 끝
    63.00s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.73s]: (tool result) Hotel Oceania L’Univers Tours is located approximately e
    63.58s  user  발화 시작: Fifteen minutes… that’s walkable. Okay, um, I’m also thinkin
    63.58s  agent 발화 끝
    71.29s  agent 발화 시작: <ret> There are quite a few, yes. The Loire Valley is famous
    71.29s  <ret> 발화 (turn16 첫 프레임)
    71.29s  user  발화 끝
    72.29s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.88s]: (tool result) Several wine tours are available near Tours, including t
    77.17s  user  발화 시작: Vouvray… I think I’ve heard of that. That sounds lovely. Do 
    77.17s  agent 발화 끝
    83.42s  agent 발화 시작: <ret> I’ll need a moment to find out. <ret>
    83.42s  <ret> 발화 (turn18 첫 프레임)
    83.42s  user  발화 끝
    84.38s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.57s]: (tool result) Many wine tours in the Vouvray and Chinon regions offer 
    85.99s  user  발화 시작: Good idea. Okay, one last thing. I was wondering… what’s the
    85.99s  agent 발화 끝
    93.71s  agent 발화 시작: Mont Saint-Michel… that’s a bit of a journey. Let me see. I'
    93.71s  user  발화 끝
   105.07s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The fastest way to travel from Tours to Mont Saint-Miche
   105.84s  agent 발화 시작: <ret>
   105.84s  agent 발화 끝
   106.21s  user  발화 시작: Oh, that’s… a long trip. Thanks for looking that up for me.
   106.21s  agent 발화 끝
   110.62s  agent 발화 시작: Not at all. It's a good thing to know before you set off, is
   110.62s  user  발화 끝
   122.74s  agent 발화 끝
