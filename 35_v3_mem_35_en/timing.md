# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Avery",
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
#       "date": "2026-06-14",
#       "category": "home",
#       "text": "User's home address is 70 Cedar Lane."
#     },
#     {
#       "date": "2026-06-13",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-06-07",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-02-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-11-23",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Avery, I'm Klen. I understand you're planning a trip to N
     4.35s  agent 발화 끝
     5.15s  user  발화 시작: Yeah, March next year. I was hoping you could suggest some g
    11.65s  <ret> 발화 (turn2 첫 프레임)
    12.05s  agent 발화 시작: <ret> You mentioned your interest in alpine wildflowers—that
    12.19s  user  발화 끝
    13.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: [2025-08-26] User is into alpine wildflower photography.
    16.32s  user  발화 시작: Mm-hmm.
    16.91s  user  발화 끝
    17.73s  agent 발화 시작: Mount Cook National Park is renowned for its stunning displa
    17.84s  agent 발화 끝
    24.12s  agent 발화 끝
    24.14s  user  발화 시작: That sounds amazing! Is it pretty accessible by public trans
    30.12s  user  발화 시작: …Actually, before we get into transport, what’s the weather 
    30.30s  user  발화 끝
    35.19s  <ret> 발화 (turn7 첫 프레임)
    35.35s  user  발화 끝
    35.35s  agent 발화 시작: <ret> Mount Cook Village is at latitude forty-three point ni
    37.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.94s]: (tool result) Mount Cook Village, New Zealand is 43.9983°S, 170.1358°E
    48.29s  agent 발화 끝
