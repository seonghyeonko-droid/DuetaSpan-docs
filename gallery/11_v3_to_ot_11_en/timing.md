# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Rowan",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, do you happen to know when th | S2 Wow, that was a while ago. I thoug | S3 He’s such a know-it-all, honestly… | S4 Sorry about that. Anyway, I’m tryi

     0.00s  user  발화 시작: Hey, do you happen to know when the A’s were last no-hit? I’
     4.92s  <ret> 발화 (turn1 첫 프레임)
     5.30s  agent 발화 시작: <ret> That would have been April twenty-first, two thousand 
     5.46s  user  발화 끝
     6.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: The Oakland Athletics were last no-hit on April 21, 2018.
    12.53s  user  발화 시작: Wow, that was a while ago. I thought it was more recent.
    12.68s  agent 발화 끝
    15.91s  user  발화 끝
    16.01s  agent 발화 시작: It’s easy to lose track of time, especially with sports! Do 
    22.96s  agent 발화 끝
    23.06s  user  발화 시작: He’s such a know-it-all, honestly…
    25.55s  user  발화 끝
    27.37s  user  발화 시작: Sorry about that. Anyway, I’m trying to find a good sleep sc
    31.06s  <ret> 발화 (turn6 첫 프레임)
    31.20s  user  발화 끝
    31.30s  agent 발화 시작: <ret> A consistent schedule really is key, yes. Aim to go to
    33.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.14s]: Consistent sleep schedules promote better sleep quality and daytime al
    38.45s  agent 발화 끝
