# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "도우",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-11",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-29",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 포틀랜드 오리건에 세탁 시설이 있고 평점 사성 이상인 집을 찾고 싶어요.
     5.01s  <ret> 발화 (turn1 첫 프레임)
     5.17s  agent 발화 시작: <ret> 포틀랜드 오리건에서 세탁 시설이 있는 평점 사성 이상 집 두 곳을 찾았습니다. 로즈 코티지는 평점
     5.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.69s]: (tool result) {"houses": [{"id": "PDX-123", "name": "The Rose Cottage"
     5.17s  user  발화 끝
    17.86s  user  발화 시작: 와.
    17.86s  agent 발화 끝
    18.33s  user  발화 시작: 로즈 코티지에 대해 좀 더 자세히 알려주세요.
    18.33s  user  발화 끝
    21.30s  <ret> 발화 (turn4 첫 프레임)
    21.62s  agent 발화 시작: <ret> 로즈 코티지는 조용하고 아늑한 동네에 위치한 매력적인 코티지입니다. 편안한 휴식을 위한 완벽한 장
    21.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.22s]: {"houses": [{"id": "PDX-123", "name": "The Rose Cottage", "rating": 4.
    21.62s  user  발화 끝
    33.84s  user  발화 시작: 네.
    33.84s  agent 발화 끝
    34.31s  user  발화 시작: 이번 주 토요일에 예약할 수 있는지 확인해 주세요.
    34.31s  user  발화 끝
    38.07s  user  발화 끝
