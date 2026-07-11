# v3_mem_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "Henri",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-25",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-03-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-11-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Henri, I'm Klealo. It's lovely to connect with you. Are y
     0.16s  user  발화 시작: Um, yeah, I need to get to Bondi Beach. How long will that t
     0.16s  agent 발화 끝
     0.19s  <ret> 발화 (turn2 첫 프레임)
     0.27s  agent 발화 시작: <ret> I see you're in Sydney, Henri. Let me check the curren
     0.27s  ⚡SPAN 주입 [d'=0.28s / d_lead=0.28s]: [2026-03-25] Past chat — Apartment hunting downtown: wanted a pet-frie
     0.27s  user  발화 끝
     0.55s  user  발화 시작: Uh-huh.
     0.55s  agent 발화 끝
     0.56s  user  발화 시작: And can you find me a parking garage near there?
     0.56s  user  발화 끝
     0.56s  <ret> 발화 (turn5 첫 프레임)
     0.64s  agent 발화 시작: <ret> Bondi Beach Car Park at 120 Hall Street has a 4.2-star
     0.64s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: (tool result) Bondi Beach Car Park: 120 Hall St, Bondi Beach NSW 2026,
     0.64s  user  발화 끝
     0.77s  user  발화 시작: Oh.
     0.77s  agent 발화 끝
     0.78s  user  발화 시작: Perfect, thanks.
     0.78s  user  발화 끝
     0.80s  agent 발화 시작: You're very welcome, Henri. I'm glad I could help with your 
     0.80s  user  발화 끝
     1.00s  agent 발화 끝
