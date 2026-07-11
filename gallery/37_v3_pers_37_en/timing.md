# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Kim",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-18",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-11-01",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-02",
#       "category": "home",
#       "text": "User's home address is 255 Maple Drive."
#     },
#     {
#       "date": "2025-09-08",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Kim, it’s lovely to meet you. I’m Droia, and I’m here 
     6.07s  user  발화 시작: Right.
     6.80s  user  발화 끝
     7.88s  agent 발화 끝
     8.10s  user  발화 시작: Oh, Droia… that’s a really unusual name. What exactly *does*
    15.38s  agent 발화 시작: It’s a name my creators chose, Kim. I’m not a therapist, but
    15.46s  user  발화 끝
    24.89s  agent 발화 끝
    25.43s  user  발화 시작: Welll… um, it’s just my sister and I have been arguing const
    32.22s  agent 발화 시작: That sounds incredibly draining, Kim. It's common for disagr
    32.42s  user  발화 끝
    42.05s  agent 발화 끝
