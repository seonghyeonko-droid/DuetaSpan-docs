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

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 마이클 잭슨의 “Beat It” 기타 솔로를 누가 | S2 아, 진짜요? 멋지네요. | S3 와, 몰랐어요! 그분이 곡도 쓰고 연주한 건가요, 아니면 그냥 | S4 정말 대단하네요. 이제 그 사실을 알고 다시 한번 들어봐야겠어

     0.00s  user  발화 시작: 안녕하세요, 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 궁금했는데, 항상 궁금했거든요.
     7.23s  user  발화 끝
     7.27s  <ret> 발화 (turn1 첫 프레임)
     7.59s  agent 발화 시작: <ret> 네, “Beat It”의 기타 솔로는 에디 반 헤일런이 연주했습니다. 정말 유명하죠, 안 그래요?
     9.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.54s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s song "B
    10.08s  user  발화 시작: 네.
    10.58s  user  발화 끝
    14.12s  agent 발화 끝
    14.21s  user  발화 시작: 아, 진짜요? 멋지네요.
    16.91s  user  발화 시작: 와, 몰랐어요! 그분이 곡도 쓰고 연주한 건가요, 아니면 그냥 연주만 한 건가요?
    16.99s  user  발화 끝
    21.57s  <ret> 발화 (turn5 첫 프레임)
    21.97s  agent 발화 시작: <ret> 음, 에디 반 헤일런이 솔로를 작곡하고 연주했습니다. 즉흥적인 협업이었다고 들었습니다.
    22.05s  user  발화 끝
    23.25s  ⚡SPAN 주입 [d'=1.68s / d_lead=7.05s]: Eddie Van Halen wrote and performed the guitar solo for "Beat It".
    28.48s  user  발화 시작: 정말 대단하네요. 이제 그 사실을 알고 다시 한번 들어봐야겠어요.
    29.02s  agent 발화 끝
    32.64s  user  발화 끝
