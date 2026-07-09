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

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도는 어떻게 돼? | S2 해산물 종류로 부탁해. | S3 그럼 거기 오후 일곱 시로 예약해 줘. 두 명으로. | S4 지금 있는 곳에서부터 알려줘.

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도는 어떻게 돼?
     3.89s  <ret> 발화 (turn1 첫 프레임)
     3.96s  agent 발화 시작: <ret> 확인해 볼게요. 시드니 오페라 하우스는 위도 마이너스 삼십삼 점 팔오육팔, 경도 백오십일 점 이일
     4.07s  user  발화 끝
     4.77s  ⚡SPAN 주입 [d'=0.88s / d_lead=0.95s]: (tool result) The Sydney Opera House is located at latitude -33.8568 a
     7.21s  user  발화 시작: 응.
     7.57s  user  발화 끝
    11.53s  user  발화 시작: 음… 그 근처에 괜찮은 레스토랑 있으면 찾아줘.
    11.56s  agent 발화 끝
    15.37s  user  발화 끝
    15.72s  agent 발화 시작: 어떤 종류의 음식을 선호하시나요? 이탈리아, 프랑스, 아니면 다른—
    20.16s  user  발화 시작: 해산물 종류로 부탁해.
    20.91s  agent 발화 끝
    21.62s  <ret> 발화 (turn6 첫 프레임)
    22.02s  agent 발화 시작: <ret> 물론입니다.
    22.09s  user  발화 끝
    22.34s  ⚡SPAN 주입 [d'=0.72s / d_lead=0.81s]: (tool result) Three seafood restaurants were found: “Sydney Cove Oyste
    22.83s  agent 발화 끝
    22.88s  agent 발화 시작: 근처에 해산물 레스토랑 세 곳이 있습니다. 시드니 코브 오이스터 바, 도일스 온 더 비치, 카탈리나 로즈 베
    25.96s  user  발화 시작: 응.
    26.46s  user  발화 끝
    30.39s  agent 발화 시작: 시드니 코브 오이스터 바의 평점이 가장 높네요, 별점 사 점 오입니다. 예약 가능 시간은 지금부터 두 시간 
    30.39s  agent 발화 끝
    39.24s  agent 발화 끝
    39.80s  user  발화 시작: 그럼 거기 오후 일곱 시로 예약해 줘. 두 명으로.
    43.21s  <ret> 발화 (turn11 첫 프레임)
    43.53s  agent 발화 시작: <ret> 네, 예약 진행해 드릴게요.
    43.82s  user  발화 끝
    44.65s  ⚡SPAN 주입 [d'=1.44s / d_lead=1.79s]: (tool result) Reservation confirmed at Sydney Cove Oyster Bar for 2 pe
    45.32s  agent 발화 끝
    45.42s  agent 발화 시작: 시드니 코브 오이스터 바에 두 분, 오후 일곱 시로 예약이 완료되었습니다. 확인 번호는 칠팔구사오육입니다.
    53.01s  user  발화 시작: 고마워. 혹시 거기 가는 가장 빠른 길은 어떻게 돼?
    53.06s  agent 발화 끝
    57.22s  user  발화 끝
    57.38s  agent 발화 시작: 출발 위치를 알려주시겠어요? 현재 계신 곳에서부터 길 안내를 해 드릴게요.
    60.56s  user  발화 시작: 그니까.
    61.05s  user  발화 끝
    62.20s  agent 발화 끝
    62.25s  user  발화 시작: 지금 있는 곳에서부터 알려줘.
    64.26s  <ret> 발화 (turn17 첫 프레임)
    64.50s  agent 발화 시작: <ret> 네, 잠시만 기다려 주세요.
    64.64s  user  발화 끝
    65.54s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.75s]: (tool result) Driving directions to Sydney Cove Oyster Bar: 1. Head no
    66.25s  agent 발화 끝
    66.36s  agent 발화 시작: 조지 스트리트를 북쪽으로 가세요. 그리고 서큘러 키로 우회전, 서큘러 키 이스트로 계속 가시면 레스토랑이 왼
    76.47s  agent 발화 끝
