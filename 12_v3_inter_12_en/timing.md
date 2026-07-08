# v3_inter_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Where does the Great Wall of China actually end? I’ve heard 
     2.79s  <ret> 발화 (turn1 첫 프레임)
     3.39s  agent 발화 시작: <ret> That’s a surprisingly complex question, actually.
     3.52s  user  발화 끝
     3.79s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.77s]: The Great Wall of China stretches over ten thousand li, ending at Lop 
     7.96s  agent 발화 시작: The westernmost end of the Great Wall is located at Lop Lake
     8.16s  agent 발화 끝
     9.48s  user  발화 시작: Lop Lake? I’ve never heard of it. What’s that like?
     9.57s  agent 발화 끝
    13.49s  <ret> 발화 (turn4 첫 프레임)
    14.09s  agent 발화 시작: <ret> It’s a rather desolate place, honestly.
    14.15s  user  발화 끝
    14.49s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.88s]: Lop Lake is a salt lake located in the Taklamakan Desert, Gansu Provin
    15.97s  agent 발화 끝
    16.00s  agent 발화 시작: It’s quite remote. Lop Lake sits within the Taklamakan Deser
    20.02s  agent 발화 끝
    20.34s  user  발화 시작: Taklamakan Desert… sounds… uh, pretty intense. Is it still s
    22.92s  user  발화 끝
    23.29s  agent 발화 시작: The sections near Lop Lake are—
    27.68s  user  발화 시작: But is it *visible*? Like, can you actually *see* the wall e
    28.34s  agent 발화 끝
    30.93s  <ret> 발화 (turn9 첫 프레임)
    31.54s  agent 발화 시작: <ret> That’s a good clarification. Erosion and sandstorms ha
    31.70s  user  발화 끝
    31.73s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.42s]: Erosion and sandstorms have significantly damaged the wall’s remains n
    38.62s  agent 발화 끝
    38.87s  user  발화 시작: Oh, wow. So it’s mostly just… ruins? That’s kind of sad.
    40.49s  agent 발화 시작: It is a poignant reminder of time's power, isn't it? I’ve se
    40.66s  user  발화 끝
    47.44s  agent 발화 끝
