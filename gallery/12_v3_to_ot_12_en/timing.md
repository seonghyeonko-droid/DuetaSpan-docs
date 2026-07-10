# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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

# EXAMINER(FDB-v2) 단계: S1 Hey, uh, who did the guitar solo o | S2 Did you see that email from accoun | S3 …Anyway, was he paid a lot for it? | S4 That's...not as much as I expected

     0.00s  user  발화 시작: Hey, uh, who did the guitar solo on Michael Jackson’s “Beat 
     4.18s  <ret> 발화 (turn1 첫 프레임)
     4.41s  agent 발화 시작: <ret> That was Eddie Van Halen, actually. He brought a reall
     4.67s  user  발화 끝
     6.08s  user  발화 시작: Okay.
     6.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
     6.80s  user  발화 끝
     8.70s  user  발화 시작: Wow, really? I thought it sounded different from his usual s
     8.90s  agent 발화 끝
    13.36s  user  발화 시작: Did you see that email from accounting?
    13.38s  user  발화 끝
    15.59s  user  발화 시작: …Anyway, was he paid a lot for it?
    15.72s  user  발화 끝
    17.44s  <ret> 발화 (turn6 첫 프레임)
    17.76s  agent 발화 시작: <ret> He received twenty thousand dollars for that solo. It 
    17.90s  user  발화 끝
    19.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: Eddie Van Halen was paid $20,000 for his work on “Beat It”.
    23.22s  agent 발화 끝
    23.27s  user  발화 시작: That's...not as much as I expected, considering how iconic i
    27.75s  user  발화 끝
    28.10s  agent 발화 시작: Sometimes the greatest contributions aren’t always measured 
    32.82s  agent 발화 끝
