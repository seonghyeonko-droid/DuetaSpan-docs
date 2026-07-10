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

# EXAMINER(FDB-v2) 단계: S1 아, 방금 Beat It 듣고 있었는데, 기타 솔로가 진짜 대 | S2 회계팀에 이미 보냈어요? | S3 아, 죄송해요. 잠깐만요, 어디까지 얘기했었죠? 아 맞다, 에 | S4 아쉽네요. 같이 작업한 곡이 더 있었으면 좋았을 텐데. 감사합

     0.00s  user  발화 시작: 아, 방금 Beat It 듣고 있었는데, 기타 솔로가 진짜 대단하더라고요. 그 기타 솔로 누가 연주했는지 아
     6.99s  <ret> 발화 (turn1 첫 프레임)
     7.09s  user  발화 끝
     7.31s  agent 발화 시작: <ret> 네, 마이클 잭슨의 “Beat It” 기타 솔로는 에디 반 헤일런이 연주했답니다. 정말 상징적인 
     8.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.91s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
    10.02s  user  발화 시작: 예.
    10.52s  user  발화 끝
    14.18s  user  발화 시작: 와, 몰랐어요! 정말 대단하시네요. 저기, Mark 씨, 그 보고서 다 끝내셨어요?
    14.21s  agent 발화 끝
    21.03s  user  발화 시작: 회계팀에 이미 보냈어요?
    21.14s  user  발화 끝
    22.59s  user  발화 시작: 아, 죄송해요. 잠깐만요, 어디까지 얘기했었죠? 아 맞다, 에디 반 헤일런. 마이클 잭슨이랑 다른 작업도 했
    22.64s  user  발화 끝
    28.63s  <ret> 발화 (turn6 첫 프레임)
    29.03s  agent 발화 시작: <ret> “Beat It” 말고는 에디 반 헤일런이 마이클 잭슨과 다른 녹음 작업에 협업한 적은 없답니다.
    29.21s  user  발화 끝
    30.31s  ⚡SPAN 주입 [d'=1.68s / d_lead=8.39s]: [source: Rolling Stone] Van Halen did not collaborate with Michael Jac
    37.42s  agent 발화 끝
    37.62s  user  발화 시작: 아쉽네요. 같이 작업한 곡이 더 있었으면 좋았을 텐데. 감사합니다, Jal.
    42.71s  user  발화 끝
