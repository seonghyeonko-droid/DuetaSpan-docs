# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Kim",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-07-11",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: To what era did the Museum of Fine Arts date?
     2.53s  <ret> 발화 (turn1 첫 프레임)
     2.61s  agent 발화 시작: <ret> Unfortunately, I don’t have information about the Muse
     2.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.47s]: (no information found)
     2.91s  user  발화 끝
     8.08s  agent 발화 끝
     9.67s  user  발화 시작: Oh, um… well, that’s okay.
    12.66s  agent 발화 시작: It is! Sometimes not knowing is peaceful, you know? It leave
    12.90s  user  발화 끝
    18.36s  user  발화 시작: Can you find me events happening this weekend?
    18.46s  agent 발화 끝
    20.87s  <ret> 발화 (turn5 첫 프레임)
    20.95s  agent 발화 시작: <ret> I found a couple of events! There's a Jazz Festival on
    20.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.32s]: (tool result) Events found: Jazz Festival - July 12, 2026, 7:00 PM, Ce
    21.04s  user  발화 끝
    28.27s  agent 발화 끝
