# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Lukas",
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
#       "date": "2026-05-17",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in August."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-28",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Lukas, I'm Jear. It's lovely to connect with you today. H
     0.17s  user  발화 시작: Um, welll… I'm trying to stay motivated, but it's tough.
     0.17s  agent 발화 끝
     0.26s  agent 발화 시작: I understand completely. It's normal to feel that way someti
     0.26s  user  발화 끝
     0.39s  <ret> 발화 (turn5 첫 프레임)
     0.44s  <ret> 발화 (turn8 첫 프레임)
     0.46s  user  발화 시작: Yeah.
     0.46s  agent 발화 끝
     0.47s  user  발화 시작: Actually, yes! I'm going to New Zealand in August.
     0.47s  user  발화 끝
     0.55s  agent 발화 시작: <ret> That’s wonderful, Lukas! I recall you’re planning a tr
     0.55s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: [2026-05-17] User is planning a trip to New Zealand in August.
     0.55s  user  발화 끝
     0.71s  user  발화 시작: Uh-huh.
     0.71s  agent 발화 끝
     0.72s  user  발화 시작: Do you remember if I mentioned anything about food allergies
     0.72s  user  발화 끝
     0.84s  agent 발화 시작: <ret> Yes, I do. You mentioned you are gluten-free, so we ca
     0.84s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: [2026-02-28] User is gluten-free.
     0.84s  user  발화 끝
     1.00s  agent 발화 끝
