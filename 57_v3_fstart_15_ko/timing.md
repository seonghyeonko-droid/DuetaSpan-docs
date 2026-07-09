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
#       "date": "2026-02-01",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-09-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-05-30",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도는 어떻게 돼? | S2 해산물 먹고 싶은데, 분위기 좋은 곳으로! | S3 내일 저녁 일곱 시로 예약해 줘. 두 명. | S4 고마워!

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도는 어떻게 돼?
     3.65s  <ret> 발화 (turn1 첫 프레임)
     3.72s  agent 발화 시작: <ret> 시드니 오페라 하우스의 위도는 마이너스 삼십삼 점 팔오육팔도, 경도는 백오십일 점 이일오삼도입니다
     3.83s  user  발화 끝
     5.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.28s]: (tool result) latitude: -33.8568, longitude: 151.2153
     6.87s  user  발화 시작: 응.
     7.37s  user  발화 끝
    11.00s  agent 발화 끝
    11.09s  user  발화 시작: 음, 그 근처에 괜찮은 레스토랑 있어?
    13.93s  user  발화 끝
    14.27s  agent 발화 시작: 물론이죠. 어떤 종류의 음식을 선호하시나요? 이탈리아, 프랑스, 아니면—
    18.89s  user  발화 시작: 해산물 먹고 싶은데, 분위기 좋은 곳으로!
    19.55s  agent 발화 끝
    21.64s  <ret> 발화 (turn6 첫 프레임)
    22.03s  agent 발화 시작: <ret> 해산물요? 분위기 좋은 곳이라면 ‘Quay’를 추천해 드립니다.
    22.08s  user  발화 끝
    23.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: (tool result) Quay: 4.6 stars, seafood, Upper Level, Overseas Passenge
    25.87s  agent 발화 끝
    25.99s  agent 발화 시작: ‘Quay’는 별점 사 점 육, 해산물 전문점이고, 오버시즈 패신저 터미널에 있습니다.
    28.66s  user  발화 시작: 응.
    29.16s  user  발화 끝
    32.15s  <ret> 발화 (turn9 첫 프레임)
    32.47s  agent 발화 끝
    32.55s  agent 발화 시작: <ret> 예약해 드릴까요? 혹시 특정 날짜나 시간이 있으신가요?
    33.99s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.98s]: (tool result) no availability for tonight
    36.50s  agent 발화 시작: 죄송합니다, 오늘 저녁은 예약이 꽉 찼습니다. 내일은 어떠신가요?
    36.53s  agent 발화 끝
    40.92s  user  발화 시작: 내일 저녁 일곱 시로 예약해 줘. 두 명.
    41.22s  agent 발화 끝
    44.03s  <ret> 발화 (turn12 첫 프레임)
    44.19s  agent 발화 시작: <ret> 네, ‘Quay’ 내일 저녁 일곱 시, 두 분 예약 완료되었습니다. 확인 번호는 ZXCV123입니
    44.28s  user  발화 끝
    45.87s  ⚡SPAN 주입 [d'=1.84s / d_lead=6.76s]: (tool result) reservation confirmed: Quay, tomorrow 7pm, 2 people, con
    50.96s  agent 발화 끝
    51.60s  user  발화 시작: 고마워!
    52.39s  agent 발화 시작: 천만에요. 즐거운 시간 보내세요.
    52.42s  user  발화 끝
    54.97s  agent 발화 끝
