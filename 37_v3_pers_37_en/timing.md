# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Nathan",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     },
#     {
#       "date": "2026-05-30",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-21",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-13",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What exactly *can* you help me wit | S2 Welll… um, I’m just feeling really | S3 …do you think it’s okay to just… n | S4 I guess so. It’s just… my parents 

     0.00s  agent 발화 시작: Guten Tag, Nathan. I’m Eliaia, and I’m here to offer a littl
     5.65s  agent 발화 끝
     6.88s  user  발화 시작: What exactly *can* you help me with, though? It sounds… broa
    10.57s  agent 발화 시작: It is quite open-ended, isn't it?
    10.71s  user  발화 끝
    12.70s  agent 발화 끝
    12.77s  user  발화 시작: Welll… um, I’m just feeling really lost about what to do aft
    17.18s  agent 발화 시작: That’s a very common feeling, Nathan. Many people feel unsur
    17.39s  user  발화 끝
    22.52s  user  발화 시작: …do you think it’s okay to just… not have a plan right away?
    23.39s  agent 발화 끝
    26.06s  agent 발화 시작: It's perfectly alright to not have everything figured out im
    26.18s  user  발화 끝
    34.03s  agent 발화 끝
    34.24s  user  발화 시작: I guess so. It’s just… my parents keep asking, and it makes 
    38.94s  agent 발화 시작: It sounds like their expectations are adding to your stress.
    38.97s  user  발화 끝
    48.12s  agent 발화 끝
