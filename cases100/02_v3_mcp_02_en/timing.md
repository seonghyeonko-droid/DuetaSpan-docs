# v3_mcp_02_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "Mia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "mid 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-01",
#       "category": "streaming",
#       "text": "User subscribes to Wavve and Melon."
#     },
#     {
#       "date": "2026-05-31",
#       "category": "employer",
#       "text": "User works at a school district."
#     },
#     {
#       "date": "2026-05-26",
#       "category": "medication",
#       "text": "User takes blood-pressure medication."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "skill",
#       "text": "User is getting fairly good at salsa dancing."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "phone",
#       "text": "User uses an iPhone 13."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "commute",
#       "text": "User works from home."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "bloodtype",
#       "text": "User's blood type is AB+."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-07",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-04-13",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-03-12",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2025-12-30",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I'm thinking about getting a subscription for your premium f
     5.22s  <ret> 발화 (turn1 첫 프레임)
     5.37s  user  발화 끝
     5.39s  agent 발화 시작: <ret> Great! I've created a monthly "Premium Access" plan fo
     6.18s  ⚡SPAN 주입 [d'=0.97s / d_lead=8.53s]: (tool result) prod-12345, Premium Access, Monthly access to all premiu
    13.92s  agent 발화 끝
    14.42s  user  발화 시작: Perfect, thank you! Now, I need to find a train from Seattle
    19.54s  user  발화 끝
