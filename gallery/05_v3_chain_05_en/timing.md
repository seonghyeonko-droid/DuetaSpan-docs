# v3_chain_05_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "Jordan",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-11",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Can you tell me about the traffic in the area bounded by thi
    15.42s  <ret> 발화 (turn2 첫 프레임)
    15.66s  agent 발화 시작: Uh-huh.
    15.66s  user  발화 끝
    16.01s  agent 발화 시작: <ret> [happy] Okay, I'm seeing moderate traffic in that area
    16.01s  agent 발화 끝
    16.19s  ⚡SPAN 주입 [d'=0.78s / d_lead=10.44s]: (tool result) Traffic is currently moderate in that area of Los Angele
    26.45s  user  발화 시작: Yes, please. What's the fastest way to get to Grand Central 
    26.45s  agent 발화 끝
    31.32s  agent 발화 시작: Yeah.
    31.32s  user  발화 끝
    31.48s  <ret> 발화 (turn5 첫 프레임)
    31.61s  ⚡SPAN 주입 [d'=1.36s / d_lead=11.14s]: (tool result) The fastest route to Grand Central Market is via the 101
    31.67s  agent 발화 시작: <ret> The quickest way to Grand Central Market is heading no
    31.67s  agent 발화 끝
    42.81s  user  발화 시작: That sounds good. Can you find me a highly-rated Korean rest
    42.81s  agent 발화 끝
    48.03s  agent 발화 시작: Yeah.
    48.03s  user  발화 끝
    48.20s  <ret> 발화 (turn8 첫 프레임)
    48.38s  agent 발화 시작: <ret> [curious] I found Park's BBQ, a Korean BBQ spot with a
    48.38s  agent 발화 끝
    49.37s  ⚡SPAN 주입 [d'=1.17s / d_lead=9.75s]: (tool result) Park's BBQ is a highly-rated Korean BBQ restaurant locat
    58.12s  agent 발화 끝
