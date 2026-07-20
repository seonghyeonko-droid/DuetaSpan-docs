# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Milan",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "child",
#       "text": "User has a child named Jisoo, age 4."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "streaming",
#       "text": "User subscribes to Twitch and Spotify."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "diet",
#       "text": "User is low-sodium."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "airline",
#       "text": "User usually flies with Korean Air."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "anniversary",
#       "text": "User's anniversary is June 14."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "dislike",
#       "text": "User can't stand olives."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-02",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-04-08",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi, moshi. I'm feeling a bit overw | S2 Yeah, it is. I'm thinking of tryin | S3 …Anyway, that temple sounds perfec | S4 What’s that?

     0.00s  user  발화 시작: Hi, moshi. I'm feeling a bit overwhelmed today.
     2.78s  agent 발화 시작: Hello. It’s completely understandable to feel overwhelmed so
     2.96s  user  발화 끝
    12.23s  agent 발화 끝
    13.25s  user  발화 시작: Thanks. Um, I was watching a movie last night, Walk the Line
    18.67s  <ret> 발화 (turn3 첫 프레임)
    19.12s  agent 발화 시작: <ret> The actors Joaquin Phoenix and Reese Witherspoon did m
    19.31s  user  발화 끝
    19.80s  ⚡SPAN 주입 [d'=1.17s / d_lead=9.69s]: Joaquin Phoenix and Reese Witherspoon performed the songs in the film 
    26.67s  user  발화 시작: Wow.
    27.44s  user  발화 끝
    28.81s  agent 발화 끝
    28.84s  user  발화 시작: Oh, Waylon Payne? I didn’t know that.
    30.95s  user  발화 끝
    31.07s  agent 발화 시작: It’s a detail many people miss! He's a very talented musicia
    35.88s  agent 발화 끝
    35.89s  user  발화 시작: I'm trying to remember… did I tell you I’m going to Busan ne
    39.25s  agent 발화 시작: I don’t have a record of that yet, but it’s good to know. Bu
    39.30s  user  발화 끝
    43.65s  user  발화 시작: Mm-hmm.
    44.41s  user  발화 끝
    45.26s  user  발화 시작: Yeah, it is. I'm thinking of trying to find a quiet temple t
    45.32s  agent 발화 끝
    46.46s  agent 발화 시작: Okay.
    47.28s  agent 발화 끝
    48.87s  user  발화 끝
    49.05s  agent 발화 시작: That sounds lovely. Busan has several peaceful temples. Woul
    53.30s  user  발화 시작: Yeah.
    54.03s  user  발화 끝
    57.07s  agent 발화 끝
    57.61s  user  발화 시작: Yes, please! That would be great.
    59.76s  <ret> 발화 (turn15 첫 프레임)
    59.94s  ⚡SPAN 주입 [d'=0.68s / d_lead=7.42s]: (tool result) Beomeosa Temple is a historic Buddhist temple located on
    60.00s  agent 발화 시작: <ret> Beomeosa Temple is a historic Buddhist temple on Geumj
    60.01s  user  발화 끝
    62.90s  user  발화 시작: Yeah.
    63.39s  user  발화 끝
    67.42s  agent 발화 끝
    68.75s  user  발화 시작: Seriously, you won’t BELIEVE what happened with the delivery
    71.66s  user  발화 끝
    72.63s  user  발화 시작: …Anyway, that temple sounds perfect. Is it easy to get to?
    73.87s  agent 발화 시작: Right.
    74.69s  agent 발화 끝
    76.31s  <ret> 발화 (turn20 첫 프레임)
    76.47s  user  발화 끝
    76.52s  agent 발화 시작: <ret> You can get to Beomeosa Temple by taking subway line 1
    76.61s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.81s]: (tool result) To reach Beomeosa Temple from Busan, take subway line 1 
    79.23s  user  발화 시작: Right.
    80.05s  user  발화 끝
    83.33s  agent 발화 끝
    84.58s  user  발화 시작: That's really helpful, thank you.
    86.28s  user  발화 끝
    86.33s  agent 발화 시작: [happy] You're very welcome! I’m glad I could help with your
    88.73s  user  발화 시작: Yeah, totally.
    90.06s  user  발화 끝
    90.47s  user  발화 시작: I’m just feeling a bit anxious about the trip, honestly.
    90.68s  agent 발화 끝
    93.71s  user  발화 끝
    93.77s  agent 발화 시작: It’s normal to feel anxious before a trip. Perhaps a quick g
   100.11s  agent 발화 끝
   100.50s  user  발화 시작: What’s that?
   101.32s  user  발화 끝
   101.35s  agent 발화 시작: It's a simple way to connect with the present moment. Notice
   109.37s  agent 발화 끝
   109.38s  user  발화 시작: Okay, five things I can see… um, my lamp, my phone, the wall
   111.22s  agent 발화 시작: Yeah.
   111.81s  agent 발화 끝
   115.31s  agent 발화 시작: [curious] That’s a wonderful start. Now, four things you can
   115.40s  user  발화 끝
   118.31s  user  발화 시작: Yeah.
   118.80s  user  발화 끝
   119.71s  user  발화 시작: My chair, my sweater, my desk, my… mug.
   119.89s  agent 발화 끝
   123.23s  user  발화 끝
   123.39s  agent 발화 시작: Excellent. Taking those moments to focus on your senses can 
   129.33s  agent 발화 끝
