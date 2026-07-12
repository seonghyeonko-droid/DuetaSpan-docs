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
     2.66s  <ret> 발화 (turn1 첫 프레임)
     2.90s  agent 발화 시작: <ret> I’ve set an alarm for twelve fifteen PM, with ID nine 
     2.90s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.93s]: (tool result) Alarm set for 12:15 PM, ID 947283.
     2.95s  user  발화 끝
     8.83s  agent 발화 끝
     9.20s  user  발화 시작: What’s the weather like in Busan tomorrow?
    11.67s  <ret> 발화 (turn3 첫 프레임)
    11.69s  user  발화 끝
    11.82s  agent 발화 시작: <ret> The weather in Busan tomorrow will be twenty-eight poi
    11.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.99s]: (tool result) Busan: 28.5°C, humidity 68%, wind 7.2 km/h, partly cloud
    22.69s  user  발화 시작: That sounds nice.
    22.81s  agent 발화 끝
    23.73s  agent 발화 시작: It does, doesn’t it? Sometimes a little sunshine can really 
    23.88s  user  발화 끝
    30.95s  user  발화 시작: Find me a good Italian restaurant near Seoul Station.
    31.09s  agent 발화 끝
    33.98s  <ret> 발화 (turn7 첫 프레임)
    34.06s  agent 발화 시작: <ret> I found Bella Italia, an Italian restaurant four point
    34.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.25s]: (tool result) Bella Italia: 4.5 stars, ₩25,000 average, 500m from Seou
    34.09s  user  발화 끝
    46.31s  agent 발화 끝
    46.37s  user  발화 시작: No, but can you check if it’s open right now?
    49.13s  <ret> 발화 (turn9 첫 프레임)
    49.19s  user  발화 끝
    49.29s  agent 발화 시작: <ret> Bella Italia is currently open and closes at ten PM to
    49.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.65s]: (tool result) Bella Italia: currently open, closes 10:00 PM.
    58.10s  user  발화 시작: …Actually, can you reserve a table for two there at eight o’
    58.94s  agent 발화 끝
    61.04s  <ret> 발화 (turn11 첫 프레임)
    61.44s  agent 발화 시작: <ret> A table for two at Bella Italia is now reserved for ei
    61.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.56s]: (tool result) Reservation confirmed at Bella Italia, 8:00 PM, party of
    61.48s  user  발화 끝
    68.91s  user  발화 시작: Perfect. What movies are playing near there?
    69.00s  agent 발화 끝
    71.24s  <ret> 발화 (turn13 첫 프레임)
    71.47s  agent 발화 시작: <ret> Currently playing near Seoul Station are "Oppenheimer"
    71.48s  ⚡SPAN 주입 [d'=1.36s / d_lead=9.64s]: (tool result) "Oppenheimer", "Barbie", "Mission: Impossible - Dead Rec
    71.59s  user  발화 끝
    80.92s  user  발화 시작: Get me tickets for Barbie at 8:30 PM.
    81.11s  agent 발화 끝
    83.48s  <ret> 발화 (turn15 첫 프레임)
    83.64s  agent 발화 시작: <ret> Two tickets for "Barbie" at eight thirty PM at Seoul S
    83.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.73s]: (tool result) 2 tickets for Barbie, 8:30 PM, Seoul Station, ₩30,000, c
    83.73s  user  발화 끝
    93.37s  agent 발화 끝
    95.13s  user  발화 시작: Great. Remind me to leave at eight fifteen.
    97.71s  <ret> 발화 (turn17 첫 프레임)
    98.03s  agent 발화 시작: <ret> I’ve added an alarm for eight fifteen PM, labeled “Lea
    98.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.01s]: (tool result) Alarm set for 8:15 PM, label "Leave for Barbie", ID 7F5G
    98.17s  user  발화 끝
   110.04s  agent 발화 끝
   110.08s  user  발화 시작: Thanks, Koraon.
   110.90s  user  발화 끝
   111.00s  agent 발화 시작: You’re very welcome. It sounds like you have a lovely evenin
   120.74s  agent 발화 끝
