# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Zoe",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-10-31",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2025-08-22",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who made a pact with S | S2 That’s interesting, but was it a s | S3 …did it actually *change* anything | S4 So, France and Spain teamed up, th

     0.00s  user  발화 시작: Do you know who made a pact with Spain in 1761?
     3.36s  <ret> 발화 (turn1 첫 프레임)
     3.58s  agent 발화 시작: <ret> It sounds like you’re interested in a bit of history. 
     3.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.01s]: Louis XV, seeking to reverse French losses during the Seven Years’ War
     3.66s  user  발화 끝
    17.59s  agent 발화 끝
    17.59s  user  발화 시작: That’s interesting, but was it a successful pact?
    21.38s  user  발화 끝
    21.52s  agent 발화 시작: That’s a really good question to ask when considering any ag
    25.36s  user  발화 시작: …did it actually *change* anything about the war, though?
    26.05s  agent 발화 끝
    28.52s  <ret> 발화 (turn5 첫 프레임)
    28.67s  agent 발화 시작: <ret> It did lead to a shift in alliances, though the immedi
    28.68s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=12.43s]: The current temperature in Reykjavik, Iceland is 8.2°C, with partly cl
    28.78s  user  발화 끝
    41.03s  agent 발화 시작: Sometimes, even well-intentioned steps don't bring quick cha
    41.10s  agent 발화 끝
    47.56s  agent 발화 끝
    48.50s  user  발화 시작: So, France and Spain teamed up, then?
    51.08s  user  발화 끝
    51.20s  agent 발화 시작: Precisely. That alliance, born from the Pact of Bourbon, mea
    61.08s  agent 발화 끝
