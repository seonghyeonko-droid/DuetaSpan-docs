# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Remy",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-29",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-11-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-01",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-24",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to start a crawl of the BBC | S2 …Can you tell me about the current | S3 That sounds rough. How long will t | S4 Good, thank you. I'm trying to sta

     0.00s  user  발화 시작: I need to start a crawl of the BBC News website, only going 
     0.12s  <ret> 발화 (turn1 첫 프레임)
     0.19s  <ret> 발화 (turn3 첫 프레임)
     0.20s  agent 발화 시작: <ret> Alright, I’ve started that crawl for you—
     0.20s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Crawl initiated: URL=https://www.bbc.com/news, Depth=1, 
     0.20s  user  발화 끝
     0.25s  user  발화 시작: …Can you tell me about the current top story on BBC News whi
     0.25s  agent 발화 끝
     0.35s  agent 발화 시작: <ret> The BBC is currently leading with a heatwave impacting
     0.35s  ⚡SPAN 주입 [d'=0.15s / d_lead=0.15s]: The BBC News website currently leads with the story of a heatwave impa
     0.35s  user  발화 끝
     0.50s  agent 발화 시작: It’s quite a significant situation there.
     0.50s  agent 발화 끝
     0.54s  user  발화 시작: Yeah.
     0.54s  agent 발화 끝
     0.55s  user  발화 시작: That sounds rough. How long will that crawl take, roughly?
     0.55s  user  발화 끝
     0.62s  agent 발화 시작: It’s hard to say precisely, but crawls of that size usually 
     0.62s  user  발화 끝
     0.79s  user  발화 시작: Good, thank you. I'm trying to stay informed on world events
     0.79s  agent 발화 끝
     0.87s  agent 발화 시작: That's a very healthy habit, staying informed. It helps us f
     0.87s  user  발화 끝
     1.00s  agent 발화 끝
