# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "Isla",
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
#       "date": "2026-02-23",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need to find a hotel in Seoul for next week, something nea
     3.85s  <ret> 발화 (turn1 첫 프레임)
     4.23s  agent 발화 시작: <ret> I’ve found L7 Myeongdong, it's at 76 Namdaemun-ro 2-ga
     4.25s  ⚡SPAN 주입 [d'=1.20s / d_lead=7.83s]: (tool result) {"hotel name": "L7 Myeongdong", "address": "76 Namdaemun
     4.35s  user  발화 끝
     7.69s  user  발화 시작: Right.
     8.51s  user  발화 끝
    12.06s  agent 발화 끝
    12.71s  user  발화 시작: That sounds good. Can…
    14.73s  user  발화 끝
    16.14s  user  발화 시작: …you book it for me?
    17.47s  <ret> 발화 (turn5 첫 프레임)
    17.55s  agent 발화 시작: <ret> Your reservation at L7 Myeongdong is confirmed, your I
    17.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: (tool result) {"confirmation id": "XM829Z"}
    17.66s  user  발화 끝
    24.73s  agent 발화 끝
