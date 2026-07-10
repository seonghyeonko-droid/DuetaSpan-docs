# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "Riley",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-11-21",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-10-14",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What does Bill Gates currently lis | S2 That's interesting. Uh, what about | S3 [happy] That's good to know. Can y | S4 The jazz festival sounds nice.

     0.00s  user  발화 시작: What does Bill Gates currently list as his job on LinkedIn?
     2.98s  <ret> 발화 (turn1 첫 프레임)
     3.21s  agent 발화 시작: <ret> Well, Bill Gates currently identifies as a co-chair at
     3.22s  ⚡SPAN 주입 [d'=1.28s / d_lead=9.18s]: (tool result) Bill Gates | Co-chair | Bill & Melinda Gates Foundation.
     3.33s  user  발화 끝
    12.36s  user  발화 시작: That's interesting. Uh, what about his wife, Melinda?
    12.39s  agent 발화 끝
    15.04s  agent 발화 시작: Melinda French Gates is also a co-chair at the Bill & Melind
    15.27s  user  발화 끝
    21.76s  agent 발화 끝
    22.11s  user  발화 시작: [happy] That's good to know. Can you find me some events hap
    25.98s  <ret> 발화 (turn5 첫 프레임)
    26.13s  agent 발화 시작: <ret> There are a couple of exciting things happening—the Se
    26.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.76s]: (tool result) Seoul Jazz Festival - May 26-28, Olympic Park; K-Pop Dan
    26.28s  user  발화 끝
    36.88s  agent 발화 끝
    37.12s  user  발화 시작: The jazz festival sounds nice.
    39.34s  user  발화 끝
    39.48s  agent 발화 시작: It does, doesn't it? Sometimes, stepping into something beau
    44.62s  agent 발화 끝
