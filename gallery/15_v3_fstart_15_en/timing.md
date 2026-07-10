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

# EXAMINER(FDB-v2) 단계: S1 What are the latitude and longitud | S2 That’s a long drive. Is there a di | S3 Yes, that’s right. | S4 That sounds lovely.

     0.00s  user  발화 시작: What are the latitude and longitude of the Sydney Opera Hous
     4.53s  <ret> 발화 (turn1 첫 프레임)
     4.61s  agent 발화 시작: <ret> The Sydney Opera House is at latitude… -33.8568 and lo
     4.67s  user  발화 끝
     6.21s  ⚡SPAN 주입 [d'=1.68s / d_lead=10.02s]: [{"latitude": -33.8568, "longitude": 151.2153}]
     9.78s  user  발화 시작: Wow.
    10.74s  user  발화 끝
    14.62s  agent 발화 끝
    14.76s  user  발화 시작: And how far is that from, uh, Melbourne?
    17.36s  <ret> 발화 (turn4 첫 프레임)
    17.59s  agent 발화 시작: <ret> From the Opera House to Melbourne it’s 878 kilometers…
    17.62s  user  발화 끝
    19.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.90s]: [{"distance_km": 878, "duration": "9h 12m"}]
    20.00s  user  발화 시작: Oh.
    20.82s  user  발화 끝
    24.49s  agent 발화 끝
    24.57s  user  발화 시작: That’s a long drive. Is there a direct flight?
    27.06s  <ret> 발화 (turn7 첫 프레임)
    27.14s  agent 발화 시작: <ret> Qantas flight QF401 departs Sydney at 8:00 AM… arrivin
    27.30s  user  발화 끝
    29.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.13s]: [{"airline": "Qantas", "flight_number": "QF401", "departure_time": "08
    32.89s  user  발화 시작: Right.
    33.33s  user  발화 끝
    36.27s  agent 발화 끝
    36.33s  user  발화 시작: That sounds good. Can you book that for me?
    38.87s  user  발화 끝
    39.23s  agent 발화 시작: Just to confirm, that’s Qantas flight 401… departing at 8:00
    42.05s  user  발화 시작: Yeah.
    42.69s  user  발화 끝
    48.64s  agent 발화 끝
    49.64s  user  발화 시작: Yes, that’s right.
    50.69s  <ret> 발화 (turn13 첫 프레임)
    51.09s  agent 발화 시작: <ret> Excellent. I’ve booked that flight for you—confirmatio
    51.11s  user  발화 끝
    51.19s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.70s]: [{"confirmation_number": "ABC123"}]
    56.79s  agent 발화 끝
    58.25s  user  발화 시작: …Actually, could we look at hotels in Melbourne first? Near 
    63.12s  <ret> 발화 (turn15 첫 프레임)
    63.35s  user  발화 끝
    63.36s  agent 발화 시작: <ret> The Langham Melbourne has a 4.5-star rating… with room
    64.08s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.62s]: [{"hotel_name": "The Langham Melbourne", "price_per_night": 350, "rati
    69.90s  user  발화 시작: That sounds lovely.
    69.98s  agent 발화 끝
    71.38s  agent 발화 시작: It's a very popular choice with families… many enjoy the con
    71.46s  user  발화 끝
    73.64s  user  발화 시작: Yeah.
    74.13s  user  발화 끝
    77.03s  agent 발화 끝
    77.26s  user  발화 시작: Good to know. Thanks for your help, Helion.
    79.58s  agent 발화 시작: You're most welcome. I'm glad I could assist you with your t
    79.70s  user  발화 끝
    83.61s  agent 발화 끝
