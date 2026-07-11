# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Lily",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-04",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-11-20",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-08-10",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 How many of Southwestern’s 19 vars | S2 Oh, that's too bad. Do you know wh | S3 …is that the same as saying they’v | S4 Wow, twelve times! That’s impressi

     0.00s  user  발화 시작: How many of Southwestern’s 19 varsity programs had NCAA or b
     6.68s  agent 발화 시작: Well, it appears that information isn’t readily available to
     6.86s  user  발화 끝
    11.49s  agent 발화 끝
    13.09s  user  발화 시작: Oh, that's too bad. Do you know what their most successful p
    17.02s  <ret> 발화 (turn3 첫 프레임)
    17.18s  agent 발화 시작: <ret> Their most successful program has been football, havin
    17.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: Southwestern University’s football program has been its most successfu
    17.38s  user  발화 끝
    24.05s  user  발화 시작: …is that the same as saying they’ve had a lot of postseason 
    24.78s  agent 발화 끝
    27.70s  <ret> 발화 (turn5 첫 프레임)
    27.78s  agent 발화 시작: <ret> The football team has made twelve NCAA Division III pl
    27.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: The Southwestern Pirates football team has made 12 NCAA Division III p
    27.88s  user  발화 끝
    33.72s  user  발화 시작: Yeah, totally.
    34.91s  user  발화 끝
    35.66s  agent 발화 끝
    35.90s  user  발화 시작: Wow, twelve times! That’s impressive for Division III. What 
    41.76s  <ret> 발화 (turn8 첫 프레임)
    42.16s  agent 발화 시작: <ret> Unfortunately, I don’t have specific details about the
    42.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: (no information found)
    42.34s  user  발화 끝
    51.34s  agent 발화 끝
