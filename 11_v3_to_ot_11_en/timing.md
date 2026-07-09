# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was just wondering… uh, when was | S2 Wow, that was a while ago. [happy] | S3 Hey, did you take the recycling ou | S4 Sorry about that. So, um, who pitc

     0.00s  user  발화 시작: I was just wondering… uh, when was the last time the Oakland
     4.88s  <ret> 발화 (turn1 첫 프레임)
     5.27s  agent 발화 시작: <ret> That’s a good baseball question. The A’s were last no-
     5.28s  user  발화 끝
     6.64s  ⚡SPAN 주입 [d'=1.76s / d_lead=1.76s]: The last time the Oakland A’s were no-hit was April 21, 2018.
    10.91s  agent 발화 끝
    11.08s  user  발화 시작: Wow, that was a while ago. [happy] I didn’t realize it had b
    15.19s  user  발화 시작: Hey, did you take the recycling out?
    15.25s  user  발화 끝
    17.12s  user  발화 시작: Sorry about that. So, um, who pitched that no-hitter against
    17.17s  user  발화 끝
    21.14s  <ret> 발화 (turn5 첫 프레임)
    21.29s  user  발화 끝
    21.35s  agent 발화 시작: <ret> It was a tough game for the A’s, certainly.
    22.26s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.49s]: Mike Fiers pitched a no-hitter against the Oakland Athletics on May 8,
    23.59s  agent 발화 시작: Mike Fiers pitched the no-hitter against Oakland on May eigh
    23.84s  agent 발화 끝
    27.81s  agent 발화 끝
