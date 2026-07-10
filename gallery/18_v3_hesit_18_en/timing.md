# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Casey",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-26",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-08-24",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-08-22",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: uh, I was wondering… who has scored the most goals in a Prem
     4.06s  <ret> 발화 (turn1 첫 프레임)
     4.24s  agent 발화 시작: <ret> It’s actually Luis Suárez who holds that record. He sc
     4.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: Luis Suárez holds the record for most Premier League goals in a single
     4.40s  user  발화 끝
    13.79s  agent 발화 끝
    13.94s  user  발화 시작: wow, thirty-one? That's… a lot.
    17.49s  agent 발화 시작: It really is! That kind of dedication and skill takes a lot 
    17.55s  user  발화 끝
    25.56s  user  발화 시작: hmm, I guess so. Do you think I should set more goals for my
    25.79s  agent 발화 끝
    30.52s  user  발화 끝
    30.60s  agent 발화 시작: And something we can definitely explore. Perhaps we can talk
    36.94s  agent 발화 끝
