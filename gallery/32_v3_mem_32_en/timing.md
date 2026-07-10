# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Manon",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-15",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-07",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Oh, hi Thunalo. That sounds…nice.  | S2 Exactly! I’m starting to feel a bi | S3 Well, I was thinking of climbing w | S4 Hmm, that's true. Maybe I should l

     0.00s  agent 발화 시작: Bonjour Manon, I’m Thunalo. It’s lovely to connect with you;
     5.99s  user  발화 시작: Yeah.
     6.49s  user  발화 끝
     7.73s  agent 발화 끝
     7.92s  user  발화 시작: Oh, hi Thunalo. That sounds…nice. I was wondering, do you re
    14.12s  <ret> 발화 (turn3 첫 프레임)
    14.21s  agent 발화 시작: <ret> You mentioned planning a trip to Kyoto in March… a won
    14.36s  user  발화 끝
    15.32s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.60s]: [2026-03-15] User is planning a trip to Kyoto in March.
    18.12s  user  발화 시작: Mm-hmm.
    18.61s  user  발화 끝
    19.81s  agent 발화 끝
    19.85s  user  발화 시작: Exactly! I’m starting to feel a bit overwhelmed with the pla
    25.68s  user  발화 끝
    25.74s  agent 발화 시작: That’s perfectly understandable, Manon. International travel
    33.95s  agent 발화 끝
    34.40s  user  발화 시작: Well, I was thinking of climbing while I'm there, but…I don’
    39.14s  <ret> 발화 (turn8 첫 프레임)
    39.30s  agent 발화 시작: <ret> You have a passion for rock climbing… so Kyoto with it
    39.40s  user  발화 끝
    41.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.97s]: [2026-02-20] User is into rock climbing.
    45.09s  user  발화 시작: Hmm, that's true. Maybe I should look into guided tours then
    45.27s  agent 발화 끝
    48.40s  <ret> 발화 (turn10 첫 프레임)
    48.80s  agent 발화 시작: <ret> That’s a very sensible idea, Manon. Let me see what gu
    49.02s  user  발화 끝
    50.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.34s]: [Kyoto Rock Climbing Tours: March availability - Kyoto Adventures: 8 s
    54.97s  agent 발화 시작: There are a few options available… Kyoto Adventures has eigh
    55.14s  agent 발화 끝
    62.48s  agent 발화 끝
