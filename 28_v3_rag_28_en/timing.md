# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Hannah",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-09-25",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-07-18",
#       "category": "home",
#       "text": "User's home address is 428 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-13",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering… | S2 …how much did it cost to *make* Ti | S3 Two hundred million? Wow, that's…  | S4 That's incredible. So, do you thin

     0.00s  user  발화 시작: I was just wondering…
     1.61s  user  발화 끝
     2.92s  user  발화 시작: …how much did it cost to *make* Titanic? It seems like a lot
     6.42s  <ret> 발화 (turn2 첫 프레임)
     6.74s  agent 발화 시작: <ret> Well, creating something so grand certainly wasn’t che
     6.74s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.58s]: The 1997 film Titanic had a production budget of approximately $200 mi
     6.77s  user  발화 끝
    13.27s  agent 발화 시작: It's amazing what goes into a movie of that scale, isn't it?
    13.31s  agent 발화 끝
    14.75s  user  발화 시작: Yeah.
    15.10s  user  발화 끝
    16.73s  agent 발화 끝
    17.78s  user  발화 시작: Two hundred million? Wow, that's… a huge amount of money. Um
    23.66s  <ret> 발화 (turn6 첫 프레임)
    24.06s  agent 발화 시작: <ret> Actually, it *was* a record—when it came out, Titanic 
    24.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.04s]: At the time of its release, Titanic was the most expensive film ever m
    24.21s  user  발화 끝
    26.62s  user  발화 시작: Wow.
    27.45s  user  발화 끝
    31.00s  agent 발화 시작: It really shows the ambition of the project, doesn’t it? I a
    31.11s  agent 발화 끝
    36.13s  user  발화 시작: Yeah.
    36.63s  user  발화 끝
    38.68s  user  발화 시작: That's incredible. So, do you think a movie could *ever* cos
    38.69s  agent 발화 끝
    43.55s  agent 발화 시작: It’s very likely, considering inflation and modern special e
    43.68s  user  발화 끝
    51.11s  agent 발화 끝
