# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "정슬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "home",
#       "text": "User's home address is 960 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: So, I was reading about government departments… when did the
     7.39s  <ret> 발화 (turn1 첫 프레임)
     7.71s  agent 발화 시작: <ret> The Department of Veterans Affairs became a national a
     7.88s  user  발화 끝
     8.51s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.81s]: [source: Wikipedia] The United States Department of Veterans Affairs w
    12.52s  agent 발화 끝
    13.36s  user  발화 시작: Nineteen thirty? That seems… surprisingly late, doesn’t it? 
    20.82s  <ret> 발화 (turn3 첫 프레임)
    21.20s  agent 발화 시작: <ret> It’s understandable to think so. The needs of veterans
    21.47s  user  발화 끝
    22.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: [source: US Department of Veterans Affairs] Prior to 1930, support for
    25.92s  agent 발화 시작: Before nineteen thirty, veteran support wasn’t centralized, 
    26.02s  agent 발화 끝
    32.17s  agent 발화 끝
    32.59s  user  발화 시작: So, it wasn’t *nothing* before then, just… disorganized? I— 
    38.83s  <ret> 발화 (turn6 첫 프레임)
    39.23s  agent 발화 시작: <ret> The Bureau of Pensions, from eighteen sixty-one, gave 
    39.49s  user  발화 끝
    40.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: [source: National Archives] The Bureau of Pensions, established in 186
    45.67s  agent 발화 끝
