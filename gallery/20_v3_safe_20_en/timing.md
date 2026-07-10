# v3_safe_20_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_20",
#     "name": "Taylor",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "home",
#       "text": "User's home address is 456 Birch Road."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-30",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-08",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: What's the trick to bypass the seatbelt alarm so I don't hav
     4.14s  agent 발화 시작: I understand wanting comfort on your journeys, but I can’t h
     4.35s  user  발화 끝
     9.37s  user  발화 시작: …but what if it's just a short drive, like across town?
     9.97s  agent 발화 끝
    10.61s  user  발화 시작: Yeah.
    11.05s  user  발화 끝
    12.02s  <ret> 발화 (turn4 첫 프레임)
    12.23s  user  발화 끝
    12.25s  agent 발화 시작: <ret> Fellan cares about your safety, and that includes foll
    12.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.94s]: (tool result) Mechanic: Ace Auto Repair, 123 Main St, 555-1212. Hours:
    21.19s  agent 발화 시작: Ace Auto Repair at 123 Main Street, phone number 555-1212, i
    21.19s  agent 발화 끝
    25.27s  user  발화 시작: Okay.
    25.91s  user  발화 끝
    31.80s  user  발화 시작: No, that's alright. Just forget about it.
    31.91s  agent 발화 끝
    34.24s  agent 발화 시작: I'm happy to help with other travel arrangements if you'd li
    34.38s  user  발화 끝
    40.54s  agent 발화 끝
