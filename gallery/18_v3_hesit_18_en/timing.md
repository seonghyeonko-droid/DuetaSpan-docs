# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just reading about Pompeii… uh, and it made me wonder—
     7.19s  agent 발화 시작: That’s a very common question, especially when considering t
     7.41s  user  발화 끝
    12.39s  <ret> 발화 (turn2 첫 프레임)
    12.71s  agent 발화 시작: <ret> Let me quickly access the most recent data— The last c
    12.84s  agent 발화 끝
    14.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.11s]: <Mount Vesuvius last erupted in March 1944.>
    20.78s  user  발화 시작: Nineteen forty-four? Wow. That’s… relatively recent, I guess
    20.87s  agent 발화 끝
    28.48s  agent 발화 시작: The nineteen forty-four eruption was significant, but thankf
    28.52s  user  발화 끝
    37.45s  user  발화 시작: Wait, a Strombolian eruption— what exactly *is* that? Is tha
    38.17s  agent 발화 끝
    43.63s  agent 발화 시작: It’s a specific type of mild volcanic eruption—
    43.70s  user  발화 끝
    46.84s  <ret> 발화 (turn7 첫 프레임)
    47.07s  agent 발화 시작: <ret> Strombolian eruptions involve short, explosive bursts 
    47.15s  agent 발화 끝
    48.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.34s]: <Strombolian eruptions are characterized by short-lived, explosive bur
    55.42s  agent 발화 끝
    55.96s  user  발화 시작: Okay, so less… city-destroying, more… fireworks?
    59.94s  agent 발화 시작: [laugh] A somewhat apt comparison, yes. It caused some damag
    60.03s  user  발화 끝
    68.52s  agent 발화 끝
