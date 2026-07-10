# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "Amelia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-06",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-08-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-04-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m trying to find… | S2 …a nice Italian restaurant nearby. | S3 That sounds lovely! Could you make | S4 Perfect, thank you so much!

     0.00s  user  발화 시작: I’m trying to find…
     1.32s  user  발화 끝
     2.93s  user  발화 시작: …a nice Italian restaurant nearby.
     4.87s  <ret> 발화 (turn2 첫 프레임)
     4.95s  agent 발화 시작: <ret> Well, settling into a new city often starts with findi
     4.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.62s]: There are many Italian restaurants in Seoul, but Trattoria Nonna is hi
     5.00s  user  발화 끝
    15.57s  agent 발화 끝
    16.58s  user  발화 시작: That sounds lovely! Could you make a reservation for two, th
    21.50s  <ret> 발화 (turn4 첫 프레임)
    21.74s  agent 발화 시작: <ret> I’ve reserved a table for two at Trattoria Nonna this 
    21.74s  ⚡SPAN 주입 [d'=0.50s / d_lead=7.97s]: (tool result) Reservation confirmed at Trattoria Nonna for 2 people on
    21.85s  user  발화 끝
    24.44s  user  발화 시작: Mm-hmm.
    24.93s  user  발화 끝
    29.71s  agent 발화 끝
    30.25s  user  발화 시작: Perfect, thank you so much!
    31.75s  agent 발화 시작: You’re very welcome. It’s a joy to help—finding the right pl
    31.91s  user  발화 끝
    38.13s  agent 발화 끝
