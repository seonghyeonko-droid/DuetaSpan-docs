# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "Ada",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-03",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-07-09",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-06-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도가 궁금해. | S2 아, 거기 가봤는데 좀 비싸더라. | S3 혹시 좀 더 저렴한 곳은 없을까? | S4 고마워.

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도가 궁금해.
     3.65s  <ret> 발화 (turn1 첫 프레임)
     3.73s  agent 발화 시작: <ret> 알겠습니다. 시드니 오페라 하우스의 위도는 -삼십삼 점 팔 오 육 팔도, 경도는 백오십일 점 이 
     3.79s  user  발화 끝
     4.12s  ⚡SPAN 주입 [d'=0.47s / d_lead=0.47s]: (tool result) latitude: -33.8568, longitude: 151.2153
     8.09s  user  발화 시작: 진짜?
     8.72s  user  발화 끝
    12.13s  agent 발화 끝
    12.19s  user  발화 시작: 그 근처에 괜찮은 레스토랑 있어?
    14.49s  <ret> 발화 (turn4 첫 프레임)
    14.73s  user  발화 끝
    14.81s  agent 발화 시작: <ret> 물론이죠. 아리아 레스토랑 평점이 사 점 육이고, 가격대는 비싼 편입니다.
    14.99s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.55s]: (tool result) restaurant_name: Aria Restaurant, rating: 4.6, price_ran
    18.23s  user  발화 시작: 어어.
    19.01s  user  발화 끝
    20.29s  user  발화 시작: 아, 거기 가봤는데 좀 비싸더라.
    20.31s  agent 발화 끝
    22.87s  user  발화 끝
    22.88s  agent 발화 시작: 하지만 전망은 정말 좋—
    23.99s  user  발화 시작: 혹시 좀 더 저렴한 곳은 없을까?
    24.49s  agent 발화 끝
    26.22s  <ret> 발화 (turn9 첫 프레임)
    26.61s  user  발화 끝
    26.62s  agent 발화 시작: <ret> 네, 물론입니다. 좀 더 합리적인 가격대의 레스토랑을 찾아볼까요?
    28.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.62s]: (tool result) restaurant_name: The Squire's Landing, rating: 4.2, pric
    31.18s  agent 발화 시작: 스콰이어스 랜딩 레스토랑은 평점 사 점 이이고, 가격대는 중간 정도입니다.
    31.25s  agent 발화 끝
    32.83s  user  발화 시작: 와.
    33.64s  user  발화 끝
    35.79s  <ret> 발화 (turn12 첫 프레임)
    35.94s  agent 발화 시작: <ret> 스콰이어스 랜딩은 오페라 하우스에서 도보로 약 십분 거리에 있습니다.
    36.05s  agent 발화 끝
    37.63s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.89s]: (tool result) distance: 0.8 km, walking_time: 10 minutes
    39.83s  agent 발화 끝
    39.92s  agent 발화 시작: 도보 거리는 영 점 팔킬로미터이고, 걸리는 시간은 십분입니다.
    41.29s  user  발화 시작: 응.
    41.79s  user  발화 끝
    44.51s  user  발화 시작: 거기 예약 좀 해줘. 오늘 저녁 일곱시에 두 명.
    44.63s  agent 발화 끝
    48.03s  <ret> 발화 (turn16 첫 프레임)
    48.19s  agent 발화 시작: <ret> 네, 예약 진행해 드리겠습니다.
    48.35s  user  발화 끝
    49.23s  ⚡SPAN 주입 [d'=1.20s / d_lead=1.75s]: (tool result) reservation_id: 7892345, confirmation_number: ABC123XYZ
    49.94s  agent 발화 끝
    50.06s  agent 발화 시작: 스콰이어스 랜딩에 오늘 저녁 일곱시에 두 명으로 예약되었습니다. 예약 번호는 ABC123XYZ입니다.
    57.01s  agent 발화 끝
    57.38s  user  발화 시작: 고마워.
    58.20s  user  발화 끝
    58.35s  agent 발화 시작: 천만에요. 즐거운 저녁 식사 되세요!
    60.93s  agent 발화 끝
