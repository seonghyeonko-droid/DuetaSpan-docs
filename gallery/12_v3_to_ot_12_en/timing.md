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

# EXAMINER(FDB-v2) 단계: S1 Hey, uh, who did the guitar solo o | S2 …wait, hold on a sec. Sorry about  | S3 Wow, I didn’t know that! He’s incr | S4 I can imagine! That’s a really fas

     0.00s  user  발화 시작: Hey, uh, who did the guitar solo on Michael Jackson's "Beat 
     5.22s  <ret> 발화 (turn1 첫 프레임)
     5.45s  agent 발화 시작: <ret> The guitar solo on "Beat It" was performed by… Eddie V
     5.65s  user  발화 끝
     6.89s  user  발화 시작: Okay.
     7.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.75s]: Eddie Van Halen performed the guitar solo on Michael Jackson's "Beat I
     7.67s  user  발화 끝
     9.20s  user  발화 시작: Honey, did you take out the trash yet?
     9.20s  agent 발화 끝
    11.29s  user  발화 시작: …wait, hold on a sec. Sorry about that. You were saying?
    11.41s  user  발화 끝
    15.12s  <ret> 발화 (turn5 첫 프레임)
    15.51s  agent 발화 시작: <ret> …Eddie Van Halen, back in nineteen eighty-two. It was 
    15.59s  user  발화 끝
    17.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.38s]: [Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat 
    20.89s  agent 발화 끝
    21.87s  user  발화 시작: Wow, I didn’t know that! He’s incredible. Was it a difficult
    27.42s  user  발화 끝
    27.52s  agent 발화 시작: It’s considered quite technically demanding, yes. Eddie Van 
    33.22s  agent 발화 끝
    33.84s  user  발화 시작: I can imagine! That’s a really fast part. Thanks, Jal, that'
    39.95s  user  발화 끝
