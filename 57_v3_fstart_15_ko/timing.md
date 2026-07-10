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

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도는 어떻게 돼요? | S2 잠깐만요… 지금 차가 엄청 막히는 것 같아서 대중교통은 어때요 | S3 실시간 운행 상황 확인 좀 해 주세요. | S4 좋아요. 택시비는 대략 얼마나 나올까요?

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도는 어떻게 돼요?
     3.12s  <ret> 발화 (turn1 첫 프레임)
     3.19s  agent 발화 시작: <ret> 시드니 오페라 하우스의 위도는 -삼십삼 점 팔 오 육 팔, 경도는 백오십일 점 이 일 오 삼입니다
     3.37s  user  발화 끝
     5.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.13s]: [{"latitude": -33.8568, "longitude": 151.2153}]
     8.92s  user  발화 시작: 진짜?
     9.55s  user  발화 끝
    14.15s  user  발화 시작: 그건 됐고…
    14.32s  agent 발화 끝
    15.20s  user  발화 끝
    16.64s  user  발화 시작: …지금 거기까지 가는 가장 빠른 길은 어떻게 돼요?
    19.18s  <ret> 발화 (turn5 첫 프레임)
    19.57s  agent 발화 시작: <ret> 현재 위치에서 시드니 오페라 하우스까지 가장 빠른 길은 구 점 오km, 약 이십분 정도 걸립니다.
    19.68s  user  발화 끝
    21.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.01s]: [{"distance": "9.5km", "duration": "20분", "route": "A4, Cahill Express
    25.96s  user  발화 시작: 어어.
    26.60s  user  발화 끝
    29.58s  agent 발화 끝
    29.65s  user  발화 시작: 잠깐만요… 지금 차가 엄청 막히는 것 같아서 대중교통은 어때요?
    34.33s  user  발화 시작: … 버스는 얼마나 걸릴까요?
    34.51s  user  발화 끝
    35.69s  <ret> 발화 (turn9 첫 프레임)
    36.08s  agent 발화 시작: <ret> 현재 위치에서 시드니 오페라 하우스까지 대중교통을 이용하면 십 점 이km, 약 삼십오분 정도 소요
    36.31s  user  발화 끝
    37.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.92s]: [{"distance": "10.2km", "duration": "35분", "route": "버스 325번, 경유 2회"}]
    39.57s  user  발화 시작: 와.
    40.35s  user  발화 끝
    45.93s  agent 발화 시작: 삼백이십오번 버스는 지금 현재 정류장에서 오분 뒤에 도착할 예정입니다. 출발 전에 실시간 운행 상황을 다시 
    46.00s  agent 발화 끝
    48.53s  user  발화 시작: 응.
    48.92s  user  발화 끝
    54.59s  agent 발화 끝
    55.46s  user  발화 시작: 실시간 운행 상황 확인 좀 해 주세요.
    57.45s  <ret> 발화 (turn14 첫 프레임)
    57.84s  agent 발화 시작: <ret> 삼백이십오번 버스는 이분 뒤에 도착 예정이지만, 현재 삼분 정도 지연되고 있습니다.
    58.04s  user  발화 끝
    59.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.33s]: [{"arrival": "2분 후", "delay": "3분 지연"}]
    63.16s  agent 발화 끝
    64.42s  user  발화 시작: 그럼, 지금 바로 택시를 불러주세요.
    66.88s  <ret> 발화 (turn16 첫 프레임)
    67.04s  agent 발화 시작: <ret> 택시를 불러드렸습니다. 예약 번호는 TX12345이고, 약 오분 후에 도착할 예정입니다.
    67.24s  user  발화 끝
    68.72s  ⚡SPAN 주입 [d'=1.84s / d_lead=6.58s]: [{"confirmation_number": "TX12345", "estimated_arrival": "5분 후"}]
    73.50s  user  발화 시작: 좋아요. 택시비는 대략 얼마나 나올까요?
    73.62s  agent 발화 끝
    76.03s  <ret> 발화 (turn18 첫 프레임)
    76.34s  agent 발화 시작: <ret> 택시 요금은 대략 이십오호주 달러에서 삼십오호주 달러 사이로 예상됩니다.
    76.46s  user  발화 끝
    78.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: [{"estimated_fare": "25~35호주 달러"}]
    79.38s  user  발화 시작: 와.
    80.01s  user  발화 끝
    81.06s  agent 발화 끝
    82.43s  user  발화 시작: 알겠습니다. 감사합니다.
    83.94s  agent 발화 시작: 천만에요. 즐거운 시간 보내세요.
    84.13s  user  발화 끝
    86.07s  agent 발화 끝
