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
     3.39s  <ret> 발화 (turn1 첫 프레임)
     3.66s  user  발화 끝
     3.71s  agent 발화 시작: <ret> 아, 마이클 잭슨의 비트 잇 말씀이시군요. 에디 반 헤일런이 마이클 잭슨의 ‘비트 잇’ 기타 솔로
     4.83s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.41s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     8.44s  user  발화 시작: 맞아요.
     9.07s  user  발화 끝
    10.15s  agent 발화 끝
    10.86s  user  발화 시작: 잠깐만, 엄마, 김치 냉장고에 넣어놨어?
    14.11s  user  발화 시작: 아, 죄송해요. 다시 질문할게요. 그 기타리스트 이름이 뭐였죠?
    14.28s  user  발화 끝
    18.46s  user  발화 끝
    18.70s  agent 발화 시작: 에디 반 헤일런이라고 말씀드렸어요. 기억이 안 나시는군요?
    21.82s  user  발화 시작: 네.
    22.32s  user  발화 끝
    22.93s  agent 발화 시작: 에디 반 헤일런은 뛰어난 기타리스트로 유명해요. 혹시 다른 곡도 궁금하신가요?
    23.15s  agent 발화 끝
    28.03s  agent 발화 끝
