# v3_noinfo_23_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Andrea",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-17",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-06-12",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-01",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you remember what I told you ab | S2 Could you find me a picture of tha | S3 Oh, that’s a shame. What was the w | S4 That sounds lovely. It's good to r

     0.00s  user  발화 시작: Do you remember what I told you about my grandmother?
     1.94s  <ret> 발화 (turn1 첫 프레임)
     2.34s  agent 발화 시작: <ret> I do. You told me about your grandmother, Eleanor Vanc
     2.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.00s]: [2024-07-03] My grandmother, Eleanor Vance, loved gardening and always
     2.54s  user  발화 끝
     6.59s  user  발화 시작: Right.
     7.08s  user  발화 끝
     9.34s  agent 발화 끝
     9.52s  user  발화 시작: Could you find me a picture of that hat?
    11.66s  <ret> 발화 (turn4 첫 프레임)
    12.06s  agent 발화 시작: <ret> I’ve searched, but unfortunately, I couldn’t find a pi
    12.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: (no information found)
    12.20s  user  발화 끝
    15.02s  user  발화 시작: Yeah.
    15.65s  user  발화 끝
    17.80s  agent 발화 끝
    17.90s  user  발화 시작: Oh, that’s a shame. What was the weather like on her birthda
    22.00s  <ret> 발화 (turn7 첫 프레임)
    22.40s  agent 발화 시작: <ret> On July fifteenth, 2018, in Anytown, the weather was t
    22.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.57s]: (tool result) The weather in Anytown, USA on July 15, 2018 was 26.7°C,
    22.58s  user  발화 끝
    32.97s  agent 발화 끝
    33.23s  user  발화 시작: That sounds lovely. It's good to remember those details.
    36.28s  user  발화 끝
    36.34s  agent 발화 시작: It is. Sometimes, even small details can bring back a great 
    43.29s  agent 발화 끝
