# v3_pers_40_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "Amelia",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "mid 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "dislike",
#       "text": "User can't stand cilantro."
#     },
#     {
#       "date": "2026-06-16",
#       "category": "learning",
#       "text": "User is studying for a driving test."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "bloodtype",
#       "text": "User's blood type is AB+."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "hobby",
#       "text": "User is into urban sketching."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "pet",
#       "text": "User has a Dachshund named Pepper."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     },
#     {
#       "date": "2026-05-08",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-02-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2025-12-09",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: [happy] Hello Amelia! I'm Hunan, your life coach.
     3.38s  agent 발화 끝
     4.22s  user  발화 시작: I've been staring at my phone until two in the morning every
     7.44s  agent 발화 시작: Mhm.
     7.84s  agent 발화 끝
     9.74s  agent 발화 시작: That's a common struggle. The blue light from your screen ac
     9.92s  user  발화 끝
    18.50s  user  발화 시작: Is there anything I can do instead? I don't want to just lie
    18.59s  agent 발화 끝
    23.47s  agent 발화 시작: Try a wind-down routine. Reading a physical book or doing so
    23.68s  user  발화 끝
    26.81s  user  발화 시작: Yeah.
    27.53s  user  발화 끝
    32.11s  user  발화 시작: I'll try the stretching tonight. Thanks, Hunan.
    32.42s  agent 발화 끝
    34.47s  user  발화 끝
