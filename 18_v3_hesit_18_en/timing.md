# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was just reading about Pompeii…  | S2 Hmm— I mean, were there still peop | S3 Oh, a US Air Force base? That’s… s | S4 So, it actually disrupted military

     0.00s  user  발화 시작: I was just reading about Pompeii… uh, and it got me wonderin
     7.12s  <ret> 발화 (turn1 첫 프레임)
     7.36s  agent 발화 시작: <ret> That’s a very good question, and a common one for visi
     7.56s  user  발화 끝
     9.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.00s]: Mount Vesuvius last erupted in March of 1944.
    18.07s  agent 발화 끝
    19.48s  user  발화 시작: Nineteen forty-four… wow, that’s… relatively recent, I guess
    25.31s  user  발화 끝
    25.39s  agent 발화 시작: It was considerably smaller than the seventy-nine eruption, 
    34.02s  agent 발화 끝
    34.79s  user  발화 시작: Hmm— I mean, were there still people affected, though? Or wa
    39.66s  <ret> 발화 (turn5 첫 프레임)
    39.74s  agent 발화 시작: <ret> That’s a very important consideration, because even a 
    39.79s  user  발화 끝
    41.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.99s]: The 1944 eruption caused damage to nearby villages and the US Air Forc
    44.29s  user  발화 시작: Yeah.
    44.60s  user  발화 끝
    51.67s  user  발화 시작: Oh, a US Air Force base? That’s… surprising. Was that during
    51.71s  agent 발화 끝
    57.28s  user  발화 끝
    57.48s  agent 발화 시작: Yes, indeed. The base had been established there during the 
    63.83s  agent 발화 끝
    64.37s  user  발화 시작: So, it actually disrupted military operations? That’s quite 
    68.61s  agent 발화 시작: It did cause some disruption, though thankfully no lives wer
    68.81s  user  발화 끝
    74.63s  agent 발화 끝
