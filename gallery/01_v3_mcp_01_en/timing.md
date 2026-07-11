# v3_mcp_01_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Zoe",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-23",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "home",
#       "text": "User's home address is 150 Pine Court."
#     },
#     {
#       "date": "2025-08-22",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-29",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 How long would a road trip be from | S2 That sounds pretty good. Can you c | S3 Okay, now back to that hotel. Can  | S4 I think so too. One last thing…

     0.00s  user  발화 시작: How long would a road trip be from Hangzhou to Xi'an?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.03s  agent 발화 시작: <ret> A road trip from Hangzhou to Xi'an is about eleven hun
     0.03s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) {"distance": "1161.3 km", "duration": "13 hr 37 min"}
     0.03s  user  발화 끝
     0.07s  <ret> 발화 (turn10 첫 프레임)
     0.11s  user  발화 시작: Wow, that's a long drive. Is there anything interesting to s
     0.11s  agent 발화 끝
     0.15s  agent 발화 시작: That is quite a distance, yes. It's good to plan some stops 
     0.15s  user  발화 끝
     0.20s  <ret> 발화 (turn6 첫 프레임)
     0.23s  user  발화 시작: Uh-huh.
     0.23s  agent 발화 끝
     0.23s  user  발화 시작: Actually, before we plan stops, could you find hotels in Zhe
     0.23s  user  발화 끝
     0.28s  agent 발화 시작: <ret> The Hyatt Regency Zhengzhou is available, located at N
     0.28s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) {"hotel name": "Hyatt Regency Zhengzhou", "address": "No
     0.28s  user  발화 끝
     0.29s  <ret> 발화 (turn15 첫 프레임)
     0.35s  user  발화 시작: That sounds pretty good. Can you check if they have availabi
     0.35s  agent 발화 끝
     0.39s  agent 발화 시작: Let me check availability for next Saturday, July 18th, at t
     0.39s  user  발화 끝
     0.43s  user  발화 시작: …Actually, forget the hotel for now. What's the weather fore
     0.43s  agent 발화 끝
     0.47s  agent 발화 시작: <ret> Next Saturday in Xi'an, July eighteenth, will be sunny
     0.47s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) {"temperature": "32.5°C", "humidity": "65%", "wind speed
     0.47s  user  발화 끝
     0.56s  user  발화 시작: Uh-huh.
     0.56s  agent 발화 끝
     0.57s  agent 발화 시작: It does sound pleasant! A bit warm, perhaps, but ideal for e
     0.57s  user  발화 끝
     0.64s  user  발화 시작: Right.
     0.64s  agent 발화 끝
     0.64s  user  발화 시작: Okay, now back to that hotel. Can you reserve a room at the 
     0.64s  user  발화 끝
     0.69s  agent 발화 시작: <ret> Your room at the Hyatt Regency Zhengzhou is reserved f
     0.69s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) {"confirmation number": "ZXH78945", "check in date": "20
     0.69s  user  발화 끝
     0.76s  user  발화 시작: Oh.
     0.76s  agent 발화 끝
     0.77s  user  발화 시작: Great! That's perfect. Thanks for your help with everything.
     0.77s  user  발화 끝
     0.79s  agent 발화 시작: You're very welcome. I'm glad I could help you get everythin
     0.79s  user  발화 끝
     0.85s  user  발화 시작: I think so too. One last thing…
     0.85s  agent 발화 끝
     0.87s  user  발화 시작: …can you remind me what the drive time is again?
     0.87s  user  발화 끝
     0.90s  agent 발화 시작: The drive from Hangzhou to Xi'an is approximately thirteen h
     0.90s  user  발화 끝
     0.96s  agent 발화 시작: Don’t forget to factor in time for breaks and exploring alon
     0.96s  agent 발화 끝
     1.00s  agent 발화 끝
