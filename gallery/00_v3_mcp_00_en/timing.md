# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "William",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-06-18",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-07",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-25",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-13",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: What city is the IP address ninety three dot one eighty four
     6.12s  <ret> 발화 (turn1 첫 프레임)
     6.36s  agent 발화 시작: <ret> That IP address resolves to Stockholm, Sweden. It’s a 
     6.36s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.77s]: (tool result) City: Stockholm, Country: Sweden
     6.36s  user  발화 끝
    11.13s  user  발화 시작: Yeah.
    11.13s  agent 발화 끝
    11.45s  user  발화 시작: Oh, uh, really? I've always wanted to go there.
    11.45s  user  발화 끝
    14.31s  agent 발화 시작: I understand that feeling! A change of scenery can be so res
    14.31s  user  발화 끝
    20.35s  user  발화 시작: Could you find me some hotels there for next week?
    20.35s  agent 발화 끝
    23.37s  <ret> 발화 (turn6 첫 프레임)
    23.53s  agent 발화 시작: <ret> I found several hotels in Stockholm for next week, sta
    23.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.09s]: (tool result) Hotels: Hotel Diplomat (4.5 stars, $250/night), Grand Hô
    23.53s  user  발화 끝
    28.61s  agent 발화 끝
