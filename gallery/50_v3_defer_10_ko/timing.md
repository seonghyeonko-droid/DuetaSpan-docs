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


     0.00s  user  발화 시작: 휴가 때 프랑스 간…
     1.75s  user  발화 끝
     2.88s  user  발화 시작: …사진 찾아줘. 썸네일 말고.
     4.66s  <ret> 발화 (turn2 첫 프레임)
     4.97s  agent 발화 시작: <ret> 프랑스 휴가 사진 스물세 개 찾았어요. 썸네일은 제외했고요.
     5.15s  user  발화 끝
     6.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: (tool result) Found 23 files matching "프랑스 휴가 사진" excluding "썸네일".
     7.57s  user  발화 시작: 맞아.
     8.34s  user  발화 끝
     9.23s  user  발화 시작: 그 중에서 제일 큰 파일 크기 사진 보여줘.
     9.32s  agent 발화 끝
    11.12s  <ret> 발화 (turn5 첫 프레임)
    11.51s  agent 발화 시작: <ret> 제일 큰 사진 파일 크기는 십이 점 오MB예요.
    11.63s  user  발화 끝
    13.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.55s]: (tool result) File size: 12.5 MB.
    15.06s  agent 발화 끝
