# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Morgan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-05",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-23",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-06-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 From where do the earliest Han cou | S2 Oh. Well… | S3 …what’s the weather in Seoul right | S4 That does sound quite pleasant.

     0.00s  user  발화 시작: From where do the earliest Han court fragments derive?
     3.45s  <ret> 발화 (turn1 첫 프레임)
     3.61s  agent 발화 시작: <ret> But unfortunately, the origin of the earliest Han cour
     3.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.33s]: (no information found)
     3.79s  user  발화 끝
     6.19s  user  발화 시작: Yeah.
     6.59s  user  발화 끝
     8.84s  user  발화 시작: Oh. Well…
     8.94s  agent 발화 끝
    10.45s  user  발화 끝
    11.77s  user  발화 시작: …what’s the weather in Seoul right now?
    13.89s  user  발화 끝
    14.00s  <ret> 발화 (turn5 첫 프레임)
    14.16s  agent 발화 시작: <ret> It’s currently 23.0 degrees Celsius in Seoul, with hum
    14.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.01s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    24.05s  agent 발화 시작: A comfortable temperature, wouldn’t you say? Perhaps good fo
    24.18s  agent 발화 끝
    28.08s  user  발화 시작: That does sound quite pleasant.
    28.17s  agent 발화 끝
    30.34s  user  발화 끝
