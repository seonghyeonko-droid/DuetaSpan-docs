# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Toaira",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-24",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-07-09",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-05-28",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 오클랜드 애슬레틱스가 노히트 게임을 당한 게 언제였는지  | S2 잠깐만, 엄마, 방 청소는 내일 하는 걸로 할까? | S3 아, 죄송해요. 다시 말씀드려도 될까요? 그 경기 날짜가 궁금 | S4 그렇군요. 혹시 그 경기 결과는 어땠는지도 알 수 있을까요?

     0.00s  user  발화 시작: 혹시 오클랜드 애슬레틱스가 노히트 게임을 당한 게 언제였는지 아세요? 궁금하네요.
     5.44s  <ret> 발화 (turn1 첫 프레임)
     5.67s  agent 발화 시작: <ret> 음, 야구 기록은 꽤 자세히 알고 있어요. 오클랜드 애슬레틱스가 노히트 게임을 당한 건, 십팔년 
     5.70s  user  발화 끝
     6.72s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.64s]: [source: Wikipedia] On April 21, 2018, the Oakland Athletics were no-h
    15.31s  user  발화 시작: 잠깐만, 엄마, 방 청소는 내일 하는 걸로 할까?
    15.54s  agent 발화 끝
    19.12s  user  발화 시작: 아, 죄송해요. 다시 말씀드려도 될까요? 그 경기 날짜가 궁금해서요.
    19.29s  user  발화 끝
    24.26s  user  발화 끝
    24.33s  agent 발화 시작: 다시 물어보셔도 괜찮아요. 마이크 피어스가 십팔년 사월 이십일에 노히트 게임을 던졌었죠.
    30.45s  user  발화 시작: 그렇군요. 혹시 그 경기 결과는 어땠는지도 알 수 있을까요?
    30.62s  agent 발화 끝
    34.47s  user  발화 끝
    34.77s  agent 발화 시작: 그 경기에서 디트로이트 타이거스가 오클랜드 애슬레틱스를 오 대 영으로 이겼어요.
    40.00s  agent 발화 끝
