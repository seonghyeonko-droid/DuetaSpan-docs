# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "Louis",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-28",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-03-29",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-05-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm craving pizza. What's around t | S2 …negative one hundred eighteen poi | S3 Uh, is Doughy Joe's open right now | S4 Can you get me directions there?

     0.00s  user  발화 시작: I'm craving pizza. What's around thirty-four point zero five
     5.33s  user  발화 끝
     6.69s  user  발화 시작: …negative one hundred eighteen point two four three seven?
    10.10s  <ret> 발화 (turn2 첫 프레임)
    10.32s  agent 발화 시작: <ret> There are a couple of options nearby. Doughy Joe's Piz
    10.34s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.00s]: (tool result) {"results": [{"name": "Doughy Joe's Pizza", "address": "
    10.44s  user  발화 끝
    13.75s  user  발화 시작: Uh-huh.
    14.24s  user  발화 끝
    15.10s  user  발화 시작: Uh, is Doughy Joe's open right now?
    15.32s  agent 발화 끝
    16.83s  <ret> 발화 (turn5 첫 프레임)
    17.22s  agent 발화 시작: <ret> Let me check their current hours for you.
    17.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.54s]: (tool result) {"name": "Doughy Joe's Pizza", "address": "725 S Spring 
    17.41s  user  발화 끝
    19.76s  agent 발화 시작: Yes, Doughy Joe’s is currently open, from eleven AM to ten P
    19.77s  agent 발화 끝
    22.56s  user  발화 시작: Mm-hmm.
    23.15s  user  발화 끝
    26.11s  agent 발화 끝
    26.11s  agent 발화 시작: It’s good to know you have options when a craving strikes. S
    28.19s  user  발화 시작: Yeah.
    28.69s  user  발화 끝
    32.13s  user  발화 시작: Can you get me directions there?
    32.13s  agent 발화 끝
    33.57s  <ret> 발화 (turn11 첫 프레임)
    33.88s  agent 발화 시작: <ret> The drive to Doughy Joe’s is two point one miles and s
    33.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.28s]: (tool result) {"distance": "2.1 mi", "duration": "8 min", "route": "He
    33.93s  user  발화 끝
    41.16s  agent 발화 끝
