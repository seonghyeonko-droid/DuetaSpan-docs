# v3_pers_41_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "Camille",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Oh, uh, Zeno? That’s… a nice name. | S2 I guess… I’m trying to get an inte | S3 That's… a good question, actually. | S4 I think… spending time with my fri

     0.00s  agent 발화 시작: Bonjour Camille, it’s lovely to connect with you. I’m Zeno, 
     7.84s  agent 발화 끝
     7.92s  user  발화 시작: Oh, uh, Zeno? That’s… a nice name. But what exactly do you *
    15.43s  user  발화 끝
    15.82s  agent 발화 시작: It sounds like you’re carrying a lot right now, Camille. Exa
    22.85s  user  발화 시작: Uh-huh.
    23.39s  user  발화 끝
    25.19s  agent 발화 끝
    27.23s  user  발화 시작: Welll… it's not just the exams, it’s everything. I feel like
    33.99s  user  발화 끝
    34.19s  agent 발화 시작: That feeling of being constantly behind is very common, espe
    37.02s  user  발화 시작: Mm-hmm.
    37.48s  user  발화 끝
    43.39s  agent 발화 시작: Sometimes simply noticing what “more” entails can help us ge
    43.51s  agent 발화 끝
    49.91s  user  발화 시작: Uh-huh.
    50.44s  user  발화 끝
    53.69s  agent 발화 끝
    54.11s  user  발화 시작: I guess… I’m trying to get an internship, study, and also se
    61.58s  agent 발화 시작: It’s understandable that juggling so many important things f
    61.61s  user  발화 끝
    68.12s  user  발화 시작: Right.
    68.66s  user  발화 끝
    72.57s  agent 발화 끝
    72.61s  user  발화 시작: That's… a good question, actually. I hadn't thought of doing
    82.94s  agent 발화 시작: Falling behind is a fear many of us share. But perhaps "behi
    82.95s  user  발화 끝
    87.73s  user  발화 시작: Oh.
    88.37s  user  발화 끝
    92.08s  user  발화 시작: I think… spending time with my friends. I haven't seen them 
    92.54s  agent 발화 끝
    99.59s  user  발화 끝
