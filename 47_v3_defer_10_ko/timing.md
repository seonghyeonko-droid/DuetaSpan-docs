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


     0.00s  user  발화 시작: 휴가 때 프랑스 갔던 사진들 찾아줘…
     2.54s  user  발화 끝
     3.91s  user  발화 시작: …썸네일 말고.
     4.57s  <ret> 발화 (turn2 첫 프레임)
     4.89s  agent 발화 시작: <ret> 프랑스 휴가 사진 이십칠장을 찾았습니다. 썸네일은 제외했어요.
     5.00s  user  발화 끝
     6.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: (tool result) Found 27 images matching "프랑스 휴가" excluding thumbnails.
     6.89s  user  발화 시작: 음.
     7.29s  user  발화 끝
     9.70s  agent 발화 끝
     9.83s  user  발화 시작: 와, 많네. 그 중에서 에펠탑 사진만 보여줘.
    11.93s  <ret> 발화 (turn5 첫 프레임)
    12.25s  agent 발화 시작: <ret> 에펠탑 사진은 팔장 있네요.
    12.41s  user  발화 끝
    12.73s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.75s]: (tool result) Found 8 images containing "에펠탑" from the previous search
    14.00s  agent 발화 끝
