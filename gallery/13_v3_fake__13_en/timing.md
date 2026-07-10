# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Casey",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-11",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "home",
#       "text": "User's home address is 203 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 When does Demi Lovato's new album  | S2 …did it chart well, internationall | S3 …I remember that one. | S4 Absolutely. I'm trying to find tha

     0.00s  user  발화 시작: When does Demi Lovato's new album come out? 2015, I think?
     5.04s  user  발화 끝
     5.18s  <ret> 발화 (turn1 첫 프레임)
     5.39s  agent 발화 시작: <ret> The term comes from October, specifically the sixteent
     5.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: Demi Lovato’s fifth studio album, “Confident”, was released on October
    14.05s  user  발화 시작: Oh, okay. And what kind of music is on it?
    14.06s  agent 발화 끝
    17.08s  agent 발화 시작: It’s primarily a pop album, but incorporates elements of R&B
    17.19s  user  발화 끝
    25.09s  agent 발화 끝
    25.68s  user  발화 시작: Hmm, sounds interesting.
    27.17s  <ret> 발화 (turn5 첫 프레임)
    27.49s  agent 발화 시작: <ret> It features collaborations with some really talented a
    27.49s  ⚡SPAN 주입 [d'=0.56s / d_lead=6.48s]: The album features collaborations with Max Martin, Ryan Tedder, and Mi
    27.62s  user  발화 끝
    33.21s  user  발화 시작: …did it chart well, internationally?
    33.97s  agent 발화 끝
    35.38s  <ret> 발화 (turn7 첫 프레임)
    35.62s  agent 발화 시작: <ret> It spawned three singles: "Cool for the Summer", "King
    35.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.61s]: "Confident" spawned three singles: "Cool for the Summer", "Kingdom Com
    35.66s  user  발화 끝
    40.68s  user  발화 시작: Uh-huh.
    41.32s  user  발화 끝
    42.88s  user  발화 시작: "Cool for the Summer" was a big hit…
    43.23s  agent 발화 끝
    45.00s  user  발화 끝
    45.94s  user  발화 시작: …I remember that one.
    47.45s  user  발화 끝
    47.90s  agent 발화 시작: That song really resonated with a lot of people. Music can b
    54.76s  agent 발화 끝
    55.78s  user  발화 시작: True. What about her previous album? When did that come out?
    59.48s  <ret> 발화 (turn13 첫 프레임)
    59.87s  agent 발화 시작: <ret> Her previous album, "Demi", came out on May fourteenth
    59.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.00s]: Demi Lovato’s fourth studio album, “Demi”, was released on May 14, 201
    59.95s  user  발화 끝
    66.86s  agent 발화 끝
    67.52s  user  발화 시작: May 2013, right.
    69.74s  <ret> 발화 (turn15 첫 프레임)
    69.83s  user  발화 끝
    70.14s  agent 발화 시작: <ret> It’s wonderful when artists evolve and aren't afraid t
    70.14s  ⚡SPAN 주입(IRRELEVANT) [d'=0.96s / d_lead=4.30s]: The current weather in London, United Kingdom is 18.0°C, humidity 82%,
    74.44s  agent 발화 끝
    74.44s  agent 발화 시작: It takes courage to step outside one’s comfort zone, and tha
    77.08s  user  발화 시작: Mm-hmm.
    77.57s  user  발화 끝
    79.63s  agent 발화 끝
    79.76s  user  발화 시작: Absolutely. I'm trying to find that courage myself, actually
    84.16s  agent 발화 시작: That’s a beautiful intention. Sometimes simply acknowledging
    84.16s  user  발화 끝
    85.88s  user  발화 시작: Yeah.
    86.56s  user  발화 끝
    90.03s  agent 발화 끝
    90.32s  user  발화 시작: That makes sense. Thanks, Runana.
    92.85s  agent 발화 시작: You’re very welcome. Remember, you already possess the stren
    92.86s  user  발화 끝
    97.89s  agent 발화 끝
