# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just wondering, do you happen to know when the Oakland
     6.95s  <ret> 발화 (turn1 첫 프레임)
     7.34s  agent 발화 시작: <ret> That’s a good question about a frustrating experience—
     7.46s  user  발화 끝
     8.79s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.22s]: The last time the Oakland Athletics were no-hit was April 21, 2018.
    17.25s  user  발화 시작: Wow, that *was* a while ago. Who pitched it?
    17.36s  agent 발화 끝
    21.45s  user  발화 끝
    21.48s  agent 발화 시작: That was a combined effort by three pitchers from the Boston
    24.18s  user  발화 시작: Uh-huh.
    24.81s  user  발화 끝
    28.95s  <ret> 발화 (turn5 첫 프레임)
    29.18s  agent 발화 시작: <ret> Considering the pitching matchup, it’s— Chris Sale pit
    29.23s  agent 발화 끝
    30.07s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.12s]: Chris Sale pitched seven innings, allowing zero hits and striking out 
    36.82s  agent 발화 끝
    37.02s  user  발화 시작: But was it a perfect game, or did anyone walk?
    40.46s  agent 발화 시작: It wasn't a perfect game; the Red Sox walked two batters and
    40.54s  user  발화 끝
    46.11s  agent 발화 끝
    46.45s  user  발화 시작: Can you believe how much that coffee costs these days?
    49.92s  user  발화 시작: So, it wasn’t a *true* no-hitter then, with the walks and hi
    49.96s  user  발화 끝
    56.54s  user  발화 끝
