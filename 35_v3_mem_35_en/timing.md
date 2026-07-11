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
     0.00s  <ret> 발화 (turn2 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.04s  user  발화 시작: Oh, hello! I’m hoping you can give me some ideas for restaur
     0.04s  agent 발화 끝
     0.11s  agent 발화 시작: <ret> Emilia! Knowing you’re pescatarian, I can certainly su
     0.11s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: [2026-06-07] User is pescatarian.
     0.11s  user  발화 끝
     0.18s  user  발화 시작: That would be great. I’m going in December, I think.
     0.18s  agent 발화 끝
     0.23s  agent 발화 시작: <ret> Wonderful! You’re already thinking ahead to December i
     0.23s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: [2026-04-30] User is planning a trip to Lisbon in December.
     0.23s  user  발화 끝
     0.26s  <ret> 발화 (turn10 첫 프레임)
     0.28s  user  발화 시작: Um, yeah. I’ve been looking at places, but…
     0.28s  agent 발화 끝
     0.32s  agent 발화 시작: It can be a bit overwhelming, I understand. Lisbon has so mu
     0.32s  user  발화 끝
     0.36s  <ret> 발화 (turn16 첫 프레임)
     0.39s  user  발화 시작: Mm-hmm.
     0.39s  agent 발화 끝
     0.40s  agent 발화 시작: Perhaps we could start with a highly-rated spot known for fr
     0.40s  user  발화 끝
     0.46s  user  발화 시작: That sounds good. Something not too touristy, if possible.
     0.46s  agent 발화 끝
     0.50s  agent 발화 시작: <ret> I found Restaurante Cervejaria Ramiro, located on Aven
     0.50s  ⚡SPAN 주입 [d'=0.11s / d_lead=0.11s]: (tool result) Restaurante Cervejaria Ramiro, Avenida Almirante Reis nº
     0.50s  user  발화 끝
     0.62s  user  발화 시작: Uh-huh.
     0.62s  agent 발화 끝
     0.62s  user  발화 시작: Oh, that sounds perfect!
     0.62s  user  발화 끝
     0.64s  agent 발화 시작: I’m so glad you like it! It's known for its incredibly fresh
     0.64s  user  발화 끝
     0.71s  user  발화 시작: Mm-hmm.
     0.71s  agent 발화 끝
     0.71s  user  발화 시작: Is it easy to get to from the city center?
     0.71s  user  발화 끝
     0.76s  agent 발화 시작: <ret> It’s about a 20-minute trip by metro; take the Red Lin
     0.76s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) Approximately 20 minutes by metro; take the Red Line fro
     0.76s  user  발화 끝
     0.86s  user  발화 시작: Yeah.
     0.86s  agent 발화 끝
     0.87s  user  발화 시작: That’s really convenient. Thanks, Jeaon!
     0.87s  user  발화 끝
     0.89s  agent 발화 시작: You’re very welcome, Emilia! I’m happy to help you make the 
     0.89s  user  발화 끝
     1.00s  agent 발화 끝
