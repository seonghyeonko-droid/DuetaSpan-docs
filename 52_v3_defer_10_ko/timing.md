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


     0.00s  user  발화 시작: 작년 프랑스 휴가 사진 찾아줘, 썸네일 말고.
     3.67s  <ret> 발화 (turn1 첫 프레임)
     3.74s  agent 발화 시작: <ret> 네, 알겠습니다. 작년 프랑스 휴가 사진 열두 개 찾았어요. 파리 에펠탑, 니스 해변, 리옹 박물
     3.93s  user  발화 끝
     4.17s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.00s]: (tool result) 12 files found; filename: Paris_EiffelTower.jpg, size: 3
     9.03s  user  발화 시작: 맞아.
     9.75s  user  발화 끝
    12.27s  agent 발화 끝
    15.00s  user  발화 시작: 아, 맞다. 그때 숙소 예약했던 거… 혹시 다시 확인할 수 있어?
    19.25s  agent 발화 시작: 잠깐만 확인해 볼게요.
    19.48s  user  발화 끝
    20.77s  agent 발화 끝
    21.25s  user  발화 시작: 숙소 이름은 '르 플뢰르'였나? 아니면 '라 로즈'?
    24.74s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Booking confirmed; hotel: Le Fleur, dates: 2023-07-15 to
    25.45s  agent 발화 시작: <ret> 네, 기억이 잘 안 나셨군요. '르 플뢰르' 호텔, 작년 칠월 십오일부터 이십이일까지 더블룸 예약
    25.53s  user  발화 끝
    33.89s  agent 발화 끝
