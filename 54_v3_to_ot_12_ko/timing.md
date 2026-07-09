# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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

# EXAMINER(FDB-v2) 단계: S1 비트 잇 기타 솔로를 누가 연주했는지 궁금해요. | S2 와, 에디 밴 헤일런이었군요. 정말 대단한 기타리스트죠. | S3 잠깐만, 오늘 저녁 뭐 먹을까? | S4 혹시 다른 유명한 곡에서도 연주를 맡았나요?

     0.00s  user  발화 시작: 비트 잇 기타 솔로를 누가 연주했는지 궁금해요.
     3.12s  <ret> 발화 (turn1 첫 프레임)
     3.37s  user  발화 끝
     3.43s  agent 발화 시작: <ret> 그 기타 솔로는 정말 유명하죠. 에디 밴 헤일런이 비트 잇 기타 솔로를 연주했습니다.
     4.08s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.28s]: Eddie Van Halen.
     5.68s  user  발화 시작: 맞아요.
     6.49s  user  발화 끝
     9.36s  agent 발화 끝
     9.98s  user  발화 시작: 와, 에디 밴 헤일런이었군요. 정말 대단한 기타리스트죠.
    14.48s  user  발화 시작: 잠깐만, 오늘 저녁 뭐 먹을까?
    14.52s  user  발화 끝
    17.25s  user  발화 끝
    17.27s  user  발화 시작: 혹시 다른 유명한 곡에서도 연주를 맡았나요?
    20.09s  user  발화 끝
    20.14s  agent 발화 시작: 에디 밴 헤일런은 다양한 곡에서 연주 활동을 했습니다.
    23.88s  agent 발화 끝
