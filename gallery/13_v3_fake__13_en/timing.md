# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was wondering who owns the South Point Casino in Las Vegas
     3.68s  agent 발화 시작: That’s a fine question. It's a popular spot with locals, you
     3.70s  user  발화 끝
     6.26s  <ret> 발화 (turn2 첫 프레임)
     6.66s  ⚡SPAN 주입 [d'=0.40s / d_lead=0.71s]: Michael Gaughan currently owns the South Point Casino, Hotel, Spa, and
     6.86s  agent 발화 시작: <ret> Let’s see… Michael Gaughan is the current owner of the
     6.91s  agent 발화 끝
    12.65s  user  발화 시작: Hmm. And how long has he owned it?
    12.88s  agent 발화 끝
    14.88s  agent 발화 시작: Gaughan’s been a fixture in Vegas gaming for decades, a real
    15.04s  user  발화 끝
    18.68s  <ret> 발화 (turn5 첫 프레임)
    19.05s  agent 발화 끝
    19.28s  agent 발화 시작: <ret> I believe I can pinpoint that for you. Michael Gaughan
    19.68s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.18s]: Michael Gaughan purchased the South Point Hotel, Casino & Spa in 2006.
    24.19s  agent 발화 끝
    24.48s  user  발화 시작: Right.
    24.98s  user  발화 끝
    25.12s  agent 발화 시작: He really saw potential in that location, a bit off the stri
    27.82s  <ret> 발화 (turn8 첫 프레임)
    28.41s  agent 발화 시작: <ret> Now, about his other properties… Before South Point, G
    28.82s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.70s]: Prior to South Point, Gaughan owned Coast Casinos, which he sold in 20
    28.91s  agent 발화 끝
    34.68s  user  발화 시작: So he used the money from Coast Casinos—
    34.85s  agent 발화 끝
    37.22s  user  발화 끝
    37.34s  agent 발화 시작: He certainly leveraged—
    38.27s  user  발화 시작: …did he build the South Point himself, or was it already the
    38.95s  agent 발화 끝
    41.82s  user  발화 끝
    42.23s  agent 발화 시작: That’s a very insightful question, actually. It wasn’t a com
    44.98s  <ret> 발화 (turn13 첫 프레임)
    45.57s  agent 발화 시작: <ret> Let me clarify the development history. The Greenspun 
    45.79s  agent 발화 끝
    45.94s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.27s]: The South Point was originally built in 2005 by the Greenspun Corporat
    52.38s  user  발화 시작: Oh, so Gaughan bought it after it was built.
    52.39s  agent 발화 끝
    54.10s  <ret> 발화 (turn15 첫 프레임)
    54.69s  agent 발화 시작: <ret> Precisely. A smart acquisition, I think. He improved i
    54.92s  user  발화 끝
    55.10s  ⚡SPAN 주입(IRRELEVANT) [d'=1.00s / d_lead=3.84s]: (tool result) Driving directions from the South Point Hotel Casino Spa
    58.31s  agent 발화 시작: He has a real knack for understanding what gamblers want.
    58.53s  agent 발화 끝
    60.22s  <ret> 발화 (turn17 첫 프레임)
    60.82s  agent 발화 시작: <ret> It’s interesting to note, though… Jack Gaughan, Michae
    61.22s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.10s]: Michael Gaughan’s father, Jack Gaughan, was also a prominent Las Vegas
    61.36s  agent 발화 끝
    68.38s  agent 발화 끝
    68.57s  user  발화 시작: So it’s a family business, then?
    70.55s  user  발화 끝
    70.86s  agent 발화 시작: In a way, yes. A legacy, you might say. A musical lineage, i
    75.21s  agent 발화 끝
