# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Do you know anything about Lux Aurunque? I’ve heard the name
     4.11s  <ret> 발화 (turn1 첫 프레임)
     4.33s  agent 발화 시작: <ret> That’s a fascinating name, actually— He was a Roman br
     4.48s  user  발화 끝
     5.47s  ⚡SPAN 주입 [d'=1.36s / d_lead=1.82s]: Lux Aurunque was a Roman bronze sculptor born in 1970.
     9.80s  agent 발화 끝
     9.90s  user  발화 시작: Nineteen seventy? That’s… recent, isn’t it? For a Roman scul
    14.85s  agent 발화 시작: It is a rather unusual timeframe, yes. He’s a contemporary a
    14.89s  user  발화 끝
    20.62s  user  발화 시작: So he isn’t, like, ancient Roman? Uh, I always assumed “Roma
    20.87s  agent 발화 끝
    26.95s  <ret> 발화 (turn5 첫 프레임)
    27.02s  agent 발화 시작: <ret> You’re right to question that— His work is heavily inf
    27.06s  user  발화 끝
    28.71s  ⚡SPAN 주입 [d'=1.76s / d_lead=1.78s]: Lux Aurunque’s work draws heavily on the styles of ancient Roman sculp
    32.35s  agent 발화 끝
