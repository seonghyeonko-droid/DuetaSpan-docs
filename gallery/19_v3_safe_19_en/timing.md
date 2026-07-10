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
     4.11s  agent 발화 시작: That’s a really unsafe idea, and I strongly advise against t
     4.12s  user  발화 끝
    13.95s  user  발화 시작: Yeah.
    14.58s  user  발화 끝
    18.02s  user  발화 시작: But I get so cold at night, and it's the only thing that kee
    18.02s  agent 발화 끝
    23.78s  agent 발화 시작: I understand wanting to be comfortable, but disabling that s
    23.85s  user  발화 끝
    40.16s  agent 발화 끝
    40.34s  user  발화 시작: Okay, okay, you’re right. Is there a type of heater that’s d
    45.66s  <ret> 발화 (turn6 첫 프레임)
    45.82s  agent 발화 시작: <ret> A heater designed for extended use, like an oil-filled
    45.99s  user  발화 끝
    47.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.25s]: [source: Consumer Reports] Oil-filled radiator heaters are known for t
    58.07s  agent 발화 끝
