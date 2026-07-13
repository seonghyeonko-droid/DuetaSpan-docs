# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Remy",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "home",
#       "text": "User's home address is 46 Oak Avenue."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-06",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm feeling a bit lost about makin | S2 …honestly. It's harder than it use | S3 Well, I just moved to Seoul, and I | S4 That's true, it *is* exciting. Are

     0.00s  user  발화 시작: I'm feeling a bit lost about making friends…
     3.25s  user  발화 시작: …honestly. It's harder than it used to be.
     3.25s  user  발화 끝
     6.50s  agent 발화 시작: It absolutely can be, and you're not alone in feeling that w
     6.50s  user  발화 끝
    17.06s  user  발화 시작: Well, I just moved to Seoul, and I don’t know anyone. It’s…i
    17.06s  agent 발화 끝
    21.86s  <ret> 발화 (turn4 첫 프레임)
    21.93s  agent 발화 시작: <ret> It sounds like a big change! Seoul is a really vibrant
    21.93s  user  발화 끝
    22.29s  ⚡SPAN 주입 [d'=0.44s / d_lead=9.75s]: Seoul is South Korea's densely populated capital, with over ten millio
    31.68s  user  발화 시작: Yeah.
    31.68s  agent 발화 끝
    32.09s  user  발화 시작: That's true, it *is* exciting. Are there any good places to 
    32.09s  user  발화 끝
    39.06s  <ret> 발화 (turn7 첫 프레임)
    39.40s  agent 발화 시작: <ret> There's a highly-rated cafe called Cafe Onion Anguk, l
    39.40s  user  발화 끝
    39.85s  ⚡SPAN 주입 [d'=0.79s / d_lead=10.15s]: (tool result) {"restaurants": [{"name": "Cafe Onion Anguk", "address":
    49.56s  agent 발화 끝
