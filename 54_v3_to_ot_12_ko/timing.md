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


     0.00s  user  발화 시작: 비트 잇 기타 솔로를 누가 연주했는지 궁금해요. 정말 좋아하는 노래거든요.
     4.89s  <ret> 발화 (turn1 첫 프레임)
     5.14s  user  발화 끝
     5.21s  agent 발화 시작: <ret> 아, 마이클 잭슨의 비트 잇 말씀이시군요. 에디 반 헤일런이 그 기타 솔로를 연주했습니다. 정말 
     6.81s  ⚡SPAN 주입 [d'=1.92s / d_lead=2.99s]: Eddie Van Halen.
    10.65s  user  발화 시작: 네.
    11.15s  user  발화 끝
    12.67s  agent 발화 끝
    13.31s  user  발화 시작: 잠깐만, 지금 엄마한테 전화 좀 해야 돼.
    16.01s  user  발화 시작: 아, 죄송해요. 다시 말씀드리면, 에디 반 헤일런이 연주했다고요?
    16.07s  user  발화 끝
    20.73s  user  발화 끝
    20.89s  agent 발화 시작: 네, 맞습니다. 에디 반 헤일런이 비트 잇 기타 솔로를 연주했어요. 그분은 굉장한 기타리스트였죠.
    28.16s  agent 발화 끝
