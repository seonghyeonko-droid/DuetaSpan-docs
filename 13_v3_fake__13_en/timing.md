# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Emma",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-11-22",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "home",
#       "text": "User's home address is 594 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hey Thios, when did the Bengals last make the playoffs?
     3.24s  <ret> 발화 (turn1 첫 프레임)
     3.48s  agent 발화 시작: <ret> The Bengals last made the playoffs in the 2021–2022 se
     3.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.87s]: The Cincinnati Bengals most recently made the playoffs in the 2021–202
     3.48s  user  발화 끝
     8.35s  user  발화 시작: Uh-huh.
     8.35s  agent 발화 끝
     8.70s  user  발화 시작: Oh, wow, that recent!
     8.70s  user  발화 끝
     9.69s  <ret> 발화 (turn4 첫 프레임)
    10.09s  agent 발화 시작: <ret> It really was a fantastic run for them, wasn’t it? I’m
    10.09s  ⚡SPAN 주입(IRRELEVANT) [d'=1.52s / d_lead=5.57s]: The average high temperature in Reykjavik, Iceland in July is 13.0°C, 
    10.09s  user  발화 끝
    15.66s  agent 발화 시작: It's always inspiring to see a team achieve such success—
    15.66s  agent 발화 끝
    19.14s  user  발화 시작: …but before that, how long was it since their previous playo
    19.14s  agent 발화 끝
    23.31s  agent 발화 시작: Before 2022, the Bengals hadn’t reached the playoffs since t
    23.31s  user  발화 끝
    29.23s  user  발화 시작: Oh.
    29.23s  agent 발화 끝
    29.58s  agent 발화 시작: It’s interesting how long those droughts can be, isn’t it? A
    29.58s  user  발화 끝
    36.54s  agent 발화 끝
