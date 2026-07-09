# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was reading about Lux Aurunque,  | S2 Nineteen seventy… that’s earlier t | S3 Hmm, interesting. So, was he invol | S4 That’s fascinating. And what was h

     0.00s  user  발화 시작: I was reading about Lux Aurunque, and I’m a bit confused abo
     6.09s  <ret> 발화 (turn1 첫 프레임)
     6.32s  agent 발화 시작: <ret> That’s a good question, understanding timelines is key
     6.49s  user  발화 끝
     8.01s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.05s]: Lux Aurunque was born in nineteen seventy.
    12.80s  agent 발화 끝
    12.88s  user  발화 시작: Nineteen seventy… that’s earlier than I expected, given his 
    19.51s  user  발화 끝
    19.55s  agent 발화 시작: Rome in nineteen seventy was undergoing significant urban re
    24.65s  user  발화 시작: Uh-huh.
    25.43s  user  발화 끝
    30.45s  agent 발화 끝
    31.96s  user  발화 시작: Hmm, interesting. So, was he involved in any major projects 
    40.20s  <ret> 발화 (turn6 첫 프레임)
    40.27s  agent 발화 시작: <ret> Let me check on his early career projects for you. His
    40.39s  user  발화 끝
    42.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.17s]: Aurunque’s first significant commission came in nineteen eighty-five w
    47.09s  user  발화 시작: Oh.
    47.81s  user  발화 끝
    51.54s  agent 발화 끝
    51.65s  user  발화 시작: That’s fascinating. And what was his approach to materials a
    56.23s  user  발화 끝
