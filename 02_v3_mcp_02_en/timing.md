# v3_mcp_02_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "Casey",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-08",
#       "category": "home",
#       "text": "User's home address is 182 Maple Drive."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-20",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-11",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What documentaries are showing at  | S2 …Violet Crown Cinema in Austin, Te | S3 Hmm, I think my partner would real | S4 Could you buy two tickets for that

     0.00s  user  발화 시작: What documentaries are showing at the…
     2.21s  user  발화 끝
     3.16s  user  발화 시작: …Violet Crown Cinema in Austin, Texas?
     5.94s  <ret> 발화 (turn2 첫 프레임)
     6.18s  agent 발화 시작: <ret> At the Violet Crown Cinema in Austin, Texas, they’re s
     6.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.85s]: (tool result) Showing at Violet Crown Cinema in Austin, Texas: “Americ
     6.30s  user  발화 끝
    17.03s  agent 발화 끝
    18.32s  user  발화 시작: Hmm, I think my partner would really like “American Symphony
    22.31s  user  발화 끝
    22.55s  agent 발화 시작: That sounds like a thoughtful choice. Sometimes sharing a mo
    25.93s  user  발화 시작: Yeah.
    26.37s  user  발화 끝
    29.39s  user  발화 시작: Could you buy two tickets for that, for the seven o'clock sh
    29.42s  agent 발화 끝
    32.53s  <ret> 발화 (turn7 첫 프레임)
    32.85s  agent 발화 시작: <ret> I’ve purchased two tickets for “American Symphony” at 
    32.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: (tool result) Confirmation: American Symphony, Violet Crown Cinema, Au
    33.05s  user  발화 끝
    41.52s  agent 발화 끝
