# v3_mcp_02_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "Noa",
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
#       "date": "2026-06-28",
#       "category": "dish",
#       "text": "User's go-to comfort dish is cold buckwheat noodles."
#     },
#     {
#       "date": "2026-06-09",
#       "category": "medication",
#       "text": "User takes medication for migraines."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "wake",
#       "text": "User usually wakes up around 7:30am."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "emergency",
#       "text": "User's emergency contact is Lucas."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "streaming",
#       "text": "User subscribes to Wavve and Melon."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "show",
#       "text": "User is currently watching a nature documentary series."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "phone",
#       "text": "User uses a Galaxy S24."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-12",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     },
#     {
#       "date": "2026-03-25",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     },
#     {
#       "date": "2026-02-23",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: How long would it take to walk…
     3.01s  user  발화 시작: …from Tokyo Station to the Imperial Palace?
     3.01s  user  발화 끝
     5.85s  <ret> 발화 (turn2 첫 프레임)
     6.02s  agent 발화 시작: <ret> Walking from Tokyo Station to the Imperial Palace woul
     6.02s  user  발화 끝
     6.57s  ⚡SPAN 주입 [d'=0.72s / d_lead=9.03s]: (tool result) {"distance": 2200, "duration": 28, "duration unit": "min
    15.06s  user  발화 시작: Okay, good. And could you find me a reasonably priced restau
    15.06s  agent 발화 끝
    21.30s  <ret> 발화 (turn4 첫 프레임)
    21.51s  agent 발화 시작: <ret> I found Katsukura Marunouchi, a Japanese restaurant ju
    21.51s  user  발화 끝
    21.88s  ⚡SPAN 주입 [d'=1.04s / d_lead=8.60s]: Found "Katsukura Marunouchi", average price $$, Japanese cuisine, 4.2 
    30.12s  agent 발화 끝
