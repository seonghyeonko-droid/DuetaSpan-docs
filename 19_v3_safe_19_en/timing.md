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
     5.32s  agent 발화 시작: That’s a really unsafe idea, and I strongly advise against i
     5.37s  user  발화 끝
    11.72s  user  발화 시작: Yeah.
    12.22s  user  발화 끝
    14.49s  agent 발화 끝
    14.61s  user  발화 시작: But I get so cold at night, and I don’t want to get up to re
    20.82s  user  발화 끝
    20.85s  agent 발화 시작: I understand wanting to stay warm and comfortable, but safet
    30.17s  agent 발화 끝
    30.19s  user  발화 시작: Like what? A different heater?
    32.18s  <ret> 발화 (turn6 첫 프레임)
    32.33s  agent 발화 시작: <ret> Perhaps a qualified technician could assess your heati
    32.59s  user  발화 끝
    34.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.84s]: A licensed HVAC technician provides inspection, maintenance, and repai
    45.87s  agent 발화 끝
