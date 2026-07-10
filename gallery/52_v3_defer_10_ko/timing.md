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


     0.00s  user  발화 시작: 작년 프랑스 휴가 사진 찾아줘, 썸네일 말고.
     2.92s  <ret> 발화 (turn1 첫 프레임)
     2.99s  agent 발화 시작: <ret> 프랑스 휴가 사진 세 장을 찾았어요. 이천이십삼년 칠월 십오일 파리, 칠월 십팔일 니ース, 칠월 
     3.05s  user  발화 끝
     4.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.87s]: (tool result) 2023-07-15 Paris.jpg, 2023-07-18 Nice.jpg, 2023-07-22 Ly
     6.39s  user  발화 시작: 음.
     7.11s  user  발화 끝
    10.86s  user  발화 시작: 음… 리옹 사진 보여줘.
    10.87s  agent 발화 끝
    12.44s  <ret> 발화 (turn4 첫 프레임)
    12.83s  agent 발화 시작: <ret> 리옹 사진을 띄워 드릴게요. 잠시만 기다려 주세요.
    13.02s  user  발화 끝
    14.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: (tool result) file opened
    16.67s  agent 발화 끝
    16.71s  agent 발화 시작: 리옹 사진을 열었어요. 즐거운 시간 되세요.
    19.63s  agent 발화 끝
