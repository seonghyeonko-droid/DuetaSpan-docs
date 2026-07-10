# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Sky",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-15",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2025-11-28",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-08-01",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-22",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Uia, do you know who won the c | S2 That's interesting. What other cha | S3 Yeah, definitely. Do you know how… | S4 Oh, I've heard of that…

     0.00s  user  발화 시작: Hey Uia, do you know who won the college world series this y
     3.25s  <ret> 발화 (turn1 첫 프레임)
     3.57s  agent 발화 시작: <ret> It sounds like you're asking about baseball—Oregon Sta
     3.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.12s]: Oregon State defeated Notre Dame 8–2 in the championship series to win
     3.74s  user  발화 끝
    14.60s  agent 발화 시작: That was a really exciting finish!
    14.69s  agent 발화 끝
    17.37s  agent 발화 끝
    17.45s  user  발화 시작: Oh, wow, that’s great! What was the score of the final game 
    21.39s  <ret> 발화 (turn4 첫 프레임)
    21.61s  user  발화 끝
    21.62s  agent 발화 시작: <ret> The final game saw Oregon State defeat Notre Dame by a
    21.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.83s]: Oregon State defeated Notre Dame 8–2 in the championship series to win
    29.32s  agent 발화 시작: It was a decisive victory for them.
    29.45s  agent 발화 끝
    30.59s  user  발화 시작: Yeah.
    30.99s  user  발화 끝
    31.86s  agent 발화 끝
    32.70s  user  발화 시작: That’s amazing. I wonder…
    35.29s  <ret> 발화 (turn8 첫 프레임)
    35.36s  agent 발화 시작: <ret> Sometimes, reflecting on a team's journey can be just 
    35.46s  user  발화 끝
    36.73s  ⚡SPAN 주입 [d'=1.44s / d_lead=7.13s]: Oregon State’s head coach is Mitch Canham, who led the Beavers to thei
    48.61s  agent 발화 시작: A strong leader definitely makes a difference.
    48.72s  agent 발화 끝
    49.98s  user  발화 시작: Yeah.
    50.43s  user  발화 끝
    51.99s  agent 발화 끝
    52.44s  user  발화 시작: That's interesting. What other championships have they won? 
    55.04s  user  발화 시작: …and who did they play in the 2018 championship?
    55.26s  user  발화 끝
    57.85s  <ret> 발화 (turn13 첫 프레임)
    58.08s  agent 발화 시작: <ret> Oregon State also won in two thousand six, two thousan
    58.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.11s]: Oregon State won the College World Series in 2006, 2007, and 2018, def
    58.27s  user  발화 끝
    68.10s  agent 발화 시작: Quite a history of success.
    68.19s  agent 발화 끝
    70.16s  user  발화 시작: North Carolina, huh? I remember that being a close series.
    70.37s  agent 발화 끝
    73.35s  agent 발화 시작: It's wonderful you recall such details—it shows your genuine
    73.40s  user  발화 끝
    79.50s  agent 발화 시작: Sports memories can be so vivid.
    79.70s  agent 발화 끝
    81.91s  user  발화 시작: Yeah, definitely. Do you know how…
    82.08s  agent 발화 끝
    84.31s  user  발화 끝
    85.40s  user  발화 시작: …many total championships Notre Dame has won?
    88.17s  <ret> 발화 (turn20 첫 프레임)
    88.24s  agent 발화 시작: <ret> Notre Dame has won one College World Series championsh
    88.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.17s]: Notre Dame has won one College World Series championship, in 2023.
    88.44s  user  발화 끝
    95.33s  agent 발화 시작: It was their first time claiming the title.
    95.41s  agent 발화 끝
    98.10s  agent 발화 끝
    99.06s  user  발화 시작: Just one? That’s surprising.
   100.73s  <ret> 발화 (turn23 첫 프레임)
   100.81s  agent 발화 시작: <ret> The two thousand twenty-four College World Series was 
   100.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.83s]: The 2024 College World Series was held at Charles Schwab Field Omaha i
   101.05s  user  발화 끝
   108.58s  agent 발화 시작: A beautiful venue for such an event.
   108.65s  agent 발화 끝
   110.99s  agent 발화 끝
   111.07s  user  발화 시작: Oh, I've heard of that…
   112.59s  user  발화 끝
   113.55s  user  발화 시작: …stadium. Thanks for the info, Uia.
   115.81s  agent 발화 시작: You’re very welcome. It's a pleasure to share these details 
   115.84s  user  발화 끝
   119.89s  agent 발화 시작: I hope you have a lovely day ahead.
   120.03s  agent 발화 끝
   122.10s  agent 발화 끝
