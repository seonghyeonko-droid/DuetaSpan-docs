# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "소서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-17",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-11-26",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-09-19",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 쇼크 탑 벨기에안…
     0.18s  user  발화 시작: …위트 맥주는 어떤 스타일의 맥주야?
     0.18s  user  발화 끝
     0.25s  <ret> 발화 (turn2 첫 프레임)
     0.41s  agent 발화 시작: <ret> 쇼크 탑 벨기에안 위트 맥주는 오렌지 껍질과 고수를 넣어 만든 미국식 밀 맥주랍니다.
     0.41s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.59s]: Shock Top Belgian Wheat is an American-style wheat ale brewed with ora
     0.41s  user  발화 끝
     1.00s  agent 발화 끝
