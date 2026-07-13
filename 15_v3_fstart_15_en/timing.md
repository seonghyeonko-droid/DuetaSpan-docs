# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "Jamie",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "home",
#       "text": "User's home address is 284 Oak Avenue."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to find a good Italian rest | S2 …like it has to be perfect right a | S3 Tiny reps… like, writing a little  | S4 Hmm, that makes sense. Is there an

     0.00s  user  발화 시작: I need to find a good Italian restaurant in New York— actual
     8.63s  agent 발화 시작: Yeah.
     8.63s  user  발화 끝
     8.99s  agent 발화 시작: [happy] Oh, that's a great question! Creative blocks are so 
     8.99s  agent 발화 끝
    17.98s  user  발화 시작: Yeah.
    17.98s  agent 발화 끝
    18.34s  user  발화 시작: A rough draft… I always feel…
    18.34s  user  발화 끝
    20.50s  user  발화 시작: …like it has to be perfect right away.
    20.50s  user  발화 끝
    23.38s  agent 발화 시작: Uh-huh.
    23.38s  user  발화 끝
    23.74s  agent 발화 시작: That’s the inner critic talking! It's so loud, isn't it? We 
    23.74s  agent 발화 끝
    33.09s  user  발화 시작: Mhm.
    33.09s  agent 발화 끝
    33.45s  user  발화 시작: Tiny reps… like, writing a little bit every day?
    33.45s  user  발화 끝
    36.68s  agent 발화 시작: Exactly! Think of it like building a muscle. Small, consiste
    36.68s  user  발화 끝
    43.87s  user  발화 시작: Mm-hmm.
    43.87s  agent 발화 끝
    44.23s  user  발화 시작: Hmm, that makes sense. Is there anything else? I feel stuck 
    44.23s  user  발화 끝
    49.94s  <ret> 발화 (turn13 첫 프레임)
    49.99s  agent 발화 시작: <ret> It's also about being kind to yourself when things are
    49.99s  user  발화 끝
    50.65s  ⚡SPAN 주입 [d'=0.71s / d_lead=6.47s]: Practicing self-compassion is crucial when facing creative challenges,
    56.46s  user  발화 시작: Right.
    56.46s  agent 발화 끝
    56.82s  agent 발화 시작: [curious] And what kind of painting are you working on, if y
    56.82s  user  발화 끝
    64.73s  agent 발화 끝
