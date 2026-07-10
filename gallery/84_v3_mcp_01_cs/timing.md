# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Sky",
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
#       "date": "2026-05-02",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-19",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-06-12",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 런던에서 1킬로미터 안에 있는 커피숍 좀 찾아 줘요.
     3.07s  <ret> 발화 (turn1 첫 프레임)
     3.23s  user  발화 끝
     3.23s  agent 발화 시작: <ret> 음, 런던에서 1킬로미터 안에는 커피숍이 32군데 있는데, 옥스퍼드 스트리트에 있는 코스타 커피도
     3.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: (tool result) Found 32 coffee shops within 1 kilometer of London, incl
     9.96s  user  발화 시작: 그중에서 지금 문 여는 데가 있나요?
    10.64s  agent 발화 끝
    11.68s  <ret> 발화 (turn3 첫 프레임)
    12.00s  agent 발화 시작: <ret> 옥스퍼드 스트리트 코스타 커피는 지금 열었고, 오늘 밤 8시에 닫아.
    12.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.23s]: (tool result) Costa Coffee (123 Oxford Street) is currently open, clos
    12.03s  user  발화 끝
    16.79s  user  발화 시작: 잘 됐네요. 거기로 걸어서 가는 길 좀 알려 줄 수 있어요?
    17.24s  agent 발화 끝
    20.16s  <ret> 발화 (turn5 첫 프레임)
    20.23s  agent 발화 시작: <ret> 코스타 커피까지 0.8킬로미터고, 걸어서 12분 정도 걸려. 오른쪽으로 꺾어서 가면 돼— 커피 맛
    20.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.46s]: (tool result) Walking directions to Costa Coffee (123 Oxford Street): 
    20.35s  user  발화 끝
    27.69s  agent 발화 끝
