# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Kim",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-28",
#       "category": "savings",
#       "text": "User is saving for a new car."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "anniversary",
#       "text": "User's anniversary is November 1."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "show",
#       "text": "User is currently watching a stand-up comedy special."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "pet",
#       "text": "User has a Maine Coon named Simba."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-05",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2025-12-28",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Orias, do you know who first s | S2 …what I thought at all. | S3 No way, it was definitely Ellie Go | S4 Thanks, Orias. You saved me from l

     0.00s  user  발화 시작: Hey Orias, do you know who first sang “How Long Will I Love 
     6.48s  <ret> 발화 (turn1 첫 프레임)
     6.71s  agent 발화 시작: <ret> Oh, that’s a good one! It was actually The Waterboys w
     6.71s  user  발화 끝
     7.24s  ⚡SPAN 주입 [d'=0.76s / d_lead=9.40s]: The song “How Long Will I Love You” was first released by The Waterboy
    16.11s  user  발화 시작: Exactly.
    16.11s  agent 발화 끝
    16.45s  user  발화 시작: Really? Huh. That's not…
    16.45s  user  발화 끝
    17.79s  user  발화 시작: …what I thought at all.
    17.79s  user  발화 끝
    19.47s  user  발화 시작: No way, it was definitely Ellie Goulding!
    19.47s  user  발화 끝
    21.82s  user  발화 시작: … I mean, I guess I was wrong.
    21.82s  user  발화 끝
    24.51s  agent 발화 시작: It’s easy to get those covers mixed up! Ellie Goulding did a
    24.51s  user  발화 끝
    32.23s  user  발화 시작: Thanks, Orias. You saved me from losing the bet! Maybe I sho
    32.23s  agent 발화 끝
    38.60s  agent 발화 시작: [curious] You know, it's good to be open to learning, even—o
    38.60s  user  발화 끝
    45.65s  agent 발화 끝
