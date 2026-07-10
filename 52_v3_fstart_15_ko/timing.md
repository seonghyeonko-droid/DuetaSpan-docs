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

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도를 알려줄 수 있어? | S2 아리아 레스토랑이 제일 평점이 좋은 것 같네. | S3 그… 그 레스토랑까지 가는 가장 빠른 길은 어떻게 돼? | S4 …시작해 줄 수 있어?

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도를 알려줄 수 있어?
     3.92s  <ret> 발화 (turn1 첫 프레임)
     3.99s  agent 발화 시작: <ret> 시드니 오페라 하우스의 위도는 마이너스 삼십삼 점 팔오육팔도, 경도는 백오십일 점 이일오삼도입니다
     4.07s  user  발화 끝
     5.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.64s]: (tool result) latitude: -33.8568, longitude: 151.2153
     7.95s  user  발화 시작: 응.
     8.31s  user  발화 끝
    11.46s  user  발화 시작: 음… 혹시 근처에 괜찮은 레스토랑도 찾아줄 수 있을까?
    11.63s  agent 발화 끝
    15.63s  <ret> 발화 (turn4 첫 프레임)
    16.02s  agent 발화 시작: <ret> 근처에는 아리아 레스토랑, 퀘이, 베넬롱 레스토랑이 있습니다.
    16.19s  user  발화 끝
    17.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.67s]: (tool result) restaurants: Aria Restaurant, Quay, Bennelong
    20.64s  user  발화 시작: 아리아 레스토랑이 제일 평점이 좋은 것 같네.
    20.70s  agent 발화 끝
    23.37s  agent 발화 시작: 아리아 레스토랑은 훌륭한 선택이세요. 예약해 드릴까요?
    23.51s  user  발화 끝
    25.97s  user  발화 시작: 아.
    26.60s  user  발화 끝
    27.39s  agent 발화 끝
    27.41s  user  발화 시작: 네, 해주세요. 두 명으로 예약하고…
    29.79s  <ret> 발화 (turn9 첫 프레임)
    30.19s  agent 발화 시작: <ret> 아리아 레스토랑 두 분 예약이 완료되었습니다. 확인 번호는 AR12345입니다.
    30.36s  user  발화 끝
    31.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: (tool result) confirmation number: AR12345
    32.26s  user  발화 시작: 와.
    32.88s  user  발화 끝
    36.04s  agent 발화 시작: 즐거운 식사 되세요.
    36.21s  agent 발화 끝
    37.49s  user  발화 시작: 그… 그 레스토랑까지 가는 가장 빠른 길은 어떻게 돼?
    37.60s  agent 발화 끝
    41.79s  agent 발화 시작: 아리아 레스토랑까지 가는 가장 빠른 길은…
    41.79s  user  발화 끝
    44.74s  user  발화 시작: 지금 바로 길 안내…
    44.84s  agent 발화 끝
    47.05s  user  발화 끝
    48.84s  user  발화 시작: …시작해 줄 수 있어?
    49.95s  <ret> 발화 (turn16 첫 프레임)
    50.34s  agent 발화 시작: <ret> 카힐 고속도로 동쪽으로 가신 후, 시큘러 키 이스트에서 우회전하시면 됩니다.
    50.59s  user  발화 끝
    51.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.33s]: (tool result) route: "Take the Cahill Expressway East, then turn right
    52.16s  user  발화 시작: 맞아.
    52.78s  user  발화 끝
    55.67s  agent 발화 끝
    55.73s  user  발화 시작: 고마워.
    56.55s  user  발화 끝
    56.62s  agent 발화 시작: 천만에요. 좋은 하루 보내세요.
    58.89s  agent 발화 끝
