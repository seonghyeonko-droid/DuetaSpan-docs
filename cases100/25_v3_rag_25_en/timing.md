# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Rowan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-24",
#       "category": "partner",
#       "text": "User's partner is named Rin."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "plant",
#       "text": "User is growing a lemon tree at home."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "hobby",
#       "text": "User is into woodworking."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Sichuan."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "wake",
#       "text": "User usually wakes up around 6am."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "floor",
#       "text": "User lives on the 15th floor."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "dish",
#       "text": "User's go-to comfort dish is mushroom risotto."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "coffee",
#       "text": "User's usual coffee order is a caramel latte."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "phone",
#       "text": "User uses an iPhone 13."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-27",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-05-05",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-04-12",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2026-02-15",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Beaia, do you know anything ab | S2 March 4th, 2016... That's a specif | S3 …Do they tour much, or are they mo | S4 Maybe. I’ll look at their tour…

     0.00s  user  발화 시작: Hey Beaia, do you know anything about the band Architects?
     2.86s  user  발화 끝
     3.17s  agent 발화 시작: Architects are a British metalcore band, known for their emo
    16.40s  agent 발화 끝
    16.66s  user  발화 시작: Okay, cool. What about a band called Like Moths to Flames?
    20.96s  user  발화 끝
    21.02s  <ret> 발화 (turn3 첫 프레임)
    21.03s  agent 발화 시작: <ret> Like Moths to Flames is an American metalcore band, or
    21.12s  ⚡SPAN 주입 [d'=1.03s / d_lead=10.81s]: Like Moths to Flames is an American metalcore band from Atlanta, Georg
    31.84s  agent 발화 끝
    31.95s  user  발화 시작: Atlanta, huh? That’s interesting. Have they released many al
    36.41s  <ret> 발화 (turn5 첫 프레임)
    36.70s  agent 발화 시작: <ret> They released their second full-length album, titled *
    36.91s  user  발화 끝
    37.91s  ⚡SPAN 주입 [d'=1.50s / d_lead=8.76s]: Like Moths to Flames released their second full-length album, *Rage*, 
    42.49s  user  발화 시작: Yeah.
    42.94s  user  발화 끝
    45.47s  agent 발화 끝
    46.64s  user  발화 시작: March 4th, 2016... That's a specific date. What kind of them
    54.76s  user  발화 끝
    55.14s  agent 발화 시작: They often delve into themes of personal struggle, overcomin
    60.75s  user  발화 시작: Yeah, totally.
    61.89s  user  발화 끝
    66.60s  agent 발화 끝
    67.40s  user  발화 시작: I get that. Do they have any songs that are particularly wel
    71.48s  <ret> 발화 (turn11 첫 프레임)
    71.59s  agent 발화 시작: <ret> One of their most popular songs is “Bury Me”, from the
    71.71s  user  발화 끝
    72.63s  ⚡SPAN 주입 [d'=1.15s / d_lead=9.55s]: "Bury Me" from the album *Rage* is one of Like Moths to Flames’ most p
    75.51s  user  발화 시작: Yeah.
    75.95s  user  발화 끝
    80.74s  user  발화 시작: Seventeen million views, wow! That’s a lot. I’m trying to ge
    81.15s  agent 발화 끝
    87.33s  agent 발화 시작: It’s great you’re exploring new music! –
    87.51s  user  발화 끝
    89.72s  user  발화 시작: …Do they tour much, or are they more of a studio band?
    90.38s  agent 발화 끝
    93.24s  agent 발화 시작: They do tour quite frequently, actually. They’ve played show
    93.28s  user  발화 끝
   100.39s  user  발화 시작: Right.
   101.11s  user  발화 끝
   103.86s  agent 발화 끝
   104.05s  user  발화 시작: That’s good to know. Are they still together as a band, or d
   105.68s  agent 발화 시작: Yeah, yeah.
   107.10s  agent 발화 끝
   108.16s  <ret> 발화 (turn20 첫 프레임)
   108.44s  ⚡SPAN 주입 [d'=0.56s / d_lead=9.88s]: As of November 2023, Like Moths to Flames remains an active band, with
   108.45s  user  발화 끝
   108.50s  agent 발화 시작: <ret> As of November 2023, Like Moths to Flames is still an 
   112.81s  user  발화 시작: Mm-hmm.
   113.44s  user  발화 끝
   118.38s  agent 발화 끝
   119.36s  user  발화 시작: Okay, that's a relief. It’s always sad when a good band call
   123.96s  agent 발화 시작: [happy] It is! It's wonderful to hear they're still creating
   124.08s  user  발화 끝
   131.23s  agent 발화 끝
   131.62s  user  발화 시작: Maybe. I’ll look at their tour…
   133.69s  user  발화 끝
   135.71s  user  발화 시작: …dates. Thanks for the info, Beaia.
   137.97s  user  발화 끝
   138.00s  agent 발화 시작: [happy] You're very welcome! I'm glad I could help you disco
   143.80s  agent 발화 끝
