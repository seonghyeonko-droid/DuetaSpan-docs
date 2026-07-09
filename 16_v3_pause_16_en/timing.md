# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 So, I was reading this book… | S2 … I always thought it was just a g | S3 Did Orwell intend it to be about a | S4 I wonder if he would be surprised 

     0.00s  user  발화 시작: So, I was reading this book…
     2.58s  user  발화 끝
     3.14s  user  발화 시작: …and it mentioned “Big Brother”.
     4.92s  agent 발화 시작: That’s a fascinating cultural reference, actually.
     5.03s  user  발화 끝
     7.88s  agent 발화 끝
     7.95s  user  발화 시작: I’ve heard the phrase a lot, like, for surveillance…
    11.00s  <ret> 발화 (turn4 첫 프레임)
    11.13s  user  발화 끝
    11.16s  agent 발화 시작: <ret> Let’s explore the origin of that term. It comes from G
    12.92s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.14s]: The term "Big Brother" originates from George Orwell's dystopian novel
    17.52s  user  발화 시작: Yeah, yeah.
    18.94s  user  발화 끝
    19.69s  agent 발화 끝
    20.42s  user  발화 시작: … I always thought it was just a general thing, you know…
    23.14s  user  발화 끝
    23.85s  user  발화 시작: …like, a modern invention, but a book? That's interesting.
    28.89s  agent 발화 시작: It’s quite striking how literature can shape our language.
    28.89s  user  발화 끝
    30.08s  user  발화 시작: Mm-hmm.
    30.52s  user  발화 끝
    32.17s  agent 발화 끝
    32.23s  user  발화 시작: Did Orwell intend it to be about actual surveillance, or was
    37.80s  <ret> 발화 (turn11 첫 프레임)
    37.96s  agent 발화 시작: <ret> Orwell’s intention is a complex topic. The idea came f
    38.01s  user  발화 끝
    38.76s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.21s]: Orwell stated the concept was inspired by a poster from World War II p
    42.38s  user  발화 시작: Yeah.
    42.87s  user  발화 끝
    47.90s  user  발화 시작: So, it started as a patriotic thing, then turned into someth
    47.93s  agent 발화 끝
    52.95s  user  발화 끝
    53.03s  agent 발화 시작: Exactly—the meaning shifted with the context of his novel.
    54.35s  user  발화 시작: Mm-hmm.
    54.85s  user  발화 끝
    56.30s  user  발화 시작: [laugh] That’s ironic, isn’t it?
    56.45s  agent 발화 끝
    60.31s  agent 발화 시작: It is a rather poignant twist, when you consider it.
    60.47s  user  발화 끝
    63.27s  agent 발화 끝
    63.75s  user  발화 시작: I wonder if he would be surprised by how often it’s used now
    67.72s  <ret> 발화 (turn19 첫 프레임)
    67.88s  agent 발화 시작: <ret> It's hard to say what Orwell would think today. His no
    68.06s  user  발화 끝
    69.48s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.30s]: *Nineteen Eighty-Four* has sold over fifty million copies worldwide si
    74.52s  user  발화 시작: Mm-hmm.
    75.24s  user  발화 끝
    77.37s  user  발화 시작: Wow, fifty million. That’s… a lot of readers.
    77.42s  agent 발화 끝
    81.54s  user  발화 끝
    81.57s  agent 발화 시작: It's certainly had a lasting impact on how we think.
    84.48s  agent 발화 끝
