# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "혜빈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "mid 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-18",
#       "category": "car",
#       "text": "User drives a 2018 Mazda CX-5."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "medication",
#       "text": "User takes a vitamin D supplement."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "show",
#       "text": "User is currently watching a nature documentary series."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "streaming",
#       "text": "User subscribes to a shared Netflix family plan."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "hobby",
#       "text": "User is into sea kayaking."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-16",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-04-02",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 바이킹스가 램보 필드에서 마지막으로 이긴 건 언제야?
     3.36s  <ret> 발화 (turn1 첫 프레임)
     3.64s  agent 발화 시작: <ret> 바이킹스가 램보 필드에서 그린베이 패커스를 이긴 건, 음… 이천십칠년 십이월 이십삼일이었어요.
     3.66s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.23s]: The Minnesota Vikings defeated the Green Bay Packers 23–10 at Lambeau 
     3.84s  user  발화 끝
    10.87s  agent 발화 끝
