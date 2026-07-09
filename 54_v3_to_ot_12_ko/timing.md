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


     0.00s  user  발화 시작: 비트 잇 기타 솔로를 누가 연주했는지 궁금해요.
     2.71s  <ret> 발화 (turn1 첫 프레임)
     2.96s  user  발화 끝
     3.03s  agent 발화 시작: <ret> 아, 그 곡의 기타 솔로는 정말 유명하죠. 에디 밴 헤일런이 마이클 잭슨의 "비트 잇" 기타 솔로
     3.91s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.24s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     6.05s  user  발화 시작: 맞아요.
     6.64s  user  발화 끝
    10.90s  agent 발화 끝
    11.52s  user  발화 시작: 잠깐만, 엄마한테 전화 좀 해야 돼.
    13.74s  user  발화 시작: 아, 죄송해요. 다시 말씀드리면, 에디 밴 헤일런이 연주했군요?
    13.78s  user  발화 끝
    18.46s  user  발화 끝
    18.66s  agent 발화 시작: 네, 맞습니다. 에디 밴 헤일런의 연주가 곡의 분위기를 확 살렸죠. [happy]
    23.65s  agent 발화 끝
