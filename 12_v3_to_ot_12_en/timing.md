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

# EXAMINER(FDB-v2) 단계: S1 Do you know who played the guitar  | S2 Wow, I didn’t realize it was him!  | S3 You won't believe who it was... | S4 So, Jal, do you have any tips for 

     0.00s  user  발화 시작: Do you know who played the guitar solo on Michael Jackson’s 
     5.34s  <ret> 발화 (turn1 첫 프레임)
     5.55s  agent 발화 시작: <ret> That would be Eddie Van Halen, actually. A truly iconi
     5.79s  user  발화 끝
     7.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.80s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s song “B
     9.73s  user  발화 시작: Yeah.
    10.50s  user  발화 끝
    11.18s  user  발화 시작: Wow, I didn’t realize it was him! That's amazing.
    11.35s  agent 발화 끝
    14.82s  user  발화 시작: You won't believe who it was...
    14.93s  user  발화 끝
    16.70s  user  발화 끝
    18.20s  user  발화 시작: So, Jal, do you have any tips for dealing with a really stre
    22.32s  <ret> 발화 (turn6 첫 프레임)
    22.71s  agent 발화 시작: <ret> Deep, mindful breaths can really help calm things down
    22.92s  user  발화 끝
    24.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.32s]: Deep breathing exercises can help reduce stress and promote relaxation
    28.03s  agent 발화 끝
