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

# EXAMINER(FDB-v2) 단계: S1 Find pictures related to my holida | S2 Could you open IMG_1234 for me? | S3 What time is it right now? | S4 That's great, thank you.

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.43s  <ret> 발화 (turn1 첫 프레임)
     4.51s  agent 발화 시작: <ret> I found three pictures from your France holiday in two
     4.54s  user  발화 끝
     6.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.92s]: (tool result) /Users/sunan/Pictures/France Holiday_2025/IMG_1234.jpg, 
     9.64s  user  발화 시작: Uh-huh.
    10.08s  user  발화 끝
    16.33s  user  발화 시작: Could you open IMG_1234 for me?
    16.43s  agent 발화 끝
    19.14s  <ret> 발화 (turn4 첫 프레임)
    19.30s  agent 발화 시작: <ret> I’ve opened IMG_1234 for you. It looks like a lovely s
    19.47s  user  발화 끝
    20.18s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.86s]: (tool result) File opened successfully.
    21.33s  user  발화 시작: Yeah.
    21.64s  user  발화 끝
    24.16s  agent 발화 끝
    24.88s  user  발화 시작: What time is it right now?
    26.48s  <ret> 발화 (turn7 첫 프레임)
    26.64s  agent 발화 시작: <ret> It is currently three seventeen PM in Seoul, on Friday
    26.86s  user  발화 끝
    28.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.62s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Asia/Seoul rig
    33.27s  agent 발화 끝
    33.51s  user  발화 시작: That's great, thank you.
    34.51s  user  발화 끝
    34.80s  agent 발화 시작: You’re very welcome. I’m glad I could help. Enjoy looking th
    38.96s  agent 발화 끝
