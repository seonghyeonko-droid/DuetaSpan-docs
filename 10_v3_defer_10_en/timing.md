# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Nathan",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-04-02",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "home",
#       "text": "User's home address is 262 Cedar Lane."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-05-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Tell me about any music events hap | S2 That Kendrick Lamar concert sounds | S3 …what kind of music does he make? | S4 I’m thinking of going, but I have 

     0.00s  user  발화 시작: Tell me about any music events happening in Los Angeles toda
     4.03s  <ret> 발화 (turn1 첫 프레임)
     4.10s  agent 발화 시작: <ret> [happy] There are a couple of music events in Los Ange
     4.10s  user  발화 끝
     4.90s  ⚡SPAN 주입 [d'=0.86s / d_lead=10.82s]: (tool result) Event: "Kendrick Lamar: The Pop Out Tour" at Crypto.com 
    14.92s  user  발화 시작: That Kendrick Lamar concert sounds interesting. Uh…
    14.92s  agent 발화 끝
    17.53s  user  발화 시작: …what kind of music does he make?
    17.53s  user  발화 끝
    20.15s  agent 발화 시작: Kendrick Lamar is a really influential hip-hop artist, known
    20.15s  user  발화 끝
    29.85s  user  발화 시작: Yeah.
    29.85s  agent 발화 끝
    30.22s  user  발화 시작: I’m thinking of going, but I have a dentist appointment next
    30.22s  user  발화 끝
    36.56s  agent 발화 시작: [curious] That’s a tricky one. Buying now guarantees you a s
    36.56s  user  발화 끝
    52.23s  agent 발화 끝
