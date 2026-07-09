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

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도가 궁금해. | S2 아리아 레스토랑이 제일 괜찮아 보이는데, 예약 가능해? 내일  | S3 혹시 그 레스토랑에서 오페라 하우스가 잘 보이려나? | S4 고마워, 덕분에 내일 데이트가 즐거울 것 같아.

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도가 궁금해.
     3.75s  <ret> 발화 (turn1 첫 프레임)
     3.82s  agent 발화 시작: <ret> 시드니 오페라 하우스의 위도는 -삼십삼 점 팔 오 육 팔도, 경도는 백오십일 점 이 일 오 삼도입
     3.89s  user  발화 끝
     5.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.32s]: (tool result) latitude: -33.8568, longitude: 151.2153
     7.64s  user  발화 시작: 진짜?
     8.28s  user  발화 끝
    11.14s  user  발화 시작: 음… 그 근처에 괜찮은 레스토랑도 찾아줄 수 있어?
    11.14s  agent 발화 끝
    14.77s  <ret> 발화 (turn4 첫 프레임)
    15.07s  user  발화 끝
    15.17s  agent 발화 시작: <ret> 물론이죠, 어떤 종류의 음식을 선호하시나요? 근처에 아리아 레스토랑, 퀘이, 베넬롱 레스토랑이 있
    16.69s  ⚡SPAN 주입 [d'=1.92s / d_lead=2.97s]: (tool result) restaurants: ["Aria Restaurant", "Quay", "Bennelong"]
    18.05s  user  발화 시작: 응.
    18.45s  user  발화 끝
    22.27s  user  발화 시작: 아리아 레스토랑이 제일 괜찮아 보이는데, 예약 가능해? 내일 저녁 일곱시에 두 명으로.
    22.30s  agent 발화 끝
    28.55s  <ret> 발화 (turn7 첫 프레임)
    28.95s  agent 발화 시작: <ret> 네, 아리아 레스토랑 내일 저녁 일곱시에 두 명으로 예약이 확정되었습니다. 예약 번호는 팔 칠 육
    29.03s  user  발화 끝
    30.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.92s]: (tool result) reservation_id: 87654, status: confirmed
    36.86s  agent 발화 끝
    37.10s  user  발화 시작: 오, 정말 다행이다—
    38.98s  user  발화 시작: 혹시 그 레스토랑에서 오페라 하우스가 잘 보이려나?
    39.18s  user  발화 끝
    42.31s  agent 발화 시작: 아리아 레스토랑은 오페라 하우스가 잘 보이는 멋진 전망을 자랑합니다.
    42.59s  user  발화 끝
    45.24s  user  발화 시작: 그니까.
    45.88s  user  발화 끝
    46.52s  user  발화 시작: 그거 좋네. 그럼 내일 가는 길을 알려줘. 지금 출발하면 얼마나 걸릴까?
    46.72s  agent 발화 끝
    51.71s  <ret> 발화 (turn13 첫 프레임)
    52.10s  agent 발화 시작: <ret> 현재 위치를 알려주시면 경로를 안내해 드릴 수 있습니다. 현재 위치에서 아리아 레스토랑까지 십이 
    52.17s  user  발화 끝
    53.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.75s]: (tool result) travel_time: 25 minutes, distance: 12.5 km
    61.47s  agent 발화 끝
    62.70s  user  발화 시작: 고마워, 덕분에 내일 데이트가 즐거울 것 같아.
    66.08s  user  발화 끝
    66.08s  agent 발화 시작: 데이트 즐겁게 보내세요! 맛있는 음식과 멋진 풍경을 만끽하시길 바랍니다.
    71.22s  agent 발화 끝
