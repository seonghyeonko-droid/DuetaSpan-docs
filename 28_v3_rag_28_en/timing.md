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


     0.00s  user  발화 시작: I was just reading about government departments… when did th
     5.65s  <ret> 발화 (turn1 첫 프레임)
     5.97s  agent 발화 시작: <ret> The Department of Veterans Affairs was established on 
     6.16s  user  발화 끝
     6.77s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.13s]: [source: Wikipedia] The United States Department of Veterans Affairs w
    11.11s  agent 발화 끝
    12.02s  user  발화 시작: Nineteen thirty? That seems… surprisingly recent, honestly. 
    17.76s  <ret> 발화 (turn3 첫 프레임)
    18.14s  agent 발화 시작: <ret> Before nineteen thirty, veterans’ affairs were managed
    18.40s  user  발화 끝
    19.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: [source: VA.gov] Prior to 1930, veterans’ affairs were handled by the 
    24.65s  user  발화 시작: Eighteen eleven… so they *were* thinking about veterans pret
    24.86s  agent 발화 끝
    30.59s  <ret> 발화 (turn5 첫 프레임)
    30.99s  agent 발화 시작: <ret> The Bureau of Pensions first provided pensions to vete
    31.03s  user  발화 끝
    32.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: [source: History.com] The Bureau of Pensions initially focused on prov
    36.74s  agent 발화 끝
