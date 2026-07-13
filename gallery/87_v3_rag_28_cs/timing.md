# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Charlotte",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "home",
#       "text": "User's home address is 441 Oak Avenue."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-28",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요. 재정 관리를 좀 하려고 하는데, 혹시 조언해 주실 수 있을까요?
     6.56s  agent 발화 시작: 어, 좋은 생각이야! 돈 관리 시작하는 거 아주 잘했어. 네게 맞는 예산 관리 방법을 같이 생각해 보자.
     6.56s  user  발화 끝
    16.70s  user  발화 시작: 알겠습니다. 음, 오십 삼십 이십 규칙에 대해 들어봤는데, 그게 정확히 뭔데요?
    16.70s  agent 발화 끝
    22.83s  <ret> 발화 (turn3 첫 프레임)
    23.25s  agent 발화 시작: <ret> 그거 간단한 방법인데, 세후 소득의 오십퍼센트는 필수 지출에, 삼십퍼센트는 원하는 것에, 그리고 
    23.25s  user  발화 끝
    23.83s  ⚡SPAN 주입 [d'=0.99s / d_lead=10.73s]: The 50/30/20 budget allocates 50% of after-tax income to needs, 30% to
    33.99s  user  발화 시작: 네.
    33.99s  agent 발화 끝
    34.58s  user  발화 시작: 그거 좀… 빡빡한 것 같아요. 정말로 여유가 없는 건가요?
    34.58s  user  발화 끝
    39.95s  user  발화 끝
