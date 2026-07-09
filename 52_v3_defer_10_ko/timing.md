# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Alice",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-07",
#       "category": "home",
#       "text": "User's home address is 447 Oak Avenue."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 프랑스 휴가 사진 찾아줘. 작년 거. 썸네일 말고.
     3.56s  <ret> 발화 (turn1 첫 프레임)
     3.64s  agent 발화 시작: <ret> 네, 알겠습니다. 작년 프랑스 휴가 사진이 삼십칠 장 있습니다. 썸네일은 제외했어요.
     3.84s  user  발화 끝
     4.60s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.18s]: (tool result) Found 37 images matching '프랑스 휴가' from 2023, excluding t
     7.62s  user  발화 시작: 맞아.
     8.16s  user  발화 끝
    10.13s  agent 발화 끝
    12.86s  user  발화 시작: 그중에 에펠탑 사진은 몇 장이야?
    14.08s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) 8 images contain '에펠탑'.
    14.92s  agent 발화 시작: <ret> 에펠탑 사진은 여덟 장이네요.
    15.12s  user  발화 끝
    17.09s  agent 발화 끝
