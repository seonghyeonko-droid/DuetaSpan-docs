# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Alice",
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
#       "date": "2026-06-04",
#       "category": "home",
#       "text": "User's home address is 447 Oak Avenue."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-04-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Find pictures related to my holida | S2 Oh, great! Can you send “Paris_Eif | S3 Perfect, thank you! Uh, I was also | S4 Okay, thanks. I— I mean, anytime n

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.84s  <ret> 발화 (turn1 첫 프레임)
     4.88s  agent 발화 시작: <ret> I found three pictures from your France trip last year
     5.10s  user  발화 끝
     6.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: (tool result) Three files were found: "Paris_Eiffel_Tower.jpg", "Nice_
     7.63s  user  발화 시작: Mhm.
     7.94s  user  발화 끝
     9.38s  agent 발화 끝
    10.14s  user  발화 시작: Oh, great! Can you send “Paris_Eiffel_Tower.jpg” to my siste
    17.50s  <ret> 발화 (turn4 첫 프레임)
    17.79s  agent 발화 시작: <ret> I’ve just emailed the Eiffel Tower picture to Anna at 
    17.97s  user  발화 끝
    18.54s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.25s]: (tool result) Email sent to anna@example.com with the attachment "Pari
    19.85s  user  발화 시작: Really?
    20.48s  user  발화 끝
    24.04s  agent 발화 끝
    24.55s  user  발화 시작: Perfect, thank you! Uh, I was also wondering about flights t
    28.91s  agent 발화 시작: Let me check on flight availability to Italy for you. Give m
    28.99s  user  발화 끝
    31.36s  user  발화 시작: Mhm.
    31.83s  user  발화 끝
    33.09s  user  발화 시작: Okay, thanks. I— I mean, anytime next month would work.
    33.22s  agent 발화 끝
    35.30s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Flights to Rome next month range from $650 to $980, with
    36.25s  agent 발화 시작: <ret> Regarding flights to Italy, I have some options. Fligh
    36.47s  user  발화 끝
    41.76s  agent 발화 끝
