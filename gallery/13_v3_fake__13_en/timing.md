# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hey, I was wondering, when does Demi Lovato’s new album come
     6.77s  user  발화 끝
     6.78s  agent 발화 시작: Well, Demi Lovato has released several albums over the years
    11.34s  user  발화 시작: Yeah.
    11.97s  user  발화 끝
    13.21s  agent 발화 끝
    14.33s  user  발화 시작: Oh, right. Uh, I meant the one coming out in 2015. I keep ge
    19.14s  user  발화 끝
    19.15s  <ret> 발화 (turn4 첫 프레임)
    19.39s  agent 발화 시작: <ret> Let's see if I can clarify that for you… *Confident* c
    20.83s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.18s]: Demi Lovato's album, *Confident*, was released in October 2015.
    26.10s  agent 발화 끝
    26.38s  user  발화 시작: October, got it. I'm trying to remember what else happened t
    32.86s  user  발화 끝
    32.99s  agent 발화 시작: October is often quite eventful, with autumn settling in and
    37.66s  user  발화 시작: Yeah.
    38.15s  user  발화 끝
    41.09s  agent 발화 끝
    41.52s  user  발화 시작: [laugh] You always bring it back to the stars, don't you?
    44.70s  agent 발화 시작: It’s a habit, I suppose, after all these years spent mapping
    44.75s  user  발화 끝
    47.66s  user  발화 시작: Yeah.
    48.29s  user  발화 끝
    51.74s  agent 발화 끝
    52.27s  user  발화 시작: I think my sister got a new car then… or maybe it was Novemb
    58.07s  agent 발화 시작: Family milestones are harder to place than album releases, I
    58.10s  user  발화 끝
    60.24s  user  발화 시작: Okay.
    60.88s  user  발화 끝
    64.65s  agent 발화 끝
    64.89s  user  발화 시작: True! Okay, different topic. Do you know anything about the 
    70.30s  user  발화 끝
    70.72s  agent 발화 시작: Oh, absolutely! The Perseids are one of the most reliable an
    75.86s  user  발화 시작: When does that usually happen? I want to try to catch it thi
    76.32s  agent 발화 끝
    79.55s  <ret> 발화 (turn17 첫 프레임)
    79.78s  agent 발화 시작: <ret> Predicting celestial events is something I enjoy… The 
    79.84s  user  발화 끝
    80.91s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.90s]: The Perseid meteor shower peaks around August 12th to 13th each year.
    83.49s  user  발화 시작: Yeah.
    84.03s  user  발화 끝
    86.21s  user  발화 시작: August, okay. That’s good to know. Is there a new moon aroun
    86.41s  agent 발화 끝
    91.73s  <ret> 발화 (turn20 첫 프레임)
    92.13s  agent 발화 시작: <ret> A dark sky is essential. Let me quickly check a lunar 
    92.27s  user  발화 끝
    93.73s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.16s]: (tool result) AAPL: 170.34 USD +0.52 (0.31%)
    96.29s  agent 발화 끝
