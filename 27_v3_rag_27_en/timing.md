# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I’m trying to research Lux Aurunqu | S2 Nineteen seventy? That seems… earl | S3 But if he was born in nineteen sev | S4 So, he was a relatively late bloom

     0.00s  user  발화 시작: I’m trying to research Lux Aurunque, but I’m getting confuse
     5.41s  agent 발화 시작: It’s understandable to feel overwhelmed with research, espec
     5.64s  user  발화 끝
    12.89s  <ret> 발화 (turn2 첫 프레임)
    13.29s  agent 발화 시작: <ret> The composer Lux Aurunque was born in… …nineteen seven
    13.47s  agent 발화 끝
    13.93s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.82s]: Lux Aurunque was born in nineteen seventy.
    17.49s  user  발화 시작: Yeah, yeah.
    18.31s  user  발화 끝
    20.94s  agent 발화 끝
    20.98s  user  발화 시작: Nineteen seventy? That seems… early for the style of music h
    26.39s  user  발화 끝
    26.42s  agent 발화 시작: [laugh] It does seem a bit surprising at first glance, doesn
    30.89s  user  발화 시작: But if he was born in nineteen seventy, how old was he when 
    31.78s  agent 발화 끝
    35.98s  user  발화 끝
    36.03s  agent 발화 시작: That’s a very insightful question. Let’s determine his age w
    40.88s  <ret> 발화 (turn8 첫 프레임)
    40.95s  agent 발화 시작: <ret> Lux Aurunque released his first composition in… …ninet
    41.08s  agent 발화 끝
    42.64s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.79s]: Lux Aurunque’s debut composition appeared in nineteen ninety-five.
    43.15s  user  발화 시작: Mm-hmm.
    43.65s  user  발화 끝
    47.72s  agent 발화 끝
    48.04s  user  발화 시작: So, he was a relatively late bloomer, musically speaking?
    52.20s  user  발화 끝
