# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Charlie",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "home",
#       "text": "User's home address is 448 Birch Road."
#     },
#     {
#       "date": "2026-05-13",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-06-22",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-17",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Do you know who sang “Let the Bird of Paradise Fly Up Your N
     3.97s  <ret> 발화 (turn1 첫 프레임)
     4.07s  user  발화 끝
     4.20s  agent 발화 시작: <ret> That’s a fun question! It was Little Jimmy Dickens who
     4.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.07s]: Little Jimmy Dickens released “Let the Bird of Paradise Fly Up Your No
     8.55s  user  발화 시작: Mm-hmm.
     9.05s  user  발화 끝
    10.20s  user  발화 시작: Oh, okay. That's good to know.
    10.28s  agent 발화 끝
    12.38s  <ret> 발화 (turn4 첫 프레임)
    12.78s  agent 발화 시작: <ret> It really became his signature tune, a bit of a novelt
    12.78s  ⚡SPAN 주입(IRRELEVANT) [d'=1.20s / d_lead=3.98s]: The average high temperature in Buenos Aires, Argentina in July is 18.
    12.98s  user  발화 끝
    15.16s  user  발화 시작: Uh-huh.
    15.75s  user  발화 끝
    16.65s  agent 발화 시작: Sometimes a little lightheartedness is exactly what we need,
    16.76s  agent 발화 끝
    18.58s  user  발화 시작: Right.
    19.17s  user  발화 끝
    21.00s  agent 발화 끝
    21.09s  user  발화 시작: Yeah, I guess so. Um, can you find me some country music eve
    26.31s  <ret> 발화 (turn9 첫 프레임)
    26.39s  agent 발화 시작: <ret> There are three country music events happening within 
    26.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.55s]: (tool result) There are three country music events happening within 20
    26.42s  user  발화 끝
    31.95s  agent 발화 끝
