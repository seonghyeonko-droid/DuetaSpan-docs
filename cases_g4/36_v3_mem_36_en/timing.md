# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Amelia",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-21",
#       "category": "show",
#       "text": "User is currently watching a sci-fi series."
#     },
#     {
#       "date": "2026-05-15",
#       "category": "schedule",
#       "text": "User has a 9-to-6 weekday schedule."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "phone",
#       "text": "User uses a Pixel 8."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "hobby",
#       "text": "User is into woodworking."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "allergy",
#       "text": "User is allergic to dust mites."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "child",
#       "text": "User has a child named Haruto, age 8."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "work",
#       "text": "User works as a HR manager."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "partner",
#       "text": "User's partner is named Mina."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-10",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-02-03",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-01-22",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm okay, just a bit stressed with | S2 That's right! It's been a hectic w | S3 I'd like that. Actually, I'm plann | S4 It really is. I'm thinking of maki

     0.00s  agent 발화 시작: Hi Amelia, I'm Koen! It's so lovely to meet you. How are you
     3.54s  user  발화 시작: Yeah.
     4.17s  user  발화 끝
     5.51s  agent 발화 끝
     6.70s  user  발화 시작: I'm okay, just a bit stressed with work. I can't remember...
    12.09s  <ret> 발화 (turn3 첫 프레임)
    12.21s  user  발화 끝
    12.49s  agent 발화 시작: <ret> Yes, you mentioned a while back that you work as an HR
    13.03s  ⚡SPAN 주입 [d'=0.94s / d_lead=3.75s]: [2026-01-05] User works as a HR manager.
    16.23s  agent 발화 끝
    16.30s  user  발화 시작: That's right! It's been a hectic week. I really need to unwi
    20.87s  agent 발화 시작: [happy] I completely understand. Maybe we could put together
    20.98s  user  발화 끝
    28.74s  agent 발화 끝
    29.77s  user  발화 시작: I'd like that. Actually, I'm planning a little project. Do y
    33.25s  agent 발화 시작: Yeah.
    33.89s  agent 발화 끝
    35.53s  <ret> 발화 (turn8 첫 프레임)
    35.69s  agent 발화 시작: <ret> Oh, let me see... You told me you're into woodworking!
    35.84s  user  발화 끝
    36.89s  ⚡SPAN 주입 [d'=1.36s / d_lead=1.34s]: [2026-04-05] User is into woodworking.
    42.73s  user  발화 시작: It really is. I'm thinking of making a small shelf.
    42.73s  agent 발화 끝
    44.80s  agent 발화 시작: Mhm.
    45.57s  agent 발화 끝
    45.92s  agent 발화 시작: [curious] That sounds wonderful. Focusing on the grain of th
    46.10s  user  발화 끝
    54.13s  agent 발화 끝
