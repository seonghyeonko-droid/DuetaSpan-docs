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
     2.85s  <ret> 발화 (turn1 첫 프레임)
     3.09s  user  발화 끝
     3.17s  agent 발화 시작: <ret> 아, 그 곡 기타 솔로는 정말 유명하죠. 에디 밴 헤일런이 마이클 잭슨의 "비트 잇" 기타 솔로를
     4.77s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.19s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     8.88s  user  발화 시작: 맞아요.
     9.70s  user  발화 끝
    10.91s  agent 발화 끝
    11.59s  user  발화 시작: 잠깐만, 아까 그 서류 어디 뒀더라?
    13.95s  user  발화 시작: 혹시 에디 밴 헤일런이 다른 유명한 곡도 많이 했나요?
    13.98s  user  발화 끝
    17.46s  user  발화 끝
    17.64s  agent 발화 시작: 에디 밴 헤일런은 밴 헤일런 밴드의 기타리스트로도 아주 유명하답니다.
    21.40s  user  발화 시작: 네.
    21.89s  user  발화 끝
    22.71s  agent 발화 시작: 기타 연주 스타일이 굉장히 독특하고 영향력 있었어요.
    22.91s  agent 발화 끝
    26.41s  agent 발화 끝
