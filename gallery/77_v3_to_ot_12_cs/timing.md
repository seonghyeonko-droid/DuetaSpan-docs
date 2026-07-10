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

# EXAMINER(FDB-v2) 단계: S1 와, 방금 “Beat It” 듣고 있는데 기타 솔로가 진짜 대 | S2 와, 에디 반 헤일런이요? 진짜 놀랍네요. 실력이 엄청나시잖아 | S3 우유는 사 오셨어요? | S4 죄송해요. 다시 음악 이야기로 돌아가서, 그때 일회성 협업이었

     0.00s  user  발화 시작: 와, 방금 “Beat It” 듣고 있는데 기타 솔로가 진짜 대단하더라고요. 그 기타 솔로 누가 연주했는지 아
     6.13s  <ret> 발화 (turn1 첫 프레임)
     6.20s  agent 발화 시작: <ret> 네, “Beat It”에 있는 멋진 기타 솔로는 에디 반 헤일런이 연주했어요. 정말 곡을 살리는 
     6.35s  user  발화 끝
     7.89s  ⚡SPAN 주입 [d'=1.76s / d_lead=6.07s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
     8.50s  user  발화 시작: 네.
     9.22s  user  발화 끝
    11.89s  user  발화 시작: 와, 에디 반 헤일런이요? 진짜 놀랍네요. 실력이 엄청나시잖아요. 있잖아요, 마크 씨, 우유 사 오셨어요?
    12.27s  agent 발화 끝
    19.59s  user  발화 시작: 우유는 사 오셨어요?
    19.72s  user  발화 끝
    20.80s  user  발화 시작: 죄송해요. 다시 음악 이야기로 돌아가서, 그때 일회성 협업이었던 건가요, 아니면 마이클 잭슨이랑 다른 곡들도
    21.02s  user  발화 끝
    29.21s  <ret> 발화 (turn6 첫 프레임)
    29.23s  user  발화 끝
    29.28s  agent 발화 시작: <ret> 음, 그 협업은 단 한 번의 특별한 이벤트였어요. 에디 반 헤일런과 마이클 잭슨은 “Beat It
    30.89s  ⚡SPAN 주입 [d'=1.68s / d_lead=14.05s]: [source: Rolling Stone] Eddie Van Halen and Michael Jackson never coll
    43.33s  agent 발화 끝
