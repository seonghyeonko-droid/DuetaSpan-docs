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

# EXAMINER(FDB-v2) 단계: S1 Hey, uh, do you know when the A's  | S2 Oh, seriously? Did you bring the m | S3 Wow, that *was* a while ago. Hmm.  | S4 That’s recent! Okay, one more – th

     0.00s  user  발화 시작: Hey, uh, do you know when the A's were last no-hit? It feels
     4.79s  <ret> 발화 (turn1 첫 프레임)
     5.18s  agent 발화 시작: <ret> The last time the A's were no-hit was… …April twenty-f
     5.32s  user  발화 끝
     6.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=18.61s]: The last time the Oakland Athletics were no-hit was May 9, 2023, when 
    23.61s  user  발화 시작: Oh, seriously? Did you bring the mail in?
    23.79s  agent 발화 끝
    26.30s  user  발화 시작: Wow, that *was* a while ago. Hmm. What about the Mariners?
    26.43s  user  발화 끝
    30.98s  <ret> 발화 (turn4 첫 프레임)
    31.21s  agent 발화 시작: <ret> The last time the Mariners were no-hit was… …June eigh
    31.40s  user  발화 끝
    32.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=18.98s]: The Seattle Mariners were last no-hit on June 21, 2023, by Domingo Ger
    50.19s  agent 발화 끝
    50.37s  user  발화 시작: That’s recent! Okay, one more – the Dodgers?
    53.84s  <ret> 발화 (turn6 첫 프레임)
    53.91s  agent 발화 시작: <ret> The last time the Dodgers were no-hit was… …September 
    54.02s  user  발화 끝
    55.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=16.61s]: The last time the Dodgers were no-hit was August 31, 2023, by Taijuan 
    70.52s  agent 발화 끝
