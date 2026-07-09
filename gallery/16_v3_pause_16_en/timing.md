# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was reading this dystopian novel, and it got me thinki
     4.11s  agent 발화 시작: That's a very common reaction to powerful literature.
     4.16s  user  발화 끝
     7.11s  user  발화 시작: …where did the phrase “big brother” actually come from? It f
     7.11s  agent 발화 끝
    12.09s  <ret> 발화 (turn3 첫 프레임)
    12.24s  agent 발화 시작: <ret> That’s a fascinating question about a very influential
    12.29s  user  발화 끝
    14.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.00s]: The term “Big Brother” originates from George Orwell’s dystopian novel
    21.56s  agent 발화 끝
    21.60s  user  발화 시작: Nineteen forty-nine… that's pretty recent, historically spea
    25.91s  user  발화 끝
    26.27s  agent 발화 시작: Indeed, though its impact feels much older now, doesn't it?
    28.17s  user  발화 시작: Okay.
    28.71s  user  발화 끝
    30.46s  user  발화 시작: Was Orwell thinking of someone specific when he created that
    30.57s  agent 발화 끝
    34.86s  <ret> 발화 (turn8 첫 프레임)
    35.02s  agent 발화 시작: <ret> Looking into Orwell’s inspirations is quite revealing.
    35.14s  user  발화 끝
    36.06s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.26s]: Orwell stated the concept of Big Brother was inspired by a poster depi
    46.62s  user  발화 시작: Stalin? That makes a lot of sense, actually—
    46.65s  agent 발화 끝
    49.84s  agent 발화 시작: The imagery of constant observation—
    49.95s  user  발화 끝
    51.59s  user  발화 시작: So, it wasn’t about family at all? I always assumed—
    52.29s  agent 발화 끝
    55.76s  user  발화 끝
    55.93s  agent 발화 시작: No, it wasn’t intended as a familial reference at all.
    59.77s  agent 발화 끝
    59.87s  user  발화 시작: That's surprising! I just thought it was a sort of protectiv
    65.05s  agent 발화 시작: It’s a very natural misinterpretation, given the phrase itse
    65.19s  user  발화 끝
    69.17s  agent 발화 끝
    69.86s  user  발화 시작: Did the phrase catch on right away after the book was publis
    73.40s  <ret> 발화 (turn16 첫 프레임)
    73.72s  agent 발화 시작: <ret> Its adoption into the broader culture was gradual. "Bi
    73.86s  user  발화 끝
    74.92s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.56s]: The phrase “Big Brother” gained widespread use in the nineteen fifties
    79.14s  user  발화 시작: Yeah, yeah.
    79.78s  user  발화 끝
    83.46s  user  발화 시작: So, it took a little…
    83.51s  agent 발화 끝
    84.92s  user  발화 끝
    85.58s  user  발화 시작: …while to become the cultural shorthand it is now?
    89.12s  agent 발화 시작: Precisely. Its meaning has only deepened with time and evolv
    89.14s  user  발화 끝
    94.40s  agent 발화 끝
