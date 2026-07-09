# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hey, I was wondering, when is Demi Lovato’s new album coming
     7.18s  user  발화 끝
     7.20s  agent 발화 시작: Oh, you’re asking about Demi Lovato’s release schedule. It’s
    13.06s  <ret> 발화 (turn2 첫 프레임)
    13.30s  agent 발화 시작: <ret> Let me quickly check the details for you… Her album, *
    13.31s  agent 발화 끝
    14.74s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.87s]: Demi Lovato’s album, *Confident*, was released in October 2015.
    18.09s  user  발화 시작: Exactly.
    18.91s  user  발화 끝
    20.48s  agent 발화 끝
    20.61s  user  발화 시작: October, huh? That’s pretty soon. I completely missed that!
    24.63s  agent 발화 시작: It does seem to sneak up on you sometimes, doesn’t it? Album
    24.82s  user  발화 끝
    27.85s  user  발화 시작: Yeah.
    28.39s  user  발화 끝
    30.32s  agent 발화 끝
    32.44s  user  발화 시작: Are there any singles released before the album?
    35.13s  <ret> 발화 (turn8 첫 프레임)
    35.21s  agent 발화 시작: <ret> I can certainly look into what singles preceded the al
    35.36s  user  발화 끝
    36.81s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.22s]: The lead single, “Cool for the Summer”, was released on July 1, 2015.
    38.31s  user  발화 시작: Yeah.
    38.94s  user  발화 끝
    42.62s  agent 발화 끝
    42.99s  user  발화 시작: Oh, yeah! I remember that song! It was all over the radio.
    46.76s  <ret> 발화 (turn11 첫 프레임)
    46.91s  agent 발화 시작: <ret> [laugh] It really was quite catchy, wasn’t it? A very 
    47.01s  user  발화 끝
    48.17s  user  발화 시작: Okay.
    48.76s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=3.93s]: (tool result) AAPL: 170.34, +0.25, 0.15%
    48.81s  user  발화 끝
    50.84s  agent 발화 끝
    51.49s  user  발화 시작: I think so. I'm a big fan. What kind of music is it?
    55.14s  agent 발화 시작: *Confident* is generally considered pop, but it has elements
    55.24s  user  발화 끝
    61.03s  agent 발화 끝
    61.22s  user  발화 시작: Interesting. Is it a big departure from her previous work?
    64.27s  <ret> 발화 (turn16 첫 프레임)
    64.66s  agent 발화 시작: <ret> That’s a good question, comparing it to her earlier al
    64.87s  user  발화 끝
    65.23s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.31s]: *Confident* is seen as a more mature and experimental album than Lovat
    69.00s  user  발화 시작: Yeah.
    69.50s  user  발화 끝
    71.83s  user  발화 시작: Oh, okay. That makes sense. Thanks for the info!
    72.27s  agent 발화 끝
    76.09s  user  발화 끝
    76.51s  agent 발화 시작: You’re very welcome! I’m glad I could help you with the albu
    81.65s  agent 발화 끝
