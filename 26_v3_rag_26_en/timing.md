# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just looking at flags, and I’m trying to remember… is 
     4.75s  agent 발화 시작: That’s a rather striking combination of colours, actually.
     4.90s  user  발화 끝
     8.15s  <ret> 발화 (turn2 첫 프레임)
     8.39s  agent 발화 시작: <ret> Let’s see if I can recall a flag… The German flag is c
     8.41s  agent 발화 끝
     9.67s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.07s]: The flag of Germany features three horizontal bands of black, red, and
    12.34s  user  발화 시작: Yeah.
    12.79s  user  발화 끝
    16.46s  agent 발화 끝
    16.66s  user  발화 시작: Oh, right! Germany. I knew it was a European country, but I 
    21.10s  user  발화 끝
    21.52s  agent 발화 시작: It’s understandable to misplace such details; so many nation
    28.49s  <ret> 발화 (turn6 첫 프레임)
    28.80s  agent 발화 시작: <ret> The history of that flag is quite interesting… Those c
    28.89s  agent 발화 끝
    30.33s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.25s]: The black, red, and gold colours of the German flag were adopted durin
    37.67s  user  발화 시작: Eighteen forty-eight… that was a busy year in Europe, wasn’t
    37.75s  agent 발화 끝
    42.32s  agent 발화 시작: Indeed. A period of significant upheaval and shifting politi
    42.52s  user  발화 끝
    48.13s  <ret> 발화 (turn9 첫 프레임)
    48.52s  agent 발화 시작: <ret> The symbolism behind those colours… The colours repres
    48.57s  agent 발화 끝
    49.25s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.36s]: Black represented defeat, red stood for bloodshed, and gold symbolized
    57.01s  agent 발화 끝
