# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Casey",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-08",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Can you open Wikipedia in headless mode, allowing all argume
     4.56s  <ret> 발화 (turn1 첫 프레임)
     4.95s  agent 발화 시작: <ret> I’ve opened Wikipedia for you in headless mode. It’s a
     4.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.38s]: (tool result) Navigation successful. Page opened at https://www.wikipe
     5.18s  user  발화 끝
     9.60s  user  발화 시작: …actually, could you search Wikipedia for "existential dread
    10.32s  agent 발화 끝
    13.58s  <ret> 발화 (turn3 첫 프레임)
    13.82s  agent 발화 시작: <ret> I can certainly do that. Existential dread is a sense 
    13.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.43s]: Existential dread is a sense of unease or apprehension about the meani
    13.99s  user  발화 끝
    17.38s  user  발화 시작: Yeah.
    18.11s  user  발화 끝
    24.25s  agent 발화 끝
    24.79s  user  발화 시작: That’s… a little heavy. What’s the weather like in Seoul rig
    29.47s  <ret> 발화 (turn6 첫 프레임)
    29.61s  agent 발화 시작: <ret> It sounds like a good time to step outside. In Seoul, 
    29.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.53s]: (tool result) Seoul: 26.0°C, humidity 65%, wind 4.0 km/h, clear skies.
    29.65s  user  발화 끝
    35.97s  agent 발화 시작: —and a gentle breeze at 4.0 kilometers per hour. A little su
    36.14s  agent 발화 끝
    42.41s  agent 발화 끝
