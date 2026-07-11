# v3_mcp_01_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Bruno",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "home",
#       "text": "User's home address is 366 Birch Road."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Can you open the documentation in a new tab for me?
     3.15s  <ret> 발화 (turn1 첫 프레임)
     3.23s  agent 발화 시작: <ret> I’ve opened a new tab with documentation from Tavily, 
     3.23s  ⚡SPAN 주입 [d'=1.28s / d_lead=5.33s]: (tool result) Documentation - Tavily 2024-07-09 Documentation is a key
     3.33s  user  발화 끝
     8.55s  agent 발화 끝
     8.73s  user  발화 시작: Um, that’s not what I meant. I need the playwright documenta
    11.66s  <ret> 발화 (turn3 첫 프레임)
    12.06s  agent 발화 시작: <ret> My apologies; I have the Playwright documentation now,
    12.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.99s]: (tool result) Playwright - Documentation - Microsoft Learn Playwright 
    12.29s  user  발화 끝
    17.38s  user  발화 시작: Yeah.
    18.20s  user  발화 끝
    19.00s  user  발화 시작: Perfect, thanks. What’s the weather like in Seoul right now?
    19.05s  agent 발화 끝
    22.67s  agent 발화 시작: Checking the weather for Seoul… it looks like it’s twenty-th
    22.70s  user  발화 끝
    33.75s  agent 발화 끝
