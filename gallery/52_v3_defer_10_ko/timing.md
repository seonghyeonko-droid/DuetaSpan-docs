# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "라율",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
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


     0.00s  user  발화 시작: 내 프랑스 휴가 사진 찾아줘. 작년 거 말고…
     3.15s  user  발화 끝
     4.58s  user  발화 시작: …썸네일 말고.
     5.78s  <ret> 발화 (turn2 첫 프레임)
     5.85s  agent 발화 시작: <ret> 이천이십이년 프랑스 휴가 사진 십칠장을 찾았어요. 혹시 특정 날짜 사진을 보고 싶으신가요?
     6.00s  user  발화 끝
     7.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: (tool result) 2022년 프랑스 휴가 관련 사진 17장 발견.
     8.85s  user  발화 시작: 그래.
     9.34s  user  발화 끝
    13.03s  agent 발화 끝
    13.09s  user  발화 시작: 아니, 그냥 보여줘.
    14.71s  <ret> 발화 (turn5 첫 프레임)
    15.03s  user  발화 끝
    15.10s  agent 발화 시작: <ret> 사진첩에 표시해 드렸어요. 확인해 보시고, 다른 사진을 찾으실 게 있으면 말씀해 주세요. [hap
    16.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.93s]: (tool result) 사진첩에 표시됨.
    21.03s  agent 발화 끝
