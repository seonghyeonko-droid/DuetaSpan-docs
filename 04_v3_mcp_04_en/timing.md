# v3_mcp_04_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "Lily",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-05-30",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-12",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Could you please set the user agent to SuperCrawler version 
     4.07s  <ret> 발화 (turn1 첫 프레임)
     4.39s  agent 발화 시작: <ret> I’ve set the user agent to SuperCrawler version ten po
     4.39s  ⚡SPAN 주입 [d'=0.96s / d_lead=5.23s]: (tool result) {"status": "success", "url": "https://httpbin.org/header
     4.40s  user  발화 끝
     6.70s  user  발화 시작: Mhm.
     7.19s  user  발화 끝
     9.62s  agent 발화 끝
    10.35s  user  발화 시작: Hmm, that’s good… but can you verify it actually took?
    14.32s  <ret> 발화 (turn4 첫 프레임)
    14.56s  agent 발화 시작: <ret> Yes, the headers now show “SuperCrawler version ten po
    14.56s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.49s]: (tool result) {"status": "success", "url": "https://httpbin.org/header
    14.69s  user  발화 끝
    19.05s  agent 발화 끝
    19.36s  user  발화 시작: Okay, perfect. That’s a relief.
    21.63s  user  발화 끝
