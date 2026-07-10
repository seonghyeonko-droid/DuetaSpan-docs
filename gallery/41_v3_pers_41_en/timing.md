# v3_pers_41_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "Lily",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-28",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "home",
#       "text": "User's home address is 722 Pine Court."
#     },
#     {
#       "date": "2025-09-29",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-09",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m just feeling really lost right | S2 I just don’t feel fulfilled anymor | S3 I have some savings, but not a ton | S4 Okay. And… what if I choose the wr

     0.00s  agent 발화 시작: Hello Lily, welcome. I’m Vean, and I’m here to support you t
     6.61s  user  발화 시작: I’m just feeling really lost right now, actually.
     6.72s  agent 발화 끝
     9.66s  agent 발화 시작: It's perfectly alright to feel lost, Lily. Transitions can b
     9.70s  user  발화 끝
    17.87s  agent 발화 끝
    17.90s  user  발화 시작: Well, I’m thinking about leaving my job. It’s just… a big st
    22.77s  agent 발화 시작: It absolutely is a big step. Leaving a job is a significant 
    22.95s  user  발화 끝
    25.20s  user  발화 시작: Yeah.
    25.74s  user  발화 끝
    30.14s  agent 발화 끝
    30.45s  user  발화 시작: I just don’t feel fulfilled anymore. It’s not challenging, a
    36.19s  agent 발화 시작: That sense of stagnation can be really draining. It’s import
    36.29s  user  발화 끝
    41.86s  user  발화 시작: …Do you think it’s okay to leave a job without having anothe
    42.63s  agent 발화 끝
    45.64s  agent 발화 시작: That’s a very valid concern, Lily. It requires careful thoug
    45.89s  user  발화 끝
    49.21s  user  발화 시작: Uh-huh.
    49.84s  user  발화 끝
    52.49s  user  발화 시작: I have some savings, but not a ton. And the thought of the j
    52.50s  agent 발화 끝
    58.19s  user  발화 끝
    58.35s  agent 발화 시작: It's understandable to feel overwhelmed. Perhaps we could ex
    65.72s  agent 발화 끝
    66.49s  user  발화 시작: That sounds… good, actually. I hadn’t really broken it down 
    71.38s  agent 발화 시작: Sometimes just outlining things can reduce the anxiety. We c
    71.50s  user  발화 끝
    79.25s  user  발화 시작: Okay. And… what if I choose the wrong thing? What if I regre
    79.67s  agent 발화 끝
    83.92s  agent 발화 시작: Regret is a natural part of decision-making, Lily. It doesn’
    84.11s  user  발화 끝
    91.24s  agent 발화 끝
    91.85s  user  발화 시작: That’s… a different way of looking at it. I usually just bea
    97.19s  agent 발화 시작: It’s common to be self-critical, but self-compassion is a po
    97.32s  user  발화 끝
   104.15s  agent 발화 끝
