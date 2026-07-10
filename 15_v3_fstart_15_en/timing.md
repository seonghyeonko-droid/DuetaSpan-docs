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

# EXAMINER(FDB-v2) 단계: S1 What are the latitude and longitud | S2 Hmm, what’s the Russell Hotel like | S3 That’s great! – | S4 …can you check if they have parkin

     0.00s  user  발화 시작: What are the latitude and longitude of the Sydney Opera Hous
     4.58s  user  발화 끝
     4.68s  <ret> 발화 (turn1 첫 프레임)
     4.76s  agent 발화 시작: <ret> The Sydney Opera House is at latitude negative thirty-
     6.36s  ⚡SPAN 주입 [d'=1.68s / d_lead=11.59s]: (tool result) -33.8568, 151.2153
     9.72s  user  발화 시작: Yeah.
    10.22s  user  발화 끝
    16.35s  agent 발화 끝
    16.44s  user  발화 시작: That’s helpful. Could you find me hotels near there?
    19.90s  <ret> 발화 (turn4 첫 프레임)
    20.14s  agent 발화 시작: <ret> The Russell Hotel is three hundred meters away, Harbou
    20.15s  user  발화 끝
    21.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.50s]: (tool result) Circular Quay, Sydney (33.8569, 151.2154): The Russell H
    29.64s  agent 발화 끝
    30.30s  user  발화 시작: Hmm, what’s the Russell Hotel like?
    32.91s  <ret> 발화 (turn6 첫 프레임)
    32.98s  agent 발화 시작: <ret> The Russell Hotel is located at twenty-eight Pitt Stre
    33.21s  user  발화 끝
    34.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.10s]: (tool result) The Russell Hotel, 28 Pitt Street, Sydney NSW 2000, Aust
    45.09s  agent 발화 끝
    46.90s  user  발화 시작: Sounds nice. Is it possible to book a room there for next we
    51.19s  <ret> 발화 (turn8 첫 프레임)
    51.43s  agent 발화 시작: <ret> I’ve booked a deluxe room at The Russell Hotel for you
    51.57s  user  발화 끝
    52.79s  ⚡SPAN 주입 [d'=1.60s / d_lead=11.83s]: (tool result) The Russell Hotel, 2026-07-17 to 2026-07-21, Deluxe Room
    58.96s  user  발화 시작: Right.
    59.59s  user  발화 끝
    63.26s  agent 발화 끝
    64.41s  user  발화 시작: That’s great! –
    65.74s  user  발화 시작: …Actually, before you finalize that…
    65.79s  user  발화 끝
    68.42s  user  발화 끝
    70.30s  user  발화 시작: …can you check if they have parking?
    71.18s  user  발화 시작: Yeah.
    71.81s  user  발화 끝
    72.38s  <ret> 발화 (turn14 첫 프레임)
    72.61s  agent 발화 시작: <ret> —see if parking is available. I’m checking their ameni
    72.65s  user  발화 끝
    74.22s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.75s]: (tool result) The Russell Hotel, 28 Pitt Street, Sydney NSW 2000, Aust
    76.34s  agent 발화 시작: Yes, The Russell Hotel does offer valet parking for forty do
    76.36s  agent 발화 끝
    78.76s  user  발화 시작: Mhm.
    79.58s  user  발화 끝
    83.47s  agent 발화 끝
    83.80s  user  발화 시작: Yes, please add the parking.
    85.88s  <ret> 발화 (turn18 첫 프레임)
    86.28s  agent 발화 시작: <ret> Wonderful. I’ve added parking to your reservation. The
    86.38s  ⚡SPAN 주입 [d'=0.50s / d_lead=10.43s]: (tool result) The Russell Hotel, 2026-07-17 to 2026-07-21, Deluxe Room
    86.43s  user  발화 끝
    96.71s  agent 발화 끝
