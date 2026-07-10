# v3_mcp_04_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "Lily",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-05-30",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-12",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Could you please set the user agent to SuperCrawler version 
     4.12s  <ret> 발화 (turn1 첫 프레임)
     4.44s  agent 발화 시작: <ret> I’ve set the user agent to SuperCrawler version 10.1 f
     4.58s  user  발화 끝
     5.08s  ⚡SPAN 주입 [d'=0.96s / d_lead=5.83s]: (tool result) User agent set to SuperCrawler version 10.1
     7.69s  user  발화 시작: Yeah.
     8.13s  user  발화 끝
    10.27s  agent 발화 끝
    11.09s  user  발화 시작: Hmm, okay… but does that affect my current browsing session,
    16.92s  user  발화 끝
    17.03s  agent 발화 시작: That adjustment applies to all new tabs and windows you open
    27.37s  agent 발화 끝
    27.82s  user  발화 시작: I— I mean, can you *undo* that, just in case?
    34.19s  <ret> 발화 (turn6 첫 프레임)
    34.44s  user  발화 끝
    34.51s  agent 발화 시작: <ret> I’ve now reset the user agent back to the default sett
    35.23s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.46s]: (tool result) User agent reset to default
    39.97s  agent 발화 끝
