# v3_mem_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "Stella",
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
#       "date": "2026-06-28",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-25",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-06-05",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-18",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-04",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Stella, I'm Zellami! So happy to connect with you as you 
     5.76s  user  발화 시작: Mm-hmm.
     5.76s  agent 발화 끝
     6.12s  user  발화 시작: Um, hi Zellami. I need to get to Golden Gate Park.
     6.12s  user  발화 끝
    10.00s  <ret> 발화 (turn3 첫 프레임)
    10.08s  agent 발화 시작: <ret> I see you're in San Francisco, and I can certainly hel
    10.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.76s]: [2025-09-04] Past chat — Apartment hunting downtown: wanted a pet-frie
    10.08s  user  발화 끝
    15.84s  user  발화 시작: Yeah.
    15.84s  agent 발화 끝
    16.20s  user  발화 시작: Yeah, that’s right. From my place.
    16.20s  user  발화 끝
    18.28s  <ret> 발화 (turn6 첫 프레임)
    18.36s  agent 발화 시작: <ret> Just confirming, let’s get you on your way. Your home 
    18.36s  user  발화 끝
    19.48s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.88s]: [2025-09-04] Past chat — Apartment hunting downtown: wanted a pet-frie
    25.19s  user  발화 시작: Right.
    25.19s  agent 발화 끝
    25.31s  <ret> 발화 (turn8 첫 프레임)
    25.55s  agent 발화 시작: <ret> The quickest route is 5.2 miles, taking about 18 minut
    25.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.08s]: (tool result) {"distance": "5.2 mi", "duration": "18 mins", "route": "
    25.55s  user  발화 끝
    35.63s  user  발화 시작: Mhm.
    35.63s  agent 발화 끝
    35.99s  user  발화 시작: Oh, that’s not too bad. Thanks!
    35.99s  user  발화 끝
    38.15s  agent 발화 시작: You're very welcome, Stella! Getting around a new city can f
    38.15s  user  발화 끝
    44.99s  agent 발화 끝
