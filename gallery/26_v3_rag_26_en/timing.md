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
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.19s  agent 발화 시작: <ret> That would be Alan Sidney Patrick Rickman, he was well
     0.19s  ⚡SPAN 주입 [d'=0.27s / d_lead=0.27s]: Alan Sidney Patrick Rickman was an English actor and director known fo
     0.19s  user  발화 끝
     0.38s  <ret> 발화 (turn4 첫 프레임)
     0.46s  user  발화 시작: Yeah.
     0.46s  agent 발화 끝
     0.47s  user  발화 시작: Yes, it really is! Actually, what time is it right now?
     0.47s  user  발화 끝
     0.62s  agent 발화 시작: <ret> It is Friday, July 10, 2026 at 2:37 PM in Asia/Seoul r
     0.62s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.32s]: (tool result) It is Friday, July 10, 2026 at 2:37 PM in Asia/Seoul rig
     0.62s  user  발화 끝
     0.94s  user  발화 시작: That's right. Thank you, Lial.
     0.94s  agent 발화 끝
     1.00s  user  발화 끝
