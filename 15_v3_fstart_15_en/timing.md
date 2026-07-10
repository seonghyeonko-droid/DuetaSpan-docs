# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "Ada",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-01",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-09-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-05-30",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What are the latitude and longitud | S2 Hmm, is there anything happening a | S3 Stalls, please. | S4 And can you set a reminder…

     0.00s  user  발화 시작: What are the latitude and longitude of the Sydney Opera Hous
     3.65s  <ret> 발화 (turn1 첫 프레임)
     3.73s  agent 발화 시작: <ret> The Sydney Opera House is at latitude… -33.8568 and lo
     3.79s  user  발화 끝
     5.33s  ⚡SPAN 주입 [d'=1.68s / d_lead=9.22s]: [{"latitude": -33.8568, "longitude": 151.2153}]
     8.47s  user  발화 시작: Wow.
     9.29s  user  발화 끝
    12.95s  agent 발화 끝
    13.05s  user  발화 시작: And what’s the weather like there right now?
    15.85s  <ret> 발화 (turn4 첫 프레임)
    16.09s  agent 발화 시작: <ret> It’s currently 22 degrees and cloudy in Sydney. It’s a
    16.10s  user  발화 끝
    17.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.27s]: [{"temperature": 22, "condition": "Cloudy"}]
    19.34s  user  발화 시작: Right.
    19.83s  user  발화 끝
    21.36s  agent 발화 끝
    21.39s  user  발화 시작: Hmm, is there anything happening at the Opera House tonight?
    24.90s  <ret> 발화 (turn7 첫 프레임)
    24.97s  agent 발화 시작: <ret> There’s a performance of Tosca at 7:30 PM tonight. It’
    25.14s  user  발화 끝
    26.57s  user  발화 시작: Yeah.
    26.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.41s]: [{"event": "Tosca", "time": "7:30 PM"}]
    27.30s  user  발화 끝
    30.38s  agent 발화 끝
    30.46s  user  발화 시작: …Could you book me a ticket for that, please?
    32.86s  user  발화 끝
    33.24s  agent 발화 시작: And what seating section would you prefer? We have stalls, d
    38.89s  agent 발화 끝
    39.66s  user  발화 시작: Stalls, please.
    41.31s  user  발화 끝
    41.53s  <ret> 발화 (turn12 첫 프레임)
    41.61s  agent 발화 시작: <ret> I’ve booked a stall ticket for you. Your confirmation 
    42.73s  ⚡SPAN 주입 [d'=1.20s / d_lead=8.29s]: [{"confirmation_number": "AX7294", "price": 189.00}]
    44.50s  user  발화 시작: Oh.
    45.32s  user  발화 끝
    49.83s  agent 발화 시작: It's wonderful that you're going to see Tosca. It’s a truly 
    49.90s  agent 발화 끝
    54.69s  agent 발화 끝
    55.41s  user  발화 시작: What time does the box office close tonight?
    57.59s  <ret> 발화 (turn16 첫 프레임)
    57.91s  agent 발화 시작: <ret> The box office closes at 8:00 PM tonight. You’ll have 
    58.00s  user  발화 끝
    58.63s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.83s]: [{"closing_time": "8:00 PM"}]
    61.63s  user  발화 시작: Oh.
    62.46s  user  발화 끝
    63.65s  user  발화 시작: And can you set a reminder…
    63.74s  agent 발화 끝
    65.72s  user  발화 끝
    66.75s  user  발화 시작: …for me to leave at 6:30 PM?
    69.42s  user  발화 끝
    69.52s  <ret> 발화 (turn20 첫 프레임)
    69.67s  agent 발화 시작: <ret> I’ve set a reminder to leave for Tosca at 6:30 PM. Hav
    71.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.28s]: [{"status": "Reminder set"}]
    74.95s  agent 발화 끝
