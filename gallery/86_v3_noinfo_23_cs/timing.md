# v3_noinfo_23_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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

# EXAMINER(FDB-v2) 단계: S1 어, 혹시 사라 밀러 전화번호 알아? | S2 아, 그래? 그럼 서울 지난 화요일 날씨는 어땠어? | S3 흠, 아쉽다. | S4 좋은 생각인데. 지금 근처에서 상영하는 영화가 뭔데?

     0.00s  user  발화 시작: 어, 혹시 사라 밀러 전화번호 알아?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.06s  agent 발화 시작: <ret> 아쉽지만, 사라 밀러 님 전화번호는 찾을 수가 없었어요. 그 정보는 공개되지 않은 것 같아요.
     0.06s  ⚡SPAN 주입 [d'=0.14s / d_lead=0.14s]: (no information found)
     0.06s  user  발화 끝
     0.20s  user  발화 시작: 아, 그래? 그럼 서울 지난 화요일 날씨는 어땠어?
     0.20s  agent 발화 끝
     0.28s  agent 발화 시작: <ret> 죄송하지만, 현재 날씨 정보만 제공할 수 있고, 과거 데이터는 제공하지 못해요. 도와드리고 싶지만
     0.28s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: (no information found)
     0.28s  user  발화 끝
     0.44s  user  발화 시작: 와.
     0.44s  agent 발화 끝
     0.45s  user  발화 시작: 흠, 아쉽다.
     0.45s  user  발화 끝
     0.46s  <ret> 발화 (turn8 첫 프레임)
     0.47s  agent 발화 시작: 그렇죠, 그렇죠? 가끔 필요한 정보를 얻을 수 없는 때가 있어요. 대신 멋진 주말 계획을 세워보는 건 어떠세
     0.47s  user  발화 끝
     0.63s  user  발화 시작: 좋은 생각인데. 지금 근처에서 상영하는 영화가 뭔데?
     0.63s  agent 발화 끝
     0.70s  agent 발화 시작: <ret> 지금 Regal Edwards Irvine Spectrum 21에서 ‘인사이드 아웃 2’, ‘Ba
     0.70s  ⚡SPAN 주입 [d'=0.30s / d_lead=0.30s]: (tool result) Showing: 'Inside Out 2', 'Bad Boys: Ride or Die', 'The G
     0.70s  user  발화 끝
     1.00s  agent 발화 끝
