# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Do you know who wrote “My Love, My | S2 So, he wrote songs for both ABBA a | S3 That’s amazing. What other musical | S4 Oh, so it’s mostly performed in Sw

     0.00s  user  발화 시작: Do you know who wrote “My Love, My Life” from Mamma Mia? It’
     4.50s  <ret> 발화 (turn1 첫 프레임)
     4.72s  user  발화 끝
     4.74s  agent 발화 시작: <ret> That’s a lovely question, and a very popular one. Björ
     6.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.75s]: Björn Ulvaeus wrote “My Love, My Life” as part of the musical *Chess*.
    14.66s  user  발화 시작: Oh, *Chess*! I’ve never heard of that. Was he in ABBA too?
    14.75s  agent 발화 끝
    18.97s  user  발화 끝
    19.15s  agent 발화 시작: Yes, he was! Björn Ulvaeus was one of the founding members o
    21.96s  user  발화 시작: Yeah.
    22.60s  user  발화 끝
    25.62s  user  발화 시작: So, he wrote songs for both ABBA and this *Chess* musical?
    25.82s  agent 발화 끝
    29.36s  <ret> 발화 (turn6 첫 프레임)
    29.51s  agent 발화 시작: <ret> He certainly had a very productive songwriting career.
    29.65s  user  발화 끝
    31.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.79s]: Benny Andersson also co-wrote many songs with Björn Ulvaeus for ABBA.
    33.36s  user  발화 시작: Oh.
    34.00s  user  발화 끝
    39.95s  agent 발화 끝
    40.25s  user  발화 시작: That’s amazing. What other musicals did he work on?
    43.01s  <ret> 발화 (turn9 첫 프레임)
    43.25s  agent 발화 시작: <ret> He's remained involved in musical theatre, but *Chess*
    43.47s  user  발화 끝
    45.01s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.30s]: (tool result) AAPL closed at 170.34, up 0.82 points.
    46.78s  user  발화 시작: Uh-huh.
    47.14s  user  발화 끝
    49.38s  agent 발화 시작: He also contributed to the musical *Kristina from Duvemåla*,
    49.55s  agent 발화 끝
    55.49s  agent 발화 끝
    56.23s  user  발화 시작: I’ve never heard of that one either— is it in English?
    58.52s  <ret> 발화 (turn13 첫 프레임)
    58.68s  agent 발화 시작: <ret> It's a production with a fascinating history. *Kristin
    58.90s  user  발화 끝
    59.48s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.38s]: *Kristina from Duvemåla* is a Swedish musical with music by Benny Ande
    69.30s  agent 발화 끝
    69.88s  user  발화 시작: Oh, so it’s mostly performed in Sweden then?
    72.29s  agent 발화 시작: Primarily, yes. It tells a story of Swedish emigration to Am
    72.37s  user  발화 끝
    78.68s  agent 발화 끝
