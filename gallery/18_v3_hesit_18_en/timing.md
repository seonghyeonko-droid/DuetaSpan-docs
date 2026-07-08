# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just reading about Pompeii, and it got me thinking… wh
     7.77s  <ret> 발화 (turn1 첫 프레임)
     8.01s  agent 발화 시작: <ret> That’s a very important question, considering the area
     8.20s  user  발화 끝
     9.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.91s]: Mount Vesuvius last erupted in March of 1944.
    17.84s  agent 발화 끝
    19.26s  user  발화 시작: Wow, nineteen forty-four. That’s… relatively recent, actuall
    25.23s  user  발화 끝
    25.27s  agent 발화 시작: It was considerably smaller than the seventy-nine eruption, 
    34.41s  agent 발화 끝
    35.27s  user  발화 시작: Right, Pompeii. But—
    36.63s  agent 발화 시작: The nineteen forty-four eruption primarily affected the area
    36.64s  user  발화 끝
    41.55s  user  발화 시작: Did anyone die in nineteen forty-four? That’s what I really 
    42.24s  agent 발화 끝
    45.07s  <ret> 발화 (turn7 첫 프레임)
    45.12s  user  발화 끝
    45.22s  agent 발화 시작: <ret> That’s a very direct question, and a crucial one to as
    47.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: The 1944 eruption caused fifty-two deaths.
    50.71s  agent 발화 시작: The nineteen forty-four eruption unfortunately resulted in f
    50.82s  agent 발화 끝
    56.27s  agent 발화 끝
    56.68s  user  발화 시작: Fifty-two… that’s still terrible. So, it’s still active then
    61.84s  agent 발화 시작: Absolutely. Vesuvius is classified as an active volcano, and
    62.00s  user  발화 끝
    70.37s  agent 발화 끝
