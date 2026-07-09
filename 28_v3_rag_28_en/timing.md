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
#       "date": "2026-07-02",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "home",
#       "text": "User's home address is 960 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: So, I was reading about government departments, and it got m
     8.55s  <ret> 발화 (turn1 첫 프레임)
     8.87s  agent 발화 시작: <ret> That’s a good question, and a really important one whe
     8.90s  user  발화 끝
     9.67s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.51s]: [source: Wikipedia] The United States Department of Veterans Affairs w
    14.32s  agent 발화 시작: The Department of Veterans Affairs was established on July t
    14.38s  agent 발화 끝
    20.99s  user  발화 시작: Nineteen thirty? That seems… surprisingly recent. I always t
    21.04s  agent 발화 끝
    28.22s  <ret> 발화 (turn4 첫 프레임)
    28.60s  agent 발화 시작: <ret> It is a bit later than many assume, yes. It evolved fr
    28.77s  user  발화 끝
    30.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.73s]: [source: VA.gov] Prior to 1930, veterans’ affairs were handled by the 
    36.18s  agent 발화 시작: Before nineteen thirty, veterans’ affairs were handled by th
    36.33s  agent 발화 끝
    43.01s  user  발화 시작: So, the Bureau of Pensions was the main thing for a long tim
    43.18s  agent 발화 끝
    48.40s  <ret> 발화 (turn7 첫 프레임)
    48.80s  agent 발화 시작: <ret> The Bureau of Pensions primarily administered pensions
    48.99s  user  발화 끝
    50.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.62s]: [source: National Archives] The Bureau of Pensions processed claims fo
    57.23s  agent 발화 시작: The Bureau of Pensions processed claims for benefits related
    57.42s  agent 발화 끝
    65.63s  agent 발화 끝
