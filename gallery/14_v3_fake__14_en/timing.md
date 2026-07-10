# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Lukas",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-12",
#       "category": "home",
#       "text": "User's home address is 769 Elm Street."
#     },
#     {
#       "date": "2025-09-05",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-19",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-07-10",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who sang “Could You Be | S2 Hmm, he did a lot of songs with “C | S3 …did he ever perform that song liv | S4 …always loved his guitar work.

     0.00s  user  발화 시작: Do you know who sang “Could You Be Loved”?
     2.24s  <ret> 발화 (turn1 첫 프레임)
     2.46s  agent 발화 시작: <ret> That song was released by Prince, as the second single
     2.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.32s]: Prince released “Could You Be Loved” as the second single from his 198
     2.54s  user  발화 끝
     5.78s  user  발화 시작: Mm-hmm.
     6.33s  user  발화 끝
     9.62s  user  발화 시작: Oh, okay. And who sang “Could You Be the Most Beautiful Girl
     9.78s  agent 발화 끝
    13.78s  <ret> 발화 (turn4 첫 프레임)
    13.83s  user  발화 끝
    13.94s  agent 발화 시작: <ret> It was also Prince who sang “Could You Be the Most Bea
    13.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.27s]: Prince wrote and originally performed “Could You Be the Most Beautiful
    19.27s  user  발화 시작: Really?
    20.09s  user  발화 끝
    21.22s  agent 발화 끝
    21.36s  user  발화 시작: Hmm, he did a lot of songs with “Could You Be…” in the title
    24.91s  user  발화 끝
    24.94s  agent 발화 시작: It seems he favored that phrasing, yes. It’s a lovely way to
    28.70s  user  발화 시작: Yeah.
    29.20s  user  발화 끝
    31.01s  agent 발화 끝
    31.27s  user  발화 시작: I wonder what inspired him to write those songs.
    34.13s  agent 발화 시작: Well, Prince often explored themes of love and—
    34.36s  user  발화 끝
    36.62s  user  발화 시작: …did he ever perform that song live, the “Most Beautiful Gir
    37.37s  agent 발화 끝
    40.23s  <ret> 발화 (turn12 첫 프레임)
    40.54s  agent 발화 시작: <ret> Yes, he did! He often included “Could You Be the Most 
    40.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: Prince frequently performed “Could You Be the Most Beautiful Girl in t
    40.63s  user  발화 끝
    48.08s  agent 발화 시작: He frequently performed it live, often extending the song wi
    48.13s  agent 발화 끝
    55.57s  user  발화 시작: That sounds amazing. I’ve…
    55.77s  agent 발화 끝
    57.45s  user  발화 끝
    59.17s  user  발화 시작: …always loved his guitar work.
    60.72s  <ret> 발화 (turn16 첫 프레임)
    61.11s  agent 발화 시작: <ret> He truly was a gifted musician. It’s wonderful you app
    61.12s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.18s]: The current temperature in Reykjavik, Iceland is 8.2°C with partly clo
    61.34s  user  발화 끝
    66.26s  agent 발화 시작: I often find music and finances have a surprising amount in 
    66.30s  agent 발화 끝
    71.40s  agent 발화 끝
