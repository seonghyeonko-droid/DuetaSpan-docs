# v3_mcp_01_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Liam",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-16",
#       "category": "home",
#       "text": "User's home address is 75 Birch Road."
#     },
#     {
#       "date": "2025-11-12",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-11-01",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-06-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-12",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-20",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 How many tokens did… | S2 Um, can you show me the search res | S3 Actually, book me a table at Bella | S4 Great. Thanks, Thel.

     0.00s  user  발화 시작: How many tokens did…
     1.75s  user  발화 끝
     3.35s  user  발화 시작: …session F three consume?
     5.56s  <ret> 발화 (turn2 첫 프레임)
     5.61s  user  발화 끝
     5.64s  agent 발화 시작: <ret> That session used fourteen thousand eight hundred seve
     5.64s  ⚡SPAN 주입 [d'=1.60s / d_lead=7.83s]: (tool result) Session F3 consumed 14,872 tokens.
    13.47s  agent 발화 끝
    14.37s  user  발화 시작: Um, can you show me the search results for "best Italian res
    18.02s  <ret> 발화 (turn4 첫 프레임)
    18.42s  agent 발화 시작: <ret> Bella Notte has four and a half stars, just point thre
    18.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.62s]: (tool result) Bella Notte - 4.5 stars, 0.3 miles; Roma Ristorante - 4.
    18.62s  user  발화 끝
    21.17s  user  발화 시작: Yeah.
    21.95s  user  발화 끝
    27.04s  agent 발화 끝
    28.21s  user  발화 시작: Actually, book me a table at Bella Notte for two people, thi
    33.61s  <ret> 발화 (turn7 첫 프레임)
    34.01s  agent 발화 시작: <ret> Wonderful! Your table for two at Bella Notte is confir
    34.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.68s]: (tool result) Reservation confirmed at Bella Notte for 2 people on Sat
    34.23s  user  발화 끝
    39.44s  user  발화 시작: Yeah.
    39.93s  user  발화 끝
    43.69s  agent 발화 끝
    44.12s  user  발화 시작: Great. Thanks, Thel.
    45.87s  user  발화 끝
