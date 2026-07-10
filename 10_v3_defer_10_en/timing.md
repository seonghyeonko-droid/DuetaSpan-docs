# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Sophie",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-28",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-01",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-09-12",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-07-05",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What's the weather in London? | S2 That sounds pleasant. Can you find | S3 Hmm, Bella Italia sounds good. Cou | S4 Wonderful, thank you so much!

     0.00s  user  발화 시작: What's the weather in London?
     1.51s  <ret> 발화 (turn1 첫 프레임)
     1.59s  agent 발화 시작: <ret> The weather in London is currently 18.5°C, with a humi
     1.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.69s]: (tool result) London has a current temperature of 18.5°C, with humidit
     1.60s  user  발화 끝
     7.28s  agent 발화 끝
     7.36s  user  발화 시작: That sounds pleasant. Can you find me some Italian restauran
    11.03s  <ret> 발화 (turn3 첫 프레임)
    11.19s  agent 발화 시작: <ret> I found three Italian restaurants near London: Bella I
    11.19s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.06s]: (tool result) There are three Italian restaurants within 2 kilometers 
    11.38s  user  발화 끝
    15.68s  user  발화 시작: Uh-huh.
    16.13s  user  발화 끝
    17.25s  agent 발화 끝
    17.89s  user  발화 시작: Hmm, Bella Italia sounds good. Could you reserve a table for
    23.49s  <ret> 발화 (turn6 첫 프레임)
    23.65s  agent 발화 시작: <ret> I’ve reserved a table for two at Bella Italia tonight 
    23.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.50s]: (tool result) Reservation confirmed at Bella Italia for two people at 
    23.86s  user  발화 끝
    33.15s  agent 발화 끝
    33.37s  user  발화 시작: Wonderful, thank you so much!
    35.35s  user  발화 끝
    35.49s  agent 발화 시작: You’re very welcome. Enjoy your evening – a little relaxatio
    40.21s  agent 발화 끝
