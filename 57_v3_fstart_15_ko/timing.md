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

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도가 궁금해. | S2 가격대는 어때? | S3 와, 엄청 비싸네. 혹시 좀 더— | S4 그럼, 아리아 레스토랑으로 예약해 줄 수 있어? 내일 저녁 일

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도가 궁금해.
     3.71s  <ret> 발화 (turn1 첫 프레임)
     3.78s  agent 발화 시작: <ret> 시드니 오페라 하우스의 좌표를 알려드릴게요. 시드니 오페라 하우스는 위도 마이너스 삼십삼 점 팔오
     3.83s  user  발화 끝
     5.15s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.81s]: (tool result) The Sydney Opera House is located at latitude -33.8568 a
     8.42s  user  발화 시작: 응.
     8.83s  user  발화 끝
    14.45s  agent 발화 끝
    14.54s  user  발화 시작: 음… 그 근처에 괜찮은 레스토랑 있을까?
    17.80s  <ret> 발화 (turn4 첫 프레임)
    18.11s  user  발화 끝
    18.19s  agent 발화 시작: <ret> 근처 레스토랑을 찾아볼게요. 아리아 레스토랑이 시드니 오페라 하우스에서 영 점 팔킬로미터 거리에 
    18.84s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.49s]: (tool result) Aria Restaurant is 0.8km from the Sydney Opera House and
    26.62s  agent 발화 끝
    27.87s  user  발화 시작: 가격대는 어때?
    28.94s  <ret> 발화 (turn6 첫 프레임)
    29.34s  agent 발화 시작: <ret> 아리아 레스토랑의 가격대를 알아볼게요. 아리아 레스토랑은 가격대가 매우 비싼 편입니다.
    29.34s  user  발화 끝
    30.22s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.26s]: (tool result) Aria Restaurant has a price range of $$$$ (Very Expensiv
    34.93s  user  발화 시작: 와, 엄청 비싸네. 혹시 좀 더—
    34.99s  agent 발화 끝
    37.83s  user  발화 시작: 분위기는 어때? 조용하고 로맨틱한 곳으로 알고 싶은데.
    37.97s  user  발화 끝
    41.62s  <ret> 발화 (turn9 첫 프레임)
    41.77s  agent 발화 시작: <ret> 아, 분위기를 중요하게 생각하시는군요. 아리아 레스토랑은 고급스러운 분위기로 알려져 있습니다.
    41.85s  user  발화 끝
    43.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.12s]: (tool result) Aria Restaurant is described as romantic, classy, and up
    47.87s  agent 발화 시작: 아리아 레스토랑은 로맨틱하고 세련된 분위기라고 합니다.
    47.88s  agent 발화 끝
    49.23s  user  발화 시작: 응.
    49.45s  user  발화 끝
    51.24s  agent 발화 끝
    51.28s  agent 발화 시작: 고급스러운 분위기에서 특별한 시간을 보내기에 좋을 것 같아요.
    53.78s  user  발화 시작: 그니까.
    54.23s  user  발화 끝
    55.12s  agent 발화 끝
    55.85s  user  발화 시작: 그럼, 아리아 레스토랑으로 예약해 줄 수 있어? 내일 저녁 일곱시에 두 명으로.
    61.57s  <ret> 발화 (turn15 첫 프레임)
    61.89s  agent 발화 시작: <ret> 내일 저녁 일곱시에 아리아 레스토랑 두 분 예약해 드릴게요. 아리아 레스토랑 내일 저녁 일곱시 두
    62.13s  user  발화 끝
    63.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.71s]: (tool result) Reservation confirmed at Aria Restaurant for tomorrow at
    72.88s  agent 발화 끝
