# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Stella",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-18",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Stella, I'm Nunar. It's lovely to meet you.
     3.46s  user  발화 시작: Um, hi Nunar. I was just thinking about my New Zealand trip.
     3.46s  agent 발화 끝
     7.84s  <ret> 발화 (turn2 첫 프레임)
     8.08s  agent 발화 시작: <ret> You're planning a trip to New Zealand in December, tha
     8.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.47s]: [2026-02-18] User is planning a trip to New Zealand in December.
     8.08s  user  발화 끝
    16.55s  user  발화 시작: Yeah.
    16.55s  agent 발화 끝
    16.93s  user  발화 시작: I remember I mentioned wanting to photograph wildflowers the
    16.93s  user  발화 끝
    19.99s  <ret> 발화 (turn5 첫 프레임)
    20.39s  agent 발화 시작: <ret> Ah, yes, you're passionate about alpine wildflower pho
    20.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.54s]: [2026-02-07] User is into alpine wildflower photography.
    20.39s  user  발화 끝
    26.94s  user  발화 시작: Right.
    26.94s  agent 발화 끝
    27.32s  agent 발화 시작: It really does. Perhaps we could brainstorm some locations p
    27.32s  user  발화 끝
    33.09s  user  발화 시작: That’d be great, but also I’m a bit worried about being alon
    33.09s  agent 발화 끝
    38.10s  agent 발화 시작: It's completely normal to feel that way before a big trip, e
    38.10s  user  발화 끝
    51.56s  agent 발화 끝
