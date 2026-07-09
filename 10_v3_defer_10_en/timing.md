# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Alice",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-04",
#       "category": "home",
#       "text": "User's home address is 447 Oak Avenue."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-04-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Find pictures related to my holida | S2 That’s great. Can you send the new | S3 Perfect, thank you. I— I mean, did | S4 Oh, never mind, that’s not importa

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.62s  <ret> 발화 (turn1 첫 프레임)
     4.67s  agent 발화 시작: <ret> I’ve found twelve pictures from your France trip last 
     4.81s  user  발화 끝
     6.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.21s]: (tool result) 12 files found; file types: JPG, PNG; total size: 350MB;
     8.43s  user  발화 시작: Mhm.
     9.02s  user  발화 끝
    10.88s  agent 발화 끝
    11.47s  user  발화 시작: That’s great. Can you send the newest three to my sister, Sa
    14.78s  <ret> 발화 (turn4 첫 프레임)
    14.92s  agent 발화 시작: <ret> I’ve just sent the three newest photos from your Franc
    15.12s  user  발화 끝
    15.82s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.68s]: (tool result) files sent; recipient: Sarah Miller; files: image1.jpg, 
    17.82s  user  발화 시작: Yeah.
    18.26s  user  발화 끝
    19.60s  agent 발화 끝
    20.05s  user  발화 시작: Perfect, thank you. I— I mean, did you find any of me with a
    23.48s  agent 발화 시작: Let me check on that.
    23.57s  user  발화 끝
    24.86s  agent 발화 끝
    24.99s  user  발화 시작: Oh, never mind, that’s not important!
    25.69s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) 2 files found; filenames: beret_paris.jpg, you_and_beret
    26.62s  agent 발화 시작: <ret> I did look, actually…
    26.73s  user  발화 끝
    28.46s  agent 발화 끝
