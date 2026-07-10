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
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
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


     0.00s  user  발화 시작: 휴가 때 프랑스 사진 찾아줘. 썸네일 말고.
     2.92s  <ret> 발화 (turn1 첫 프레임)
     2.99s  agent 발화 시작: <ret> 프랑스 휴가 사진 세 장을 찾았어요. /home/user/Pictures/France_Holida
     3.05s  user  발화 끝
     4.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: (tool result) /home/user/Pictures/France Holiday_2025/IMG_1234.jpg, /h
     6.38s  user  발화 시작: 음.
     6.77s  user  발화 끝
    10.87s  user  발화 시작: 제일 큰 파일은 뭐야?
    10.87s  agent 발화 끝
    11.76s  <ret> 발화 (turn4 첫 프레임)
    12.16s  agent 발화 시작: <ret> IMG_9012.png 파일이 가장 크고, 십이 점 오MB에 삼천팔백사십x2160 픽셀입니다.
    12.34s  user  발화 끝
    13.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: (tool result) 12.5MB, PNG image, 3840x2160 pixels
    20.27s  agent 발화 끝
