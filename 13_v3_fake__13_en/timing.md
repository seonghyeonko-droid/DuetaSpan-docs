# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Julian",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-19",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-03-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-06-10",
#       "category": "home",
#       "text": "User's home address is 964 Elm Street."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-03",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hey, do you know when Ford stopped making the Sport Trac?
     3.66s  <ret> 발화 (turn1 첫 프레임)
     3.90s  agent 발화 시작: <ret> Ford stopped making the Sport Trac after the 2010 mode
     3.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.87s]: Ford discontinued the Sport Trac model after the 2010 model year, focu
     3.90s  user  발화 끝
    12.38s  <ret> 발화 (turn2 첫 프레임)
    12.78s  agent 발화 시작: <ret> Sometimes letting go of one thing allows space for new
    12.78s  ⚡SPAN 주입(IRRELEVANT) [d'=1.20s / d_lead=3.90s]: The current temperature in Reykjavik, Iceland is 8.2°C with clear skie
    12.78s  agent 발화 끝
    16.68s  user  발화 시작: Oh, okay, that's good to know.
    16.68s  agent 발화 끝
    18.81s  agent 발화 시작: It’s wonderful you’re taking the time to explore these detai
    18.81s  user  발화 끝
    25.91s  agent 발화 끝
