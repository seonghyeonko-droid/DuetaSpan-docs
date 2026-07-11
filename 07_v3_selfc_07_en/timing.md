# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Léa",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-22",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-06-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Set an alarm for twelve fifteen PM | S2 Find me a good Italian restaurant  | S3 …Actually, can you reserve a table | S4 Great. Remind me to leave at eight

     0.00s  user  발화 시작: Set an alarm for twelve fifteen PM.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.02s  agent 발화 시작: <ret> I’ve set an alarm for twelve fifteen PM, with ID nine 
     0.02s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Alarm set for 12:15 PM, ID 947283.
     0.02s  user  발화 끝
     0.07s  user  발화 시작: What’s the weather like in Busan tomorrow?
     0.07s  agent 발화 끝
     0.09s  agent 발화 시작: <ret> The weather in Busan tomorrow will be twenty-eight poi
     0.09s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) Busan: 28.5°C, humidity 68%, wind 7.2 km/h, partly cloud
     0.09s  user  발화 끝
     0.17s  <ret> 발화 (turn9 첫 프레임)
     0.19s  user  발화 시작: That sounds nice.
     0.19s  agent 발화 끝
     0.20s  agent 발화 시작: It does, doesn’t it? Sometimes a little sunshine can really 
     0.20s  user  발화 끝
     0.21s  <ret> 발화 (turn7 첫 프레임)
     0.21s  <ret> 발화 (turn13 첫 프레임)
     0.26s  user  발화 시작: Find me a good Italian restaurant near Seoul Station.
     0.26s  agent 발화 끝
     0.29s  agent 발화 시작: <ret> I found Bella Italia, an Italian restaurant four point
     0.29s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) Bella Italia: 4.5 stars, ₩25,000 average, 500m from Seou
     0.29s  user  발화 끝
     0.37s  <ret> 발화 (turn11 첫 프레임)
     0.38s  user  발화 시작: No, but can you check if it’s open right now?
     0.38s  agent 발화 끝
     0.41s  agent 발화 시작: <ret> Bella Italia is currently open and closes at ten PM to
     0.41s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) Bella Italia: currently open, closes 10:00 PM.
     0.41s  user  발화 끝
     0.47s  <ret> 발화 (turn15 첫 프레임)
     0.49s  user  발화 시작: …Actually, can you reserve a table for two there at eight o’
     0.49s  agent 발화 끝
     0.53s  agent 발화 시작: <ret> A table for two at Bella Italia is now reserved for ei
     0.53s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Reservation confirmed at Bella Italia, 8:00 PM, party of
     0.53s  user  발화 끝
     0.59s  user  발화 시작: Perfect. What movies are playing near there?
     0.59s  agent 발화 끝
     0.61s  agent 발화 시작: <ret> Currently playing near Seoul Station are "Oppenheimer"
     0.61s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) "Oppenheimer", "Barbie", "Mission: Impossible - Dead Rec
     0.61s  user  발화 끝
     0.68s  user  발화 시작: Get me tickets for Barbie at 8:30 PM.
     0.68s  agent 발화 끝
     0.71s  agent 발화 시작: <ret> Two tickets for "Barbie" at eight thirty PM at Seoul S
     0.71s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) 2 tickets for Barbie, 8:30 PM, Seoul Station, ₩30,000, c
     0.71s  user  발화 끝
     0.73s  <ret> 발화 (turn17 첫 프레임)
     0.78s  user  발화 시작: Great. Remind me to leave at eight fifteen.
     0.78s  agent 발화 끝
     0.81s  agent 발화 시작: <ret> I’ve added an alarm for eight fifteen PM, labeled “Lea
     0.81s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) Alarm set for 8:15 PM, label "Leave for Barbie", ID 7F5G
     0.81s  user  발화 끝
     0.90s  user  발화 시작: Thanks, Koraon.
     0.90s  agent 발화 끝
     0.91s  agent 발화 시작: You’re very welcome. It sounds like you have a lovely evenin
     0.91s  user  발화 끝
     1.00s  agent 발화 끝
