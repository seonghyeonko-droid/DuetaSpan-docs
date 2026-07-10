# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Rosa",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-26",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-06-29",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-06-27",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-05-30",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Show me the first three logs relat | S2 That sounds good. Um, are there an | S3 [laugh] Oh, perfect timing! I was  | S4 Oh, okay. That's... helpful. Maybe

     0.00s  user  발화 시작: Show me the first three logs relating to a timeout issue.
     3.54s  <ret> 발화 (turn1 첫 프레임)
     3.56s  user  발화 끝
     3.62s  agent 발화 시작: <ret> Give me a moment while I broaden the search to find th
     3.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.98s]: (no information found)
     7.60s  agent 발화 끝
     7.68s  user  발화 시작: That sounds good. Um, are there any good Italian restaurants
    11.55s  <ret> 발화 (turn3 첫 프레임)
    11.71s  agent 발화 시작: <ret> I’m finding Italian restaurants near your current loca
    11.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.48s]: {"location": "current", "cuisine": "Italian"}
    11.85s  user  발화 끝
    17.84s  user  발화 시작: [laugh] Oh, perfect timing! I was just thinking about lunch.
    18.19s  agent 발화 끝
    21.36s  user  발화 끝
    21.36s  agent 발화 시작: It seems we're on the same wavelength. A shared enjoyment of
    25.35s  ⚡지연 SPAN 주입(선제발표 직전): tavily-search: "Here are three relevant log entries:\n1. 2026-07-09T14
    26.13s  agent 발화 시작: <ret> I have those logs now, after expanding the search. I f
    26.22s  agent 발화 끝
    36.55s  user  발화 시작: Oh, okay. That's... helpful. Maybe the network *is* unstable
    36.71s  agent 발화 끝
    42.20s  user  발화 끝
    42.37s  agent 발화 시작: It's good to identify a potential cause. Perhaps checking yo
    47.27s  agent 발화 끝
