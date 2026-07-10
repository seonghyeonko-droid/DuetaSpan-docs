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

# EXAMINER(FDB-v2) 단계: S1 마이클 잭슨 "Beat It" 기타 솔로를 누가 연주했는지 궁 | S2 저기요, 혹시 재활용 쓰레기 버리고 오셨어요? | S3 아, 죄송한데요, 어디까지 얘기했었죠? 아, 기타리스트요. | S4 정말 그렇죠. 그는 록과 팝을 아주 자연스럽게 섞는 게 정말 

     0.00s  user  발화 시작: 마이클 잭슨 "Beat It" 기타 솔로를 누가 연주했는지 궁금하네요. 잘 기억이 안 나요.
     5.21s  <ret> 발화 (turn1 첫 프레임)
     5.32s  user  발화 끝
     5.53s  agent 발화 시작: <ret> 음, 사실 에디 반 헤일런이었어요. 그 노래에 정말 독특한 에너지를 더했거든요.
     7.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.83s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
     7.75s  user  발화 시작: 네.
     8.38s  user  발화 끝
    11.37s  agent 발화 끝
    11.46s  user  발화 시작: 와, 세션 뮤지션이 아니었다는 걸 항상 잊어버려요.
    15.30s  user  발화 끝
    15.60s  agent 발화 시작: 그렇게 굉장한 노래에서는 개별적인 기여가 간과되기 쉬워요.
    20.18s  user  발화 시작: 저기요, 혹시 재활용 쓰레기 버리고 오셨어요?
    20.42s  agent 발화 끝
    23.99s  user  발화 시작: 아, 죄송한데요, 어디까지 얘기했었죠? 아, 기타리스트요.
    24.11s  user  발화 끝
    28.52s  user  발화 끝
    28.57s  agent 발화 시작: 에디 반 헤일런과 그의 놀라운 솔로 연주에 대해 이야기하고 있었어요. "Beat It"을 정말 돋보이게 했다
    36.47s  user  발화 시작: 정말 그렇죠. 그는 록과 팝을 아주 자연스럽게 섞는 게 정말 대단해요.
    36.49s  agent 발화 끝
    41.24s  user  발화 끝
    41.28s  agent 발화 시작: 정말 혁신적인 협업이었고, 두 아티스트 모두에게 중요한 순간이었어요. 장르의 틀을 깨는 데는 용기가 많이 필
    50.27s  agent 발화 끝
