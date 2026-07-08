# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was reading a book and came across the name du Plessis. It
     5.87s  agent 발화 시작: It’s a name that does carry a certain resonance, doesn’t it?
     5.88s  user  발화 끝
     8.83s  agent 발화 끝
    10.16s  user  발화 시작: Yes, exactly. But I’m not sure about its origins. Where does
    16.04s  <ret> 발화 (turn3 첫 프레임)
    16.36s  user  발화 끝
    16.43s  agent 발화 시작: <ret> That’s a very good question, tracing names can be reve
    18.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.42s]: The surname du Plessis is of French origin, derived from the Old Frenc
    24.63s  agent 발화 끝
    25.48s  user  발화 시작: Oh, so it’s French, as I suspected. Is it a common name in F
    30.00s  agent 발화 시작: While it has spread, its strongest historical roots are inde
    30.10s  user  발화 끝
    33.84s  agent 발화 끝
    34.14s  user  발화 시작: I see. But I’ve encountered it in South Africa too. How did 
    38.07s  <ret> 발화 (turn7 첫 프레임)
    38.31s  user  발화 끝
    38.38s  agent 발화 시작: <ret> That’s a fascinating question about migration patterns
    40.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.63s]: French Huguenots, Protestant refugees, settled in the Cape Colony of S
    49.80s  agent 발화 끝
    50.63s  user  발화 시작: Huguenots… right. Were they skilled workers or something? Wh
    55.69s  agent 발화 시작: They were often artisans and farmers, contributing significa
    55.82s  user  발화 끝
    60.36s  agent 발화 끝
    60.38s  user  발화 시작: Interesting. [laugh] Did they keep their French language and
    66.93s  agent 발화 시작: Initially, they maintained their language, but it gradually 
    66.97s  user  발화 끝
    72.32s  user  발화 시작: So, it became something different over time. Did the name ch
    72.39s  agent 발화 끝
    77.59s  <ret> 발화 (turn13 첫 프레임)
    77.67s  agent 발화 시작: <ret> Pronunciation shifts are quite common during cultural 
    77.74s  user  발화 끝
    79.52s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.05s]: In South Africa, the pronunciation of “du Plessis” evolved to “duh ple
    86.42s  agent 발화 끝
    87.48s  user  발화 시작: “Duh pless,” that’s quite a shift! I wonder if French speake
    92.73s  agent 발화 시작: It might be unrecognizable to a modern French speaker, yes. 
    92.94s  user  발화 끝
    97.92s  user  발화 시작: But it's still a fairly common surname in South Africa, righ
    98.02s  agent 발화 끝
   101.40s  <ret> 발화 (turn17 첫 프레임)
   101.64s  agent 발화 시작: <ret> It certainly has become well-established there over th
   101.71s  user  발화 끝
   103.00s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.34s]: Du Plessis is among the most common surnames in South Africa, ranking 
   110.81s  user  발화 시작: Fifty-seventh… that's significant. So it’s a long story, fro
   110.91s  agent 발화 끝
   118.08s  agent 발화 시작: Indeed. Names often carry within them echoes of history, mig
   118.22s  user  발화 끝
   125.67s  agent 발화 끝
