# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Show me buses from Chicago to Denver for three passengers on
     4.26s  <ret> 발화 (turn1 첫 프레임)
     4.58s  user  발화 끝
     4.66s  agent 발화 시작: <ret> Let's see what bus options are available… There are th
     5.46s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.36s]: (tool result) Three buses run from Chicago to Denver on May tenth: one
    13.93s  user  발화 시작: That ten PM one sounds good. Can you book it?
    14.12s  agent 발화 끝
    17.09s  <ret> 발화 (turn3 첫 프레임)
    17.33s  agent 발화 시작: <ret> Certainly, let me confirm the details… Your reservatio
    17.44s  user  발화 끝
    18.37s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.63s]: (tool result) Your reservation for three passengers on the 10:00 PM bu
    26.08s  agent 발화 끝
    26.47s  user  발화 시작: Great. And what's the weather like in Denver on that day?
    29.67s  <ret> 발화 (turn5 첫 프레임)
    29.70s  user  발화 끝
    29.83s  agent 발화 시작: <ret> Denver’s weather is always a good thing to know… It wi
    30.95s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.65s]: (tool result) The forecast for Denver on May tenth is sunny, with a hi
    38.36s  agent 발화 끝
    38.52s  user  발화 시작: Hmm, seventy-five— I mean, sixty-five sounds better.
    41.33s  <ret> 발화 (turn7 첫 프레임)
    41.73s  agent 발화 시작: <ret> Let me double-check that for you… The forecast remains
    41.76s  user  발화 끝
    41.83s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.88s]: (tool result) The forecast for Denver on May tenth is sunny, with a hi
    48.20s  user  발화 시작: Is there anything interesting to see near the bus station in
    48.32s  agent 발화 끝
    52.22s  <ret> 발화 (turn9 첫 프레임)
    52.30s  agent 발화 시작: <ret> Oh, Denver has so much to offer— The Denver Art Museum
    52.37s  user  발화 끝
    53.90s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.27s]: <ret>
    56.96s  user  발화 시작: Yeah.
    57.41s  user  발화 끝
    59.93s  agent 발화 시작: It's a truly exceptional collection.
    60.09s  agent 발화 끝
    62.33s  agent 발화 끝
    62.55s  user  발화 시작: Pre-Columbian art? Tell me more about that.
    65.79s  user  발화 끝
    65.81s  agent 발화 시작: Well, the museum holds a remarkable collection of ceramics a
    72.42s  user  발화 시작: And are there any guided tours focusing on those pieces?
    72.48s  agent 발화 끝
    75.72s  <ret> 발화 (turn15 첫 프레임)
    75.95s  agent 발화 시작: <ret> Guided tours are a wonderful way to experience the col
    76.12s  user  발화 끝
    77.48s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.70s]: (tool result) Guided tours of the Pre-Columbian collection at the Denv
    79.65s  agent 발화 끝
