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

# EXAMINER(FDB-v2) 단계: S1 Find pictures related to my holida | S2 Oh, uh, actually… | S3 …could you just show me the ones f | S4 Perfect, thanks.

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.62s  <ret> 발화 (turn1 첫 프레임)
     4.70s  agent 발화 시작: <ret> I’m searching for pictures from your France trip last 
     4.72s  user  발화 끝
     6.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: (no information found)
     9.46s  user  발화 시작: Mhm.
     9.87s  user  발화 끝
    12.27s  user  발화 시작: Oh, uh, actually…
    12.44s  agent 발화 끝
    13.83s  user  발화 끝
    15.87s  user  발화 시작: …could you just show me the ones from Paris?
    17.68s  <ret> 발화 (turn5 첫 프레임)
    17.99s  agent 발화 시작: <ret> Focusing on Paris from your France trip last year, sti
    18.13s  user  발화 끝
    18.72s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.86s]: [{"filename": "Paris_Eiffel_Tower.jpg"}, {"filename": "Paris_Louvre.jp
    22.73s  agent 발화 시작: I found three pictures: Paris_Eiffel_Tower.jpg, Paris_Louvre
    22.85s  agent 발화 끝
    28.22s  user  발화 시작: Yeah.
    28.71s  user  발화 끝
    31.40s  agent 발화 끝
    32.55s  user  발화 시작: Perfect, thanks.
    33.49s  agent 발화 시작: You’re very welcome. It’s wonderful to revisit happy memorie
    33.56s  user  발화 끝
    37.65s  agent 발화 끝
