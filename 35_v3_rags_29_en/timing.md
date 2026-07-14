# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Elias",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-26",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "home",
#       "text": "User's home address is 363 Elm Street."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: How long is the Belmont horse race?
     1.93s  <ret> 발화 (turn1 첫 프레임)
     2.03s  ⚡SPAN 주입 [d'=0.42s / d_lead=8.07s]: The Belmont Stakes is a 1.5-mile-long race held at Belmont Park in Elm
     2.09s  agent 발화 시작: <ret> The Belmont Stakes is a race that’s one and a half mil
     2.09s  user  발화 끝
    10.16s  agent 발화 끝
