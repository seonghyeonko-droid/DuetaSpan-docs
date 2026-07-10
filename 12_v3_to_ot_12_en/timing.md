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

# EXAMINER(FDB-v2) 단계: S1 Do you know who played the guitar  | S2 Hmm, that’s right… uhhh, did he do | S3 Hey, have you seen my keys? | S4 So, it was just that one song then

     0.00s  user  발화 시작: Do you know who played the guitar solo on Michael Jackson’s 
     3.24s  <ret> 발화 (turn1 첫 프레임)
     3.47s  agent 발화 시작: <ret> That was Eddie Van Halen, a truly innovative guitarist
     3.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.47s]: Eddie Van Halen, known for his innovative guitar work with the band Va
     3.65s  user  발화 끝
     5.61s  user  발화 시작: Okay.
     6.10s  user  발화 끝
     8.94s  agent 발화 끝
     8.96s  user  발화 시작: Hmm, that’s right… uhhh, did he do any other work with Micha
    13.47s  <ret> 발화 (turn4 첫 프레임)
    13.87s  agent 발화 시작: <ret> No, that solo was their only recorded collaboration—Ed
    13.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: Eddie Van Halen and Michael Jackson never collaborated on any other re
    14.01s  user  발화 끝
    20.96s  agent 발화 끝
    22.29s  user  발화 시작: Hey, have you seen my keys?
    24.13s  user  발화 시작: So, it was just that one song then?
    24.23s  user  발화 끝
    26.48s  agent 발화 시작: Just that one song, yes. It’s wonderful how a single contrib
    26.53s  user  발화 끝
    31.90s  agent 발화 끝
