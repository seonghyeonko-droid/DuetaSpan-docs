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

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 마이클 잭슨의 “Beat It” 기타 솔로를 누가 | S2 와, 그분이 하셨다는 걸 몰랐어요! 정말 대단하네요. | S3 믿기 어려울 거예요… | S4 저기, 잘아, 이번 주에 회사 일이 너무 스트레스인데, 어떻게

     0.00s  user  발화 시작: 안녕하세요. 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 아세요? 제가 내기를 하고 있거든요
     6.56s  <ret> 발화 (turn1 첫 프레임)
     6.72s  user  발화 끝
     6.88s  agent 발화 시작: <ret> 네, 사실 에디 반 헤일런이었어요. 정말 상징적인 솔로이고, 당시에는 꽤 놀라운 협업이었답니다.
     8.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s song “B
    12.83s  user  발화 시작: 네.
    13.28s  user  발화 끝
    15.00s  agent 발화 끝
    15.11s  user  발화 시작: 와, 그분이 하셨다는 걸 몰랐어요! 정말 대단하네요.
    19.39s  user  발화 시작: 믿기 어려울 거예요…
    19.45s  user  발화 끝
    20.90s  user  발화 끝
    22.78s  user  발화 시작: 저기, 잘아, 이번 주에 회사 일이 너무 스트레스인데, 어떻게 하면 좋을까요?
    27.46s  <ret> 발화 (turn6 첫 프레임)
    27.86s  agent 발화 시작: <ret> 음, 깊고 의식적인 호흡이 긴장을 푸는 데 정말 도움이 될 수 있어요. 간단한 기술이지만, 꽤 효
    28.01s  user  발화 끝
    29.14s  ⚡SPAN 주입 [d'=1.68s / d_lead=8.57s]: Deep breathing exercises can help reduce stress and promote relaxation
    36.43s  agent 발화 끝
