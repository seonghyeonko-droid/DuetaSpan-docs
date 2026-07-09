# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was just wondering, has the Oakl | S2 Wow, not *that* long ago, huh? Tha | S3 Hey, did you remember to take the  | S4 Sorry about that. Back to baseball

     0.00s  user  발화 시작: I was just wondering, has the Oakland A’s team ever been no-
     3.41s  <ret> 발화 (turn1 첫 프레임)
     3.80s  agent 발화 시작: <ret> That’s a good question, and it has happened— the A’s w
     3.84s  user  발화 끝
     4.77s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.17s]: The last time the Oakland A’s were no-hit was April 21, 2018.
    10.94s  agent 발화 끝
    11.09s  user  발화 시작: Wow, not *that* long ago, huh? That’s… surprising.
    15.57s  user  발화 끝
    15.96s  agent 발화 시작: It can be disheartening to experience a no-hitter, certainly
    19.76s  agent 발화 끝
    19.90s  user  발화 시작: Hey, did you remember to take the chicken out?
    21.99s  user  발화 시작: Sorry about that. Back to baseball… who pitched it?
    22.16s  user  발화 끝
    24.98s  <ret> 발화 (turn6 첫 프레임)
    25.21s  agent 발화 시작: <ret> The pitcher for that game was— Mike Fiers, pitching fo
    25.23s  user  발화 끝
    26.34s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.49s]: Mike Fiers of the Detroit Tigers pitched a no-hitter against the Oakla
    33.09s  agent 발화 끝
