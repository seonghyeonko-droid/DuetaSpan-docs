# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Lukas",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-14",
#       "category": "home",
#       "text": "User's home address is 260 Maple Drive."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-26",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-02",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Find pictures related to my holida | S2 Oh, and could you also book a tabl | S3 …Le Chat Noir? | S4 How about Friday at 7:30 pm?

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     5.28s  <ret> 발화 (turn1 첫 프레임)
     5.32s  user  발화 끝
     5.36s  agent 발화 시작: <ret> I’m searching for photos from your France trip last ye
     7.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: (tool result) The user is requesting pictures from a holiday in France
     8.90s  user  발화 시작: Mhm.
     9.30s  user  발화 끝
    11.02s  user  발화 시작: Oh, and could you also book a table for two at that little b
    11.20s  agent 발화 끝
    15.69s  user  발화 끝
    17.70s  user  발화 시작: …Le Chat Noir?
    18.90s  user  발화 끝
    18.95s  agent 발화 시작: Le Chat Noir… I'll need a date and time to make a reservatio
    21.88s  user  발화 시작: Yeah.
    22.50s  user  발화 끝
    23.68s  agent 발화 끝
    23.72s  user  발화 시작: How about Friday at 7:30 pm?
    26.05s  <ret> 발화 (turn8 첫 프레임)
    26.37s  agent 발화 시작: <ret> Let me see if Le Chat Noir has availability on Friday 
    26.44s  user  발화 끝
    27.09s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.90s]: (tool result) Le Chat Noir requires a date and time for reservations.
    33.01s  <ret> 발화 (turn9 첫 프레임)
    33.17s  agent 발화 시작: <ret> Your table for two at Le Chat Noir on Friday at 7:30 i
    33.28s  agent 발화 끝
    35.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: {"confirmation_number": "LC7392", "status": "confirmed", "date": "Frid
    41.69s  agent 발화 끝
