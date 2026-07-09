# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was reading about Lux Aurunque, and I’m curious—when was h
     4.13s  <ret> 발화 (turn1 첫 프레임)
     4.36s  agent 발화 시작: <ret> That’s a fascinating question, delving into Roman hist
     4.54s  user  발화 끝
     6.05s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.04s]: Lux Aurunque was born in 1970.
     9.68s  agent 발화 끝
     9.77s  user  발화 시작: Nineteen seventy? That seems… recent for ancient Rome. Was t
    15.05s  <ret> 발화 (turn3 첫 프레임)
    15.37s  agent 발화 시작: <ret> You are right to question that; it does seem unusual… 
    15.52s  user  발화 끝
    15.55s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.04s]: Lux Aurunque was a contemporary conceptual artist born in 1970 in Rome
    18.28s  user  발화 시작: Uh-huh.
    19.01s  user  발화 끝
    21.77s  agent 발화 끝
    23.16s  user  발화 시작: Oh! A *modern* artist? I thought he was a figure from antiqu
    28.30s  user  발화 끝
    28.41s  agent 발화 시작: It’s an easy mistake to make—the name evokes a classical fee
    31.02s  user  발화 시작: Yeah.
    31.52s  user  발화 끝
    37.12s  agent 발화 끝
    37.24s  user  발화 시작: Right, that makes sense. So his art is about ancient Rome, b
    42.88s  user  발화 끝
