# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Louis",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "home",
#       "text": "User's home address is 728 Elm Street."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-18",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-07-19",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Oh, um, I was just wondering… who plays Professor Snape in t
     6.33s  <ret> 발화 (turn1 첫 프레임)
     6.49s  user  발화 끝
     6.56s  agent 발화 시작: <ret> That would be Alan Sidney Patrick Rickman, he was well
     6.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.48s]: Alan Sidney Patrick Rickman was an English actor and director known fo
     9.31s  user  발화 시작: Yeah.
     9.66s  user  발화 끝
    13.04s  agent 발화 끝
    15.21s  user  발화 시작: Yes, it really is! Actually, what time is it right now?
    19.59s  <ret> 발화 (turn4 첫 프레임)
    19.74s  user  발화 끝
    19.82s  agent 발화 시작: <ret> It is Friday, July 10, 2026 at 2:37 PM in Asia/Seoul r
    19.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.50s]: (tool result) It is Friday, July 10, 2026 at 2:37 PM in Asia/Seoul rig
    29.32s  agent 발화 끝
    30.30s  user  발화 시작: That's right. Thank you, Lial.
    32.28s  user  발화 끝
