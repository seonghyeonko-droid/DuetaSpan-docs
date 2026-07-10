# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Amelia",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-01",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-07-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-20",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What instrument does the mandolin  | S2 Hmm, welll… maybe you can tell… | S3 …me the current time in Seoul? | S4 That's good to know. I'm feeling a

     0.00s  user  발화 시작: What instrument does the mandolin not have the same tuning o
     3.06s  <ret> 발화 (turn1 첫 프레임)
     3.22s  agent 발화 시작: <ret> Unfortunately, I don't have information on what instru
     3.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.06s]: (no information found)
     3.38s  user  발화 끝
     9.11s  agent 발화 시작: But don’t worry, sometimes not knowing is just a starting po
     9.28s  agent 발화 끝
    13.70s  user  발화 시작: Hmm, welll… maybe you can tell…
    13.82s  agent 발화 끝
    16.66s  user  발화 끝
    18.01s  user  발화 시작: …me the current time in Seoul?
    20.83s  user  발화 끝
    21.06s  <ret> 발화 (turn5 첫 프레임)
    21.14s  agent 발화 시작: <ret> It’s currently 2:37 PM in Seoul. I hope that helps you
    21.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.83s]: (tool result) It is Friday, July 10, 2026 at 2:37 PM in Asia/Seoul rig
    28.84s  user  발화 시작: That's good to know. I'm feeling a bit stressed about a proj
    28.97s  agent 발화 끝
    32.63s  user  발화 끝
    33.13s  agent 발화 시작: Oh, deadlines can be tough! It's completely normal to feel s
    35.96s  user  발화 시작: Yeah.
    36.41s  user  발화 끝
    41.08s  agent 발화 시작: Exactly. And celebrate each small win along the way—you dese
    41.23s  agent 발화 끝
    50.87s  agent 발화 끝
