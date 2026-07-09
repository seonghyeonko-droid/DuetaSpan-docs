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

# EXAMINER(FDB-v2) 단계: S1 음, 비트 잇 듣고 있었는데, 그 기타 솔로를 누가 연주했는지 | S2 와, 진짜요? 항상 그 사람 기타 소리랑 비슷하다고 생각했는데 | S3 혹시 쓰레기 버리는 거 하셨어요? | S4 죄송해요. 그 사람이 특별히 부탁받아서 한 건지, 아니면 그냥

     0.00s  user  발화 시작: 음, 비트 잇 듣고 있었는데, 그 기타 솔로를 누가 연주했는지 궁금했어요. 진짜 멋지거든요.
     6.87s  <ret> 발화 (turn1 첫 프레임)
     6.95s  user  발화 끝
     7.19s  agent 발화 시작: <ret> 네, 정말 좋은 곡이에요. 마이클 잭슨의 “Beat It” 기타 솔로는 에디 반 헤일런이 연주했어
     8.15s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.76s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     9.60s  user  발화 시작: 예.
    10.14s  user  발화 끝
    13.31s  user  발화 시작: 와, 진짜요? 항상 그 사람 기타 소리랑 비슷하다고 생각했는데, 확실히 몰랐어요.
    13.35s  agent 발화 끝
    18.71s  user  발화 시작: 혹시 쓰레기 버리는 거 하셨어요?
    18.77s  user  발화 끝
    20.62s  user  발화 시작: 죄송해요. 그 사람이 특별히 부탁받아서 한 건지, 아니면 그냥… 나타난 건지 궁금해요.
    20.69s  user  발화 끝
    26.19s  <ret> 발화 (turn6 첫 프레임)
    26.51s  agent 발화 시작: <ret> 마이클 잭슨은 노래에 록 요소를 넣고 싶어했고, 반 헤일런이 첫 번째 선택이었어요.
    26.64s  user  발화 끝
    28.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: [source: Rolling Stone] Michael Jackson specifically sought out Eddie 
    31.93s  agent 발화 시작: 마이클 잭슨은 “Beat It”에서 록과 팝을 섞기 위해 에디 반 헤일런을 특별히 찾았답니다.
    31.97s  agent 발화 끝
    37.72s  agent 발화 끝
