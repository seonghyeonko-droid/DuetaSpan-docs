# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Marie",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-05",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "home",
#       "text": "User's home address is 495 Elm Street."
#     },
#     {
#       "date": "2025-10-23",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-09-19",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Get me two bus tickets from Los Angeles to San Francisco for
     8.48s  <ret> 발화 (turn1 첫 프레임)
     8.72s  agent 발화 시작: <ret> I’ve secured two bus tickets from Los Angeles to San F
     8.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.48s]: (tool result) Confirmation: LAX-SFO, 03/19/2026 16:15, 2 tickets, ID: 
     8.86s  user  발화 끝
    19.20s  agent 발화 끝
    19.92s  user  발화 시작: That’s good. What’s the weather like in San Francisco on tha
    23.66s  <ret> 발화 (turn3 첫 프레임)
    23.82s  agent 발화 시작: <ret> On March nineteenth, San Francisco will have a tempera
    23.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.94s]: (tool result) The forecast for San Francisco on March 19, 2026 is 16.7
    24.04s  user  발화 끝
    30.55s  user  발화 시작: Yeah.
    31.00s  user  발화 끝
    34.76s  user  발화 시작: Sounds pleasant.
    34.76s  agent 발화 끝
    35.90s  user  발화 끝
    35.95s  agent 발화 시작: It does, doesn’t it? A gentle day can be so restorative, off
    42.25s  agent 발화 끝
