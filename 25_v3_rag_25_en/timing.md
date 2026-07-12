# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Sam",
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
#       "date": "2026-05-30",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-31",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "home",
#       "text": "User's home address is 505 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi, I was wondering who directed t | S2 Actually, before that, what's the  | S3 Sounds nice… | S4 …but a bit warm. Thanks, Friia.

     0.00s  user  발화 시작: Hi, I was wondering who directed the new Benji movie?
     3.16s  <ret> 발화 (turn1 첫 프레임)
     3.32s  agent 발화 시작: <ret> Well, that would be Brandon Camp — he wrote, co-produc
     3.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.97s]: Brandon Camp wrote, co-produced, and directed the upcoming American dr
     3.32s  user  발화 끝
    11.30s  user  발화 시작: Hmm, Brandon Camp… I haven’t heard of him.
    11.30s  agent 발화 끝
    13.95s  agent 발화 시작: [curious] That’s alright! Many talented people work behind t
    13.95s  user  발화 끝
    21.60s  user  발화 시작: Actually, before that, what's the weather like in Seoul righ
    21.60s  agent 발화 끝
    25.01s  <ret> 발화 (turn5 첫 프레임)
    25.25s  agent 발화 시작: <ret> It’s currently 26.0°C in Seoul, with 76% humidity and 
    25.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.98s]: (tool result) Current conditions in Seoul are 26.0°C, humidity 76%, wi
    25.25s  user  발화 끝
    32.23s  user  발화 시작: Yeah, yeah.
    32.23s  agent 발화 끝
    32.89s  user  발화 시작: Sounds nice…
    32.89s  user  발화 끝
    33.56s  user  발화 시작: …but a bit warm. Thanks, Friia.
    33.56s  user  발화 끝
    35.55s  agent 발화 시작: You’re very welcome! I’m glad I could help. Staying comforta
    35.55s  user  발화 끝
    41.53s  agent 발화 끝
