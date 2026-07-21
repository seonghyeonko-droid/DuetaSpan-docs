# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Manon",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-20",
#       "category": "phone",
#       "text": "User uses an iPhone 15."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "child",
#       "text": "User has a child named Noah, age 5."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "bloodtype",
#       "text": "User's blood type is AB+."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "employer",
#       "text": "User works at a biotech lab."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "sibling",
#       "text": "User has a younger sibling named Lucas."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cold brew."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-01",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-02-26",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-02-07",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Arun, do you know when Niles… | S2 …and Daphne finally get together o | S3 Wow, season seven… that feels like | S4 That’s a good analogy, actually. I

     0.00s  user  발화 시작: Hey Arun, do you know when Niles…
     3.56s  user  발화 끝
     5.00s  user  발화 시작: …and Daphne finally get together on Frasier? I've been tryin
     9.95s  <ret> 발화 (turn2 첫 프레임)
    10.04s  user  발화 끝
    10.15s  agent 발화 시작: <ret> They finally get together in the final episode of seas
    10.25s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.88s]: Niles and Daphne consummate their relationship in the final episode of
    12.72s  user  발화 시작: Yeah.
    13.54s  user  발화 끝
    18.03s  agent 발화 끝
    19.93s  user  발화 시작: Wow, season seven… that feels like a long time coming.
    21.83s  agent 발화 시작: Yeah.
    22.27s  agent 발화 끝
    24.51s  <ret> 발화 (turn6 첫 프레임)
    24.89s  agent 발화 시작: <ret> [happy] It really is! Their will-they-won’t-they dynam
    24.93s  user  발화 끝
    25.40s  ⚡SPAN 주입(IRRELEVANT) [d'=0.90s / d_lead=7.60s]: The current price of titanium futures is $2,850 per metric ton on the 
    32.39s  agent 발화 시작: They play off each other brilliantly, don’t they?
    32.49s  agent 발화 끝
    34.31s  user  발화 시작: Yeah.
    35.13s  user  발화 끝
    35.27s  agent 발화 시작: And honestly, their journey reminds me a lot of how studying
    35.30s  agent 발화 끝
    43.41s  agent 발화 시작: It’s a bit like spaced repetition, really.
    43.61s  agent 발화 끝
    45.05s  user  발화 시작: Right.
    45.89s  user  발화 시작: That’s a good analogy, actually. I’m struggling with my hist
    46.00s  agent 발화 끝
    46.02s  user  발화 끝
    50.75s  user  발화 끝
