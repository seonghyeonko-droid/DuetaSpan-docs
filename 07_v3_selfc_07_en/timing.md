# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Casey",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-11-22",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2025-08-05",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-07-11",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'd like to book an appointment wi | S2 …like then? | S3 That sounds good. | S4 Oh, that sounds perfect. Can you m

     0.00s  user  발화 시작: I'd like to book an appointment with Kevin Lee on January tw
     6.85s  <ret> 발화 (turn1 첫 프레임)
     7.09s  agent 발화 시작: <ret> Wonderful! Your appointment with Kevin Lee is schedule
     7.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.41s]: (tool result) Appointment with Kevin Lee confirmed for January 20, 202
     7.09s  user  발화 끝
    19.50s  user  발화 시작: That sounds great. What's the weather going to be…
    19.50s  agent 발화 끝
    23.49s  user  발화 시작: …like then?
    23.49s  user  발화 끝
    24.21s  <ret> 발화 (turn4 첫 프레임)
    24.37s  agent 발화 시작: <ret> On January twentieth, 2026, expect 2.5 degrees Celsius
    24.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.08s]: (tool result) The weather on January 20, 2026 will be 2.5°C, humidity 
    24.37s  user  발화 끝
    35.45s  user  발화 시작: Exactly.
    35.45s  agent 발화 끝
    35.89s  user  발화 시작: Hmm, snow… is there a good movie playing around then?
    35.89s  user  발화 끝
    40.08s  <ret> 발화 (turn7 첫 프레임)
    40.32s  agent 발화 시작: <ret> "The Stellar Frontier" is showing at Cineplex Odeon on
    40.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.64s]: (tool result) "The Stellar Frontier" is playing at Cineplex Odeon on J
    40.32s  user  발화 끝
    50.96s  user  발화 시작: Right.
    50.96s  agent 발화 끝
    51.40s  user  발화 시작: That sounds good.
    51.40s  user  발화 끝
    52.73s  agent 발화 시작: It's a great way to relax and recharge, allowing yourself—
    52.73s  user  발화 끝
    57.16s  user  발화 시작: …Actually, can you find me restaurants near Cineplex Odeon?
    57.16s  agent 발화 끝
    60.99s  <ret> 발화 (turn12 첫 프레임)
    61.15s  agent 발화 시작: <ret> "Spice Route," an Indian restaurant, is 0.8 kilometers
    61.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.96s]: (tool result) "Spice Route" is a highly-rated Indian restaurant 0.8 km
    61.15s  user  발화 끝
    73.12s  user  발화 시작: Mm-hmm.
    73.12s  agent 발화 끝
    73.56s  user  발화 시작: Oh, that sounds perfect. Can you make a reservation there fo
    73.56s  user  발화 끝
    79.81s  <ret> 발화 (turn15 첫 프레임)
    80.21s  agent 발화 시작: <ret> Excellent! A table for two at Spice Route is confirmed
    80.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.19s]: (tool result) Reservation at Spice Route confirmed for two people on J
    80.21s  user  발화 끝
    90.40s  user  발화 시작: Wonderful. Thank you so much for your help!
    90.40s  agent 발화 끝
    93.94s  agent 발화 시작: You're very welcome! I'm glad I could help you plan a relaxi
    93.94s  user  발화 끝
   104.13s  agent 발화 끝
