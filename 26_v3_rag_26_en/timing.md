# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Quinn",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-13",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-11-26",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-07-16",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-06-27",
#       "category": "home",
#       "text": "User's home address is 722 Elm Street."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-13",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, when did Mer | S2 I do. But before that, didn’t they | S3 …Was that on a ferry, or am I comp | S4 That was so sweet! It’s amazing ho

     0.00s  user  발화 시작: I was just wondering, when did Meredith and Derek actually g
     5.71s  <ret> 발화 (turn1 첫 프레임)
     5.95s  agent 발화 시작: <ret> Well, that’s a beautiful question! They officially mar
     5.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: Derek Shepherd and Meredith Grey officially married on May 31, 2009, i
     6.02s  user  발화 끝
     8.65s  user  발화 시작: Really?
     9.47s  user  발화 끝
    13.55s  agent 발화 끝
    15.69s  user  발화 시작: Oh, that's right! It wasn’t the big wedding everyone expecte
    20.36s  user  발화 끝
    20.73s  agent 발화 시작: Not at all! It was quite intimate, a real reflection of thei
    22.89s  user  발화 시작: Yeah.
    23.43s  user  발화 끝
    25.57s  user  발화 시작: I do. But before that, didn’t they have a sort of…practice r
    26.19s  agent 발화 끝
    30.41s  user  발화 시작: …Was that on a ferry, or am I completely misremembering?
    30.42s  user  발화 끝
    33.81s  <ret> 발화 (turn8 첫 프레임)
    34.13s  agent 발화 시작: <ret> —they had an unofficial wedding on a ferry in Washingt
    34.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.03s]: Meredith and Derek had an unofficial wedding ceremony on a ferry in Wa
    34.21s  user  발화 끝
    45.16s  agent 발화 끝
    45.19s  user  발화 시작: That was so sweet! It’s amazing how much I still remember ab
    51.02s  user  발화 끝
