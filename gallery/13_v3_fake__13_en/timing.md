# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Liam",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-10-17",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-08-01",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I was just wondering, where is the line between Europe and A
     4.08s  <ret> 발화 (turn1 첫 프레임)
     4.16s  user  발화 끝
     4.31s  agent 발화 시작: <ret> Generally, people consider the Ural Mountains to be th
     4.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: The Ural Mountains are generally considered the dividing line between 
     9.45s  agent 발화 끝
     9.59s  user  발화 시작: Oh, interesting. And what about culturally?
    12.21s  <ret> 발화 (turn3 첫 프레임)
    12.58s  agent 발화 시작: <ret> Culturally, it's much more blurred, of course. There’s
    12.61s  ⚡SPAN 주입(IRRELEVANT) [d'=1.52s / d_lead=5.14s]: The current price of Tesla stock is $177.89 as of 3:27 PM PST.
    12.73s  user  발화 끝
    15.75s  user  발화 시작: Mm-hmm.
    16.25s  user  발화 끝
    17.44s  user  발화 시작: That makes sense. It's not so neat and tidy, is it?
    17.72s  agent 발화 끝
    21.27s  agent 발화 시작: [laugh] Exactly! Life rarely is, and that’s perfectly okay. 
    21.28s  user  발화 끝
    28.41s  agent 발화 끝
