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


     0.00s  user  발화 시작: I was reading about government departments… when did the Vet
     5.03s  <ret> 발화 (turn1 첫 프레임)
     5.35s  agent 발화 시작: <ret> That’s a good question to ask— The Department of Veter
     5.51s  user  발화 끝
     5.99s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.46s]: The United States Department of Veterans Affairs was established on Ju
    12.72s  agent 발화 끝
    13.61s  user  발화 시작: Nineteen thirty? That seems… surprisingly recent, doesn’t it
    19.45s  agent 발화 시작: It does feel recent, doesn’t it? Perhaps you’re thinking of 
    19.58s  user  발화 끝
    25.36s  user  발화 시작: Well, yeah, there had to be something before that. What did 
    25.56s  agent 발화 끝
    30.32s  <ret> 발화 (turn5 첫 프레임)
    30.71s  agent 발화 시작: <ret> Before nineteen thirty, veterans were served by— Befor
    30.83s  user  발화 끝
    32.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.60s]: Prior to 1930, the Veterans Bureau, established in 1921, provided bene
    41.51s  agent 발화 끝
