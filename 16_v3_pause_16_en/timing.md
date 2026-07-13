# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Charlotte",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-23",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "home",
#       "text": "User's home address is 664 Cedar Lane."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-23",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-04-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, when did Mic | S2 …So who led the team in scoring du | S3 Right. And who did they play in th | S4 What about their current coach? Wh

     0.00s  user  발화 시작: I was just wondering, when did Michigan State basketball act
     5.04s  <ret> 발화 (turn2 첫 프레임)
     5.26s  agent 발화 시작: Right.
     5.26s  user  발화 끝
     5.34s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.14s]: Michigan State Spartans men's basketball won the NCAA Tournament champ
     5.64s  agent 발화 시작: <ret> It's a great question! Michigan State won their only N
     5.64s  agent 발화 끝
    12.78s  user  발화 시작: Yeah.
    12.78s  agent 발화 끝
    13.15s  user  발화 시작: Oh, wow, 1979… That feels like a long time ago. Who was thei
    13.15s  user  발화 끝
    18.79s  agent 발화 시작: Yeah, yeah.
    18.79s  user  발화 끝
    19.10s  <ret> 발화 (turn6 첫 프레임)
    19.54s  agent 발화 시작: <ret> You’re right, it was quite a while ago! Jud Heathcote 
    19.54s  agent 발화 끝
    19.87s  ⚡SPAN 주입 [d'=0.78s / d_lead=6.76s]: Jud Heathcote was the head coach of the Michigan State Spartans men's 
    26.30s  user  발화 시작: Mm-hmm.
    26.30s  agent 발화 끝
    26.68s  user  발화 시작: Interesting. And was Magic Johnson playing for Michigan Stat
    26.68s  user  발화 끝
    31.19s  agent 발화 시작: Mm-hmm.
    31.19s  user  발화 끝
    31.56s  agent 발화 시작: No, Magic Johnson played for Michigan State from 1977 to 197
    31.56s  agent 발화 끝
    40.58s  user  발화 시작: Oh, that’s a shame.…
    40.58s  agent 발화 끝
    42.08s  user  발화 시작: …So who led the team in scoring during that tournament?
    42.08s  user  발화 끝
    45.26s  <ret> 발화 (turn13 첫 프레임)
    45.78s  ⚡SPAN 주입 [d'=1.11s / d_lead=5.64s]: Greg Kelser led the Michigan State Spartans in scoring during the 1979
    45.84s  agent 발화 시작: <ret> Greg Kelser was the team's leading scorer in that tour
    45.84s  user  발화 끝
    51.48s  user  발화 시작: Wow.
    51.48s  agent 발화 끝
    51.85s  user  발화 시작: I see. What was…
    51.85s  user  발화 끝
    53.36s  user  발화 시작: …their record that season?
    53.36s  user  발화 끝
    54.70s  <ret> 발화 (turn17 첫 프레임)
    54.86s  agent 발화 시작: <ret> Their overall record that season was 27 wins and 5 los
    54.86s  user  발화 끝
    55.90s  ⚡SPAN 주입 [d'=1.20s / d_lead=7.52s]: The 1978–79 Michigan State Spartans men's basketball team finished wit
    62.38s  user  발화 시작: Exactly.
    62.38s  agent 발화 끝
    62.75s  user  발화 시작: That’s a pretty good record. Were they heavily favored going
    62.75s  user  발화 끝
    67.64s  agent 발화 시작: Wow.
    67.64s  user  발화 끝
    68.01s  agent 발화 시작: They were a third seed in the tournament, so they weren't ne
    68.01s  agent 발화 끝
    76.28s  user  발화 시작: Yeah.
    76.28s  agent 발화 끝
    76.65s  user  발화 시작: Right. And who did they play in the final four?
    76.65s  user  발화 끝
    79.87s  <ret> 발화 (turn24 첫 프레임)
    80.41s  agent 발화 시작: <ret> They faced Notre Dame in the Final Four, winning 89 to
    80.41s  user  발화 끝
    80.97s  ⚡SPAN 주입 [d'=1.10s / d_lead=7.14s]: Michigan State defeated Notre Dame 89–83 in the semifinal game of the 
    87.55s  user  발화 시작: That must have been a tough game. I’m also curious, what oth
    87.55s  agent 발화 끝
    94.31s  agent 발화 시작: Indiana State, led by Larry Bird, was the top-ranked team an
    94.31s  user  발화 끝
   101.08s  user  발화 시작: Yeah.
   101.08s  agent 발화 끝
   101.45s  user  발화 시작: That makes sense. Larry Bird was amazing. Speaking of great 
   101.45s  user  발화 끝
   105.59s  agent 발화 시작: Michigan State’s success that year wasn’t just about individ
   105.59s  user  발화 끝
   110.10s  user  발화 시작: …do you think they’ll ever win another national championship
   110.10s  agent 발화 끝
   113.48s  agent 발화 시작: That’s a big question! It’s certainly possible. They've had 
   113.48s  user  발화 끝
   119.11s  user  발화 시작: What about their current coach? Who is that?
   119.11s  agent 발화 끝
   121.68s  <ret> 발화 (turn33 첫 프레임)
   122.12s  agent 발화 시작: <ret> The current head coach is Tom Izzo, who has been leadi
   122.12s  user  발화 끝
   122.24s  ⚡SPAN 주입 [d'=0.56s / d_lead=5.64s]: Tom Izzo is the current head coach of the Michigan State Spartans men'
   127.76s  user  발화 시작: Mhm.
   127.76s  agent 발화 끝
   128.13s  user  발화 시작: Oh, I didn’t realize he’d been there that long. Has he won a
   128.13s  user  발화 끝
   133.77s  agent 발화 시작: While Tom Izzo hasn’t won a national championship, he led th
   133.77s  user  발화 끝
   140.53s  user  발화 시작: Okay.
   140.53s  agent 발화 끝
   140.91s  user  발화 시작: Wow, eight times! That’s really impressive. It sounds like h
   140.91s  user  발화 끝
   145.79s  agent 발화 시작: He really is. He’s known for his strong defensive strategies
   145.79s  user  발화 끝
   150.68s  user  발화 시작: Uh-huh.
   150.68s  agent 발화 끝
   151.05s  user  발화 시작: I think I’ll look up some highlights from that 1979 game. Th
   151.05s  user  발화 끝
   157.07s  agent 발화 시작: Right.
   157.07s  user  발화 끝
   157.44s  agent 발화 시작: You’re very welcome! I’m glad I could help you learn about M
   157.44s  agent 발화 끝
   163.08s  agent 발화 끝
