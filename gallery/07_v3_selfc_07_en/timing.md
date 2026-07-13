# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Morgan",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     },
#     {
#       "date": "2025-08-23",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-22",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Can you get me two train tickets f | S2 Do you know when the earliest trai | S3 Hmm, that’s nice. | S4 That’s a little much.

     0.00s  user  발화 시작: Can you get me two train tickets from Los Angeles to San Fra
     6.58s  <ret> 발화 (turn1 첫 프레임)
     6.82s  agent 발화 시작: <ret> I’ve found two tickets for $187.50, departing at 8:00 
     6.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.10s]: (tool result) Los Angeles to San Francisco, April 5, 2026. Two adult t
     6.82s  user  발화 끝
    14.91s  user  발화 시작: Yeah, yeah.
    14.91s  agent 발화 끝
    15.77s  user  발화 시작: Oh, actually… San Diego, not San Francisco.
    15.77s  user  발화 끝
    18.59s  <ret> 발화 (turn4 첫 프레임)
    18.75s  agent 발화 시작: <ret> No problem at all. Two tickets to San Diego on April f
    18.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.80s]: (tool result) Los Angeles to San Diego, April 5, 2026. Two adult ticke
    18.75s  user  발화 끝
    28.55s  user  발화 시작: That sounds good.
    28.55s  agent 발화 끝
    29.83s  agent 발화 시작: It’s good to find something that works for you. Travel can b
    29.83s  user  발화 끝
    37.50s  user  발화 시작: Yeah.
    37.50s  agent 발화 끝
    37.92s  user  발화 시작: Do you know when the earliest train leaves Los Angeles for S
    37.92s  user  발화 끝
    43.38s  <ret> 발화 (turn9 첫 프레임)
    43.46s  agent 발화 시작: <ret> The earliest train leaves at 5:45 AM, arriving at 8:30
    43.46s  ⚡SPAN 주입 [d'=1.60s / d_lead=6.82s]: The earliest train from Los Angeles to San Diego departs at 5:45 AM, a
    43.46s  user  발화 끝
    50.28s  user  발화 시작: Wow.
    50.28s  agent 발화 끝
    50.70s  agent 발화 시작: It’s a lovely way to start the day, watching the coastline g
    50.70s  user  발화 끝
    58.80s  user  발화 시작: Yeah, yeah.
    58.80s  agent 발화 끝
    59.65s  user  발화 시작: What’s the weather like in San Diego on April fifth?
    59.65s  user  발화 끝
    63.51s  <ret> 발화 (turn14 첫 프레임)
    63.91s  agent 발화 시작: <ret> On April fifth, San Diego will be 21.1°C with 68% humi
    63.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.95s]: (tool result) San Diego, CA on April 5, 2026: 21.1°C, humidity 68%, wi
    63.91s  user  발화 끝
    72.86s  user  발화 시작: Okay.
    72.86s  agent 발화 끝
    73.29s  user  발화 시작: Hmm, that’s nice.
    73.29s  user  발화 끝
    74.56s  agent 발화 시작: It sounds like a beautiful day for a visit. Sometimes, just 
    74.56s  user  발화 끝
    81.81s  user  발화 시작: Mm-hmm.
    81.81s  agent 발화 끝
    82.23s  user  발화 시작: Could you find me some restaurants near the San Diego train 
    82.23s  user  발화 끝
    86.95s  <ret> 발화 (turn20 첫 프레임)
    87.35s  agent 발화 시작: <ret> The Prado is 0.8 km away, Juniper & Ivy is 1.6 km, and
    87.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.10s]: (tool result) The Prado at Balboa Park (0.8 km), Juniper & Ivy (1.6 km
    87.35s  user  발화 끝
    95.44s  user  발화 시작: Wow.
    95.44s  agent 발화 끝
    95.87s  user  발화 시작: Is The Prado expensive?
    95.87s  user  발화 끝
    97.33s  <ret> 발화 (turn23 첫 프레임)
    97.57s  agent 발화 시작: <ret> The Prado averages $35 per person. It’s known for Cali
    97.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.82s]: The Prado at Balboa Park has an average cost of $35 per person, offeri
    97.57s  user  발화 끝
   104.39s  user  발화 시작: Really?
   104.39s  agent 발화 끝
   104.82s  user  발화 시작: That’s a little much.
   104.82s  user  발화 끝
   106.52s  agent 발화 시작: It’s okay to look for options that fit your budget. Sometime
   106.52s  user  발화 끝
   113.34s  user  발화 시작: Are there any parks near the train station?
   113.34s  agent 발화 끝
   116.51s  <ret> 발화 (turn28 첫 프레임)
   116.75s  agent 발화 시작: <ret> Balboa Park is 1.6 km away. Waterfront Park is 3.2 km,
   116.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.24s]: (tool result) Balboa Park (1.6 km), Waterfront Park (3.2 km), Seaport 
   116.75s  user  발화 끝
   123.99s  agent 발화 끝
