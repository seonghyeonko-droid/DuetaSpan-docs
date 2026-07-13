# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "연은",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-01",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 영화 엘도라도에서 조세핀 맥도날드 역을 누가 연기했어?
     3.36s  <ret> 발화 (turn1 첫 프레임)
     3.46s  agent 발화 시작: <ret> 엘도라도에서 조세핀 맥도날드 역은 미셸 캐리가 연기했어요. [happy] 그 영화 정말 좋아하시나
     3.46s  user  발화 끝
     4.29s  ⚡SPAN 주입 [d'=0.93s / d_lead=5.94s]: Michele Carey played Josephine McDonald in the 1966 Western film El Do
     9.40s  agent 발화 끝
