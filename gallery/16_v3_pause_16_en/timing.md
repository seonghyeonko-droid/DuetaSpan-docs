# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was reading this book, and it mentioned “Big Brother”.
     3.93s  agent 발화 시작: That’s a fascinating phrase—it’s become so ingrained in our 
     4.02s  user  발화 끝
     7.80s  agent 발화 끝
     7.85s  user  발화 시작: It really has… but where did the name actually come from?
    11.60s  <ret> 발화 (turn3 첫 프레임)
    11.76s  agent 발화 시작: <ret> Let’s explore the origins of that striking term… The p
    11.86s  user  발화 끝
    13.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.69s]: The term "Big Brother" originates from the title of George Orwell's dy
    21.45s  agent 발화 끝
    21.50s  user  발화 시작: Nineteen Eighty-Four… I’ve heard of it, of course, but…
    24.64s  user  발화 끝
    25.05s  agent 발화 시작: It’s a truly seminal work, exploring themes of surveillance 
    30.03s  user  발화 시작: …I always assumed it was some historical reference, or—
    30.05s  agent 발화 끝
    33.11s  <ret> 발화 (turn7 첫 프레임)
    33.51s  agent 발화 시작: <ret> Actually, the inspiration was quite personal for Orwel
    33.63s  user  발화 끝
    34.15s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.82s]: Orwell stated he based the concept on memories of the British class sy
    42.69s  agent 발화 끝
    42.77s  user  발화 시작: So it wasn’t about a real person, then?
    45.65s  agent 발화 시작: That's a very good question—
    45.73s  user  발화 끝
    47.72s  user  발화 시작: I mean…
    47.78s  agent 발화 끝
    48.40s  user  발화 끝
    48.97s  user  발화 시작: …was there anyone Orwell specifically based “Big Brother” on
    53.49s  <ret> 발화 (turn12 첫 프레임)
    53.55s  user  발화 끝
    53.57s  agent 발화 시작: <ret> It wasn’t a direct portrait of one individual, precise
    54.77s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.87s]: While no single person inspired the figure, some scholars suggest Stal
    62.81s  user  발화 시작: Stalin? That’s… a pretty dark connection.
    63.03s  agent 발화 끝
    66.44s  agent 발화 시작: The novel certainly reflects the anxieties of its time, does
    66.55s  user  발화 끝
    70.14s  agent 발화 끝
    70.76s  user  발화 시작: It does. It makes you think about how easily things can slid
    75.03s  agent 발화 시작: Indeed. Constant vigilance is essential to protecting freedo
    75.16s  user  발화 끝
    79.38s  agent 발화 끝
    79.78s  user  발화 시작: You know, it’s funny how a novel can create a phrase that la
    84.22s  user  발화 끝
    84.54s  agent 발화 시작: Language is a powerful thing; stories shape our understandin
    89.31s  agent 발화 끝
