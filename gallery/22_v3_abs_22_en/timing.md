# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Avery",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-20",
#       "category": "home",
#       "text": "User's home address is 472 Oak Avenue."
#     },
#     {
#       "date": "2025-09-10",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-09-09",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-08-15",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-07-09",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-02",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What does James Liebman reject? | S2 Oh. Well, who *is* James Liebman? | S3 …Is he known for any particular ca | S4 That's a good point. Thanks, Boras

     0.00s  user  발화 시작: What does James Liebman reject?
     0.02s  <ret> 발화 (turn3 첫 프레임)
     0.05s  agent 발화 시작: It appears there’s no readily available information detailin
     0.05s  user  발화 끝
     0.19s  user  발화 시작: Oh. Well, who *is* James Liebman?
     0.19s  agent 발화 끝
     0.26s  agent 발화 시작: <ret> James Liebman is a professor at Columbia Law School—
     0.26s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: James Liebman is the Simeon E. Baldwin Professor of Law at Columbia La
     0.26s  user  발화 끝
     0.35s  user  발화 시작: …Is he known for any particular cases?
     0.35s  agent 발화 끝
     0.43s  agent 발화 시작: He's a highly respected scholar, and his work focuses more o
     0.43s  user  발화 끝
     0.61s  user  발화 시작: Yeah.
     0.61s  agent 발화 끝
     0.62s  agent 발화 시작: It’s common to find fulfillment in contributing to the broad
     0.62s  user  발화 끝
     0.94s  user  발화 시작: That's a good point. Thanks, Boras.
     0.94s  agent 발화 끝
     1.00s  user  발화 끝
