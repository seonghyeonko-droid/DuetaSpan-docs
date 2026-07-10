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


     0.00s  user  발화 시작: 내 프랑스 휴가 사진 찾아줘. 작년 거인데, 썸네일 말고 제대로 된 사진으로.
     4.88s  <ret> 발화 (turn1 첫 프레임)
     4.94s  agent 발화 시작: <ret> 작년 프랑스 휴가 사진 스물세개가 발견됐어요. 썸네일은 제외했고요.
     5.14s  user  발화 끝
     6.66s  user  발화 시작: 음.
     6.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: (tool result) 23 files found matching 'France holiday' from 2023, excl
     7.06s  user  발화 끝
     9.15s  agent 발화 끝
    11.84s  user  발화 시작: 그 중에서 에펠탑 사진만 보여줘.
    13.42s  <ret> 발화 (turn4 첫 프레임)
    13.66s  agent 발화 시작: <ret> 그 스물세개 중에서 에펠탑 사진이 일곱개 있어요.
    13.82s  user  발화 끝
    14.46s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.61s]: (tool result) 7 files containing 'Eiffel Tower' found within the previ
    15.12s  user  발화 시작: 응.
    15.47s  user  발화 끝
    17.27s  agent 발화 끝
    17.40s  user  발화 시작: 잠깐만, 지금 몇 시야?
    17.99s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) It is currently 3:17 PM.
    18.90s  agent 발화 시작: <ret> 현재 시간은 오후 세 시 십칠분입니다.
    19.00s  user  발화 끝
    21.48s  agent 발화 끝
