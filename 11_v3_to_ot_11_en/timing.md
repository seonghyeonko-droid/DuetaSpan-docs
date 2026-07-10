# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Hana",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-28",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-13",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-25",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-14",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, do you know who sang “Don’t W | S2 Oh, right! Bobby McFerrin. I remem | S3 …Did he do any other songs that we | S4 That’s cool. I might have to check

     0.00s  user  발화 시작: Hey, do you know who sang “Don’t Worry, Be Happy”? I can’t q
     4.09s  <ret> 발화 (turn1 첫 프레임)
     4.48s  agent 발화 시작: <ret> That song is by Bobby McFerrin, released in nineteen e
     4.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: Bobby McFerrin released “Don’t Worry, Be Happy” in 1988, and it became
     4.63s  user  발화 끝
     7.45s  user  발화 시작: Yeah.
     7.89s  user  발화 끝
    10.52s  user  발화 시작: Oh, right! Bobby McFerrin. I remember now.
    10.59s  agent 발화 끝
    13.88s  agent 발화 시작: It’s wonderful when a tune suddenly clicks back into memory,
    13.99s  user  발화 끝
    15.84s  user  발화 시작: Yeah.
    16.47s  user  발화 끝
    17.95s  agent 발화 시작: I find music can be such a powerful trigger for recollection
    18.23s  agent 발화 끝
    22.17s  user  발화 시작: …Did he do any other songs that were really popular?
    22.80s  agent 발화 끝
    24.21s  <ret> 발화 (turn8 첫 프레임)
    24.52s  agent 발화 시작: <ret> Well, Bobby McFerrin is known for his vocal improvisat
    24.53s  ⚡SPAN 주입 [d'=1.36s / d_lead=6.11s]: Beyond "Don't Worry, Be Happy", Bobby McFerrin is celebrated for his a
    24.57s  user  발화 끝
    30.56s  agent 발화 시작: He’s celebrated for his a cappella work, especially the albu
    30.63s  agent 발화 끝
    32.63s  user  발화 시작: Uh-huh.
    33.07s  user  발화 끝
    36.76s  agent 발화 끝
    37.58s  user  발화 시작: That’s cool. I might have to check that out.
    40.03s  user  발화 끝
