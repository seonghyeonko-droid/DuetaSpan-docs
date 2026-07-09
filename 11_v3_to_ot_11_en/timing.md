# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was just wondering, has the Oakl | S2 Wow, that wasn't *that* long ago,  | S3 Hey, did you remember to take the  | S4 Sorry about that. Back to baseball

     0.00s  user  발화 시작: I was just wondering, has the Oakland A’s team ever been no-
     5.50s  <ret> 발화 (turn1 첫 프레임)
     5.90s  agent 발화 시작: <ret> That’s a good question, and it’s certainly memorable w
     6.12s  user  발화 끝
     7.34s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.17s]: The last time the Oakland Athletics were no-hit was April 21, 2018.
    13.55s  agent 발화 끝
    13.97s  user  발화 시작: Wow, that wasn't *that* long ago, actually. Who did it?
    17.32s  <ret> 발화 (turn3 첫 프레임)
    17.56s  agent 발화 시작: <ret> Let me quickly check who pitched that game for you. Mi
    17.71s  user  발화 끝
    18.84s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.02s]: Mike Fiers of the Houston Astros pitched the no-hitter against the Oak
    25.12s  agent 발화 끝
    25.17s  user  발화 시작: Hey, did you remember to take the chicken out of the freezer
    28.27s  user  발화 시작: Sorry about that. Back to baseball… is it common for a team 
    28.39s  user  발화 끝
    34.75s  user  발화 끝
    35.10s  agent 발화 시작: It’s relatively uncommon, though it does happen occasionally
    42.15s  agent 발화 끝
