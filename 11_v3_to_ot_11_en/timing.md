# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Elena",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-11-03",
#       "category": "home",
#       "text": "User's home address is 203 Elm Street."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-11-27",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-11-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Who is the big prime minister or p | S2 I see. What’s the weather like in  | S3 Sorry about that. Can you find me  | S4 Perfect, thank you.

     0.00s  user  발화 시작: Who is the big prime minister or president in India?
     3.80s  <ret> 발화 (turn1 첫 프레임)
     4.13s  agent 발화 시작: <ret> India’s fourteenth president was Ram Nath Kovind, serv
     4.13s  user  발화 끝
     4.46s  ⚡SPAN 주입 [d'=0.66s / d_lead=8.27s]: Ram Nath Kovind served as the 14th President of India from 2017 to 202
    12.40s  user  발화 시작: Oh, okay. And who is the current one then?
    12.40s  agent 발화 끝
    15.93s  <ret> 발화 (turn3 첫 프레임)
    16.12s  agent 발화 시작: <ret> The current president is Droupadi Murmu, who took offi
    16.12s  user  발화 끝
    16.23s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.86s]: Droupadi Murmu is the current and fifteenth President of India, assumi
    23.98s  user  발화 시작: Right. Um, what about the prime minister?
    23.98s  agent 발화 끝
    26.87s  agent 발화 시작: The current prime minister of India is Narendra Modi. He’s b
    26.87s  user  발화 끝
    33.07s  user  발화 시작: Yeah.
    33.07s  agent 발화 끝
    33.49s  agent 발화 시작: Focusing on current events is a healthy way to stay informed
    33.49s  user  발화 끝
    38.04s  user  발화 시작: I see. What’s the weather like in New Delhi right now?
    38.04s  agent 발화 끝
    42.15s  <ret> 발화 (turn9 첫 프레임)
    42.58s  agent 발화 시작: <ret> Right now in New Delhi, it’s 32.0 degrees Celsius, wit
    42.58s  user  발화 끝
    42.86s  ⚡SPAN 주입 [d'=0.71s / d_lead=9.51s]: (tool result) Current conditions in New Delhi are 32.0°C, humidity 58%
    52.09s  user  발화 시작: Yeah, totally.
    52.09s  agent 발화 끝
    52.92s  user  발화 시작: Did you hear that? It’s almost 33 degrees!
    52.92s  user  발화 끝
    56.23s  user  발화 시작: Sorry about that. Can you find me some good Indian restauran
    56.23s  user  발화 끝
    60.95s  <ret> 발화 (turn13 첫 프레임)
    61.13s  ⚡SPAN 주입 [d'=1.24s / d_lead=7.86s]: (tool result) Taj Mahal Restaurant: 4.5 stars, 0.5 km. Spice Route: 4.
    61.19s  agent 발화 시작: <ret> Taj Mahal Restaurant is 4.5 stars and 0.5 kilometers a
    61.19s  user  발화 끝
    69.04s  user  발화 시작: Taj Mahal sounds good. Can you reserve a table for two there
    69.04s  agent 발화 끝
    74.21s  <ret> 발화 (turn15 첫 프레임)
    74.42s  agent 발화 시작: <ret> A table for two at Taj Mahal Restaurant is confirmed f
    74.42s  user  발화 끝
    74.51s  ⚡SPAN 주입 [d'=0.30s / d_lead=8.27s]: (tool result) Reservation confirmed for 2 people at Taj Mahal Restaura
    82.69s  user  발화 시작: Perfect, thank you.
    82.69s  agent 발화 끝
    83.93s  agent 발화 시작: You’re very welcome. It's excellent to plan a nice evening.
    83.93s  user  발화 끝
    88.06s  user  발화 시작: Actually, what time is sunset today?
    88.06s  agent 발화 끝
    90.21s  <ret> 발화 (turn19 첫 프레임)
    90.54s  agent 발화 시작: <ret> It's currently 3:58 PM, and sunset will be at 8:15 PM 
    90.54s  user  발화 끝
    91.21s  ⚡SPAN 주입 [d'=1.00s / d_lead=8.27s]: (tool result) It is Friday, July 10, 2026 at 3:58 PM in Asia/Seoul rig
    98.81s  agent 발화 끝
