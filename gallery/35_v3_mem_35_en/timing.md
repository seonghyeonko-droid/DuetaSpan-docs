# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Jamie",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-19",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Frol, nice to meet you too. I’m | S2 Hmm, I really love good food, espe | S3 Oh, that would be perfect! Are the | S4 Okay, good to know. So maybe focus

     0.00s  agent 발화 시작: Hi Jamie, I’m Frol. It’s lovely to meet you. I’m a life coac
     7.86s  user  발화 시작: Yeah.
     7.86s  agent 발화 끝
     8.22s  user  발화 시작: Hi Frol, nice to meet you too. I’m trying to plan a trip to 
     8.22s  user  발화 끝
    16.12s  <ret> 발화 (turn3 첫 프레임)
    16.44s  agent 발화 시작: <ret> I remember you mentioned planning a trip to Kyoto this
    16.44s  user  발화 끝
    16.81s  ⚡SPAN 주입 [d'=0.69s / d_lead=8.58s]: [2026-06-16] User is planning a trip to Kyoto in October.
    25.01s  user  발화 시작: That sounds great, actually. I'm not sure where to even star
    25.01s  agent 발화 끝
    30.73s  agent 발화 시작: Kyoto offers so much – temples, gardens, traditional arts… T
    30.73s  user  발화 끝
    38.95s  user  발화 시작: Hmm, I really love good food, especially Italian.
    38.95s  agent 발화 끝
    41.39s  <ret> 발화 (turn7 첫 프레임)
    41.81s  agent 발화 시작: <ret> That’s fantastic! Knowing your love for Italian cuisin
    41.81s  user  발화 끝
    42.34s  ⚡SPAN 주입 [d'=0.95s / d_lead=7.50s]: [2026-04-17] User's favorite cuisine is Italian.
    49.31s  user  발화 시작: Uh-huh.
    49.31s  agent 발화 끝
    49.67s  user  발화 시작: Oh, that would be perfect! Are there any specifically with g
    49.67s  user  발화 끝
    55.74s  agent 발화 시작: Right.
    55.74s  user  발화 끝
    55.87s  <ret> 발화 (turn11 첫 프레임)
    56.10s  agent 발화 시작: <ret> Yes, absolutely. Knowing you're pescatarian helps a lo
    56.10s  agent 발화 끝
    56.64s  ⚡SPAN 주입 [d'=0.76s / d_lead=7.50s]: [2026-03-30] User is pescatarian.
    63.60s  user  발화 시작: …actually, before we go too deep into restaurants, do you th
    63.60s  agent 발화 끝
    71.11s  agent 발화 시작: Right.
    71.11s  user  발화 끝
    71.46s  agent 발화 시작: That’s a very smart question. Booking popular experiences li
    71.46s  agent 발화 끝
    80.04s  user  발화 시작: Okay, good to know. So maybe focus on booking those first, t
    80.04s  agent 발화 끝
    86.11s  agent 발화 시작: Exactly. Prioritizing those experiences is a great approach.
    86.11s  user  발화 끝
    96.48s  agent 발화 끝
