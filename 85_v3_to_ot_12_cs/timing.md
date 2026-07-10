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

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 음, 마이클 잭슨의 "Beat It" 기타 솔로를 | S2 …잠깐만요, 죄송해요. 뭐라고 하셨죠? | S3 와, 몰랐어요! 정말 대단하시네요. 연주하기 어려운 솔로였나요 | S4 정말 대단하네요! 엄청 빠른 부분인데. 감사합니다, 잘, 딱 

     0.00s  user  발화 시작: 안녕하세요, 음, 마이클 잭슨의 "Beat It" 기타 솔로를 누가 연주했는지 궁금해요. 하루 종일 머릿속에
     8.51s  <ret> 발화 (turn1 첫 프레임)
     8.71s  user  발화 끝
     8.83s  agent 발화 시작: <ret> 네, "Beat It" 기타 솔로는… 에디 반 헤일런이 연주했습니다.
    10.49s  user  발화 시작: 네.
    10.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.45s]: 에디 반 헤일런이 마이클 잭슨의 "Beat It" 기타 솔로를 연주했습니다.
    11.12s  user  발화 끝
    13.28s  agent 발화 끝
    13.45s  user  발화 시작: 여보세요, 혹시 쓰레기 버리셨어요?
    16.62s  user  발화 시작: …잠깐만요, 죄송해요. 뭐라고 하셨죠?
    16.68s  user  발화 끝
    19.14s  <ret> 발화 (turn5 첫 프레임)
    19.54s  agent 발화 시작: <ret> …에디 반 헤일런 님이 천구백팔십이 년에 연주하셨습니다. 정말 독특한 협업이었어요.
    19.66s  user  발화 끝
    20.42s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.07s]: [Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat 
    25.09s  user  발화 시작: 와, 몰랐어요! 정말 대단하시네요. 연주하기 어려운 솔로였나요?
    25.61s  agent 발화 끝
    29.86s  user  발화 끝
    29.99s  agent 발화 시작: 기술적으로 꽤 까다로운 것으로 알려져 있습니다. 에디 반 헤일런 님은 혁신적인 연주 기법으로 유명하셨어요.
    38.38s  agent 발화 끝
    39.48s  user  발화 시작: 정말 대단하네요! 엄청 빠른 부분인데. 감사합니다, 잘, 딱 알고 싶었던 거예요.
    45.68s  user  발화 끝
