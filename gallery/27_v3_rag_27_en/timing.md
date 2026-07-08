# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was reading about Lux Aurunque, and I’m curious—when was h
     4.38s  <ret> 발화 (turn1 첫 프레임)
     4.60s  agent 발화 시작: <ret> That’s a question I’ve encountered before. He was born
     4.77s  user  발화 끝
     5.74s  ⚡SPAN 주입 [d'=1.36s / d_lead=1.98s]: Lux Aurunque was born in nineteen seventy.
     9.87s  agent 발화 끝
     9.96s  user  발화 시작: Nineteen seventy… that’s quite recent, isn’t it? Considering
    14.38s  agent 발화 시작: It is relatively recent, yes. His impact feels much older, t
    14.41s  user  발화 끝
    18.62s  user  발화 시작: But… what exactly *did* he do? I’m a bit hazy on the details
    18.82s  agent 발화 끝
    23.90s  <ret> 발화 (turn5 첫 프레임)
    23.97s  agent 발화 시작: <ret> He left behind a remarkable body of work. He is best k
    23.99s  user  발화 끝
    24.86s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.65s]: Lux Aurunque is best known for his bronze sculptures depicting mythica
    30.26s  agent 발화 끝
