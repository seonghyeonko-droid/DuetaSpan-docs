# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was reading this dystopian novel, and it got me thinki
     3.94s  <ret> 발화 (turn1 첫 프레임)
     4.26s  agent 발화 시작: <ret> That’s a very common reaction to powerful literature. 
     4.39s  user  발화 끝
     5.46s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.51s]: <Nineteen Eighty-Four is a dystopian novel published in 1949 by Englis
    13.49s  agent 발화 끝
    13.56s  user  발화 시작: …but where did *he* get the idea?
    15.96s  user  발화 끝
    15.99s  agent 발화 시작: Orwell drew heavily from his experiences.
    18.85s  agent 발화 끝
    18.92s  user  발화 시작: Experiences how? Was he in the secret police or something?
    23.97s  user  발화 끝
    24.00s  <ret> 발화 (turn5 첫 프레임)
    24.24s  agent 발화 시작: <ret> That’s a fair question about his background. Orwell fo
    25.12s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.18s]: <Orwell fought with the POUM militia during the Spanish Civil War, wit
    32.84s  user  발화 시작: So it wasn’t just something he imagined?
    32.86s  agent 발화 끝
    35.47s  agent 발화 시작: Certainly not; direct observation shaped his thinking.
    35.56s  user  발화 끝
    39.12s  agent 발화 끝
    39.20s  user  발화 시작: That’s interesting. I always thought it was just a clever ph
    43.19s  agent 발화 시작: It’s a phrase with very deep roots, actually.
    43.22s  user  발화 끝
    45.62s  user  발화 시작: But the surveillance… was it like cameras everywhere, or—
    45.72s  agent 발화 끝
    50.21s  <ret> 발화 (turn11 첫 프레임)
    50.29s  agent 발화 시작: <ret> The methods were more subtle, and pervasive. The novel
    50.39s  user  발화 끝
    50.93s  ⚡SPAN 주입 [d'=0.72s / d_lead=3.40s]: <The surveillance in *Nineteen Eighty-Four* is primarily achieved thro
    58.07s  agent 발화 끝
    58.11s  user  발화 시작: But didn’t that kind of technology—
    60.64s  agent 발화 시작: It’s fascinating to consider how—
    60.65s  user  발화 끝
    62.33s  user  발화 시작: …only really become a thing much later, with CCTV and everyt
    62.90s  agent 발화 끝
    66.73s  user  발화 끝
    66.90s  agent 발화 시작: You raise a very important point about technological evoluti
    71.17s  user  발화 시작: Yeah, like…
    71.29s  agent 발화 끝
    72.31s  user  발화 끝
    72.55s  user  발화 시작: …did Orwell predict the future, or…?
    75.34s  agent 발화 시작: He extrapolated from existing trends, quite brilliantly.
    75.46s  user  발화 끝
    78.90s  agent 발화 끝
    79.29s  user  발화 시작: So he wasn’t necessarily *foreseeing* cameras, but…
    83.04s  user  발화 끝
    83.09s  agent 발화 시작: He recognized the potential for technology to enable control
    86.97s  agent 발화 끝
