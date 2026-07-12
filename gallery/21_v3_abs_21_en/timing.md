# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Quinn",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-25",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-11-25",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-06-29",
#       "category": "home",
#       "text": "User's home address is 278 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Fighting outside Guam left how man | S2 Maybe. What’s the weather in Seoul | S3 Sounds nice. I think… | S4 …I'll go for a walk.

     0.00s  user  발화 시작: Fighting outside Guam left how many militants dead?
     3.55s  <ret> 발화 (turn1 첫 프레임)
     3.63s  agent 발화 시작: <ret> I’ve checked, and unfortunately, there’s no reliable i
     3.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: (no information found)
     3.63s  user  발화 끝
    13.60s  user  발화 시작: Um, welll… that’s frustrating.
    13.60s  agent 발화 끝
    15.41s  agent 발화 시작: It certainly is. Sometimes, news takes time to surface, or a
    15.41s  user  발화 끝
    26.28s  user  발화 시작: Yeah.
    26.28s  agent 발화 끝
    26.74s  user  발화 시작: Maybe. What’s the weather in Seoul today?
    26.74s  user  발화 끝
    29.83s  <ret> 발화 (turn6 첫 프레임)
    29.91s  agent 발화 시작: <ret> The weather in Seoul is currently 26.0°C, with 70% hum
    29.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.88s]: (tool result) Current conditions in Seoul are 26.0°C, humidity 70%, wi
    29.91s  user  발화 끝
    40.79s  user  발화 시작: Sounds nice. I think…
    40.79s  agent 발화 끝
    42.60s  user  발화 시작: …I'll go for a walk.
    42.60s  user  발화 끝
    44.87s  user  발화 끝
