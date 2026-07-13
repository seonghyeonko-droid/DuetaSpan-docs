# v3_noinfo_23_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Casey",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-27",
#       "category": "home",
#       "text": "User's home address is 469 Oak Avenue."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-30",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아냐… | S2 아, 아쉽네. 그럼 지금 서울 날씨는 어때? | S3 그렇구나. 그럼 다음 주에 서울 호텔을 예약해 볼까? | S4 음, 가능하면 명동 근처로.

     0.00s  user  발화 시작: 아냐…
     0.47s  user  발화 시작: 샤르마 말이야? 작년 컨퍼런스에서 만났는데.
     0.47s  user  발화 끝
     2.65s  <ret> 발화 (turn2 첫 프레임)
     2.81s  agent 발화 시작: <ret> 아냐 샤르마 님에 대한 공개된 연락처는 찾을 수 없었습니다.
     2.81s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.22s]: (no information found)
     2.81s  user  발화 끝
     7.03s  user  발화 시작: 어.
     7.03s  agent 발화 끝
     7.49s  user  발화 시작: 아, 아쉽네. 그럼 지금 서울 날씨는 어때?
     7.49s  user  발화 끝
    10.37s  <ret> 발화 (turn5 첫 프레임)
    10.77s  agent 발화 시작: <ret> 현재 서울의 기온은 섭씨 이십삼 점 영도이고, 습도는 칠십사 퍼센트, 풍속은 시속 오 점 오 킬로
    10.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.49s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    10.77s  user  발화 끝
    18.27s  agent 발화 시작: 거기 꽤 괜찮은 날씨인 것 같네요.
    18.27s  agent 발화 끝
    21.08s  user  발화 시작: 어.
    21.08s  agent 발화 끝
    21.55s  user  발화 시작: 그렇구나. 그럼 다음 주에 서울 호텔을 예약해 볼까?
    21.55s  user  발화 끝
    25.29s  agent 발화 시작: 정말 좋은 생각이에요! 여행 계획을 세우는 건 정말 설레는 일이죠.
    25.29s  user  발화 끝
    29.98s  user  발화 시작: 아.
    29.98s  agent 발화 끝
    30.45s  user  발화 시작: 음, 가능하면 명동 근처로.
    30.45s  user  발화 끝
    32.24s  <ret> 발화 (turn12 첫 프레임)
    32.32s  agent 발화 시작: <ret> 롯데 호텔의 엘 칠 명동을 찾았는데, 별점은 사 점 오개이고, 일박에 십팔만 원부터 시작하며, 아
    32.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.77s]: (tool result) L7 Myeongdong by LOTTE, 4.5 stars, from ₩180,000 per nig
    32.32s  user  발화 끝
    43.09s  agent 발화 시작: 괜찮으세요?
    43.09s  agent 발화 끝
    43.56s  user  발화 시작: 응.
    43.56s  agent 발화 끝
    44.03s  user  발화 끝
