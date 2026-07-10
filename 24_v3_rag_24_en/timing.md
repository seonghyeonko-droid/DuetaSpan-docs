# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Morgan",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-10-01",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm trying to get my bearings here | S2 Hmm, I wonder if there are any int | S3 That sounds nice. Can I buy ticket | S4 Oh, okay. That's alright. Thanks, 

     0.00s  user  발화 시작: I'm trying to get my bearings here, just moved to Seoul.
     3.47s  user  발화 끝
     3.65s  agent 발화 시작: Settling into a new city can feel overwhelming at first, but
     8.55s  user  발화 시작: Yeah.
     9.05s  user  발화 끝
    10.92s  user  발화 시작: What's the current time?
    10.97s  agent 발화 끝
    12.30s  <ret> 발화 (turn4 첫 프레임)
    12.54s  user  발화 끝
    12.69s  agent 발화 시작: <ret> It's currently 2:33 PM in Seoul right now. A good time
    12.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.75s]: (tool result) It is Friday, July 10, 2026 at 2:33 PM in Asia/Seoul rig
    18.43s  agent 발화 끝
    18.61s  user  발화 시작: Hmm, I wonder if there are any interesting concerts happenin
    22.85s  <ret> 발화 (turn6 첫 프레임)
    23.08s  agent 발화 시작: <ret> There’s the Seoul Jazz Festival, May 15th through 17th
    23.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: (tool result) The Seoul Jazz Festival is scheduled for May 15-17, 2026
    23.14s  user  발화 끝
    25.86s  user  발화 시작: Yeah.
    26.36s  user  발화 끝
    27.27s  user  발화 시작: That sounds nice. Can I buy tickets for that?
    27.80s  agent 발화 끝
    30.66s  <ret> 발화 (turn9 첫 프레임)
    30.68s  user  발화 끝
    30.73s  agent 발화 시작: <ret> I’m sorry, I’m unable to purchase tickets for the Seou
    30.74s  ⚡SPAN 주입 [d'=0.96s / d_lead=7.65s]: (no information found)
    33.08s  user  발화 시작: Yeah.
    33.67s  user  발화 끝
    38.38s  agent 발화 끝
    38.41s  user  발화 시작: Oh, okay. That's alright. Thanks, Fraia.
    41.63s  agent 발화 시작: You’re very welcome! I’m happy to help with anything else as
    41.65s  user  발화 끝
    48.22s  agent 발화 끝
