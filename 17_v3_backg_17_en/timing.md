# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Caleb",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-06",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Nellana, do you know how many  | S2 Um, I'm trying to get motivated to | S3 That… actually sounds really helpf | S4 Did you hear about the traffic on 

     0.00s  user  발화 시작: Hey Nellana, do you know how many episodes are in the first 
     4.69s  <ret> 발화 (turn1 첫 프레임)
     4.99s  ⚡SPAN 주입 [d'=0.30s / d_lead=8.57s]: The first season of Jack Ryan consists of eight episodes, each approxi
     5.27s  agent 발화 시작: <ret> The first season of Jack Ryan has eight episodes, each
     5.27s  user  발화 끝
    13.84s  user  발화 시작: Oh, okay. That’s good to know.
    13.84s  agent 발화 끝
    15.81s  agent 발화 시작: I’m glad I could help!
    15.81s  user  발화 끝
    17.46s  user  발화 시작: Um, I'm trying to get motivated to study for my history exam
    17.46s  agent 발화 끝
    22.40s  agent 발화 시작: Mm-hmm.
    22.40s  user  발화 끝
    22.73s  agent 발화 시작: [curious] History can be daunting, but breaking it down can 
    22.73s  agent 발화 끝
    29.32s  user  발화 시작: Uh-huh.
    29.32s  agent 발화 끝
    29.65s  agent 발화 시작: It involves working in focused 25-minute bursts, followed by
    29.65s  user  발화 끝
    36.57s  user  발화 시작: That… actually sounds really helpful.
    36.57s  agent 발화 끝
    38.22s  agent 발화 시작: [happy] Wonderful! It’s all about finding what works best fo
    38.22s  user  발화 끝
    44.81s  user  발화 시작: Yeah, totally.
    44.81s  agent 발화 끝
    45.47s  user  발화 시작: Did you hear about the traffic on Elm Street? It’s a nightma
    45.47s  user  발화 끝
    49.42s  agent 발화 시작: Uh-huh.
    49.42s  user  발화 끝
    49.75s  agent 발화 시작: And remember, small steps add up to big progress. Don't try 
    49.75s  agent 발화 끝
    55.02s  agent 발화 끝
