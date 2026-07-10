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


     0.00s  user  발화 시작: 프랑스 휴가 사진 찾아줘, 썸네일 말고.
     2.32s  <ret> 발화 (turn1 첫 프레임)
     2.39s  agent 발화 시작: <ret> 프랑스 휴가 사진을 찾고 있는데, 썸네일은 제외했습니다… 찾을 수 없습니다.
     2.44s  user  발화 끝
     4.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.31s]: (no information found)
     7.63s  user  발화 시작: 몇 장이나 찾았어?
     7.71s  agent 발화 끝
     8.79s  <ret> 발화 (turn3 첫 프레임)
     8.86s  user  발화 끝
     9.18s  agent 발화 시작: <ret> 총 스물세 장의 사진을 찾았습니다. 혹시 특정 날짜의 사진을 원하세요?
    10.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.95s]: [23]
    12.72s  user  발화 시작: 응.
    13.13s  user  발화 끝
    14.10s  user  발화 시작: 응, 에펠탑 앞에서 찍은 사진만 보여줘.
    14.13s  agent 발화 끝
    16.05s  <ret> 발화 (turn6 첫 프레임)
    16.37s  agent 발화 시작: <ret> 에펠탑 사진을 찾고 있습니다. 잠시만 기다려 주세요… 찾을 수 없습니다.
    16.59s  user  발화 끝
    17.17s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.09s]: (no information found)
    21.46s  agent 발화 끝
