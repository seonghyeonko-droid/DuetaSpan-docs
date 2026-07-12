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
     5.37s  user  발화 끝
     5.39s  agent 발화 시작: It’s a fascinating field, isn’t it? So much is happening all
     7.16s  user  발화 시작: Yeah.
     7.70s  user  발화 끝
     9.88s  agent 발화 끝
    10.34s  user  발화 시작: Yeah, well, um, what’s the newest breakthrough, specifically
    13.99s  <ret> 발화 (turn4 첫 프레임)
    14.23s  agent 발화 시작: <ret> The newest breakthrough comes from Google DeepMind wit
    14.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.21s]: (tool result) Researchers at Google DeepMind have developed Gemma, a n
    14.51s  user  발화 끝
    17.95s  user  발화 시작: Uh-huh.
    18.35s  user  발화 끝
    22.28s  agent 발화 시작: It’s quite exciting, isn’t it? Open-weights models mean more
    22.44s  agent 발화 끝
    27.51s  agent 발화 끝
    28.03s  user  발화 시작: Is it any good for, like, helping with kids' homework?
    31.28s  <ret> 발화 (turn8 첫 프레임)
    31.36s  agent 발화 시작: <ret> I’m checking on that for you, but unfortunately, I hav
    31.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: (no information found)
    31.41s  user  발화 끝
    39.16s  agent 발화 시작: However, it’s a powerful language model, so it could potenti
    39.24s  agent 발화 끝
    43.47s  agent 발화 끝
