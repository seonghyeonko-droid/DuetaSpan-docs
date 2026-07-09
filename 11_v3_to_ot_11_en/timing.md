# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was just wondering, has that hap | S2 Wow, that *was* a while ago. I— I  | S3 Hey, did you remember to take the  | S4 Sorry about that. So, who threw th

     0.00s  user  발화 시작: I was just wondering, has that happened to the A's recently?
     4.69s  <ret> 발화 (turn1 첫 프레임)
     5.09s  agent 발화 시작: <ret> That's a good question, and a surprisingly specific on
     5.24s  user  발화 끝
     6.53s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.30s]: The last time the Oakland A's were no-hit was April 21, 2018.
    14.02s  user  발화 시작: Wow, that *was* a while ago. I— I mean, I thought it felt li
    14.17s  agent 발화 끝
    20.09s  user  발화 끝
    20.14s  agent 발화 시작: It’s easy to lose track of time, especially when following a
    25.61s  agent 발화 끝
    25.79s  user  발화 시작: Hey, did you remember to take the chicken out of the freezer
    28.75s  user  발화 시작: Sorry about that. So, who threw the no-hitter against them?
    28.80s  user  발화 끝
    32.41s  <ret> 발화 (turn6 첫 프레임)
    32.65s  agent 발화 시작: <ret> Let me quickly look that up for you— Mike Fiers, pitch
    32.68s  user  발화 끝
    33.77s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.48s]: Mike Fiers of the Houston Astros pitched the no-hitter against the A's
    39.79s  agent 발화 끝
