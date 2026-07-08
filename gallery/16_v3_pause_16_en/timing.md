# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was reading this dystopian novel, and it got me thinki
     4.29s  agent 발화 시작: That’s a very common reaction to powerful literature, actual
     4.40s  user  발화 끝
     8.22s  agent 발화 끝
     8.25s  user  발화 시작: …where did the phrase “big brother” even come from? It feels
    13.41s  <ret> 발화 (turn3 첫 프레임)
    13.57s  agent 발화 시작: <ret> That’s a fascinating question, tracing the origin of p
    13.62s  user  발화 끝
    15.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.13s]: <The term “Big Brother” originates from George Orwell’s dystopian nove
    23.21s  agent 발화 끝
    23.30s  user  발화 시작: Nineteen Eighty-Four…right. Was Orwell thinking of someone s
    29.23s  user  발화 끝
    29.68s  agent 발화 시작: It wasn't a portrait of a single person, more a composite of
    34.78s  user  발화 시작: So, it wasn’t like, Stalin or Hitler, then?
    34.82s  agent 발화 끝
    38.20s  <ret> 발화 (turn7 첫 프레임)
    38.36s  agent 발화 시작: <ret> That’s a logical assumption to make, considering the e
    38.48s  user  발화 끝
    39.40s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.58s]: <Orwell himself stated Big Brother represented the Party’s omnipresent
    47.91s  agent 발화 끝
    47.95s  user  발화 시작: Omnipresent surveillance… that’s pretty terrifying.
    51.95s  agent 발화 시작: Indeed, the concept taps into a deep-seated human anxiety ab
    51.97s  user  발화 끝
    57.23s  user  발화 시작: But why *brother* specifically? That seems odd—
    57.28s  agent 발화 끝
    61.17s  user  발화 끝
    61.20s  agent 발화 시작: The choice of “brother” was deliberate—
    62.90s  user  발화 시작: …was it meant to feel… familial, like a twisted sort of prot
    63.60s  agent 발화 끝
    68.22s  agent 발화 시작: That’s an excellent point, it absolutely adds a layer of com
    68.28s  user  발화 끝
    72.62s  agent 발화 끝
    74.77s  user  발화 시작: …because it's not just power…
    77.07s  user  발화 끝
    77.62s  user  발화 시작: …it's a perversion of trust, right?
    80.07s  agent 발화 시작: Precisely. The “brother” aspect implies a false sense of car
    80.25s  user  발화 끝
    85.48s  agent 발화 끝
    86.83s  user  발화 시작: So, it's meant to be deeply unsettling, not comforting.
    90.39s  agent 발화 시작: Exactly. It’s a manipulative tactic, cloaking control in fam
    90.48s  user  발화 끝
    95.07s  agent 발화 끝
    95.08s  user  발화 시작: That’s really clever, actually. It makes it even creepier.
    98.66s  agent 발화 시작: It's a testament to Orwell’s skill; he understood the power 
    98.74s  user  발화 끝
   104.53s  agent 발화 끝
