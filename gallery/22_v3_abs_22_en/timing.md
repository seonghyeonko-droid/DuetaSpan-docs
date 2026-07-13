# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Noah",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "home",
#       "text": "User's home address is 461 Birch Road."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-18",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What college moved to Ann Arbor in | S2 Oh, okay. Well, what *is* the hist | S3 …was it hard to move everything ba | S4 That sounds stressful. What was An

     0.00s  user  발화 시작: What college moved to Ann Arbor in 1873?
     3.19s  agent 발화 시작: Oh.
     3.19s  user  발화 끝
     3.59s  agent 발화 시작: Hmm, that’s a good question! It seems there isn’t readily av
     3.59s  agent 발화 끝
    12.36s  user  발화 시작: Oh.
    12.36s  agent 발화 끝
    12.75s  user  발화 시작: Oh, okay. Well, what *is* the history of the University of M
    12.75s  user  발화 끝
    17.54s  agent 발화 시작: Uh-huh.
    17.54s  user  발화 끝
    17.78s  <ret> 발화 (turn6 첫 프레임)
    17.94s  agent 발화 시작: <ret> The University of Michigan was founded in 1817 in Detr
    17.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.36s]: The University of Michigan was founded in 1817 in Detroit, Michigan, b
    17.94s  agent 발화 끝
    30.29s  user  발화 시작: …was it hard to move everything back then?
    30.29s  agent 발화 끝
    33.48s  agent 발화 시작: That's a very thoughtful question! Moving a university in 18
    33.48s  user  발화 끝
    41.45s  user  발화 시작: Nice.
    41.45s  agent 발화 끝
    41.85s  agent 발화 시작: —and of course, all the people connected to the university. 
    41.85s  user  발화 끝
    54.21s  user  발화 시작: That sounds stressful. What was Ann Arbor like at that time?
    54.21s  agent 발화 끝
    58.59s  agent 발화 시작: Uh-huh.
    58.59s  user  발화 끝
    58.83s  <ret> 발화 (turn13 첫 프레임)
    58.99s  agent 발화 시작: <ret> In 1837, Ann Arbor was a small village with a populati
    58.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.35s]: In 1837, Ann Arbor was a small village with a population of around 1,0
    58.99s  agent 발화 끝
    73.34s  agent 발화 끝
