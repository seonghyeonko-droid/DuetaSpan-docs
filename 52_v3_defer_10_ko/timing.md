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


     0.00s  user  발화 시작: 휴가 때 프랑스 갔던 사진 찾아줘…
     2.26s  user  발화 끝
     3.38s  user  발화 시작: …썸네일 말고.
     4.37s  <ret> 발화 (turn2 첫 프레임)
     4.44s  agent 발화 시작: <ret> 프랑스 휴가 사진 세 장을 찾았어요. IMG_1234.jpg, IMG_5678.jpg, IMG_9
     4.48s  user  발화 끝
     6.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: (tool result) /Users/sunan/Pictures/France Holiday/IMG_1234.jpg, /User
     8.12s  user  발화 시작: 음.
     8.54s  user  발화 끝
    13.02s  user  발화 시작: 아, IMG_9012.png 이거 열어 봐 줘.
    13.11s  agent 발화 끝
    16.20s  <ret> 발화 (turn5 첫 프레임)
    16.59s  agent 발화 시작: <ret> IMG_9012.png 파일은 PNG 이미지이고, 해상도는 천구백이십x1080, 용량은 이 점 삼
    16.72s  user  발화 끝
    18.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: (tool result) /Users/sunan/Pictures/France Holiday/IMG_9012.png: PNG i
    24.60s  agent 발화 끝
