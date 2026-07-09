# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Hannah",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-09",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "home",
#       "text": "User's home address is 343 Cedar Lane."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-11",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 지금 nba에서 가장 나이가 많은 선수는 누구예요?
     3.45s  <ret> 발화 (turn1 첫 프레임)
     3.61s  agent 발화 시작: <ret> nba에서 가장 나이가 많은 선수를 알아볼게요. 빈스 카터 선수가 현재 사십이 세로 nba에서 가
     3.84s  user  발화 끝
     4.89s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.19s]: [source: ESPN] Vince Carter is currently the oldest player in the NBA 
    12.65s  agent 발화 끝
