# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "Rowan",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-24",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "home",
#       "text": "User's home address is 797 Oak Avenue."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-23",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’d like one ticket to The Lion… | S2 And, uh, is it far from the Hollyw | S3 That sounds good. What time does i | S4 What about getting a ride from my 

     0.00s  user  발화 시작: I’d like one ticket to The Lion…
     2.59s  user  발화 끝
     3.71s  user  발화 시작: …King on May first in Los Angeles.
     6.69s  <ret> 발화 (turn2 첫 프레임)
     6.77s  agent 발화 시작: <ret> Wonderful! I’ve secured one ticket to The Lion King fo
     6.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.56s]: (tool result) Confirmation: LIONKING-LA-20260501-001
     6.84s  user  발화 끝
    15.99s  user  발화 시작: Exactly.
    17.09s  user  발화 끝
    19.12s  user  발화 시작: That’s great. Um, what’s the weather like there that day?
    19.34s  agent 발화 끝
    22.46s  <ret> 발화 (turn5 첫 프레임)
    22.70s  agent 발화 시작: <ret> It looks like Los Angeles will be quite pleasant on Ma
    22.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.16s]: The weather forecast for Los Angeles on May 1st, 2026 is 24.0°C, humid
    22.73s  user  발화 끝
    26.42s  user  발화 시작: Wow.
    27.37s  user  발화 끝
    28.86s  agent 발화 끝
    28.91s  user  발화 시작: And, uh, is it far from the Hollywood Bowl?
    32.29s  <ret> 발화 (turn8 첫 프레임)
    32.37s  agent 발화 시작: <ret> The Lion King’s theater is about 8.7 kilometers from t
    32.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: The distance between The Lion King’s location in Los Angeles and the H
    32.56s  user  발화 끝
    39.09s  agent 발화 끝
    39.75s  user  발화 시작: Can you find me a restaurant near the theater? — I’m thinkin
    43.73s  <ret> 발화 (turn10 첫 프레임)
    43.98s  agent 발화 시작: <ret> I found Musso & Frank Grill, an Italian restaurant jus
    43.98s  ⚡SPAN 주입 [d'=1.60s / d_lead=8.21s]: Musso & Frank Grill is an Italian restaurant located 1.6 km from The L
    44.01s  user  발화 끝
    47.34s  user  발화 시작: Mhm.
    48.02s  user  발화 끝
    52.18s  agent 발화 끝
    53.58s  user  발화 시작: That sounds good. What time does it open?
    56.03s  <ret> 발화 (turn13 첫 프레임)
    56.27s  agent 발화 시작: <ret> Musso & Frank Grill opens at 11:00 AM on May first—ple
    56.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: Musso & Frank Grill opens at 11:00 AM on May 1st, 2026.
    56.31s  user  발화 끝
    62.11s  agent 발화 끝
    63.58s  user  발화 시작: Okay. Can you get me directions from the restaurant to the t
    67.32s  <ret> 발화 (turn15 첫 프레임)
    67.60s  user  발화 끝
    67.64s  agent 발화 시작: <ret> It’s 1.6 kilometers via Cahuenga Boulevard, taking abo
    67.64s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.05s]: (tool result) Directions: 1.6 km via Cahuenga Blvd, approx. 7 min.
    72.56s  agent 발화 시작: I’m happy to help you plan a smooth evening.
    72.69s  agent 발화 끝
    75.02s  user  발화 시작: That’s really helpful, thank you.
    75.15s  agent 발화 끝
    77.09s  user  발화 끝
    77.56s  agent 발화 시작: You're very welcome! It’s my pleasure to help you settle in 
    79.27s  user  발화 시작: Yeah.
    79.99s  user  발화 끝
    82.55s  agent 발화 끝
    82.61s  user  발화 시작: What about getting a ride from my hotel? It’s the Beverly Hi
    86.95s  <ret> 발화 (turn21 첫 프레임)
    87.18s  agent 발화 시작: <ret> A ride from the Beverly Hills Hotel to the theater is 
    87.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.44s]: (tool result) Ride estimate: $25.50, ETA 15 min.
    87.33s  user  발화 끝
    95.62s  agent 발화 끝
    95.97s  user  발화 시작: Okay, book that for me, please.
    97.54s  <ret> 발화 (turn23 첫 프레임)
    97.94s  agent 발화 시작: <ret> Your ride is confirmed—the code is BH-LK-20260501-R12.
    97.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: (tool result) Ride confirmed: BH-LK-20260501-R12
    98.05s  user  발화 끝
   104.66s  agent 발화 끝
