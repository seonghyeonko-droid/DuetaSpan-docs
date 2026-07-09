# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: David · Location: London, United Kingdom · Nationality: British · Gender: male · Age: early 30s · TZ: Europe/London (GMT, UTC+0) · Currency: GBP (£)
#   B. 저장 메모리:
#      [2026-06-05] User is gluten-free.
#      [2026-05-20] User is planning a trip to Kyoto in March.
#      [2026-03-07] User's favorite cuisine is Italian.
#      [2026-02-07] User has a Golden Retriever named Max.
#   B. 과거 대화 요약:
#      [2026-07-22] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han

# EXAMINER(FDB-v2) 단계: S1 I was just listening to Mamma Mia  | S2 Yeah, it is. Um, what other musica | S3 Oh, is Benny Andersson involved in | S4 So, ABBA and *Chess* and… anything

     0.00s  user  발화 시작: I was just listening to Mamma Mia and I’m curious… who wrote
     4.71s  <ret> 발화 (turn1 첫 프레임)
     4.91s  user  발화 끝
     4.93s  agent 발화 시작: <ret> That’s a lovely song, and a good question. It was Björ
     6.46s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.12s]: Björn Ulvaeus wrote “My Love, My Life” for the musical *Chess*.
    12.64s  user  발화 시작: Oh, *Chess*! I didn't know it wasn't originally a Mamma Mia 
    12.72s  agent 발화 끝
    17.17s  user  발화 끝
    17.40s  agent 발화 시작: It’s fascinating how songs find new life in different produc
    21.60s  agent 발화 끝
    21.72s  user  발화 시작: Yeah, it is. Um, what other musicals did he work on?
    25.75s  <ret> 발화 (turn5 첫 프레임)
    25.90s  agent 발화 시작: <ret> Björn Ulvaeus has quite a musical background. He co-wr
    26.03s  user  발화 끝
    27.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.41s]: Björn Ulvaeus co-wrote *Kristina from Duvemåla* with Benny Andersson a
    34.66s  agent 발화 끝
    35.69s  user  발화 시작: That’s a mouthful! Is that one well-known?
    38.38s  <ret> 발화 (turn7 첫 프레임)
    38.62s  agent 발화 시작: <ret> It’s quite popular in Sweden, though perhaps less fami
    38.79s  user  발화 끝
    40.38s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.44s]: (tool result) AAPL: 170.34 +0.45 (0.26%)
    45.05s  agent 발화 끝
    46.68s  user  발화 시작: Oh, is Benny Andersson involved in that one too?
    48.94s  user  발화 시작: I— I mean, you just mentioned him, but is he a frequent coll
    49.13s  user  발화 끝
    52.80s  agent 발화 시작: Yes, Benny Andersson and Björn Ulvaeus are a very famous son
    52.97s  user  발화 끝
    55.58s  user  발화 시작: Yeah.
    56.35s  user  발화 끝
    59.02s  user  발화 시작: So, ABBA and *Chess* and… anything else big?
    59.42s  agent 발화 끝
    63.53s  agent 발화 시작: They also created the music for *Buddy – The Musical*, a tri
    63.56s  user  발화 끝
    69.88s  agent 발화 끝
