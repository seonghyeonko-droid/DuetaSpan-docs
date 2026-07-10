# v3_mem_33_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "Dylan",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-02",
#       "category": "home",
#       "text": "User's home address is 635 Pine Court."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-09-11",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-08-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-30",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-14",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Dylan, I'm Dunar. It's lovely to connect with you.
     3.23s  agent 발화 끝
     3.39s  user  발화 시작: Um, what time is it right now?
     5.37s  <ret> 발화 (turn2 첫 프레임)
     5.53s  agent 발화 시작: <ret> It’s currently 2:35 PM in Berlin, Germany. A perfect t
     5.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.85s]: (tool result) It is Friday, July 10, 2026 at 2:35 PM in Berlin, German
     5.64s  user  발화 끝
    12.30s  user  발화 시작: Oh, right. And, uh, do I have any appointments tomorrow?
    12.38s  agent 발화 끝
    16.04s  <ret> 발화 (turn4 첫 프레임)
    16.28s  agent 발화 시작: <ret> I have a note from March twentieth that you were setti
    16.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: [2026-03-20] Past chat — Setting up a home network: asked about mesh r
    16.46s  user  발화 끝
    22.58s  agent 발화 끝
