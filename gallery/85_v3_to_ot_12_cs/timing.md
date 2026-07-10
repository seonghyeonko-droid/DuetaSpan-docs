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

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 혹시 마이클 잭슨의 “Beat It” 기타 솔로를 | S2 저기, 혹시 쓰레기 버렸어요? | S3 …어쨌든, 반 헤일런은 그 곡에 참여하도록 요청을 받은 건지, | S4 그거 흥미롭네요! 그가 망설였다는 건 몰랐어요. 고마워요, 잘

     0.00s  user  발화 시작: 안녕하세요, 혹시 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 궁금했어요. 늘 궁금했거든요.
     6.63s  user  발화 끝
     6.68s  <ret> 발화 (turn1 첫 프레임)
     7.00s  agent 발화 시작: <ret> 네, 마이클 잭슨의 “Beat It” 기타 솔로는 에디 반 헤일런이 연주했어요. 정말 음악사에서 
     8.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
    10.09s  user  발화 시작: 네.
    10.72s  user  발화 끝
    15.02s  agent 발화 끝
    15.10s  user  발화 시작: 와, 진짜요? 다른 사람인 줄 알았어요. 제 친구는 스티브 바이라고 늘 말했어요.
    20.64s  user  발화 시작: 저기, 혹시 쓰레기 버렸어요?
    20.76s  user  발화 끝
    23.41s  user  발화 시작: …어쨌든, 반 헤일런은 그 곡에 참여하도록 요청을 받은 건지, 아니면 마이클이 그냥 넣은 건지 궁금해요.
    23.51s  user  발화 끝
    31.14s  <ret> 발화 (turn6 첫 프레임)
    31.54s  agent 발화 시작: <ret> 에디 반 헤일런은 처음에는 프로젝트 참여를 조금 망설였다고 해요… 퀸시 존스가 그에게 “Beat 
    31.65s  user  발화 끝
    33.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.13s]: [source: Rolling Stone] Eddie Van Halen was initially hesitant to play
    44.48s  user  발화 시작: 그거 흥미롭네요! 그가 망설였다는 건 몰랐어요. 고마워요, 잘.
    44.67s  agent 발화 끝
    49.15s  user  발화 끝
    49.49s  agent 발화 시작: 천만에요. 때로는 익숙한 영역에서 벗어나는 것이 아름다운 결과를 가져다주기도 하죠, 그러시죠?
    56.21s  agent 발화 끝
