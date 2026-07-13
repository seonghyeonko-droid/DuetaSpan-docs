# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Morgan",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-07",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 How long is the bus ride from… | S2 Wow, that's a long ride. | S3 Hmm, maybe. Actually, first, what' | S4 That's good to know. I think I'll 

     0.00s  user  발화 시작: How long is the bus ride from…
     2.49s  user  발화 시작: …Los Angeles to San Francisco on March twenty-second?
     2.49s  user  발화 끝
     5.27s  <ret> 발화 (turn2 첫 프레임)
     5.34s  agent 발화 시작: <ret> The bus ride from Los Angeles to San Francisco on Marc
     5.34s  user  발화 끝
     6.13s  ⚡SPAN 주입 [d'=0.86s / d_lead=11.04s]: (tool result) Duration: 8 hours 15 minutes, Price: $75.00 - $120.00, D
    16.38s  user  발화 시작: Wow, that's a long ride.
    16.38s  agent 발화 끝
    18.16s  agent 발화 시작: It is a bit of a journey, yes. Perhaps we could look at flig
    18.16s  user  발화 끝
    26.00s  user  발화 시작: Mm-hmm.
    26.00s  agent 발화 끝
    26.35s  user  발화 시작: Hmm, maybe. Actually, first, what's the weather like in San 
    26.35s  user  발화 끝
    30.45s  <ret> 발화 (turn7 첫 프레임)
    30.98s  agent 발화 시작: <ret> Currently in San Francisco, it's eighteen point three 
    30.98s  user  발화 끝
    31.95s  ⚡SPAN 주입 [d'=1.50s / d_lead=9.62s]: (tool result) Current conditions: 18.3°C, humidity 62%, wind 8.2 km/h,
    40.60s  user  발화 시작: Yeah.
    40.60s  agent 발화 끝
    40.96s  agent 발화 시작: It sounds quite pleasant, actually. I hope that helps with y
    40.96s  user  발화 끝
    45.23s  user  발화 시작: That's good to know. I think I'll stick with the bus for now
    45.23s  agent 발화 끝
    49.86s  agent 발화 시작: That’s perfectly alright. Sometimes the journey itself is pa
    49.86s  user  발화 끝
    57.70s  agent 발화 끝
