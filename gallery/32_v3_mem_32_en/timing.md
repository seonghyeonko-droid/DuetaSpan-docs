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


     0.00s  agent 발화 시작: Bonjour Manon, I’m Thunalo. It's lovely to connect with you;
     5.22s  user  발화 시작: Yeah.
     5.95s  user  발화 끝
     6.91s  agent 발화 끝
     6.92s  user  발화 시작: Oh, hi Thunalo. Um, I was wondering… do you remember anythin
    12.30s  <ret> 발화 (turn3 첫 프레임)
    12.38s  agent 발화 시작: <ret> You mentioned a trip to Kyoto in March, and I believe 
    12.56s  user  발화 끝
    13.50s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.65s]: [2026-03-15] User is planning a trip to Kyoto in March.
    16.29s  user  발화 시작: Mm-hmm.
    16.79s  user  발화 끝
    17.91s  agent 발화 시작: …perhaps we could revisit those ideas and see how they’ve ev
    18.04s  agent 발화 끝
    21.52s  agent 발화 끝
    21.82s  user  발화 시작: Yes! That's it. I'm trying to figure out the best time to go
    26.21s  agent 발화 시작: Well, March is a beautiful time to visit Kyoto, though it ca
    26.45s  user  발화 끝
    34.97s  agent 발화 끝
    35.80s  user  발화 시작: I'd like to find some good rock climbing spots, actually.
    38.79s  <ret> 발화 (turn9 첫 프레임)
    39.03s  agent 발화 시작: <ret> That’s wonderful, Manon! Knowing you enjoy rock climbi
    39.13s  user  발화 끝
    40.23s  ⚡SPAN 주입 [d'=1.44s / d_lead=10.48s]: [2026-02-20] User is into rock climbing.
    49.51s  agent 발화 끝
