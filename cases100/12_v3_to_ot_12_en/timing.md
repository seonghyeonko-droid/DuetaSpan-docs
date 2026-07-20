# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Sky",
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
#       "date": "2026-06-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "work",
#       "text": "User works as a carpenter."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "streaming",
#       "text": "User subscribes to Twitch and Spotify."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "dish",
#       "text": "User's go-to comfort dish is bún chả."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "allergy",
#       "text": "User is allergic to bee stings."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "learning",
#       "text": "User is studying for a driving test."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "airline",
#       "text": "User usually flies with Cathay Pacific."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-15",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-01-06",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-01-04",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hi moshi, I was wondering… when did people start talking abo
     5.22s  <ret> 발화 (turn1 첫 프레임)
     5.44s  agent 발화 시작: <ret> The term “Internet of Things” actually came about in n
     5.70s  user  발화 끝
     5.97s  ⚡SPAN 주입 [d'=0.76s / d_lead=10.67s]: Kevin Ashton coined the phrase “Internet of Things” in 1999 while work
    16.11s  agent 발화 끝
    17.44s  user  발화 시작: Oh, hold on a sec… yeah, okay, sorry.
    20.92s  user  발화 시작: Right, nineteen ninety-nine. That’s… earlier than I thought.
    21.09s  user  발화 끝
    23.75s  agent 발화 시작: Yeah.
    24.39s  agent 발화 끝
    25.01s  agent 발화 시작: [curious] It is a bit surprising, isn’t it? It took a while 
    25.13s  user  발화 끝
    30.21s  user  발화 시작: Okay.
    31.03s  user  발화 끝
    33.51s  agent 발화 시작: And sometimes, when things change quickly, it’s okay to feel
    33.72s  agent 발화 끝
    43.30s  agent 발화 끝
