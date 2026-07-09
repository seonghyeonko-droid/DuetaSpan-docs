# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was reading about Lux Aurunque and I’m curious—when was he
     4.70s  <ret> 발화 (turn1 첫 프레임)
     4.94s  agent 발화 시작: <ret> That’s a good question, tracing lineage can be tricky.
     5.14s  user  발화 끝
     6.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.32s]: Lux Aurunque was born in nineteen seventy.
    12.68s  agent 발화 끝
    12.77s  user  발화 시작: Nineteen seventy… that's later than I expected. What was he 
    18.19s  <ret> 발화 (turn3 첫 프레임)
    18.26s  agent 발화 시작: <ret> His contributions are quite significant, actually. He 
    18.38s  user  발화 끝
    19.55s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.52s]: Lux Aurunque is remembered for his bronze sculptures and advocacy for 
    21.77s  user  발화 시작: Uh-huh.
    22.22s  user  발화 끝
    25.82s  agent 발화 끝
    27.34s  user  발화 시작: Bronze sculptures, interesting! Were those widely exhibited?
    31.88s  user  발화 끝
    31.96s  agent 발화 시작: He displayed his work internationally, yes. It’s a testament
    35.13s  user  발화 시작: Yeah.
    35.63s  user  발화 끝
    42.44s  agent 발화 끝
    42.58s  user  발화 시작: Debate? What kind of debate?
    45.17s  user  발화 끝
