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

# EXAMINER(FDB-v2) 단계: S1 와, 방금 “Beat It” 듣고 있는데, 기타 솔로가 진짜  | S2 어머, 에디 반 헤일런이요? 마이클 잭슨 노래에 그분이 참여했 | S3 저기, 혹시 쓰레기 버리셨어요? | S4 죄송해요. 다시 음악 이야기로 돌아가서, 그때 딱 한 번만 협

     0.00s  user  발화 시작: 와, 방금 “Beat It” 듣고 있는데, 기타 솔로가 진짜 대단하더라고요. 그 기타 솔로 누가 연주했는지 
     6.29s  <ret> 발화 (turn1 첫 프레임)
     6.53s  agent 발화 시작: <ret> 네, “Beat It”에 나오는 유명한 기타 솔로는 에디 반 헤일런이 연주했어요. 곡을 훨씬 더 
     6.72s  user  발화 끝
     7.89s  ⚡SPAN 주입 [d'=1.60s / d_lead=7.04s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     9.20s  user  발화 시작: 네.
     9.69s  user  발화 끝
    13.57s  agent 발화 끝
    14.40s  user  발화 시작: 어머, 에디 반 헤일런이요? 마이클 잭슨 노래에 그분이 참여했다니, 몰랐어요. 정말 흥미로운 조합이네요.
    21.16s  user  발화 시작: 저기, 혹시 쓰레기 버리셨어요?
    21.30s  user  발화 끝
    28.88s  user  발화 시작: 죄송해요. 다시 음악 이야기로 돌아가서, 그때 딱 한 번만 협업한 건가요, 아니면 또 같이 작업했나요?
    28.95s  user  발화 끝
    42.91s  agent 발화 시작: 대부분 딱 한 번의 협업이었지만, 엄청난 영향을 준 협업이었어요. [happy] 두 분의 팬층을 훨씬 넓혀줬
    43.03s  user  발화 끝
    50.51s  agent 발화 끝
