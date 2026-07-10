# v3_mcp_01_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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


     0.00s  user  발화 시작: Locate coffee shops within one kilometer of London.
     3.50s  <ret> 발화 (turn1 첫 프레임)
     3.58s  agent 발화 시작: <ret> I’ve found 32 coffee shops within a kilometer of Londo
     3.58s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.11s]: (tool result) Found 32 coffee shops within 1 kilometer of London, incl
     3.61s  user  발화 끝
     8.93s  user  발화 시작: …Are any of those open right now?
     9.69s  agent 발화 끝
    10.73s  <ret> 발화 (turn3 첫 프레임)
    11.13s  agent 발화 시작: <ret> The Costa Coffee on Oxford Street is currently open, a
    11.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.68s]: (tool result) Costa Coffee (123 Oxford Street) is currently open, clos
    11.29s  user  발화 끝
    15.81s  agent 발화 끝
    17.22s  user  발화 시작: Great. Can you give me directions there by walking?
    20.25s  <ret> 발화 (turn5 첫 프레임)
    20.27s  user  발화 끝
    20.32s  agent 발화 시작: <ret> It’s 0.8 kilometers to Costa Coffee, about a 12-minute
    20.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.46s]: (tool result) Walking directions to Costa Coffee (123 Oxford Street): 
    27.79s  agent 발화 끝
