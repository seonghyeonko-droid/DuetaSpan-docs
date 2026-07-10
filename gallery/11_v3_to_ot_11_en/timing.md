# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Liam",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-16",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-11-25",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-23",
#       "category": "home",
#       "text": "User's home address is 657 Maple Drive."
#     },
#     {
#       "date": "2025-06-22",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know when the National Inst | S2 Oh, that’s interesting. What was h | S3 …was it connected to the veterans  | S4 So, it was a response to that need

     0.00s  user  발화 시작: Do you know when the National Institute of Mental Health was
     2.99s  <ret> 발화 (turn1 첫 프레임)
     3.38s  agent 발화 시작: <ret> It’s understandable to wonder about origins, isn’t it?
     3.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.51s]: The National Institute of Mental Health was first established on April
     3.51s  user  발화 끝
    12.79s  user  발화 시작: Oh, that’s interesting. What was happening in the world then
    12.88s  agent 발화 끝
    15.65s  user  발화 끝
    15.71s  agent 발화 시작: That was a time of significant change—
    18.05s  user  발화 시작: …was it connected to the veterans returning from the war?
    18.80s  agent 발화 끝
    20.76s  <ret> 발화 (turn5 첫 프레임)
    20.99s  agent 발화 시작: <ret> Following World War Two, there was a growing awareness
    21.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.01s]: Following World War II, there was increased recognition of the need fo
    21.10s  user  발화 끝
    31.00s  agent 발화 끝
    31.63s  user  발화 시작: So, it was a response to that need, then?
    34.54s  user  발화 끝
    34.58s  agent 발화 시작: In part, yes. Difficult experiences often highlight areas ne
    43.02s  agent 발화 끝
