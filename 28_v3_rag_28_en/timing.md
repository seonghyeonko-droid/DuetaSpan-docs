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


     0.00s  user  발화 시작: I was reading about government departments, and I'm wonderin
     8.22s  <ret> 발화 (turn1 첫 프레임)
     8.54s  agent 발화 시작: <ret> That's a good question to ask. The Department of Veter
     8.62s  user  발화 끝
     9.18s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.44s]: The United States Department of Veterans Affairs was established on Ju
    15.86s  agent 발화 끝
    16.73s  user  발화 시작: Nineteen thirty? That seems… surprisingly recent, actually. 
    24.22s  agent 발화 시작: It is a relatively recent establishment, considering the his
    24.42s  user  발화 끝
    31.79s  user  발화 시작: But… if it was only created in nineteen thirty, what happene
    31.96s  agent 발화 끝
    38.71s  <ret> 발화 (turn5 첫 프레임)
    39.08s  agent 발화 시작: <ret> Before nineteen thirty, care was provided differently.
    39.15s  user  발화 끝
    40.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.60s]: Prior to 1930, the Veterans Bureau, created in 1921, handled veterans’
    49.38s  agent 발화 끝
