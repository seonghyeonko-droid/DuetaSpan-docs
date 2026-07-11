# v3_noinfo_23_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Kim",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-03",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2025-06-14",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-25",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you happen to know Sarah Miller | S2 Oh, okay. Well, what about the wea | S3 Hmm, that’s a shame. | S4 That sounds nice. What movies are 

     0.00s  user  발화 시작: Do you happen to know Sarah Miller's phone number?
     1.92s  <ret> 발화 (turn1 첫 프레임)
     2.32s  agent 발화 시작: <ret> I’ve checked everywhere, but I couldn’t find a phone n
     2.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: (no information found)
     2.49s  user  발화 끝
     8.76s  agent 발화 끝
     8.94s  user  발화 시작: Oh, okay. Well, what about the weather in Seoul last Tuesday
    12.09s  <ret> 발화 (turn3 첫 프레임)
    12.48s  agent 발화 시작: <ret> I’m sorry, I can only provide current weather informat
    12.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: (no information found)
    12.64s  user  발화 끝
    15.96s  user  발화 시작: Exactly.
    16.88s  user  발화 끝
    18.91s  agent 발화 끝
    18.95s  user  발화 시작: Hmm, that’s a shame.
    20.24s  user  발화 끝
    20.30s  agent 발화 시작: It is, isn’t it? Sometimes getting the information we need i
    27.12s  user  발화 시작: That sounds nice. What movies are playing nearby right now?
    27.53s  agent 발화 끝
    31.07s  <ret> 발화 (turn8 첫 프레임)
    31.38s  user  발화 끝
    31.39s  agent 발화 시작: <ret> Right now, ‘Inside Out 2’, ‘Bad Boys: Ride or Die’, an
    31.39s  ⚡SPAN 주입 [d'=1.44s / d_lead=10.58s]: (tool result) Showing: 'Inside Out 2', 'Bad Boys: Ride or Die', 'The G
    41.97s  agent 발화 끝
