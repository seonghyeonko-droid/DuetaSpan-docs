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

# EXAMINER(FDB-v2) 단계: S1 음… 오클랜드 에이스가 노히트 게임을 당한 게 언제였더라? 기 | S2 아, 그렇군요. 근데 잠깐만, 엄마, 저녁 뭐 먹을까요? | S3 엄마, 오늘 저녁은 뭘로 할까요? | S4 아, 죄송해요. 다시 말씀드릴게요. 그 경기에서 피어스는 얼마

     0.00s  user  발화 시작: 음… 오클랜드 에이스가 노히트 게임을 당한 게 언제였더라? 기억이 잘 안 나네요.
     4.87s  <ret> 발화 (turn1 첫 프레임)
     5.10s  agent 발화 시작: <ret> 잠깐만요, 확인해 볼게요.
     5.18s  user  발화 끝
     5.91s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.74s]: [source: Wikipedia] On April 21, 2018, the Oakland Athletics were no-h
     6.75s  agent 발화 시작: 두천이십팔일, 마이크 피어스가 디트로이트 타이거스 소속으로 오클랜드 에이스를 상대로 노히트 게임을 펼쳤어요.
     6.84s  agent 발화 끝
    12.09s  user  발화 시작: 맞아요.
    12.91s  user  발화 끝
    13.52s  user  발화 시작: 아, 그렇군요. 근데 잠깐만, 엄마, 저녁 뭐 먹을까요?
    13.70s  agent 발화 끝
    17.84s  user  발화 시작: 엄마, 오늘 저녁은 뭘로 할까요?
    18.01s  user  발화 끝
    20.90s  user  발화 시작: 아, 죄송해요. 다시 말씀드릴게요. 그 경기에서 피어스는 얼마나 던졌나요?
    20.98s  user  발화 끝
    25.62s  agent 발화 시작: 피어스는 그 경기에서 구 이닝을 완벽하게 막았어요.
    25.71s  user  발화 끝
    29.09s  agent 발화 끝
