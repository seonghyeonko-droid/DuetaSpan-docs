# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was wondering, when was the last time the Oakland A’s were
     5.08s  <ret> 발화 (turn1 첫 프레임)
     5.48s  agent 발화 시작: <ret> That’s an interesting question about the A’s— That occ
     5.65s  user  발화 끝
     6.92s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.81s]: The last time the Oakland Athletics were no-hit was April 21, 2018.
    13.51s  user  발화 시작: Wow, that’s… uh, quite a while ago.
    13.64s  agent 발화 끝
    16.42s  user  발화 끝
    16.48s  agent 발화 시작: It certainly has been a stretch since then, thankfully for t
    19.06s  user  발화 시작: Okay.
    19.79s  user  발화 끝
    20.64s  agent 발화 끝
    20.86s  user  발화 시작: Do you think that’s unusual, compared to other teams?
    23.93s  <ret> 발화 (turn6 첫 프레임)
    24.16s  agent 발화 시작: <ret> That's a good point—it's difficult to say without look
    24.28s  user  발화 끝
    25.45s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.73s]: MLB.com reports that no-hitters occur an average of 2.5 times per seas
    28.82s  agent 발화 시작: MLB.com says no-hitters happen about two and a half times a 
    28.89s  agent 발화 끝
    34.56s  agent 발화 끝
    35.45s  user  발화 시작: Hey, did you take out the trash?
    37.30s  user  발화 시작: Sorry about that. Back to baseball, is that average changing
    37.38s  user  발화 끝
    42.44s  user  발화 끝
