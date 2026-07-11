# v3_mem_33_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "Julia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "home",
#       "text": "User's home address is 51 Pine Court."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-20",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-29",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Julia, I'm Sellara. It’s lovely to connect with you today
     3.69s  agent 발화 끝
     4.22s  user  발화 시작: Um, what time is it right now? I completely lost track.
     8.42s  <ret> 발화 (turn2 첫 프레임)
     8.58s  agent 발화 시작: <ret> It’s currently 2:38 PM in San Francisco, Julia. A peac
     8.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.35s]: (tool result) It is Friday, July 10, 2026 at 2:38 PM in America/Los An
     8.66s  user  발화 끝
    14.93s  agent 발화 끝
    15.36s  user  발화 시작: Oh, that’s good to know. And, uh, remind me… what was I plan
    20.50s  <ret> 발화 (turn4 첫 프레임)
    20.74s  agent 발화 시작: <ret> You're planning a trip to New Zealand in March, Julia.
    20.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.41s]: [2025-11-20] User is planning a trip to New Zealand in March.
    20.82s  user  발화 끝
    22.60s  user  발화 시작: Mm-hmm.
    23.23s  user  발화 끝
    26.15s  agent 발화 끝
    26.93s  user  발화 시작: New Zealand… right. Is Bella doing okay?
    30.21s  <ret> 발화 (turn7 첫 프레임)
    30.45s  agent 발화 시작: <ret> You have a Siamese cat named Bella. Such a lovely comp
    30.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.33s]: [2025-12-25] User has a Siamese cat named Bella.
    30.53s  user  발화 끝
    35.78s  agent 발화 끝
