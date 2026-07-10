# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Morgan",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-07",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "home",
#       "text": "User's home address is 223 Birch Road."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-06-02",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to update my email address  | S2 Um, actually, make that jane_smith | S3 Thanks. What's the weather like in | S4 That sounds nice. I’m thinking of 

     0.00s  user  발화 시작: I need to update my email address to jane.smith at email dot
     6.13s  <ret> 발화 (turn1 첫 프레임)
     6.52s  agent 발화 시작: <ret> Okay, I’ve updated your email address within the profi
     6.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.66s]: (tool result) Email updated to jane.smith@email.com.
     6.67s  user  발화 끝
    12.00s  user  발화 시작: Um, actually, make that jane_smith88 at email dot com.
    12.18s  agent 발화 끝
    16.81s  <ret> 발화 (turn3 첫 프레임)
    17.04s  agent 발화 시작: <ret> No problem at all! I’ve updated your email again, now 
    17.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.89s]: (tool result) Email updated to jane smith88@email.com.
    17.10s  user  발화 끝
    21.77s  user  발화 시작: Yeah, yeah.
    23.24s  user  발화 끝
    24.93s  agent 발화 끝
    25.74s  user  발화 시작: Thanks. What's the weather like in Seoul right now?
    28.87s  <ret> 발화 (turn6 첫 프레임)
    28.99s  agent 발화 시작: <ret> Well, it sounds lovely! It’s currently 28.0 degrees Ce
    29.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.90s]: (tool result) It is 28.0°C, humidity 68%, wind 7.2 km/h in Seoul.
    29.11s  user  발화 끝
    39.88s  agent 발화 끝
    40.15s  user  발화 시작: That sounds nice. I’m thinking of going for a walk.
    44.31s  user  발화 끝
    44.54s  agent 발화 시작: That's a wonderful idea!
    46.34s  agent 발화 끝
