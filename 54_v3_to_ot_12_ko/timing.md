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


     0.00s  user  발화 시작: 비트 잇 기타 솔로를 누가 연주했는지 궁금해요.
     2.95s  <ret> 발화 (turn1 첫 프레임)
     3.24s  user  발화 끝
     3.26s  agent 발화 시작: <ret> 기타 솔로 연주자에 대해 말씀하시는 거죠? 에디 밴 헤일런이 마이클 잭슨의 “비트 잇” 기타 솔로
     3.99s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.73s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     8.63s  user  발화 시작: 맞아요.
     9.31s  user  발화 끝
    10.53s  agent 발화 끝
    11.23s  user  발화 시작: 잠깐만, 오늘 저녁 뭐 먹을까?
    13.90s  user  발화 시작: 아, 죄송해요. 다시 말씀드려도 될까요? 그 기타 솔로가 누구인지요.
    13.95s  user  발화 끝
    17.75s  user  발화 끝
    17.95s  agent 발화 시작: 네, 방금 말씀드렸듯이 에디 밴 헤일런이 연주했습니다.
    20.55s  user  발화 시작: 네.
    20.99s  user  발화 끝
    21.50s  agent 발화 시작: 혹시 에디 밴 헤일런에 대해 더 궁금한 점이 있으신가요?
    21.65s  agent 발화 끝
    25.52s  agent 발화 끝
