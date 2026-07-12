# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Emilia",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "home",
#       "text": "User's home address is 531 Cedar Lane."
#     },
#     {
#       "date": "2025-07-28",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-18",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Oh, hello! I’m hoping you can give | S2 Um, yeah. I’ve been looking at pla | S3 Oh, that sounds perfect! | S4 That’s really convenient. Thanks, 

     0.00s  agent 발화 시작: Hi Emilia, I'm Jeaon! It’s lovely to meet you.
     2.83s  user  발화 시작: Oh, hello! I’m hoping you can give me some ideas for restaur
     3.05s  agent 발화 끝
     7.57s  <ret> 발화 (turn2 첫 프레임)
     7.97s  agent 발화 시작: <ret> Emilia! Knowing you’re pescatarian, I can certainly su
     7.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.21s]: [2026-06-07] User is pescatarian.
     8.02s  user  발화 끝
    14.05s  user  발화 시작: That would be great. I’m going in December, I think.
    14.18s  agent 발화 끝
    16.99s  <ret> 발화 (turn4 첫 프레임)
    17.07s  agent 발화 시작: <ret> Wonderful! You’re already thinking ahead to December i
    17.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.71s]: [2026-04-30] User is planning a trip to Lisbon in December.
    17.25s  user  발화 끝
    21.65s  user  발화 시작: Um, yeah. I’ve been looking at places, but…
    21.78s  agent 발화 끝
    25.30s  user  발화 끝
    25.55s  agent 발화 시작: It can be a bit overwhelming, I understand. Lisbon has so mu
    28.07s  user  발화 시작: Mm-hmm.
    28.52s  user  발화 끝
    30.26s  agent 발화 시작: Perhaps we could start with a highly-rated spot known for fr
    30.41s  agent 발화 끝
    34.41s  agent 발화 끝
    35.20s  user  발화 시작: That sounds good. Something not too touristy, if possible.
    38.77s  <ret> 발화 (turn10 첫 프레임)
    39.16s  agent 발화 시작: <ret> I found Restaurante Cervejaria Ramiro, located on Aven
    39.17s  ⚡SPAN 주입 [d'=1.12s / d_lead=9.83s]: (tool result) Restaurante Cervejaria Ramiro, Avenida Almirante Reis nº
    39.17s  user  발화 끝
    42.92s  user  발화 시작: Uh-huh.
    43.55s  user  발화 끝
    48.95s  user  발화 시작: Oh, that sounds perfect!
    48.99s  agent 발화 끝
    50.66s  user  발화 끝
    50.99s  agent 발화 시작: I’m so glad you like it! It's known for its incredibly fresh
    52.41s  user  발화 시작: Mm-hmm.
    53.14s  user  발화 끝
    54.93s  user  발화 시작: Is it easy to get to from the city center?
    55.19s  agent 발화 끝
    57.76s  <ret> 발화 (turn16 첫 프레임)
    57.91s  agent 발화 시작: <ret> It’s about a 20-minute trip by metro; take the Red Lin
    57.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.76s]: (tool result) Approximately 20 minutes by metro; take the Red Line fro
    58.02s  user  발화 끝
    61.74s  user  발화 시작: Yeah.
    62.19s  user  발화 끝
    64.68s  agent 발화 끝
    64.81s  user  발화 시작: That’s really convenient. Thanks, Jeaon!
    67.26s  user  발화 끝
    67.38s  agent 발화 시작: You’re very welcome, Emilia! I’m happy to help you make the 
    73.54s  agent 발화 끝
