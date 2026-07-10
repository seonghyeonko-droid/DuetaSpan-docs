# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Hana",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-11-27",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-09-11",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-08-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-08-02",
#       "category": "home",
#       "text": "User's home address is 936 Elm Street."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-03",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m trying to settle a debate. Who | S2 …Peter Chelsom or Billy Bob Thornt | S3 Huh, I thought Chelsom had more hi | S4 …but did Thornton actually *releas

     0.00s  user  발화 시작: I’m trying to settle a debate. Who’s the more well-known mus
     3.69s  user  발화 끝
     4.90s  user  발화 시작: …Peter Chelsom or Billy Bob Thornton?
     6.79s  <ret> 발화 (turn2 첫 프레임)
     6.95s  agent 발화 시작: <ret> Well, it seems Billy Bob Thornton is the more recogniz
     6.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.23s]: Billy Bob Thornton is an American actor, filmmaker, and musician who a
     7.16s  user  발화 끝
    16.18s  agent 발화 끝
    16.25s  user  발화 시작: Huh, I thought Chelsom had more hits.
    18.79s  agent 발화 시작: That’s interesting! While Peter Chelsom is a respected film 
    19.03s  user  발화 끝
    26.28s  user  발화 시작: …but did Thornton actually *release* albums, or is he just k
    27.03s  agent 발화 끝
    29.78s  <ret> 발화 (turn6 첫 프레임)
    30.01s  agent 발화 시작: <ret> He actually did release albums, three studio albums in
    30.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.73s]: Billy Bob Thornton has released three studio albums: “Private Audition
    30.17s  user  발화 끝
    33.78s  user  발화 시작: Mhm.
    34.23s  user  발화 끝
    41.59s  agent 발화 시작: It’s easy to forget about his music career with all his acti
    41.75s  agent 발화 끝
    47.42s  agent 발화 끝
