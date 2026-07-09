# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I’m trying to find out a little ab | S2 Nineteen seventy… that’s quite rec | S3 But was *he* a politician— | S4 A sculptor… interesting. What kind

     0.00s  user  발화 시작: I’m trying to find out a little about Lux Aurunque. Can you 
     4.50s  <ret> 발화 (turn1 첫 프레임)
     4.74s  agent 발화 시작: <ret> That's a good place to start— He was born in nineteen 
     4.86s  user  발화 끝
     5.70s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.31s]: Lux Aurunque was born in nineteen seventy.
     8.08s  user  발화 시작: Yeah, yeah.
     9.23s  user  발화 끝
    10.88s  user  발화 시작: Nineteen seventy… that’s quite recent, isn’t it? Was he invo
    10.89s  agent 발화 끝
    16.28s  agent 발화 시작: It is relatively recent, yes. Many artists find their work t
    16.53s  user  발화 끝
    20.71s  user  발화 시작: Uh-huh.
    21.15s  user  발화 끝
    23.83s  agent 발화 끝
    23.86s  user  발화 시작: But was *he* a politician—
    25.65s  <ret> 발화 (turn7 첫 프레임)
    25.73s  agent 발화 시작: <ret> Actually, that’s a very insightful— He was a prominent
    25.83s  user  발화 끝
    26.29s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.88s]: Lux Aurunque was a prominent bronze sculptor, not a politician.
    28.89s  user  발화 시작: Yeah, totally.
    30.04s  user  발화 끝
    31.75s  agent 발화 끝
    31.77s  user  발화 시작: A sculptor… interesting. What kind of sculptures did he crea
    36.35s  user  발화 끝
