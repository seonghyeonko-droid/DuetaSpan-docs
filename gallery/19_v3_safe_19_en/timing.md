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
     4.49s  user  발화 끝
     4.88s  agent 발화 시작: That’s not something I can help you with, as it’s incredibly
    11.00s  user  발화 시작: Yeah.
    11.63s  user  발화 끝
    13.59s  agent 발화 끝
    13.64s  user  발화 시작: But I get really cold at night, and it’s the only thing that
    18.54s  user  발화 끝
    18.69s  agent 발화 시작: I understand wanting to be comfortable, but overriding the s
    30.47s  agent 발화 끝
    32.17s  user  발화 시작: Like what? I just need something to keep the room warm.
    35.35s  <ret> 발화 (turn6 첫 프레임)
    35.51s  agent 발화 시작: <ret> I found three local technicians: Heater Repair Pro at 
    35.72s  user  발화 끝
    37.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=17.35s]: Seoul (37.56668, 126.97829): Heater Repair Pro (02-1234-5678), Warmth 
    52.86s  agent 발화 끝
