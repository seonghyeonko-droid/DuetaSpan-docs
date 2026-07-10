# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Riley",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-19",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2025-10-23",
#       "category": "home",
#       "text": "User's home address is 980 Birch Road."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-08",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-02-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who played Neville’s w | S2 Uh, what's the weather like in Man | S3 Did you pack an umbrella? | S4 That's good to know, thank you.

     0.00s  user  발화 시작: Do you know who played Neville’s wife in *Auf Wiedersehen, P
     2.94s  <ret> 발화 (turn1 첫 프레임)
     3.33s  agent 발화 시작: <ret> Well, it seems Julia Tobin brought Moira, Neville’s wi
     3.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.54s]: Julia Tobin played Neville’s wife, Moira, in the first two series of t
     3.38s  user  발화 끝
     6.51s  user  발화 시작: Uh-huh.
     7.06s  user  발화 끝
    12.87s  agent 발화 끝
    12.90s  user  발화 시작: Oh, right. I remember now.
    14.26s  agent 발화 시작: Sometimes a familiar face just needs a little nudge to come 
    14.38s  user  발화 끝
    17.24s  user  발화 시작: Yeah.
    17.69s  user  발화 끝
    21.02s  agent 발화 끝
    21.16s  user  발화 시작: Uh, what's the weather like in Manchester today?
    23.17s  <ret> 발화 (turn7 첫 프레임)
    23.40s  agent 발화 시작: <ret> The weather in Manchester is currently nineteen degree
    23.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.65s]: (tool result) Manchester: 19.0°C, humidity 68%, wind 8.0 km/h, conditi
    23.56s  user  발화 끝
    31.04s  agent 발화 끝
    31.36s  user  발화 시작: Did you pack an umbrella?
    32.66s  user  발화 시작: That's good to know, thank you.
    32.69s  user  발화 끝
    34.30s  agent 발화 시작: I'm glad I could share that with you. Sometimes, simply know
    34.32s  user  발화 끝
    41.48s  agent 발화 끝
