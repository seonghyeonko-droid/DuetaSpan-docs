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

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도는 어떻게 돼? | S2 해산물. | S3 혹시 예약도 가능해? | S4 와, 고마워.

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도는 어떻게 돼?
     3.90s  <ret> 발화 (turn1 첫 프레임)
     3.97s  agent 발화 시작: <ret> 잠시만요— 위도는 마이너스 삼십삼 점 팔오육팔도, 경도는 백오십일 점 이일오삼도입니다.
     4.07s  user  발화 끝
     4.40s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.69s]: (tool result) latitude: -33.8568, longitude: 151.2153
     6.87s  user  발화 시작: 응.
     7.37s  user  발화 끝
    10.77s  user  발화 시작: 음, 그 근처에 괜찮은 레스토랑 있어?
    10.88s  agent 발화 끝
    13.77s  user  발화 끝
    14.09s  agent 발화 시작: 물론이죠. 어떤 종류의 음식을 좋아하세요?
    17.32s  agent 발화 끝
    18.44s  user  발화 시작: 해산물.
    19.03s  <ret> 발화 (turn6 첫 프레임)
    19.40s  user  발화 끝
    19.42s  agent 발화 시작: <ret> 해산물 레스토랑을 찾고 계시는군요— 아리아 레스토랑, 퀘이, 카페 시드니가 근처에 있습니다.
    20.15s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.19s]: (tool result) restaurants: Aria Restaurant, Quay, Cafe Sydney
    21.89s  user  발화 시작: 응.
    22.39s  user  발화 끝
    25.37s  agent 발화 시작: 아리아 레스토랑은 오페라 하우스 바로 옆에 있고, 퀘이는 조금 더 걸어가야 합니다. 카페 시드니는 전망이 아
    25.44s  agent 발화 끝
    32.79s  agent 발화 끝
    32.99s  user  발화 시작: 혹시 예약도 가능해?
    34.31s  <ret> 발화 (turn10 첫 프레임)
    34.71s  agent 발화 시작: <ret> 예약 가능합니다. 아리아 레스토랑으로 예약해 드릴까요?
    34.74s  user  발화 끝
    36.15s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.84s]: (tool result) booking: confirmed for 2 people at Aria Restaurant, 7:00
    38.37s  agent 발화 시작: 네, 아리아 레스토랑에 두 분, 저녁 일곱 시로 예약이 완료되었습니다.
    38.54s  agent 발화 끝
    42.72s  agent 발화 끝
    43.95s  user  발화 시작: 와, 고마워.
    45.35s  agent 발화 시작: 천만에요. 즐거운 시간 보내세요!
    45.38s  user  발화 끝
    48.40s  agent 발화 끝
