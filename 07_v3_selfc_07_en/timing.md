# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Rennora",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-29",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-29",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-05-31",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 Perfect. And can you find me infor | S3 Hmm, that’s good to know. Are ther | S4 Excellent. Thanks for all your hel

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.72s  <ret> 발화 (turn1 첫 프레임)
     3.95s  agent 발화 시작: <ret> Great! Your viewing at The Grandview Lofts is confirme
     4.17s  user  발화 끝
     5.24s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.25s]: (tool result) Viewing scheduled for The Grandview Lofts, June fifteent
    10.20s  agent 발화 끝
    10.48s  user  발화 시작: Actually, June sixteenth would be better.
    12.82s  <ret> 발화 (turn3 첫 프레임)
    12.83s  user  발화 끝
    12.98s  agent 발화 시작: <ret> No problem at all. It’s now set for June sixteenth at 
    14.74s  ⚡SPAN 주입 [d'=1.92s / d_lead=6.11s]: (tool result) Viewing rescheduled for The Grandview Lofts, June sixtee
    19.06s  user  발화 시작: Perfect. And can you find me information on the neighborhood
    19.09s  agent 발화 끝
    22.33s  <ret> 발화 (turn5 첫 프레임)
    22.56s  agent 발화 시작: <ret> The Arts District is known for its vibrant art scene a
    22.76s  user  발화 끝
    24.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.32s]: [source: CityData.com] The Grandview Lofts are located in the Arts Dis
    27.73s  user  발화 시작: Is it a safe area?
    27.89s  agent 발화 끝
    29.32s  <ret> 발화 (turn7 첫 프레임)
    29.48s  agent 발화 시작: <ret> It's considered safer than approximately fifty-two per
    29.62s  user  발화 끝
    31.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: [source: NeighborhoodScout] The Arts District has a crime index of six
    37.59s  agent 발화 끝
    37.65s  user  발화 시작: Hmm, that’s good to know. Are there any good coffee shops ne
    42.19s  <ret> 발화 (turn9 첫 프레임)
    42.46s  user  발화 끝
    42.59s  agent 발화 시작: <ret> There are three coffee shops nearby: Brew & Bloom, Dai
    44.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: (tool result) Three coffee shops within one mile: Brew & Bloom, Daily 
    46.22s  user  발화 시작: Right.
    46.95s  user  발화 끝
    49.22s  agent 발화 끝
    49.51s  user  발화 시작: Brew & Bloom sounds nice. What are their hours?
    52.89s  <ret> 발화 (turn12 첫 프레임)
    53.29s  agent 발화 시작: <ret> Brew & Bloom is open from seven AM to seven PM every d
    53.48s  user  발화 끝
    54.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: (tool result) Brew & Bloom is open seven AM to seven PM, seven days a 
    58.93s  user  발화 시작: Excellent. Thanks for all your help, Tellar.
    59.08s  agent 발화 끝
    61.37s  agent 발화 시작: You’re very welcome. It’s my pleasure to support you through
    61.52s  user  발화 끝
    68.22s  agent 발화 끝
    68.30s  user  발화 시작: I’m also looking at a place called Willow Creek Apartments…
    71.77s  user  발화 끝
    72.11s  agent 발화 시작: Willow Creek Apartments, a good option. What would you like 
    77.39s  agent 발화 끝
