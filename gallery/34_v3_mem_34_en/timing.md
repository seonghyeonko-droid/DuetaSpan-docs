# v3_mem_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "Adam",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-06",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "home",
#       "text": "User's home address is 329 Pine Court."
#     },
#     {
#       "date": "2025-09-10",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-26",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Adam, I'm Bir. It's lovely to connect with you. Are you t
     5.13s  user  발화 시작: Uh, yeah, I am. I need to get to the de Young museum.
     5.14s  agent 발화 끝
     8.54s  <ret> 발화 (turn2 첫 프레임)
     8.62s  agent 발화 시작: <ret> Your home is at 329 Pine Court, so let me find directi
     8.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.62s]: [2026-01-01] User's home address is 329 Pine Court.
     8.69s  user  발화 끝
    13.25s  user  발화 시작: Okay.
    14.35s  user  발화 끝
    18.77s  user  발화 시작: Hmm, is there a quicker way by public transit?
    19.23s  agent 발화 끝
    21.74s  user  발화 끝
    21.85s  <ret> 발화 (turn5 첫 프레임)
    21.92s  agent 발화 시작: <ret> Taking public transit would take around 35 minutes, wi
    21.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.85s]: (tool result) Public transit from 329 Pine Court to de Young Museum ta
    29.77s  agent 발화 끝
