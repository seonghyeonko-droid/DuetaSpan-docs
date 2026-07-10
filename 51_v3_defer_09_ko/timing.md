# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "보아",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-04-24",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "home",
#       "text": "User's home address is 530 Elm Street."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-08-12",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-24",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오션뷰 호텔, 샌디에이고, 이월 십일부터 칠박, 방 세 개 예 | S2 그 호텔에 수영장이 있나? | S3 아, 그런데— | S4 혹시 반려동물 동반 가능한가요?

     0.00s  user  발화 시작: 오션뷰 호텔, 샌디에이고, 이월 십일부터 칠박, 방 세 개 예약해 줘.
     4.76s  <ret> 발화 (turn1 첫 프레임)
     4.92s  agent 발화 시작: <ret> 오션뷰 호텔, 샌디에이고, 이월 십일부터 십칠일까지 방 세 개 예약이 완료됐습니다. 확인 번호는 
     5.05s  user  발화 끝
     6.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.20s]: (tool result) Booking confirmed: Ocean View Hotel, San Diego, Feb 10-1
    14.94s  user  발화 시작: 그 호텔에 수영장이 있나?
    15.12s  agent 발화 끝
    16.19s  <ret> 발화 (turn3 첫 프레임)
    16.51s  agent 발화 시작: <ret> 오션뷰 호텔에는 야외 수영장이 있는데, 아침 여덟시부터 밤 열시까지 운영합니다.
    16.60s  user  발화 끝
    18.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: (tool result) Ocean View Hotel has an outdoor pool, open 8 AM to 10 PM
    22.16s  agent 발화 끝
    23.48s  user  발화 시작: 아, 그런데—
    24.77s  user  발화 시작: 혹시 반려동물 동반 가능한가요?
    24.85s  user  발화 끝
    26.61s  <ret> 발화 (turn6 첫 프레임)
    27.00s  agent 발화 시작: <ret> 네, 오션뷰 호텔은 이십파운드 이하의 반려동물 동반이 가능하며, 숙박당 칠십오달러의 추가 요금이 
    27.16s  user  발화 끝
    28.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: (tool result) Ocean View Hotel allows pets under 20 lbs, with a $75 fe
    32.30s  user  발화 시작: 헐.
    32.84s  user  발화 끝
    34.51s  agent 발화 시작: 즐거운 여행 되세요.
    34.70s  agent 발화 끝
    36.08s  agent 발화 끝
