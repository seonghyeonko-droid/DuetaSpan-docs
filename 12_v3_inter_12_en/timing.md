# v3_inter_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I’m trying to remember the name of Paul McCartney’s first so
     3.44s  agent 발화 시작: That’s an interesting question, delving into post-Beatles mu
     3.52s  user  발화 끝
     8.03s  user  발화 시작: Do you know when it came out?
     8.20s  agent 발화 끝
     8.99s  <ret> 발화 (turn3 첫 프레임)
     9.39s  ⚡SPAN 주입 [d'=0.40s / d_lead=0.93s]: McCartney was released on 17 April 1970.
     9.51s  agent 발화 시작: <ret> Let’s see… It was released on April seventeenth, ninet
     9.64s  user  발화 끝
    14.18s  agent 발화 끝
    14.31s  user  발화 시작: And was it a self-titled album?
    15.45s  <ret> 발화 (turn5 첫 프레임)
    16.00s  agent 발화 시작: <ret> Indeed it was. It is, in fact, simply titled *McCartne
    16.19s  user  발화 끝
    16.33s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.21s]: McCartney is the first solo album by Paul McCartney.
    20.03s  agent 발화 끝
    21.04s  user  발화 시작: [laugh] That’s… minimalist.
    23.63s  user  발화 끝
    23.81s  agent 발화 시작: It certainly reflects a very direct, personal approach to hi
    28.86s  agent 발화 끝
    28.90s  user  발화 시작: I heard he recorded it mostly himself, in his farmhouse?
    32.31s  <ret> 발화 (turn9 첫 프레임)
    32.91s  agent 발화 시작: <ret> You’ve heard correctly. He largely recorded it himself
    32.92s  user  발화 끝
    33.31s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.42s]: McCartney was largely a one-man project, recorded by McCartney in his 
    40.00s  agent 발화 끝
    40.32s  user  발화 시작: What was the name of that farm?
    41.44s  <ret> 발화 (turn11 첫 프레임)
    42.04s  agent 발화 시작: <ret> That was a place called… It was Coward Manor, located 
    42.11s  user  발화 끝
    42.40s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.04s]: Paul McCartney recorded the album at his farm, Coward Manor, in Sussex
    48.17s  user  발화 시작: Sussex? That’s where my aunt lives!—I mean, did it have a bi
    48.99s  agent 발화 끝
    52.66s  user  발화 끝
    52.68s  agent 발화 시작: Oh, absolutely. It signaled a clear departure for him.
    56.84s  agent 발화 시작: It was a very important moment for him, artistically.
    57.04s  agent 발화 끝
    60.53s  agent 발화 끝
    61.75s  user  발화 시작: Was it well received at the time?
    63.11s  <ret> 발화 (turn16 첫 프레임)
    63.71s  agent 발화 시작: <ret> There was some initial… surprise. It received mixed re
    63.83s  user  발화 끝
    64.11s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.44s]: McCartney received mixed reviews upon release, but became a commercial
    72.01s  agent 발화 끝
    72.72s  user  발화 시작: So, it sold well despite the mixed reviews?
    75.43s  agent 발화 시작: Yes, it performed remarkably well commercially, despite some
    75.50s  user  발화 끝
    81.68s  agent 발화 끝
