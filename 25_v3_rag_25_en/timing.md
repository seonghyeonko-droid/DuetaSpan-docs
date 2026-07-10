# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Lukas",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "home",
#       "text": "User's home address is 759 Maple Drive."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-10-22",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-11",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just thinking about that old | S2 Hmm, Loretta Lynn… I always though | S3 What time is it right now, anyway? | S4 That's true. Thanks, Bara.

     0.00s  user  발화 시작: I was just thinking about that old song… “Your Love Had Take
     5.36s  <ret> 발화 (turn1 첫 프레임)
     5.52s  agent 발화 시작: <ret> Well, that’s a lovely song to remember! It was actuall
     5.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: Loretta Lynn and Conway Twitty recorded "Your Love Had Taken Me That H
     5.74s  user  발화 끝
    13.26s  agent 발화 끝
    13.33s  user  발화 시작: Hmm, Loretta Lynn… I always thought it was Dolly Parton.
    16.96s  agent 발화 시작: It’s easy to get those two mixed up, they both have such ama
    16.99s  user  발화 끝
    20.02s  user  발화 시작: Oh.
    20.38s  user  발화 끝
    23.33s  user  발화 시작: What time is it right now, anyway? I’ve completely lost trac
    23.68s  agent 발화 끝
    26.07s  <ret> 발화 (turn6 첫 프레임)
    26.29s  user  발화 끝
    26.31s  agent 발화 시작: <ret> It's currently two thirty-seven in the afternoon in Se
    26.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.95s]: (tool result) It is Friday, July 10, 2026 at 2:37 PM in Asia/Seoul rig
    33.26s  agent 발화 끝
    34.43s  user  발화 시작: That's true. Thanks, Bara.
    36.32s  user  발화 끝
