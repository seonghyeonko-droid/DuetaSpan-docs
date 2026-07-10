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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, has the Oakl | S2 Did you take the trash out? | S3 Sorry about that, Ellana. Back to  | S4 Santana, okay. That explains why I

     0.00s  user  발화 시작: I was just wondering, has the Oakland A's team been no-hit r
     5.09s  <ret> 발화 (turn1 첫 프레임)
     5.46s  user  발화 끝
     5.48s  agent 발화 시작: <ret> The last time the A's were no-hit was… in April 2018. 
     7.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.79s]: [source: Baseball-Reference.com] The last time the Oakland Athletics w
    13.27s  agent 발화 끝
    13.49s  user  발화 시작: Wow, 2018. That *is* a while ago. Hey, Mark, did you remembe
    19.84s  user  발화 시작: Did you take the trash out?
    19.93s  user  발화 끝
    21.29s  user  발화 시작: Sorry about that, Ellana. Back to baseball—who pitched the n
    21.36s  user  발화 끝
    25.98s  <ret> 발화 (turn5 첫 프레임)
    26.11s  user  발화 끝
    26.21s  agent 발화 시작: <ret> That no-hitter was pitched by Ervin Santana of the Min
    27.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.08s]: [source: ESPN] On April 21, 2018, Ervin Santana of the Minnesota Twins
    37.09s  user  발화 시작: Santana, okay. That explains why I don’t remember it—I don't
    37.29s  agent 발화 끝
    41.83s  agent 발화 시작: It’s perfectly natural to focus on your favorite teams—that’
    42.09s  user  발화 끝
    47.89s  agent 발화 끝
