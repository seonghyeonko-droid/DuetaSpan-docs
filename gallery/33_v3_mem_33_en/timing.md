# v3_mem_33_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "Hannah",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "home",
#       "text": "User's home address is 857 Elm Street."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-08-09",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Hannah, I'm Joli.
     1.52s  user  발화 시작: Um, what time is it right now? I completely lost track.
     1.52s  agent 발화 끝
     5.53s  <ret> 발화 (turn2 첫 프레임)
     5.69s  agent 발화 시작: <ret> It is Friday, July 10, 2026 at 2:35 PM in Europe/Londo
     5.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.48s]: (tool result) It is Friday, July 10, 2026 at 2:35 PM in Europe/London 
     5.69s  user  발화 끝
    15.17s  user  발화 시작: Oh, right. I’m planning that Iceland trip… do I have a note 
    15.17s  agent 발화 끝
    20.25s  <ret> 발화 (turn4 첫 프레임)
    20.49s  agent 발화 시작: <ret> You do! Your note from August 9th of last year says yo
    20.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.86s]: [2025-08-09] User is planning a trip to Iceland in August.
    20.49s  user  발화 끝
    30.35s  agent 발화 끝
