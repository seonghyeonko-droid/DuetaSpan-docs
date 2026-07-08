# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just reading about Pompeii and… uh… it made me wonder,
     6.16s  <ret> 발화 (turn1 첫 프레임)
     6.40s  agent 발화 시작: <ret> That’s a very natural question after considering the h
     6.62s  user  발화 끝
     8.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.05s]: Mount Vesuvius last erupted in March of 1944.
    11.32s  agent 발화 시작: The last eruption of Mount Vesuvius occurred in March ninete
    11.45s  agent 발화 끝
    16.63s  user  발화 시작: Nineteen forty-four… wow. Was that a big one, like… like the
    16.78s  agent 발화 끝
    21.76s  <ret> 발화 (turn4 첫 프레임)
    21.99s  agent 발화 시작: <ret> It wasn't on the scale of the seventy-nine eruption, t
    22.14s  user  발화 끝
    23.20s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.35s]: The 1944 eruption was characterized by lava flows and Strombolian acti
    26.20s  agent 발화 시작: The nineteen forty-four eruption primarily involved lava flo
    26.34s  agent 발화 끝
    33.06s  agent 발화 끝
    33.91s  user  발화 시작: Strombolian… what does that even mean? Is that—
    37.75s  user  발화 끝
    37.85s  agent 발화 시작: Strombolian eruptions are relatively mild explosions—
    41.72s  user  발화 시작: But did anyone live near it then? Like, were people still li
    42.39s  agent 발화 끝
    46.77s  <ret> 발화 (turn9 첫 프레임)
    47.00s  user  발화 끝
    47.01s  agent 발화 시작: <ret> That’s a crucial detail to understand the impact.
    47.81s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.23s]: Approximately three thousand people lived on the slopes of Vesuvius in
    50.21s  agent 발화 시작: Around three thousand people resided on the slopes of Vesuvi
    50.25s  agent 발화 끝
    56.92s  agent 발화 끝
    57.27s  user  발화 시작: Three thousand… that’s… a lot. So they must have evacuated?
    62.60s  agent 발화 시작: Yes, there was a significant evacuation prior to and during 
    62.73s  user  발화 끝
    68.20s  agent 발화 끝
