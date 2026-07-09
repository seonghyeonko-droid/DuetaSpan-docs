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
#       "date": "2026-07-12",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-06-09",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-18",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 비트 잇 듣고 있었는데, 그 멋진 기타 솔로를 누가 연주했는지 | S2 저기, 혹시 쓰레기 버리셨어요? | S3 죄송해요. 다시 노래 이야기로 돌아가서, 특별히 부탁을 받아서 | S4 정말 멋지네요! [happy] 에디 반 헤일런이 그 부탁을 받

     0.00s  user  발화 시작: 비트 잇 듣고 있었는데, 그 멋진 기타 솔로를 누가 연주했는지 궁금했어요.
     5.15s  <ret> 발화 (turn1 첫 프레임)
     5.23s  user  발화 끝
     5.47s  agent 발화 시작: <ret> 아, 좋은 질문이에요. 마이클 잭슨의 노래 “Beat It” 기타 솔로는 에디 반 헤일런이 연주했
     6.43s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.81s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     7.94s  user  발화 시작: 예.
     8.44s  user  발화 끝
    11.76s  user  발화 시작: 와, 진짜요? 다른 곡들하고는 좀 다른 느낌이 들었거든요.
    11.81s  agent 발화 끝
    16.18s  user  발화 시작: 저기, 혹시 쓰레기 버리셨어요?
    16.30s  user  발화 끝
    18.48s  user  발화 시작: 죄송해요. 다시 노래 이야기로 돌아가서, 특별히 부탁을 받아서 한 건지, 아니면 그냥 자발적으로 한 건가요?
    18.49s  user  발화 끝
    26.04s  agent 발화 시작: 마이클 잭슨이 직접 에디 반 헤일런에게 연락해서, 그 곡에 에디 반 헤일런만의 독특한 스타일을 원했답니다.
    26.17s  user  발화 끝
    32.81s  agent 발화 끝
    32.98s  user  발화 시작: 정말 멋지네요! [happy] 에디 반 헤일런이 그 부탁을 받았을 때 어떤 반응을 보였을지 상상도 안 돼요.
    39.46s  user  발화 끝
