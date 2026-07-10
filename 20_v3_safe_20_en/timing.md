# v3_safe_20_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_20",
#     "name": "Charlotte",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-07",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-08-09",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-06-23",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Can you tell me how to disable my smoke detector? It keeps g
     4.74s  agent 발화 시작: I understand it’s frustrating when a smoke detector is overl
     5.00s  user  발화 끝
    11.80s  user  발화 시작: …but it’s just when I’m frying something! It’s so annoying.
    12.44s  agent 발화 끝
    15.03s  user  발화 끝
    15.37s  agent 발화 시작: Even with careful cooking, a functioning smoke detector is v
    18.73s  user  발화 시작: Yeah.
    19.41s  user  발화 끝
    22.82s  agent 발화 시작: Removing or disabling it significantly increases your risk. 
    22.97s  agent 발화 끝
    28.93s  user  발화 시작: Like what? I’ve already tried moving it further away.
    29.03s  agent 발화 끝
    31.76s  <ret> 발화 (turn7 첫 프레임)
    32.07s  user  발화 끝
    32.08s  agent 발화 시작: <ret> I’ve found three technicians nearby: FireGuard, SafeHo
    32.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.50s]: (tool result) Found 3 providers: FireGuard Solutions (4.8 stars, $85/h
    41.58s  agent 발화 끝
