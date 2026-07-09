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
#       "date": "2026-06-04",
#       "category": "home",
#       "text": "User's home address is 447 Oak Avenue."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-04-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 내 프랑스 휴가 사진 찾아줘. 작년 거인데, 썸네일 말고.
     4.09s  <ret> 발화 (turn1 첫 프레임)
     4.17s  agent 발화 시작: <ret> 네, 알겠습니다. 잠시만 확인해 볼게요. 작년 프랑스 휴가 사진이 삼십칠 개가 나왔어요. 썸네일은
     4.35s  user  발화 끝
     5.37s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.75s]: (tool result) found 37 files matching "france holiday" from 2023, excl
     8.89s  user  발화 시작: 맞아.
     9.52s  user  발화 끝
    11.86s  agent 발화 끝
    14.56s  user  발화 시작: 오, 많네. 그 중에서 해변 사진만 보여줘.
    17.46s  <ret> 발화 (turn4 첫 프레임)
    17.85s  agent 발화 시작: <ret> 해변 사진만 찾으시는군요.
    17.96s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.94s]: (tool result) found 12 files containing "beach" within the previous se
    18.07s  user  발화 끝
    19.58s  agent 발화 시작: 네, 해변 사진 열두 개가 나왔습니다.
    19.78s  agent 발화 끝
    21.83s  agent 발화 끝
