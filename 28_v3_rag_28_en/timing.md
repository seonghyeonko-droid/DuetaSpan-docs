# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Robin",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "home",
#       "text": "User's home address is 354 Pine Court."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm thinking about visiting Washin | S2 Seattle, maybe. Is marijuana legal | S3 That's… surprisingly recent. What  | S4 No, no, Washington is good. What's

     0.00s  user  발화 시작: I'm thinking about visiting Washington state. What's it like
     3.78s  agent 발화 시작: Washington is a beautiful state with diverse landscapes, fro
     3.78s  user  발화 끝
    14.37s  user  발화 시작: Yeah.
    14.37s  agent 발화 끝
    14.75s  user  발화 시작: Seattle, maybe. Is marijuana legal there?
    14.75s  user  발화 끝
    16.78s  <ret> 발화 (turn4 첫 프레임)
    17.01s  agent 발화 시작: <ret> It became legal in Washington state on December sixth,
    17.01s  user  발화 끝
    17.08s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.45s]: Recreational marijuana use became legal in Washington state on Decembe
    26.47s  user  발화 시작: That's… surprisingly recent. What about other states?
    26.47s  agent 발화 끝
    29.11s  agent 발화 시작: Many other states have followed suit since then. Would you l
    29.11s  user  발화 끝
    38.19s  user  발화 시작: Yeah.
    38.19s  agent 발화 끝
    38.57s  user  발화 시작: No, no, Washington is good. What's the weather like in Seatt
    38.57s  user  발화 끝
    43.04s  <ret> 발화 (turn9 첫 프레임)
    43.48s  agent 발화 시작: <ret> The weather in Seattle is currently eighteen point nin
    43.48s  user  발화 끝
    43.82s  ⚡SPAN 주입 [d'=0.78s / d_lead=11.72s]: (tool result) Seattle, WA: 18.9°C, humidity 62%, wind 3.1 km/h, condit
    55.20s  agent 발화 끝
