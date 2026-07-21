# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "Zoe",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "early 40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-29",
#       "category": "partner",
#       "text": "User's partner is named Clara."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "floor",
#       "text": "User lives on the 15th floor."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "skill",
#       "text": "User is getting fairly good at vintage synth collecting."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "home",
#       "text": "User's home address is 567 Chestnut Street."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "sibling",
#       "text": "User has a younger sibling named Kenji."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "dish",
#       "text": "User's go-to comfort dish is bún chả."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "wake",
#       "text": "User usually wakes up around 6am."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "phone",
#       "text": "User uses an iPhone SE."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-09",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2025-12-25",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need to find a bus for five people from Dallas to Houston 
     5.79s  agent 발화 시작: Yeah.
     6.24s  agent 발화 끝
     8.20s  user  발화 끝
     8.42s  agent 발화 시작: It absolutely can be tricky, yes. Life changes so much, does
    12.96s  agent 발화 끝
    12.97s  user  발화 시작: It does. I just moved to Dallas, and I don't really know any
    16.02s  user  발화 끝
    16.07s  agent 발화 시작: [curious] Moving is a big step! It's really common to feel t
    25.64s  user  발화 시작: What’s the best way to start? Should I just… reach out to pe
    26.13s  agent 발화 끝
    29.09s  <ret> 발화 (turn6 첫 프레임)
    29.27s  agent 발화 시작: <ret> The best way to start is often just reaching out first
    29.35s  user  발화 끝
    30.09s  ⚡SPAN 주입 [d'=0.99s / d_lead=12.56s]: Reaching out first is a great way to start building friendships, as it
    41.84s  agent 발화 끝
