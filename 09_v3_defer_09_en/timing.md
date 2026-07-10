# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "Lena",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-22",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-11-17",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-10-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-20",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-18",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-30",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What’s the weather like in Seoul r | S2 That sounds nice. I’m really strug | S3 …Do you have any tips for time man | S4 That would be amazing, actually. C

     0.00s  user  발화 시작: What’s the weather like in Seoul right now?
     2.03s  <ret> 발화 (turn1 첫 프레임)
     2.21s  user  발화 끝
     2.27s  agent 발화 시작: <ret> It’s currently 23.0 degrees Celsius in Seoul, with sev
     2.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.34s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    14.46s  user  발화 시작: That sounds nice. I’m really struggling to focus on my studi
    14.61s  agent 발화 끝
    18.30s  agent 발화 시작: It’s completely normal to feel that way sometimes. Studying 
    18.35s  user  발화 끝
    21.51s  user  발화 시작: Uh-huh.
    22.01s  user  발화 끝
    26.22s  agent 발화 시작: I find that breaking down large tasks into smaller, more man
    26.27s  agent 발화 끝
    30.98s  user  발화 시작: …Do you have any tips for time management?
    31.68s  agent 발화 끝
    32.77s  <ret> 발화 (turn7 첫 프레임)
    33.10s  user  발화 끝
    33.17s  agent 발화 시작: <ret> Prioritization and scheduling are really vital for man
    33.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.55s]: Prioritization and scheduling are vital components of effective time m
    36.67s  user  발화 시작: Yeah.
    37.16s  user  발화 끝
    44.70s  user  발화 시작: That would be amazing, actually. Can you find me some study 
    44.72s  agent 발화 끝
    48.23s  <ret> 발화 (turn10 첫 프레임)
    48.47s  agent 발화 시작: <ret> There’s Cafe Flow, 2.1 kilometers away, Study Hub at 1
    48.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.34s]: (tool result) Cafe Flow - 2.1km, Study Hub - 1.8km, Book & Bean - 3.5k
    48.63s  user  발화 끝
    60.81s  agent 발화 끝
