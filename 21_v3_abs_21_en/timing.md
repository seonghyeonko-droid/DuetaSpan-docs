# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "William",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-13",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-20",
#       "category": "home",
#       "text": "User's home address is 487 Maple Drive."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-05-31",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 How many years ago did the… | S2 …Rocky Mountains arise in northeas | S3 Oh, um… that’s a shame. | S4 Actually, could you tell me the cu

     0.00s  user  발화 시작: How many years ago did the…
     2.35s  user  발화 끝
     4.16s  user  발화 시작: …Rocky Mountains arise in northeastern Alberta?
     7.39s  user  발화 끝
     7.55s  <ret> 발화 (turn2 첫 프레임)
     7.63s  agent 발화 시작: <ret> Unfortunately, a precise timeframe for the Rocky Mount
     7.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.91s]: (no information found)
    14.54s  agent 발화 끝
    15.30s  user  발화 시작: Oh, um… that’s a shame.
    17.88s  user  발화 끝
    17.99s  agent 발화 시작: It’s okay to not have all the answers, you know? Sometimes t
    21.63s  user  발화 시작: Yeah, yeah.
    23.24s  user  발화 끝
    26.80s  agent 발화 시작: Perhaps we could explore other geological wonders? I find le
    26.93s  agent 발화 끝
    34.37s  user  발화 시작: Actually, could you tell me the current time in Seoul?
    34.54s  agent 발화 끝
    37.07s  <ret> 발화 (turn8 첫 프레임)
    37.15s  agent 발화 시작: <ret> It is currently two thirty-seven PM in Seoul, on Frida
    37.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: (tool result) It is Friday, July 10, 2026 at 2:37 PM in Asia/Seoul rig
    37.28s  user  발화 끝
    45.68s  agent 발화 끝
