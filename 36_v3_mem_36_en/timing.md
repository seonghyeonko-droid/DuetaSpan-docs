# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Noa",
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
#       "date": "2026-06-28",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-11-19",
#       "category": "home",
#       "text": "User's home address is 230 Oak Avenue."
#     },
#     {
#       "date": "2025-07-23",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Um, well, I was hoping you could h | S2 That's right! And I was also looki | S3 …actually, do you think a hybrid i | S4 That sounds good. I’m also allergi

     0.00s  agent 발화 시작: Hi Noa, I'm Kloraen. It’s lovely to meet you.
     3.32s  user  발화 시작: Yeah.
     3.32s  agent 발화 끝
     3.69s  user  발화 시작: Um, well, I was hoping you could help me remember something.
     3.69s  user  발화 끝
     7.51s  <ret> 발화 (turn3 첫 프레임)
     7.75s  agent 발화 시작: <ret> You are planning a trip to Switzerland in March, accor
     7.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.80s]: [2025-07-23] User is planning a trip to Switzerland in March.
     7.75s  user  발화 끝
    12.54s  user  발화 시작: Yeah.
    12.54s  agent 발화 끝
    12.91s  user  발화 시작: That's right! And I was also looking at cars, wasn't I?
    12.91s  user  발화 끝
    16.57s  <ret> 발화 (turn6 첫 프레임)
    16.97s  agent 발화 시작: <ret> You were researching used cars, specifically hybrid mo
    16.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.80s]: [2026-06-05] Past chat — Researching a used car: comparing hybrid mode
    16.97s  user  발화 끝
    21.76s  user  발화 시작: …actually, do you think a hybrid is the right choice for cit
    21.76s  agent 발화 끝
    26.56s  agent 발화 시작: Hybrids are often fantastic for city driving, offering bette
    26.56s  user  발화 끝
    30.61s  user  발화 시작: Yeah.
    30.61s  agent 발화 끝
    30.98s  agent 발화 시작: …because of the electric motor assisting at lower speeds. It
    30.98s  user  발화 끝
    39.47s  user  발화 시작: Yeah.
    39.47s  agent 발화 끝
    39.84s  user  발화 시작: That sounds good. I’m also allergic to something, right?
    39.84s  user  발화 끝
    43.00s  <ret> 발화 (turn13 첫 프레임)
    43.16s  agent 발화 시작: <ret> Yes, my notes indicate you are allergic to pollen. Per
    43.16s  ⚡SPAN 주입 [d'=1.68s / d_lead=8.85s]: [2025-06-21] User is allergic to pollen.
    43.16s  user  발화 끝
    52.01s  agent 발화 끝
