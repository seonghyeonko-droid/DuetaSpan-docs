# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "Milan",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "mid 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "home",
#       "text": "User's home address is 404 Rosewood Drive."
#     },
#     {
#       "date": "2026-06-15",
#       "category": "dish",
#       "text": "User's go-to comfort dish is cold buckwheat noodles."
#     },
#     {
#       "date": "2026-05-13",
#       "category": "airline",
#       "text": "User usually flies with ANA."
#     },
#     {
#       "date": "2026-05-02",
#       "category": "learning",
#       "text": "User is studying for a driving test."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "employer",
#       "text": "User works at a law firm."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "dislike",
#       "text": "User can't stand anchovies."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "emergency",
#       "text": "User's emergency contact is Emma."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "phone",
#       "text": "User uses a Pixel 8."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-07",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-03-08",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm just… really struggling after  | S2 Actually, before we do that – do y | S3 …do you think it’ll make things wo | S4 Okay. Thanks, Moraen. That actuall

     0.00s  user  발화 시작: I'm just… really struggling after the breakup. It feels like
     5.45s  agent 발화 시작: It’s completely normal to feel that way, you know. Adjusting
     5.53s  user  발화 끝
     9.10s  user  발화 시작: Yeah.
     9.55s  user  발화 끝
    12.35s  agent 발화 끝
    13.64s  user  발화 시작: Yeah, I know, but…
    14.89s  user  발화 끝
    15.17s  agent 발화 시작: It's okay to let yourself feel those things, truly. Don’t pu
    20.30s  <ret> 발화 (turn5 첫 프레임)
    20.31s  agent 발화 시작: <ret> Sometimes, a little distraction can help… …perhaps fin
    20.32s  agent 발화 끝
    20.90s  ⚡SPAN 주입 [d'=0.60s / d_lead=2.66s]: Restaurants_2_FindRestaurants({"city": "New York, NY", "cuisine": "Ita
    26.51s  user  발화 시작: Mm-hmm.
    26.96s  user  발화 끝
    29.56s  agent 발화 시작: There's Bella Napoli, rated 4.5 stars, and Trattoria Romana,
    29.62s  agent 발화 끝
    34.30s  user  발화 시작: Yeah.
    34.84s  user  발화 끝
    38.07s  agent 발화 끝
    38.45s  user  발화 시작: Actually, before we do that – do you think it’s okay to try 
    44.93s  agent 발화 시작: That's a really good question—
    44.93s  user  발화 끝
    45.83s  user  발화 시작: …do you think it’ll make things worse, or better, long term?
    46.49s  agent 발화 끝
    47.45s  agent 발화 시작: Okay.
    48.32s  agent 발화 끝
    49.47s  user  발화 끝
    49.52s  agent 발화 시작: It’s a very personal decision. Removing reminders can create
    57.38s  agent 발화 시작: It depends on what feels right for *you*. There's no single 
    57.45s  agent 발화 끝
    59.09s  user  발화 시작: Yeah, totally.
    60.46s  user  발화 끝
    61.83s  agent 발화 끝
    61.95s  user  발화 시작: Okay. Thanks, Moraen. That actually helps.
    64.85s  user  발화 끝
