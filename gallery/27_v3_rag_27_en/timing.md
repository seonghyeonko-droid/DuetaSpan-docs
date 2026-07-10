# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Sky",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-11-08",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-07-30",
#       "category": "home",
#       "text": "User's home address is 271 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Thina, I’m moving to the city a | S2 Great! I was wondering, which plan | S3 …Is it common in gardens, or more  | S4 That sounds lovely. Thanks for the

     0.00s  user  발화 시작: Hi Thina, I’m moving to the city and trying to learn about l
     4.21s  user  발화 끝
     4.28s  agent 발화 시작: Welcome! Settling in is exciting. I can definitely help with
     7.42s  user  발화 시작: Yeah.
     7.77s  user  발화 끝
     9.69s  agent 발화 끝
     9.78s  user  발화 시작: Great! I was wondering, which plant—Buddleja or Burchardia—i
    16.52s  <ret> 발화 (turn4 첫 프레임)
    16.92s  agent 발화 시작: <ret> Burchardia is a genus named after Johann Burchard, a G
    16.92s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.70s]: Burchardia is a genus of perennial herbaceous flowering plants native 
    17.05s  user  발화 끝
    21.91s  user  발화 시작: …Is it common in gardens, or more of a wild plant?
    22.62s  agent 발화 끝
    24.98s  agent 발화 시작: It’s primarily found in the wild, though some gardeners cult
    25.20s  user  발화 끝
    31.03s  user  발화 시작: Yeah.
    31.52s  user  발화 끝
    33.03s  agent 발화 시작: It’s a beautiful, delicate plant—often spotted in forests an
    33.18s  agent 발화 끝
    39.41s  user  발화 시작: Yeah.
    39.86s  user  발화 끝
    42.45s  agent 발화 끝
    43.99s  user  발화 시작: That sounds lovely. Thanks for the info, Thina!
    46.67s  user  발화 끝
    46.90s  agent 발화 시작: You’re very welcome! I’m glad I could help.
    49.48s  agent 발화 끝
