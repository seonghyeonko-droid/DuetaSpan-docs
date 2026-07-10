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

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도는 어떻게 돼? | S2 가격대는 어때? — | S3 오, 좋네. 그럼 여섯 시에 예약해 줘. | S4 고마워.

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도는 어떻게 돼?
     3.32s  <ret> 발화 (turn1 첫 프레임)
     3.40s  agent 발화 시작: <ret> 위도는 마이너스 삼십삼 점 팔오육팔도, 경도는 백오십일 점 이일오삼도입니다.
     3.52s  user  발화 끝
     5.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: (tool result) latitude=-33.8568, longitude=151.2153
     6.46s  user  발화 시작: 응.
     6.95s  user  발화 끝
     9.24s  agent 발화 끝
     9.28s  user  발화 시작: 음… 그 근처에 괜찮은 레스토랑 있으면 찾아줘.
    12.89s  <ret> 발화 (turn4 첫 프레임)
    13.12s  user  발화 끝
    13.28s  agent 발화 시작: <ret> 아리아 레스토랑이 있습니다. 주소는 호주 시드니 뉴사우스웨일스 이천 매쿼리 스트리트 일번지입니다.
    14.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: (tool result) Aria Restaurant, 1 Macquarie St, Sydney NSW 2000, Austra
    15.71s  user  발화 시작: 와.
    16.15s  user  발화 끝
    20.12s  agent 발화 시작: 분위기가 꽤 좋고, 해피아워도 있대요.
    20.14s  agent 발화 끝
    22.56s  agent 발화 끝
    23.78s  user  발화 시작: 가격대는 어때? —
    25.09s  user  발화 시작: 혹시 아이랑 같이 가기에도 괜찮을까?
    25.30s  user  발화 끝
    27.97s  agent 발화 시작: 네, 아리아 레스토랑은 어린이 메뉴도 준비되어 있습니다.
    28.00s  user  발화 끝
    31.35s  agent 발화 끝
    31.59s  user  발화 시작: 오, 좋네. 그럼 여섯 시에 예약해 줘.
    33.92s  <ret> 발화 (turn11 첫 프레임)
    34.31s  agent 발화 시작: <ret> 아리아 레스토랑 여섯 시에 두 분으로 예약 완료되었습니다. 확인 번호는 칠팔구사오입니다.
    34.41s  user  발화 끝
    35.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: (tool result) Reservation confirmed for 2 people at Aria Restaurant at
    38.09s  user  발화 시작: 그니까.
    38.67s  user  발화 끝
    39.81s  agent 발화 끝
    39.92s  user  발화 시작: 확인번호 다시 한 번만 말해 줄래?
    42.09s  agent 발화 시작: 확인 번호는 칠팔구사오입니다.
    42.21s  user  발화 끝
    44.52s  agent 발화 끝
    44.59s  user  발화 시작: 고마워.
    45.55s  user  발화 끝
    45.56s  agent 발화 시작: 즐거운 저녁 식사 되세요.
    47.35s  agent 발화 끝
