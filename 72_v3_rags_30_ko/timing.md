# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "우담",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-02-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 런던 브릿지가 무너지는 노래를 누가 만들었어?
     2.72s  <ret> 발화 (turn1 첫 프레임)
     2.82s  agent 발화 시작: <ret> 런던 브릿지가 무너지는 노래의 작곡가는 알려져 있지 않아요. [happy] 이 곡은 오랜 역사를 
     2.82s  user  발화 끝
     3.65s  ⚡SPAN 주입 [d'=0.93s / d_lead=8.94s]: The composer of "London Bridge Is Falling Down" is unknown.
    11.76s  agent 발화 끝
