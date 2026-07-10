# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Lukas",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-14",
#       "category": "home",
#       "text": "User's home address is 260 Maple Drive."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-26",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-02",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to find pictures from my Fr | S2 …but not the small thumbnail versi | S3 Oh, great! Could you show me the m | S4 Perfect, thank you.

     0.00s  user  발화 시작: I need to find pictures from my France trip last year…
     3.04s  user  발화 끝
     4.41s  user  발화 시작: …but not the small thumbnail versions.
     6.29s  <ret> 발화 (turn2 첫 프레임)
     6.37s  agent 발화 시작: <ret> I found two hundred thirty-four photos from your Franc
     6.53s  user  발화 끝
     8.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: (tool result) /pictures/France_2025/vacation photos (234 files found)
    10.19s  user  발화 시작: Mhm.
    10.69s  user  발화 끝
    12.62s  agent 발화 끝
    13.54s  user  발화 시작: Oh, great! Could you show me the most recent one?
    16.11s  <ret> 발화 (turn5 첫 프레임)
    16.26s  agent 발화 시작: <ret> The most recent photo is beach_sunset_20250715.jpg fro
    16.45s  user  발화 끝
    17.23s  ⚡SPAN 주입 [d'=1.12s / d_lead=9.69s]: (tool result) /pictures/France_2025/vacation photos/beach sunset_20250
    19.46s  user  발화 시작: Really?
    20.10s  user  발화 끝
    25.95s  agent 발화 끝
    28.04s  user  발화 시작: Perfect, thank you.
    28.99s  agent 발화 시작: You're very welcome! It's wonderful to help you rediscover t
    29.04s  user  발화 끝
    33.20s  agent 발화 끝
