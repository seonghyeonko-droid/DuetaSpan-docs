# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Rowan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-11",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 혹시 마이클 잭슨의 “Beat It” 기타 솔로를 | S2 와, 전혀 몰랐네요! 잭슨 밴드와 더 가까운 사람이 했을 거라 | S3 혹시 쓰레기 버리신 거 맞으세요? | S4 죄송해요. 반 헤일런은 그 솔로를 녹음할 때 어디에 있었나요?

     0.00s  user  발화 시작: 안녕하세요. 혹시 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 궁금했거든요. 정말 유명하잖아
     7.82s  <ret> 발화 (turn1 첫 프레임)
     7.88s  user  발화 끝
     8.14s  agent 발화 시작: <ret> 네, 정말 좋은 질문이세요. 기억에 남는 솔로죠. 에디 반 헤일런이 마이클 잭슨의 “Beat It
     9.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.67s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
    12.23s  user  발화 시작: 예.
    12.73s  user  발화 끝
    18.48s  user  발화 시작: 와, 전혀 몰랐네요! 잭슨 밴드와 더 가까운 사람이 했을 거라고 생각했어요.
    18.52s  agent 발화 끝
    23.34s  user  발화 시작: 혹시 쓰레기 버리신 거 맞으세요?
    23.39s  user  발화 끝
    25.16s  user  발화 시작: 죄송해요. 반 헤일런은 그 솔로를 녹음할 때 어디에 있었나요? 그때 이미 엄청 유명했나요?
    25.18s  user  발화 끝
    31.30s  <ret> 발화 (turn6 첫 프레임)
    31.70s  agent 발화 시작: <ret> 음, 인지도가 꽤 높아지고 있었어요. 천구백팔십이 년에는 에디 반 헤일런과 반 헤일런이 세 장의 
    31.87s  user  발화 끝
    32.42s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.81s]: [source: Rolling Stone] By 1982, Eddie Van Halen and Van Halen had rel
    43.61s  agent 발화 끝
