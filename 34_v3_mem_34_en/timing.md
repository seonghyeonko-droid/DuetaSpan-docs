# v3_mem_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "Louis",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-16",
#       "category": "home",
#       "text": "User's home address is 171 Pine Court."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-12-02",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-13",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Louis, I'm Brio. It's lovely to meet you. Is there anythi
     0.18s  user  발화 시작: Um, yes, I need to get to the National Gallery.
     0.18s  agent 발화 끝
     0.20s  <ret> 발화 (turn2 첫 프레임)
     0.28s  agent 발화 시작: <ret> Louis. Let's find the best route from your home at 171
     0.28s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: [2026-03-16] User's home address is 171 Pine Court.
     0.28s  user  발화 끝
     0.41s  user  발화 시작: Yeah.
     0.41s  agent 발화 끝
     0.42s  user  발화 시작: Great, that sounds perfect.
     0.42s  user  발화 끝
     0.46s  agent 발화 시작: I'm checking for the quickest route now, considering current
     0.46s  user  발화 끝
     0.57s  user  발화 시작: …actually, how long would a taxi take?
     0.57s  agent 발화 끝
     0.64s  agent 발화 시작: A taxi to the National Gallery would likely take around 25 t
     0.64s  user  발화 끝
     0.81s  user  발화 시작: Really?
     0.81s  agent 발화 끝
     0.82s  agent 발화 시작: I can also show you bus and train options if you’d prefer, L
     0.82s  user  발화 끝
     1.00s  agent 발화 끝
