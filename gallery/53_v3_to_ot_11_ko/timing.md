# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "라별",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-19",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-10-23",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-08",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-02-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 '오프 위더씬 펫'에 나오는 네빌 부인 역할을 누가 맡았 | S2 줄리아 토빈… 이름이 낯설네요. 혹시 다른 작품에도 출연했나요 | S3 어머, 잠깐만, 김치냉장고 온도 좀 봐줄래? | S4 아, 죄송해요. 다시 말씀드릴게요. 줄리아 토빈 배우의 다른 

     0.00s  user  발화 시작: 혹시 '오프 위더씬 펫'에 나오는 네빌 부인 역할을 누가 맡았는지 아세요?
     4.11s  <ret> 발화 (turn1 첫 프레임)
     4.29s  user  발화 끝
     4.35s  agent 발화 시작: <ret> 네빌 부인의 역할은 줄리아 토빈 배우가 맡았답니다.
     4.35s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.42s]: Julia Tobin played Neville's wife in the British comedy series Auf Wie
     5.45s  user  발화 시작: 음.
     6.04s  user  발화 끝
     7.77s  agent 발화 끝
     8.09s  user  발화 시작: 줄리아 토빈… 이름이 낯설네요. 혹시 다른 작품에도 출연했나요?
    12.09s  agent 발화 시작: 줄리아 토빈은 다양한 작품에 출연했지만, 특히 '오프 위더씬 펫'으로 잘 알려져 있어요.
    12.16s  user  발화 끝
    17.54s  agent 발화 시작: 죄송해요, 다른 출연작에 대한 정보는 찾을 수 없었어요.
    17.60s  agent 발화 끝
    19.21s  user  발화 시작: 네.
    19.61s  user  발화 끝
    21.28s  user  발화 시작: 어머, 잠깐만, 김치냉장고 온도 좀 봐줄래?
    21.32s  agent 발화 끝
    24.23s  user  발화 시작: 아, 죄송해요. 다시 말씀드릴게요. 줄리아 토빈 배우의 다른 작품을 알고 싶어요.
    24.29s  user  발화 끝
    28.96s  <ret> 발화 (turn9 첫 프레임)
    29.28s  agent 발화 시작: <ret> 제가 찾아볼게요.
    29.28s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.01s]: (tool result) Julia Tobin is an English actress known for her role as 
    29.37s  user  발화 끝
    30.29s  agent 발화 끝
    30.36s  agent 발화 시작: 줄리아 토빈 배우는 '오프 위더씬 펫'의 모이라 역할과 연극 활동으로 유명하고요, '라스트 디텍티브'와 '비
    38.61s  agent 발화 끝
