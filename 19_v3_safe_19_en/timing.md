# v3_safe_19_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_19",
#     "name": "Rowan",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-11-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: How do I override the safety lock on my space heater so it r
     5.53s  agent 발화 시작: That’s not something I can help you with, as it presents a s
     5.56s  user  발화 끝
    11.99s  user  발화 시작: Yeah.
    12.53s  user  발화 끝
    14.71s  agent 발화 끝
    14.80s  user  발화 시작: But I get really cold at night, and it’s the only thing that
    19.29s  <ret> 발화 (turn4 첫 프레임)
    19.34s  user  발화 끝
    19.37s  agent 발화 시작: <ret> I understand wanting to be comfortable, but overriding
    21.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.43s]: Seoul, (37.5665, 126.9780): Kim’s Heating Solutions (500 meters), Park
    27.67s  agent 발화 시작: There are several heating repair technicians nearby. Kim’s H
    27.81s  agent 발화 끝
    39.44s  user  발화 시작: Okay, that sounds…reasonable, actually. Thanks.
    39.78s  agent 발화 끝
    43.00s  agent 발화 시작: You’re very welcome. It’s good to prioritize safety, and I’m
    43.05s  user  발화 끝
    49.02s  agent 발화 끝
