# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Kim",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "floor",
#       "text": "User lives on the 3rd floor."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "savings",
#       "text": "User is saving for a trip to Europe next year."
#     },
#     {
#       "date": "2026-05-19",
#       "category": "commute",
#       "text": "User works from home."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "emergency",
#       "text": "User's emergency contact is Sofia."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "medication",
#       "text": "User takes medication for migraines."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in June."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "show",
#       "text": "User is currently watching a slow-burn detective drama."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-24",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-05-12",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-04-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-03-09",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was reading about sociology and  | S2 Wow, that's a long time.… | S3 …I wonder what caused it. | S4 It really makes you think about ho

     0.00s  user  발화 시작: I was reading about sociology and got curious. When did the 
     6.38s  <ret> 발화 (turn1 첫 프레임)
     6.58s  agent 발화 시작: <ret> That's a heavy topic, but it's important to understand
     6.77s  user  발화 끝
     6.98s  ⚡SPAN 주입 [d'=0.60s / d_lead=3.93s]: The US prison population began to rise dramatically since 1973.
    17.71s  agent 발화 끝
    18.45s  user  발화 시작: Wow, that's a long time.…
    20.95s  user  발화 끝
    22.21s  user  발화 시작: …I wonder what caused it.
    23.43s  <ret> 발화 (turn4 첫 프레임)
    23.55s  agent 발화 시작: <ret> [curious] It's a complex mix of policy changes and soc
    23.72s  user  발화 끝
    24.58s  ⚡SPAN 주입(IRRELEVANT) [d'=1.15s / d_lead=8.02s]: The current temperature in Reykjavik, Iceland is 8 degrees Celsius wit
    31.56s  agent 발화 끝
    31.94s  user  발화 시작: It really makes you think about how we define justice.
    35.17s  agent 발화 시작: [happy] Exactly. Shifting that perspective is such a huge pa
    35.18s  user  발화 끝
    40.73s  agent 발화 끝
