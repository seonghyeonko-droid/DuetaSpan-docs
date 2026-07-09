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

# EXAMINER(FDB-v2) 단계: S1 비트 잇을 방금 들었는데, 그 멋진 기타 솔로를 누가 연주했는 | S2 저기, 혹시 쓰레기 버리셨어요? | S3 죄송해요. 그럼, 반 헤일런은 그냥… 그 노래에 게스트로 참여 | S4 정말 멋지네요! [happy] 반 헤일런 밖에서 그런 일을 하

     0.00s  user  발화 시작: 비트 잇을 방금 들었는데, 그 멋진 기타 솔로를 누가 연주했는지 궁금했어요.
     5.64s  <ret> 발화 (turn1 첫 프레임)
     5.74s  user  발화 끝
     5.96s  agent 발화 시작: <ret> 아, 정말 유명한 소리죠. 에디 반 헤일런이 마이클 잭슨의 “Beat It”에서 기타 솔로를 연주
     6.68s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.23s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     8.40s  user  발화 시작: 예.
     8.94s  user  발화 끝
    12.17s  user  발화 시작: 어머, 진짜요? 잭슨 밴드에 있는 사람이 연주했을 거라고 생각했거든요.
    12.21s  agent 발화 끝
    17.16s  user  발화 시작: 저기, 혹시 쓰레기 버리셨어요?
    17.22s  user  발화 끝
    19.47s  user  발화 시작: 죄송해요. 그럼, 반 헤일런은 그냥… 그 노래에 게스트로 참여한 건가요?
    19.55s  user  발화 끝
    24.65s  user  발화 끝
    24.67s  agent 발화 시작: 그 당시에 꽤 흔치 않은 협업이었죠. 그는 곡에 아주 다른 에너지를 가져다줬어요.
    29.91s  agent 발화 끝
    30.11s  user  발화 시작: 정말 멋지네요! [happy] 반 헤일런 밖에서 그런 일을 하는 줄 몰랐어요.
    35.06s  user  발화 끝
