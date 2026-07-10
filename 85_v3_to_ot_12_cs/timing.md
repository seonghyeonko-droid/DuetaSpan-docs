# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Rowan",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "German"
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

# EXAMINER(FDB-v2) 단계: S1 혹시, 마이클 잭슨의 Beat It 듣다가 문득 궁금해졌는데, | S2 와, 에디 반 헤일런이요? 정말 대단하네요. 몰랐어요! | S3 저기, 혹시 쓰레기 버리셨어요? | S4 죄송해요. 그런데, 혹시 특별히 부탁을 받아서 연주한 건가요,

     0.00s  user  발화 시작: 혹시, 마이클 잭슨의 Beat It 듣다가 문득 궁금해졌는데, 그 멋진 기타 솔로를 누가 연주했는지 알 수 
     7.67s  <ret> 발화 (turn1 첫 프레임)
     7.74s  user  발화 끝
     7.98s  agent 발화 시작: <ret> 정말 유명한 솔로라서, 많은 분들이 그 기원을 궁금해하시더라고요.
     9.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.47s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
    13.28s  agent 발화 시작: 마이클 잭슨의 “Beat It” 기타 솔로는… 에디 반 헤일런이 연주했어요. 곡을 훨씬 더 돋보이게 만들었죠
    13.45s  agent 발화 끝
    16.06s  user  발화 시작: 네.
    16.42s  user  발화 끝
    20.51s  agent 발화 끝
    21.74s  user  발화 시작: 와, 에디 반 헤일런이요? 정말 대단하네요. 몰랐어요!
    26.39s  user  발화 시작: 저기, 혹시 쓰레기 버리셨어요?
    26.42s  user  발화 끝
    28.75s  user  발화 시작: 죄송해요. 그런데, 혹시 특별히 부탁을 받아서 연주한 건가요, 아니면 그냥 자발적으로 참여한 건가요?
    28.88s  user  발화 끝
    35.99s  agent 발화 시작: 에디 반 헤일런에게 직접 부탁을 드렸대요. 그 당시 그의 인기가 얼마나 높았는지 알 수 있는 부분이죠. 팝 
    36.16s  user  발화 끝
    46.19s  agent 발화 끝
