# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Quinn",
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
#       "date": "2026-01-12",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-07-09",
#       "category": "home",
#       "text": "User's home address is 944 Oak Avenue."
#     },
#     {
#       "date": "2025-06-18",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-12-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What family movies are showing at  | S2 What about the price for Migration | S3 Can you book those for me then? | S4 That’s great, thank you.

     0.00s  user  발화 시작: What family movies are showing at Showcase Cinema de Lux Leg
     4.97s  <ret> 발화 (turn1 첫 프레임)
     5.04s  user  발화 끝
     5.05s  agent 발화 시작: <ret> Kung Fu Panda 4 and Migration are both playing at the 
     5.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: (tool result) Kung Fu Panda 4 is playing at Showcase Cinema de Lux Leg
     9.81s  user  발화 시작: …are either of those in IMAX?
    10.56s  agent 발화 끝
    11.43s  <ret> 발화 (turn3 첫 프레임)
    11.59s  agent 발화 시작: <ret> Unfortunately, Kung Fu Panda 4 isn't showing in IMAX a
    11.59s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.00s]: (tool result) Kung Fu Panda 4 is not currently showing in IMAX at Show
    11.65s  user  발화 끝
    14.00s  user  발화 시작: Exactly.
    14.64s  user  발화 끝
    16.46s  agent 발화 시작: Migration is also not playing in IMAX at that location. Howe
    16.58s  agent 발화 끝
    25.92s  agent 발화 끝
    26.88s  user  발화 시작: What about the price for Migration at 4:15?
    29.36s  <ret> 발화 (turn7 첫 프레임)
    29.68s  agent 발화 시작: <ret> Two tickets for Migration at 4:15 PM will be twenty-ei
    29.68s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.86s]: (tool result) Two tickets to Migration at 4:15 PM at Showcase Cinema d
    29.84s  user  발화 끝
    34.55s  agent 발화 끝
    34.76s  user  발화 시작: Can you book those for me then?
    36.60s  <ret> 발화 (turn9 첫 프레임)
    36.83s  agent 발화 시작: <ret> Wonderful, your tickets are booked! Confirmation numbe
    36.84s  user  발화 끝
    36.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: (tool result) Your order is confirmed! Confirmation number is MH7492B.
    42.71s  user  발화 시작: Mm-hmm.
    43.20s  user  발화 끝
    44.71s  agent 발화 끝
    44.72s  user  발화 시작: That’s great, thank you.
    45.92s  agent 발화 시작: You’re very welcome. Enjoy the movie, and have a nice day.
    46.00s  user  발화 끝
    49.34s  agent 발화 끝
