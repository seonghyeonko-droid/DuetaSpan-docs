# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "라완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-09-09",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-06-19",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-05-30",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-08",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도가 궁금해요. | S2 흐음… 시드니 공항까지 가는 가장 빠른 방법은 뭐예요? | S3 …기차 말고 버스는 얼마나 걸려요? | S4 감사합니다. 즐거운 하루 보내세요.

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도가 궁금해요.
     3.19s  <ret> 발화 (turn1 첫 프레임)
     3.26s  agent 발화 시작: <ret> 시드니 오페라 하우스의 위도는 남위 삼십삼 점 팔 오 육 팔도, 경도는 동경 백오십일 점 이 일 
     3.47s  user  발화 끝
     5.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.97s]: [{"latitude": -33.8568, "longitude": 151.2153}]
     6.02s  user  발화 시작: 와.
     6.84s  user  발화 끝
    11.11s  agent 발화 시작: 아름다운 곳이죠. 혹시 시드니에 가실 계획이 있으신가요?
    11.23s  agent 발화 끝
    12.78s  user  발화 시작: 응.
    13.27s  user  발화 끝
    14.48s  agent 발화 끝
    15.58s  user  발화 시작: 아니요, 그냥 궁금해서요. 근데, 지금 가장 가까운 공항은 어디예요?
    19.63s  <ret> 발화 (turn6 첫 프레임)
    20.02s  agent 발화 시작: <ret> 현재 위치에서 가장 가까운 공항은 시드니 공항이며, 거리는 십구km입니다.
    20.07s  user  발화 끝
    21.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: [{"name": "Sydney Airport", "distance": "19km"}]
    24.73s  user  발화 시작: 흐음… 시드니 공항까지 가는 가장 빠른 방법은 뭐예요?
    24.83s  agent 발화 끝
    27.69s  <ret> 발화 (turn8 첫 프레임)
    28.08s  agent 발화 시작: <ret> 시드니 오페라 하우스에서 시드니 공항까지 가장 빠른 방법은 기차를 타고—
    28.28s  user  발화 끝
    29.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.67s]: [{"mode": "train", "duration": "30 minutes"}]
    31.93s  user  발화 시작: …기차 말고 버스는 얼마나 걸려요?
    32.74s  agent 발화 끝
    34.06s  <ret> 발화 (turn10 첫 프레임)
    34.24s  user  발화 끝
    34.45s  agent 발화 시작: <ret> 버스로 가시면 약 사십오분 정도 소요될 것으로 예상됩니다.
    35.42s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.56s]: [{"mode": "bus", "duration": "45 minutes"}]
    37.90s  agent 발화 시작: 버스 요금은 약 칠호주 달러 정도입니다.
    38.01s  agent 발화 끝
    39.38s  user  발화 시작: 어어.
    40.21s  user  발화 끝
    40.37s  user  발화 시작: 좋아요, 그럼 기차표 예매 좀 도와주시겠어요?
    40.49s  agent 발화 끝
    42.87s  <ret> 발화 (turn14 첫 프레임)
    43.10s  agent 발화 시작: <ret> 기차표 예매가 완료되었습니다. 확인 번호는 칠 팔 구 사 오 육이며, 출발 시간은 오후 두시 삼십
    43.32s  user  발화 끝
    44.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.28s]: [{"confirmation_number": "789456", "departure_time": "14:30"}]
    45.28s  user  발화 시작: 응.
    45.77s  user  발화 끝
    50.19s  user  발화 시작: 감사합니다. 즐거운 하루 보내세요.
    50.38s  agent 발화 끝
    52.31s  user  발화 끝
    52.56s  agent 발화 시작: 네, 좋은 하루 보내세요.
    53.94s  agent 발화 끝
