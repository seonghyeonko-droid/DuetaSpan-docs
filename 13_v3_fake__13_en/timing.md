# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Casey · Location: London, United Kingdom · Nationality: British · Gender: non-binary · Age: early 30s · TZ: Europe/London (GMT, UTC+0) · Currency: GBP (£)
#   B. 저장 메모리:
#      [2026-05-08] User is into rock climbing.
#      [2026-04-03] User has a tabby cat named Luna.
#      [2026-03-10] User works as a nurse.
#      [2026-01-26] User's home address is 203 Birch Road.
#   B. 과거 대화 요약:
#      [2026-07-22] Planning a birthday dinner — party of six; looking for outdoor seating
#      [2026-07-04] Setting up a home network — asked about mesh routers; coverage for a 3-story house
#      [2026-06-26] Comparing gym memberships — wants a pool; close to the office

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, when is Demi | S2 Hmm. Is that a really different so | S3 And was that tour… successful? | S4 So, is she working on anything new

     0.00s  user  발화 시작: I was just wondering, when is Demi Lovato releasing her new 
     4.80s  <ret> 발화 (turn1 첫 프레임)
     4.86s  user  발화 끝
     5.03s  agent 발화 시작: <ret> It’s wonderful you’re looking forward to new music; it
     6.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: Demi Lovato's fifth studio album, *Confident*, was released in October
     9.99s  agent 발화 시작: Her album, *Confident*, came out in October of twenty fiftee
    10.03s  agent 발화 끝
    12.46s  user  발화 시작: Uh-huh.
    12.96s  user  발화 끝
    13.50s  user  발화 시작: Oh, okay. So that's the most recent one?
    13.84s  agent 발화 끝
    16.34s  <ret> 발화 (turn5 첫 프레임)
    16.66s  agent 발화 시작: <ret> Not necessarily the most recent, but a significant rel
    16.83s  user  발화 끝
    16.90s  ⚡SPAN 주입 [d'=0.56s / d_lead=5.33s]: Demi Lovato released *Dancing with the Devil... the Art of Staying Ali
    21.82s  agent 발화 시작: She released *Dancing with the Devil... the Art of Staying A
    21.99s  agent 발화 끝
    27.94s  user  발화 시작: Hmm. Is that a really different sound from *Confident*?
    28.30s  agent 발화 끝
    31.31s  <ret> 발화 (turn8 첫 프레임)
    31.37s  user  발화 끝
    31.47s  agent 발화 시작: <ret> Often artists evolve their sound with each project—it’
    33.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: *Confident* is a pop album with elements of electronic dance music and
    36.80s  agent 발화 시작: *Confident* blends pop with electronic dance music and R&B e
    36.94s  agent 발화 끝
    39.71s  user  발화 시작: Uh-huh.
    40.16s  user  발화 끝
    41.61s  agent 발화 시작: It’s interesting how sound can reflect where we are in our l
    41.80s  agent 발화 끝
    46.70s  user  발화 시작: Has she toured much since then, since twenty twenty-one?
    47.45s  agent 발화 끝
    50.73s  <ret> 발화 (turn13 첫 프레임)
    51.05s  agent 발화 시작: <ret> That’s a very good question, focusing on the live expe
    51.14s  user  발화 끝
    52.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.04s]: Demi Lovato embarked on the Holy Fvck Tour in 2022, with dates running
    57.89s  agent 발화 시작: She toured with the Holy Fvck Tour in twenty twenty-two, unt
    58.09s  agent 발화 끝
    62.65s  agent 발화 끝
    64.49s  user  발화 시작: And was that tour… successful?
    67.41s  user  발화 끝
    67.45s  <ret> 발화 (turn16 첫 프레임)
    67.52s  agent 발화 시작: <ret> Success takes many forms, doesn’t it? Sometimes it’s a
    69.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.78s]: The Holy Fvck Tour grossed over $92 million, with an attendance of ove
    75.27s  agent 발화 시작: The Holy Fvck Tour grossed over ninety-two million dollars w
    75.30s  agent 발화 끝
    78.74s  user  발화 시작: Mm-hmm.
    79.42s  user  발화 끝
    81.83s  agent 발화 끝
    82.08s  user  발화 시작: Wow, that *is* successful!
    84.33s  <ret> 발화 (turn20 첫 프레임)
    84.62s  user  발화 끝
    84.63s  agent 발화 시작: <ret> It’s inspiring to see artists connect with so many peo
    86.33s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.82s]: The average lifespan of a red blood cell is approximately 120 days.
    89.45s  agent 발화 시작: I find that focusing on the positive outcomes, like Demi’s t
    89.45s  agent 발화 끝
    92.25s  user  발화 시작: Mm-hmm.
    92.80s  user  발화 끝
    95.42s  agent 발화 끝
    95.64s  user  발화 시작: So, is she working on anything new now?
    98.54s  <ret> 발화 (turn24 첫 프레임)
    98.77s  agent 발화 시작: <ret> It’s wonderful to look ahead and anticipate what's com
    98.88s  user  발화 끝
   100.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: Demi Lovato began working on a new album in early 2023, with a release
   103.90s  agent 발화 시작: She began working on a new album in early twenty twenty-thre
   103.91s  agent 발화 끝
   109.78s  agent 발화 끝
