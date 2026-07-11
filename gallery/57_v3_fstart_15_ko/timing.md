# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "재현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-06-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-11-19",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-09-22",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-02-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 오늘 밤에 숙소 예약 좀 알아봐 줄 수 있어? 조용한 곳으로.
     3.96s  agent 발화 시작: 어떤 지역을 찾으시나요?
     4.02s  user  발화 끝
     5.39s  agent 발화 끝
     5.43s  user  발화 시작: 음… 해운대 쪽으로 괜찮을 것 같아.
     7.83s  agent 발화 시작: 해운대요? 해운대에서 조용한 숙소를 찾아보겠습니다—
     7.83s  user  발화 끝
    10.37s  user  발화 시작: … 바닷가 바로 앞은 좀 시끄러울 것 같고, 조금 안쪽에 있는 곳으로 알아봐 줄 수 있을까?
    11.06s  agent 발화 끝
    15.45s  <ret> 발화 (turn5 첫 프레임)
    15.84s  agent 발화 시작: <ret> 해운대 브리즈 호텔은 해운대구 해운대로 백이십삼번지에 위치하며, 일박당 십오만 원이고 현재 다섯개
    15.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: {"hotel_name": "Hotel Haeundae Breeze", "address": "123 Haeundae-ro, H
    15.98s  user  발화 끝
    20.95s  user  발화 시작: 네.
    21.78s  user  발화 끝
    24.33s  agent 발화 시작: 평점이 꽤 높네요. 혹시 다른 조건도 있으신가요?
    24.36s  agent 발화 끝
    27.43s  agent 발화 끝
