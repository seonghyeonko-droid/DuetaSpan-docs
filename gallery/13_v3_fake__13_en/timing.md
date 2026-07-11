# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Taylor",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-19",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-10-22",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-31",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who sang "For Your Lov | S2 …was that his only… | S3 …big hit with The Yardbirds? | S4 That is really interesting. I appr

     0.00s  user  발화 시작: Do you know who sang "For Your Love" back in the sixties?
     2.74s  <ret> 발화 (turn1 첫 프레임)
     2.97s  agent 발화 시작: <ret> Well, that’s a lovely question. It was Keith Relf, act
     2.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: Keith Relf was the lead singer of the British rock band The Yardbirds,
     3.14s  user  발화 끝
     7.69s  agent 발화 끝
     8.94s  user  발화 시작: …was that his only…
    10.46s  user  발화 끝
    11.98s  user  발화 시작: …big hit with The Yardbirds?
    13.76s  agent 발화 시작: It wasn't, though "For Your Love" certainly brought them att
    13.83s  user  발화 끝
    17.52s  user  발화 시작: Yeah, totally.
    18.94s  user  발화 끝
    20.20s  <ret> 발화 (turn6 첫 프레임)
    20.38s  agent 발화 끝
    20.50s  agent 발화 시작: <ret> —inspiring many famous guitarists, like Eric Clapton a
    20.52s  ⚡SPAN 주입(IRRELEVANT) [d'=0.56s / d_lead=8.53s]: The current temperature in Reykjavik, Iceland is 8.2°C with partly clo
    28.66s  user  발화 시작: That is really interesting. I appreciate you sharing that, A
    29.04s  agent 발화 끝
    33.06s  user  발화 끝
    33.08s  agent 발화 시작: It’s my pleasure. Exploring these connections often reveals 
    39.20s  agent 발화 끝
