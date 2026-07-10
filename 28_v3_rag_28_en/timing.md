# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Ruby",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-12",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "home",
#       "text": "User's home address is 910 Oak Avenue."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-11-01",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-14",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Jer, I'm trying to get settled  | S2 Qatar, huh? I didn't realize that. | S3 Wow, that's hot! I'm trying to fin | S4 Perfect! That sounds exactly like 

     0.00s  user  발화 시작: Hi Jer, I'm trying to get settled here. It's a bit overwhelm
     3.68s  agent 발화 시작: Oh, hello! Settling in *is* a lot, isn't it?
     3.70s  user  발화 끝
     7.09s  agent 발화 끝
     7.71s  user  발화 시작: Thanks. I was wondering, who hosted the World Cup in 2022?
    11.70s  <ret> 발화 (turn3 첫 프레임)
    11.87s  user  발화 끝
    12.10s  agent 발화 시작: <ret> The 2022 FIFA World Cup was hosted by Qatar — it was t
    12.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.77s]: The 2022 FIFA World Cup was hosted by Qatar, marking the first time th
    18.81s  user  발화 시작: Qatar, huh? I didn't realize that. What's the weather…
    18.86s  agent 발화 끝
    22.60s  user  발화 끝
    24.09s  user  발화 시작: …like there right now?
    24.91s  <ret> 발화 (turn6 첫 프레임)
    25.31s  agent 발화 시작: <ret> Right now in Qatar, it's 32.0 degrees Celsius, with 65
    25.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.57s]: (tool result) 32.0°C, humidity 65%, wind 8.9 km/h
    25.38s  user  발화 끝
    31.90s  user  발화 시작: Yeah.
    32.63s  user  발화 끝
    33.80s  user  발화 시작: Wow, that's hot! I'm trying to find a good restaurant nearby
    33.89s  agent 발화 끝
    37.45s  agent 발화 시작: Well, finding a good place to eat is a great way to feel mor
    37.50s  user  발화 끝
    40.59s  user  발화 시작: …do they have any places that serve Korean food?
    41.29s  agent 발화 끝
    42.97s  <ret> 발화 (turn11 첫 프레임)
    43.37s  agent 발화 시작: <ret> There’s Arirang Korean Restaurant, it has 4.5 stars an
    43.37s  ⚡SPAN 주입 [d'=1.28s / d_lead=7.08s]: (tool result) Arirang Korean Restaurant, 4.5 stars, 0.8km, $$
    43.46s  user  발화 끝
    47.42s  user  발화 시작: Yeah, yeah.
    48.98s  user  발화 끝
    50.45s  agent 발화 끝
    50.45s  user  발화 시작: Perfect! That sounds exactly like what I need. Thanks, Jer.
    54.08s  agent 발화 시작: You're very welcome! I'm glad I could help you find somethin
    54.15s  user  발화 끝
    60.85s  agent 발화 끝
