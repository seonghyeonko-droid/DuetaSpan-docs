# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Camille",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "home",
#       "text": "User's home address is 874 Birch Road."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 How many senators are there in the | S2 So, the House is much bigger. I'm  | S3 What's the best way to get my name | S4 Great! Thanks, Nias, that’s really

     0.00s  user  발화 시작: How many senators are there in the French Senate?
     2.58s  <ret> 발화 (turn1 첫 프레임)
     2.67s  agent 발화 시작: <ret> And I’m sorry, but I don’t currently have that specifi
     2.77s  user  발화 끝
     4.07s  user  발화 시작: Mhm.
     4.26s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.24s]: (no information found)
     4.57s  user  발화 끝
     5.72s  user  발화 시작: Oh. Well, what about the US Senate? How many senators are th
     5.90s  agent 발화 끝
     9.73s  <ret> 발화 (turn4 첫 프레임)
     9.79s  user  발화 끝
     9.97s  agent 발화 시작: <ret> There are one hundred senators in the US Senate, with 
    10.85s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.90s]: [source: Wikipedia] The United States Senate has one hundred senators,
    12.88s  user  발화 시작: Okay.
    13.42s  user  발화 끝
    14.88s  agent 발화 끝
    15.00s  user  발화 시작: Two from each state, right. And how does that compare to the
    20.00s  agent 발화 시작: The House of Representatives has four hundred thirty-five me
    20.00s  user  발화 끝
    25.42s  agent 발화 끝
    26.16s  user  발화 시작: So, the House is much bigger. I'm thinking of running for of
    30.17s  agent 발화 시작: That’s wonderful to hear! It takes courage to consider publi
    30.27s  user  발화 끝
    31.51s  user  발화 시작: Yeah, yeah.
    32.47s  user  발화 끝
    34.47s  agent 발화 끝
    35.36s  user  발화 시작: Yeah, but I’m not sure where to start. It seems so… daunting
    38.90s  agent 발화 시작: It absolutely can feel that way. It's okay to feel overwhelm
    39.06s  user  발화 끝
    43.34s  agent 발화 끝
    43.94s  user  발화 시작: What's the best way to get my name out there, do you think?
    46.60s  agent 발화 시작: Building community connections is a great first step, volunt
    46.71s  user  발화 끝
    51.23s  agent 발화 끝
    51.24s  user  발화 시작: Okay, that makes sense. What about fundraising? Is that hard
    54.88s  <ret> 발화 (turn16 첫 프레임)
    54.96s  agent 발화 시작: <ret> There are workshops on October twenty-seventh and Nove
    55.03s  user  발화 끝
    56.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.82s]: (tool result) Political Campaign Workshops: Oct 27, 7 PM, City Hall; N
    58.19s  user  발화 시작: Okay.
    58.77s  user  발화 끝
    59.78s  agent 발화 끝
    60.08s  user  발화 시작: That’s perfect! The twenty-seventh works. Can you sign me up
    63.88s  <ret> 발화 (turn19 첫 프레임)
    64.28s  agent 발화 시작: <ret> You're registered for the workshop on October twenty-s
    64.34s  user  발화 끝
    65.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.12s]: (tool result) Registration confirmed for Political Campaign Workshop, 
    66.86s  user  발화 시작: Right.
    67.36s  user  발화 끝
    68.33s  user  발화 시작: Great! Thanks, Nias, that’s really helpful.
    68.40s  agent 발화 끝
    70.91s  agent 발화 시작: You’re very welcome. It sounds like you’re taking positive s
    71.10s  user  발화 끝
    75.94s  agent 발화 끝
    77.25s  user  발화 시작: I appreciate it. I feel a little less lost now.
    80.11s  agent 발화 시작: That’s wonderful to hear. Remember, small steps forward are 
    80.16s  user  발화 끝
    84.45s  agent 발화 끝
