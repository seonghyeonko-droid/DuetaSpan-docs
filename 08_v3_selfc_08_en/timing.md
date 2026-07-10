# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Ivy",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-24",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-11-28",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-11-17",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-09",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 When does the Central… | S2 …Is it open right now? | S3 What’s the weather like there righ | S4 [sigh] Sounds lovely.

     0.00s  user  발화 시작: When does the Central…
     1.94s  user  발화 끝
     4.03s  user  발화 시작: …Park Zoo close today?
     5.76s  <ret> 발화 (turn2 첫 프레임)
     6.15s  agent 발화 시작: <ret> The Central Park Zoo closes at five thirty this evenin
     6.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.98s]: (tool result) Central Park Zoo - Closes 5:30 PM, Open until 5:30 PM · 
     6.20s  user  발화 끝
     9.44s  user  발화 시작: …Is it open right now?
    10.13s  agent 발화 끝
    11.19s  user  발화 끝
    11.24s  agent 발화 시작: Yes, it is currently open. It remains open until five thirty
    12.85s  user  발화 시작: Yeah.
    13.67s  user  발화 끝
    15.68s  agent 발화 시작: I find that knowing the hours allows for more peaceful plann
    15.74s  agent 발화 끝
    17.64s  user  발화 시작: Okay.
    18.46s  user  발화 끝
    19.10s  user  발화 시작: What’s the weather like there right now?
    19.52s  agent 발화 끝
    21.64s  <ret> 발화 (turn9 첫 프레임)
    21.79s  agent 발화 시작: <ret> The weather at the zoo is twenty-four point four degre
    21.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: (tool result) 24.4°C, humidity 65%, wind 8.0 km/h
    21.96s  user  발화 끝
    26.64s  user  발화 시작: Yeah.
    27.18s  user  발화 끝
    29.90s  agent 발화 끝
    29.95s  user  발화 시작: [sigh] Sounds lovely.
    32.07s  agent 발화 시작: It does, doesn’t it? A little sunshine can really lift the s
    32.34s  user  발화 끝
    35.91s  agent 발화 끝
