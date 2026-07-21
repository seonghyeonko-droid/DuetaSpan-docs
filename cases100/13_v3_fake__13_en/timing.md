# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Sky",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "sibling",
#       "text": "User has a younger sibling named Kenji."
#     },
#     {
#       "date": "2026-06-06",
#       "category": "partner",
#       "text": "User's partner is named Kenji."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "employer",
#       "text": "User works at a school district."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "schedule",
#       "text": "User has a fully remote setup."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "skill",
#       "text": "User is a complete beginner at rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2025-12-26",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Kellax, I was just wondering… w | S2 Oh, I didn’t know that! | S3 It really is. Was Dorothy a child  | S4 A special award, that’s nice.

     0.00s  user  발화 시작: Hi Kellax, I was just wondering… when did *The Wizard of Oz*
     3.08s  agent 발화 시작: Yeah.
     3.72s  agent 발화 끝
     4.72s  <ret> 발화 (turn2 첫 프레임)
     5.13s  user  발화 끝
     5.27s  agent 발화 시작: <ret> That wonderful film first came out on August twenty-fi
     5.71s  ⚡SPAN 주입 [d'=0.99s / d_lead=6.16s]: The film *The Wizard of Oz* was first released on August 25, 1939, in 
    11.43s  agent 발화 끝
    11.49s  user  발화 시작: Wow, that was a long time ago.
    14.26s  user  발화 끝
    14.62s  agent 발화 시작: It truly was! It’s amazing how some stories continue to reso
    20.74s  agent 발화 끝
    21.91s  user  발화 시작: Definitely. Do you think it’s still popular with kids today?
    23.86s  agent 발화 시작: Yeah.
    24.49s  agent 발화 끝
    26.03s  user  발화 끝
    26.37s  agent 발화 시작: I believe so. Its themes of courage, friendship, and finding
    28.97s  user  발화 시작: Yeah, yeah.
    30.25s  user  발화 끝
    31.70s  agent 발화 끝
    31.77s  user  발화 시작: I guess you’re right. What about the music?
    33.49s  agent 발화 시작: Yeah.
    33.79s  <ret> 발화 (turn11 첫 프레임)
    33.99s  agent 발화 끝
    34.39s  ⚡SPAN 주입 [d'=0.60s / d_lead=6.62s]: Harold Arlen composed the music for *The Wizard of Oz*, with lyrics by
    34.45s  agent 발화 시작: <ret> The music was composed by Harold Arlen, with lyrics pe
    34.59s  user  발화 끝
    41.07s  agent 발화 끝
    41.13s  user  발화 시작: Oh, I didn’t know that!
    43.00s  agent 발화 시작: [happy] It’s fun to learn the details behind the magic, don’
    43.07s  user  발화 끝
    45.87s  agent 발화 끝
    47.32s  user  발화 시작: Yeah, it is. Did they film it all in Kansas?
    48.79s  <ret> 발화 (turn15 첫 프레임)
    50.55s  ⚡SPAN 주입 [d'=1.76s / d_lead=7.13s]: While the story begins in Kansas, *The Wizard of Oz* was primarily fil
    50.61s  agent 발화 시작: <ret> While the story starts in Kansas, much of the film was
    50.69s  user  발화 끝
    54.47s  user  발화 시작: Yeah.
    54.92s  user  발화 끝
    57.75s  agent 발화 끝
    58.43s  user  발화 시작: Oh, so it wasn't really filmed on a farm?
    59.43s  agent 발화 시작: Yeah.
    60.06s  agent 발화 끝
    60.95s  agent 발화 시작: Not entirely! They used sets to create that sense of Kansas,
    61.16s  user  발화 끝
    63.72s  user  발화 시작: Mm-hmm.
    64.20s  user  발화 끝
    66.60s  agent 발화 끝
    66.73s  user  발화 시작: That makes sense. It looked so colorful!
    69.27s  <ret> 발화 (turn22 첫 프레임)
    69.95s  ⚡SPAN 주입(IRRELEVANT) [d'=0.68s / d_lead=4.86s]: The average retail price of organic thyme in Portland, Oregon, is $3.9
    70.01s  agent 발화 시작: <ret> The vibrant colors are definitely one of the things th
    70.29s  user  발화 끝
    74.56s  user  발화 시작: It really is. Was Dorothy a child actor?
    74.87s  agent 발화 끝
    77.45s  <ret> 발화 (turn24 첫 프레임)
    78.65s  ⚡SPAN 주입 [d'=1.19s / d_lead=6.06s]: Judy Garland, who played Dorothy, was only 16 years old during the fil
    78.71s  agent 발화 시작: <ret> Judy Garland, who played Dorothy, was just sixteen yea
    78.91s  user  발화 끝
    83.33s  user  발화 시작: Uh-huh.
    83.88s  user  발화 끝
    84.77s  agent 발화 끝
    85.48s  user  발화 시작: Wow, sixteen! That’s so young. What other movies was she in?
    90.39s  user  발화 시작: …did she win any awards for that role?
    90.58s  user  발화 끝
    92.06s  agent 발화 시작: Yeah.
    92.70s  agent 발화 끝
    93.21s  agent 발화 시작: Well, that’s a really good question. She didn’t actually win
    93.34s  user  발화 끝
    98.36s  user  발화 시작: Oh, really? That's surprising.
    98.86s  agent 발화 끝
   101.05s  agent 발화 시작: It is a bit surprising, isn’t it? She received a special Juv
   101.09s  user  발화 끝
   103.48s  user  발화 시작: Okay.
   104.48s  user  발화 끝
   107.02s  agent 발화 끝
   108.37s  user  발화 시작: A special award, that’s nice.
   111.09s  user  발화 끝
   111.23s  agent 발화 시작: It was a recognition of her incredible talent at such a youn
   114.32s  user  발화 시작: Yeah, totally.
   116.07s  user  발화 끝
   117.67s  agent 발화 끝
   117.76s  user  발화 시작: It really is. Do you think they’ll ever remake it?
   121.70s  user  발화 끝
   122.07s  agent 발화 시작: [curious] That’s a tricky question. It’s such an iconic film
   126.93s  agent 발화 끝
   126.94s  user  발화 시작: I agree. It would be hard to live up to the original.
   128.12s  agent 발화 시작: Yeah.
   128.95s  agent 발화 끝
   130.16s  agent 발화 시작: Exactly. Some stories are best left as they are, cherished f
   130.17s  user  발화 끝
   135.10s  user  발화 시작: That's a good point. Thanks, Kellax.
   135.16s  agent 발화 끝
   137.03s  user  발화 끝
   137.46s  agent 발화 시작: [happy] You're very welcome. I'm glad I could share a bit of
   145.16s  agent 발화 끝
