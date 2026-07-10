# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Ruby",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-08",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2025-10-12",
#       "category": "home",
#       "text": "User's home address is 379 Oak Avenue."
#     },
#     {
#       "date": "2025-06-26",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-12",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 올림픽이 LA에서 언제 열리는지 궁금했어.
     2.47s  <ret> 발화 (turn1 첫 프레임)
     2.87s  agent 발화 시작: <ret> 네, 이천이십팔 년 7월 21일부터 8월 6일까지 LA 올림픽이 예정되어 있습니다. 혹시 가실 계
     2.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.83s]: The 2028 Summer Olympics are scheduled to be held in Los Angeles, Cali
     2.96s  user  발화 끝
    12.70s  agent 발화 끝
    13.09s  user  발화 시작: 2028이라… 진짜 엄청 먼 것 같아! 혹시 앞당겨졌나 싶기도 하고.
    18.87s  user  발화 끝
    18.95s  agent 발화 시작: 그러게요, 좀 멀게 느껴지네요. 큰 행사들은 일정 변경이 되기도 하는데, 이번에는 확정된 것 같아요.
    21.70s  user  발화 시작: 그래.
    22.20s  user  발화 끝
    27.84s  agent 발화 끝
    28.98s  user  발화 시작: 음, 그럼 그쯤 LA 날씨는 어때?
    31.27s  <ret> 발화 (turn6 첫 프레임)
    31.34s  agent 발화 시작: <ret> 이천이십팔 년 7월 21일 LA 날씨는 대략 29.4°C 정도로 예상되며, 맑고 강수 확률은 매우
    31.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.80s]: (tool result) Los Angeles on July 21, 2028, is forecast to have a high
    31.51s  user  발화 끝
    46.15s  agent 발화 끝
