# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Ada",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-09-08",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2025-07-23",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-11",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-25",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was wondering about the Vidhan P | S2 What’s the purpose of having diffe | S3 …but is it usually thirty… | S4 So, it seems…

     0.00s  user  발화 시작: I was wondering about the Vidhan Parishad.
     2.82s  agent 발화 시작: The Vidhan Parishad is the legislative council in some India
     2.82s  user  발화 끝
     7.26s  user  발화 시작: Is there a minimum age to become a member?
     7.26s  agent 발화 끝
    10.89s  agent 발화 시작: Yeah.
    10.89s  user  발화 끝
    10.89s  <ret> 발화 (turn4 첫 프레임)
    11.29s  agent 발화 시작: <ret> To be eligible for election, a person must have attain
    11.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.05s]: To be eligible for election to the Legislative Council, a person must 
    11.29s  agent 발화 끝
    17.34s  user  발화 시작: Thirty years old, that’s good to know. And what about the Lo
    17.34s  agent 발화 끝
    22.42s  <ret> 발화 (turn6 첫 프레임)
    22.58s  agent 발화 시작: <ret> The minimum age for membership of the Lok Sabha is twe
    22.58s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.84s]: No person shall be eligible for membership of the House of the People 
    22.58s  user  발화 끝
    27.42s  user  발화 시작: Yeah.
    27.42s  agent 발화 끝
    27.82s  user  발화 시작: So, a ten-year difference… hmm.
    27.82s  user  발화 끝
    29.84s  agent 발화 시작: It is quite a difference, isn’t it? Age requirements do vary
    29.84s  user  발화 끝
    35.08s  user  발화 시작: Uh-huh.
    35.08s  agent 발화 끝
    35.48s  user  발화 시작: What’s the purpose of having different age limits?
    35.48s  user  발화 끝
    38.71s  agent 발화 시작: Yeah.
    38.71s  user  발화 끝
    39.11s  agent 발화 시작: That's a thoughtful question! It likely reflects the differe
    39.11s  agent 발화 끝
    45.56s  user  발화 시작: I see. Is it the same age limit across all states with a Vid
    45.56s  agent 발화 끝
    51.61s  agent 발화 시작: Yeah.
    51.61s  user  발화 끝
    51.78s  <ret> 발화 (turn16 첫 프레임)
    52.02s  agent 발화 시작: <ret> The Constitution doesn’t prescribe a uniform age; it's
    52.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.84s]: The Constitution of India does not prescribe a uniform age for members
    52.02s  agent 발화 끝
    56.85s  user  발화 시작: Oh, so it can vary by state? That’s interesting—
    56.85s  agent 발화 끝
    60.48s  user  발화 시작: …but is it usually thirty…
    60.48s  user  발화 끝
    62.50s  user  발화 시작: …or are there states that are different?
    62.50s  user  발화 끝
    65.32s  agent 발화 시작: Yeah.
    65.32s  user  발화 끝
    65.56s  <ret> 발화 (turn21 첫 프레임)
    65.72s  agent 발화 시작: <ret> Maharashtra’s Legislative Council Act specifies a mini
    65.72s  ⚡SPAN 주입 [d'=1.28s / d_lead=5.24s]: Maharashtra's Legislative Council Act, 1960, specifies a minimum age o
    65.72s  agent 발화 끝
    70.97s  user  발화 시작: Mm-hmm.
    70.97s  agent 발화 끝
    71.37s  user  발화 시작: Okay, Maharashtra is thirty. What about Uttar Pradesh?
    71.37s  user  발화 끝
    74.44s  <ret> 발화 (turn24 첫 프레임)
    74.60s  agent 발화 시작: <ret> Uttar Pradesh also stipulates a minimum age of thirty 
    74.60s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.24s]: The Uttar Pradesh Legislative Council Act, 1968, also stipulates a min
    74.60s  user  발화 끝
    79.84s  user  발화 시작: So, it seems…
    79.84s  agent 발화 끝
    81.05s  user  발화 시작: …like thirty is pretty standard, then.
    81.05s  user  발화 끝
    83.47s  agent 발화 시작: Yeah.
    83.47s  user  발화 끝
    83.87s  agent 발화 시작: It appears to be, yes. It’s good to understand those qualifi
    83.87s  agent 발화 끝
    88.31s  user  발화 시작: Yeah, totally.
    88.31s  agent 발화 끝
    89.11s  user  발화 시작: It is. Thank you for explaining that to me, Junara.
    89.11s  user  발화 끝
    93.14s  agent 발화 시작: You’re very welcome!
    93.14s  user  발화 끝
    94.35s  agent 발화 끝
