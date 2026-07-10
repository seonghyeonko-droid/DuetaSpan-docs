# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Jordan",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-22",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-11-23",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-11-08",
#       "category": "home",
#       "text": "User's home address is 218 Elm Street."
#     },
#     {
#       "date": "2025-10-05",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m trying to remember which film  | S2 Documentary… hmm, is there anythin | S3 That’s interesting! What was… | S4 …*Call Me Kuchu* about?

     0.00s  user  발화 시작: I’m trying to remember which film categories both *Call Me K
     5.01s  <ret> 발화 (turn1 첫 프레임)
     5.25s  agent 발화 시작: <ret> Both films are actually categorized as documentary fil
     5.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.36s]: Both *Call Me Kuchu* and *That's Dancing!* are categorized as document
     5.32s  user  발화 끝
    10.27s  user  발화 시작: Yeah.
    10.82s  user  발화 끝
    12.61s  agent 발화 끝
    12.70s  user  발화 시작: Documentary… hmm, is there anything else they have in common
    16.24s  <ret> 발화 (turn4 첫 프레임)
    16.32s  agent 발화 시작: <ret> They both have a connection to the Sundance Film Festi
    16.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.92s]: *Call Me Kuchu* premiered at the 2012 Sundance Film Festival, and *Tha
    16.49s  user  발화 끝
    28.24s  agent 발화 끝
    28.46s  user  발화 시작: That’s interesting! What was…
    31.00s  user  발화 끝
    32.71s  user  발화 시작: …*Call Me Kuchu* about?
    34.39s  <ret> 발화 (turn7 첫 프레임)
    34.46s  agent 발화 시작: <ret> *Call Me Kuchu* is a documentary from 2012, directed b
    34.47s  ⚡SPAN 주입 [d'=1.68s / d_lead=15.95s]: *Call Me Kuchu* is a 2012 American documentary film directed by Kather
    34.55s  user  발화 끝
    50.41s  agent 발화 끝
