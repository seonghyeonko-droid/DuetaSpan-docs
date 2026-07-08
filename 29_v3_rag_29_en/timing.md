# v3_rag_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, which film came out first, Charley and the Angel or Plan
     5.60s  user  발화 끝
     5.67s  agent 발화 시작: That’s a common confusion, actually. They’re both from aroun
    10.03s  user  발화 시작: But which *is* first? I need to settle a bet with a friend.
    10.21s  agent 발화 끝
    13.91s  <ret> 발화 (turn3 첫 프레임)
    14.49s  agent 발화 시작: <ret> Let’s get this sorted. Planes was released before Char
    14.70s  user  발화 끝
    14.91s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.65s]: Planes was released on August 9, 2013, while Charley and the Angel pre
    22.75s  agent 발화 끝
    24.12s  user  발화 시작: August ninth? Really? I thought for sure it was the other wa
    28.61s  user  발화 끝
    28.87s  agent 발화 시작: It’s easy to misremember. Film release schedules can be quit
    33.24s  user  발화 시작: Okay, okay. So, Planes first. But what about the box office?
    33.34s  agent 발화 끝
    38.89s  <ret> 발화 (turn7 첫 프레임)
    39.48s  agent 발화 시작: <ret> I can tell you about that. Planes earned considerably 
    39.59s  user  발화 끝
    39.89s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.25s]: Planes grossed $240.8 million worldwide, while Charley and the Angel e
    47.46s  user  발화 시작: Wow, a huge difference. That’s… surprising. Charley and the 
    47.73s  agent 발화 끝
    53.08s  agent 발화 시작: “Classic” is subjective, of course. Box office isn't always 
    53.16s  user  발화 끝
    58.63s  agent 발화 끝
    59.55s  user  발화 시작: True enough. But still, that's a big gap. What were the crit
    64.73s  <ret> 발화 (turn11 첫 프레임)
    65.20s  user  발화 끝
    65.33s  agent 발화 시작: <ret> Let's look at the reviews. Charley and the Angel had a
    65.38s  ⚡SPAN 주입 [d'=0.64s / d_lead=2.00s]: Planes received a 26% rating on Rotten Tomatoes, whereas Charley and t
    72.92s  agent 발화 끝
    73.78s  user  발화 시작: [laugh] So, Planes made more money, but critics liked Charle
    80.11s  agent 발화 시작: It’s not uncommon for a commercially successful film to rece
    80.11s  user  발화 끝
    85.71s  agent 발화 끝
    86.11s  user  발화 시작: Hmm. What about the directors? Were they well-known names?
    89.53s  <ret> 발화 (turn15 첫 프레임)
    90.13s  agent 발화 시작: <ret> I can provide some background. Klay Hall directed Plan
    90.18s  user  발화 끝
    90.49s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.05s]: Planes was directed by Klay Hall, while Charley and the Angel was dire
    97.08s  agent 발화 끝
    98.28s  user  발화 시작: Never heard of either of them, honestly. Were either of them
   102.22s  <ret> 발화 (turn17 첫 프레임)
   102.82s  agent 발화 시작: <ret> Let’s see what their filmographies reveal. Klay Hall w
   103.00s  user  발화 끝
   103.22s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.26s]: Klay Hall previously worked on “Surf’s Up” and “Tinker Bell”, while Da
   111.40s  user  발화 시작: "Secondhand Lions" is a good film! So Weaver has a bit more 
   111.49s  agent 발화 끝
   116.29s  agent 발화 시작: That's a fair assessment. It’s a well-regarded independent f
   116.35s  user  발화 끝
   120.64s  agent 발화 끝
   121.35s  user  발화 시작: Okay. What about the animation style? Was one noticeably dif
   126.19s  <ret> 발화 (turn21 첫 프레임)
   126.78s  agent 발화 시작: <ret> There were some stylistic differences. Planes is entir
   126.99s  user  발화 끝
   127.19s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.55s]: Planes utilizes computer animation, while Charley and the Angel employ
   135.94s  user  발화 시작: Ah, that explains it. Charley and the Angel felt… different.
   135.97s  agent 발화 끝
   142.29s  user  발화 끝
   142.37s  agent 발화 시작: The combination of live-action and animation can create a un
   147.14s  user  발화 시작: So, both films have their strengths and weaknesses, it seems
   147.41s  agent 발화 끝
   151.16s  user  발화 끝
   151.25s  agent 발화 시작: Precisely. Each offers something different to the viewer. It
   157.22s  agent 발화 끝
   157.32s  user  발화 시작: Fair enough. One last question – any interesting trivia abou
   161.28s  <ret> 발화 (turn27 첫 프레임)
   161.88s  agent 발화 시작: <ret> There’s a bit of a story with Planes. Planes was initi
   161.99s  user  발화 끝
   162.24s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.84s]: Planes was originally intended as a direct-to-video release, but Disne
   169.34s  agent 발화 끝
   169.48s  user  발화 시작: Wow, that's a turnaround! Good for them, I guess. Thanks for
   174.18s  agent 발화 시작: My pleasure. It’s always rewarding to explore the details be
   174.24s  user  발화 끝
   179.22s  agent 발화 끝
