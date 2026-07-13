# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Rosa",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-24",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "home",
#       "text": "User's home address is 569 Oak Avenue."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-11-14",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 uh, what kind of… | S2 welll… is it always been like that | S3 can you find me some more detail o | S4 okay, thanks. I appreciate that.

     0.00s  user  발화 시작: uh, what kind of…
     1.64s  user  발화 시작: …government does Israel have today?
     1.64s  user  발화 끝
     3.44s  <ret> 발화 (turn2 첫 프레임)
     3.68s  agent 발화 시작: <ret> It’s a parliamentary democracy, where citizens eightee
     3.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.65s]: Israel has a parliamentary democracy, with universal suffrage for citi
     3.68s  user  발화 끝
    14.33s  user  발화 시작: welll… is it always been like that?
    14.33s  agent 발화 끝
    17.20s  agent 발화 시작: It’s evolved, but Israel adopted a parliamentary system with
    17.20s  user  발화 끝
    23.34s  user  발화 시작: Really?
    23.34s  agent 발화 끝
    23.75s  agent 발화 시작: It’s natural to wonder about the foundations of a nation, an
    23.75s  user  발화 끝
    30.71s  user  발화 시작: can you find me some more detail on that, uh, 1948 thing?
    30.71s  agent 발화 끝
    35.38s  <ret> 발화 (turn8 첫 프레임)
    35.62s  agent 발화 시작: <ret> The declaration of independence was proclaimed on May 
    35.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.83s]: (tool result) The Israeli Declaration of Independence was proclaimed o
    35.62s  user  발화 끝
    45.45s  user  발화 시작: okay, thanks. I appreciate that.
    45.45s  agent 발화 끝
    47.50s  user  발화 끝
