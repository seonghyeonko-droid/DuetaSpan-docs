# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just reading about Pompeii, and uh, it got me wonderin
     7.34s  <ret> 발화 (turn1 첫 프레임)
     7.57s  agent 발화 시작: <ret> That’s a very natural question when considering the hi
     7.83s  user  발화 끝
     9.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.04s]: Mount Vesuvius last erupted in March of 1944.
    12.49s  agent 발화 시작: The last confirmed eruption of Mount Vesuvius occurred in Ma
    12.61s  agent 발화 끝
    18.29s  user  발화 시작: Nineteen forty-four… wow. That's… relatively recent, I guess
    18.41s  agent 발화 끝
    24.99s  <ret> 발화 (turn4 첫 프레임)
    25.22s  agent 발화 시작: <ret> The scale of eruptions varies considerably, and the ni
    25.38s  user  발화 끝
    26.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: The 1944 eruption was Strombolian, producing lava flows and ash, but n
    33.77s  agent 발화 시작: The nineteen forty-four eruption was Strombolian in style, r
    33.89s  agent 발화 끝
    44.57s  agent 발화 끝
    45.38s  user  발화 시작: Strombolian… what does that even mean? Is that—
    48.42s  user  발화 끝
    48.52s  agent 발화 시작: It refers to a specific type of eruption characterized by in
    54.28s  user  발화 시작: So, no huge cloud of ash and pumice like in seventy-nine AD 
    54.97s  agent 발화 끝
    59.62s  <ret> 발화 (turn9 첫 프레임)
    59.79s  user  발화 끝
    59.85s  agent 발화 시작: <ret> Precisely. The seventy-nine AD eruption was Plinian, a
    60.74s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.95s]: Plinian eruptions are characterized by sustained columns of gas and as
    66.73s  agent 발화 시작: Plinian eruptions, like the one in seventy-nine AD, involve 
    66.81s  agent 발화 끝
    77.39s  agent 발화 끝
    77.80s  user  발화 시작: Okay, that makes more sense. And is it still… active, then? 
    82.95s  agent 발화 시작: Yes, Vesuvius is considered an active volcano, and it is con
    83.12s  user  발화 끝
    91.02s  agent 발화 끝
