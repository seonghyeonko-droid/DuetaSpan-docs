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

# EXAMINER(FDB-v2) 단계: S1 I was just listening to Beat It by | S2 Wow, Eddie Van Halen? That’s incre | S3 Hey, did you take the trash out ye | S4 Sorry about that. So, was he asked

     0.00s  user  발화 시작: I was just listening to Beat It by Michael Jackson, and it o
     6.64s  <ret> 발화 (turn1 첫 프레임)
     6.88s  agent 발화 시작: <ret> It’s a really iconic solo, and a lot of people wonder 
     7.04s  user  발화 끝
     8.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.95s]: [source: Wikipedia] Eddie Van Halen performed the guitar solo on Micha
    11.68s  agent 발화 시작: The guitar solo on Michael Jackson’s “Beat It” was performed
    11.82s  agent 발화 끝
    15.29s  user  발화 시작: Okay.
    16.02s  user  발화 끝
    20.68s  user  발화 시작: Wow, Eddie Van Halen? That’s incredible. I didn’t know that!
    21.09s  agent 발화 끝
    24.45s  user  발화 시작: Hey, did you take the trash out yet?
    24.51s  user  발화 끝
    26.36s  user  발화 시작: Sorry about that. So, was he asked specifically, or did he j
    26.57s  user  발화 끝
    31.48s  agent 발화 시작: He was specifically asked, which is quite a testament to his
    31.51s  user  발화 끝
    41.95s  agent 발화 끝
