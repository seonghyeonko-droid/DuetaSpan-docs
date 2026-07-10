# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Kim",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-07",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-07-03",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-06-05",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-20",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering about chamber | S2 Oh, uh, tell me more about a speci | S3 What did they win for, exactly? | S4 That sounds… intense.

     0.00s  user  발화 시작: I was just wondering about chamber music… any interesting st
     4.35s  user  발화 끝
     4.41s  agent 발화 시작: Chamber music has a fascinating history, really! It blossome
    12.49s  user  발화 시작: Oh, uh, tell me more about a specific group?
    12.52s  agent 발화 끝
    14.55s  <ret> 발화 (turn3 첫 프레임)
    14.93s  user  발화 끝
    14.94s  agent 발화 시작: <ret> Joh Bruce Yeh founded a chamber ensemble, and they act
    14.95s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.57s]: Joh Bruce Yeh founded the Chamber Music Society of Lincoln Center and 
    18.13s  user  발화 시작: Mm-hmm.
    18.62s  user  발화 끝
    21.52s  agent 발화 끝
    21.77s  user  발화 시작: What did they win for, exactly?
    23.44s  <ret> 발화 (turn6 첫 프레임)
    23.51s  agent 발화 시작: <ret> They received the award for their recording of a work 
    23.52s  ⚡SPAN 주입 [d'=1.28s / d_lead=7.56s]: The Chamber Music Society of Lincoln Center won the Grammy for Best Ch
    23.70s  user  발화 끝
    28.01s  user  발화 시작: Yeah.
    28.69s  user  발화 끝
    31.07s  agent 발화 끝
    32.61s  user  발화 시작: That sounds… intense.
    34.35s  user  발화 끝
    34.57s  agent 발화 시작: It is a story with a lot of drama, certainly. Perhaps explor
    41.70s  agent 발화 끝
