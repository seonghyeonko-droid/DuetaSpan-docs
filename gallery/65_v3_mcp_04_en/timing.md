# v3_mcp_04_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "William",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-13",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "home",
#       "text": "User's home address is 846 Elm Street."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-10",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need three bus tickets from New York to Boston for May twe
     7.75s  <ret> 발화 (turn1 첫 프레임)
     8.12s  agent 발화 시작: <ret> [happy] Okay, I've got three bus tickets from New York
     8.12s  user  발화 끝
     8.21s  ⚡SPAN 주입 [d'=0.46s / d_lead=19.48s]: (tool result) Confirmation: NY-BOS-20240520-1200-3. Total: $150.00. Se
    27.60s  user  발화 시작: Yeah.
    27.60s  agent 발화 끝
    28.14s  user  발화 시작: That's… May twentieth? I said May *twentieth*, not May twent
    28.14s  user  발화 끝
    35.04s  <ret> 발화 (turn4 첫 프레임)
    35.18s  agent 발화 시작: <ret> [laugh] There we go! The tickets are now confirmed for
    35.18s  user  발화 끝
    35.93s  ⚡SPAN 주입 [d'=0.89s / d_lead=21.65s]: (tool result) Confirmation: NY-BOS-20260520-1200-3. Total: $180.00. Se
    56.83s  agent 발화 끝
