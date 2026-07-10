# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Julia",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-05-27",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "home",
#       "text": "User's home address is 393 Maple Drive."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was wondering… | S2 …And was he involved in any other  | S3 That’s fascinating. Did Rice write | S4 Wow, that's intense. I can imagine

     0.00s  user  발화 시작: I was wondering…
     1.24s  user  발화 끝
     2.87s  user  발화 시작: …who actually wrote the lyrics for “Jesus Christ Superstar”?
     5.68s  <ret> 발화 (turn2 첫 프레임)
     5.99s  agent 발화 시작: <ret> Tim Rice is the lyricist behind “Jesus Christ Supersta
     6.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.02s]: Tim Rice wrote the lyrics for the 1970 rock opera “Jesus Christ Supers
     6.24s  user  발화 끝
    13.47s  user  발화 시작: Yeah.
    13.87s  user  발화 끝
    16.01s  agent 발화 끝
    16.17s  user  발화 시작: Oh, okay.…
    16.89s  user  발화 끝
    18.82s  user  발화 시작: …And was he involved in any other big musicals?
    21.43s  <ret> 발화 (turn6 첫 프레임)
    21.83s  agent 발화 시작: <ret> Yes, Tim Rice has a pretty extensive catalogue! He’s a
    21.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.18s]: Tim Rice has collaborated on numerous successful musicals, including “
    22.06s  user  발화 끝
    33.01s  agent 발화 끝
    33.20s  user  발화 시작: “Evita”, right. I remember that one. But… uhhh…
    36.62s  <ret> 발화 (turn8 첫 프레임)
    36.67s  user  발화 끝
    36.78s  agent 발화 시작: <ret> Hmm, it seems I don't have information on what you wer
    36.78s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.95s]: (no information found)
    41.73s  agent 발화 끝
    42.58s  user  발화 시작: …was Andrew Lloyd Webber also involved with those?
    45.69s  agent 발화 시작: Andrew Lloyd Webber was, of course, his frequent collaborato
    45.91s  user  발화 끝
    49.83s  user  발화 시작: Uh-huh.
    50.32s  user  발화 끝
    53.29s  agent 발화 끝
    53.39s  user  발화 시작: That’s fascinating. Did Rice write the lyrics first, or did 
    57.90s  <ret> 발화 (turn13 첫 프레임)
    57.98s  agent 발화 시작: <ret> Andrew Lloyd Webber had the initial concept for “Jesus
    57.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.90s]: Andrew Lloyd Webber initially approached Tim Rice with the concept for
    58.16s  user  발화 끝
    62.21s  user  발화 시작: Yeah.
    62.61s  user  발화 끝
    68.66s  user  발화 시작: So, Webber came up with the idea.
    68.88s  agent 발화 끝
    70.78s  agent 발화 시작: –and then, well, he and Tim Rice spent a lot of time debatin
    70.91s  user  발화 끝
    78.93s  user  발화 시작: …did they face any controversy when it first came out?
    79.63s  agent 발화 끝
    81.50s  <ret> 발화 (turn18 첫 프레임)
    81.73s  agent 발화 시작: <ret> Yes, it actually did! “Jesus Christ Superstar” sparked
    81.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=15.96s]: “Jesus Christ Superstar” faced significant controversy upon its 1970 r
    81.88s  user  발화 끝
    92.85s  user  발화 시작: Yeah.
    93.25s  user  발화 끝
    97.53s  user  발화 시작: Wow, that's intense. I can imagine.
    97.69s  agent 발화 끝
    99.97s  user  발화 끝
   100.01s  agent 발화 시작: It certainly challenged a lot of expectations at the time, b
   108.21s  user  발화 시작: Yeah, probably. I’ve been meaning to listen to it again.
   108.26s  agent 발화 끝
   111.45s  agent 발화 시작: That sounds lovely. Reconnecting with art that moves you can
   111.63s  user  발화 끝
   119.88s  agent 발화 끝
