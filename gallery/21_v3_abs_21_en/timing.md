# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Charlie",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-09-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-09-11",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2025-07-10",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-07-01",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-06-12",
#       "category": "home",
#       "text": "User's home address is 559 Maple Drive."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What caused the Roman civilization | S2 Oh, um, well… that’s… disappointin | S3 [sigh] Do you help people with, li | S4 That sounds… good. Can you tell me

     0.00s  user  발화 시작: What caused the Roman civilization to collapse?
     3.38s  agent 발화 시작: That’s a question historians still debate, honestly. There i
     3.46s  user  발화 끝
     7.61s  user  발화 시작: Yeah.
     8.10s  user  발화 끝
    10.40s  user  발화 시작: Oh, um, well… that’s… disappointing.
    10.47s  agent 발화 끝
    14.14s  agent 발화 시작: It can be, yes. Often, the most interesting stories are the 
    14.24s  user  발화 끝
    16.98s  user  발화 시작: Oh.
    17.48s  user  발화 끝
    20.19s  user  발화 시작: [sigh] Do you help people with, like, financial stress?
    20.30s  agent 발화 끝
    23.33s  agent 발화 시작: I do. As Ari, I work with people to build a calmer relations
    23.38s  user  발화 끝
    32.23s  agent 발화 끝
    32.59s  user  발화 시작: That sounds… good. Can you tell me the current time in Seoul
    37.18s  <ret> 발화 (turn9 첫 프레임)
    37.42s  agent 발화 시작: <ret> It is Friday, July 10, 2026 at 2:37 PM in Asia/Seoul r
    37.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.21s]: (tool result) It is Friday, July 10, 2026 at 2:37 PM in Asia/Seoul rig
    37.54s  user  발화 끝
    47.63s  agent 발화 끝
