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

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도는 어떻게 돼? | S2 퀘이 레스토랑 예약해 줘, 내일 저녁 일곱시에. | S3 혹시 퀘이 말고 다른 곳은 안 돼? 뭔가 좀 더 캐주얼한 곳으 | S4 좋아, 고마워.

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도는 어떻게 돼?
     3.09s  <ret> 발화 (turn1 첫 프레임)
     3.16s  agent 발화 시작: <ret> 시드니 오페라 하우스의 위도는 -삼십삼 점 팔 오 육 팔, 경도는 백오십일 점 이 일 오 삼입니다
     3.23s  user  발화 끝
     5.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: (tool result) latitude=-33.8568, longitude=151.2153
     7.29s  user  발화 시작: 진짜?
     7.92s  user  발화 끝
    11.20s  user  발화 시작: 음… 그럼 그 근처에 괜찮은 레스토랑 있어?
    11.27s  agent 발화 끝
    14.25s  <ret> 발화 (turn4 첫 프레임)
    14.44s  user  발화 끝
    14.64s  agent 발화 시작: <ret> 시드니 오페라 하우스 근처에는 아리아 레스토랑과 퀘이 레스토랑이 있는데, 평점이 각각 사 점 육점
    16.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.59s]: (tool result) restaurants=[{name='Aria Restaurant', rating=4.6}, {name
    18.00s  user  발화 시작: 와.
    18.63s  user  발화 끝
    24.19s  user  발화 시작: 퀘이 레스토랑 예약해 줘, 내일 저녁 일곱시에.
    24.23s  agent 발화 끝
    26.66s  <ret> 발화 (turn7 첫 프레임)
    26.98s  agent 발화 시작: <ret> 퀘이 레스토랑 내일 저녁 일곱시에 두 분으로 예약되었습니다. 예약 번호는 QY20240726-칠P
    27.10s  user  발화 끝
    28.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.69s]: (tool result) reservation id=QY20240726-7PM-2
    33.12s  user  발화 시작: 어어.
    33.80s  user  발화 끝
    36.50s  user  발화 시작: 아, 잠깐만—
    36.66s  agent 발화 끝
    37.63s  user  발화 시작: 혹시 퀘이 말고 다른 곳은 안 돼? 뭔가 좀 더 캐주얼한 곳으로.
    37.64s  user  발화 끝
    42.21s  <ret> 발화 (turn11 첫 프레임)
    42.42s  agent 발화 시작: <ret> 좀 더 캐주얼한 곳으로는 글렌모어 호텔과 오페라 바가 있는데, 평점은 각각 사 점 삼점과 사 점 
    42.48s  user  발화 끝
    44.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: (tool result) restaurants=[{name='The Glenmore Hotel', rating=4.3, cui
    45.44s  user  발화 시작: 응.
    45.90s  user  발화 끝
    52.36s  user  발화 시작: 글렌모어 호텔로 예약해 줘. 내일 저녁 여덟시로.
    52.39s  agent 발화 끝
    55.58s  <ret> 발화 (turn14 첫 프레임)
    55.73s  agent 발화 시작: <ret> 글렌모어 호텔 내일 저녁 여덟시에 두 분으로 예약 완료되었습니다. 예약 번호는 GM20240726
    55.91s  user  발화 끝
    57.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.24s]: (tool result) reservation id=GM20240726-8PM-2
    65.97s  agent 발화 끝
    66.13s  user  발화 시작: 좋아, 고마워.
    67.60s  user  발화 끝
    67.69s  agent 발화 시작: 즐거운 저녁 식사 되세요.
    69.67s  agent 발화 끝
