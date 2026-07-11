# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "Aiden",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-01",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-08-16",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-06-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-06-02",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-28",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: What’s the latest on artificial intelligence? I was reading 
     0.07s  <ret> 발화 (turn4 첫 프레임)
     0.10s  agent 발화 시작: It’s a fascinating field, isn’t it? So much is happening all
     0.10s  user  발화 끝
     0.22s  user  발화 시작: Yeah.
     0.22s  agent 발화 끝
     0.23s  user  발화 시작: Yeah, well, um, what’s the newest breakthrough, specifically
     0.23s  user  발화 끝
     0.29s  <ret> 발화 (turn8 첫 프레임)
     0.31s  agent 발화 시작: <ret> The newest breakthrough comes from Google DeepMind wit
     0.31s  ⚡SPAN 주입 [d'=0.17s / d_lead=0.17s]: (tool result) Researchers at Google DeepMind have developed Gemma, a n
     0.31s  user  발화 끝
     0.47s  user  발화 시작: Uh-huh.
     0.47s  agent 발화 끝
     0.48s  agent 발화 시작: It’s quite exciting, isn’t it? Open-weights models mean more
     0.48s  user  발화 끝
     0.59s  user  발화 시작: Is it any good for, like, helping with kids' homework?
     0.59s  agent 발화 끝
     0.69s  agent 발화 시작: <ret> I’m checking on that for you, but unfortunately, I hav
     0.69s  ⚡SPAN 주입 [d'=0.20s / d_lead=0.20s]: (no information found)
     0.69s  user  발화 끝
     0.89s  agent 발화 시작: However, it’s a powerful language model, so it could potenti
     0.89s  agent 발화 끝
     1.00s  agent 발화 끝
