# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Max",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-08",
#       "category": "car",
#       "text": "User drives a 2019 Hyundai Tucson."
#     },
#     {
#       "date": "2026-03-31",
#       "category": "music",
#       "text": "User likes listening to K-ballads."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "schedule",
#       "text": "User has early shifts starting at 6am."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "child",
#       "text": "User has a child named Leo, age 16."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "wake",
#       "text": "User usually wakes up close to 9am after night shifts."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "pet",
#       "text": "User has a Pomeranian named Bori."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-19",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-01-07",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2025-12-04",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Droraon, I'm trying to learn m | S2 Wait, what about the World Series? | S3 Fine. I'm actually moving to New Y | S4 I'll just figure the groceries out

     0.00s  user  발화 시작: Hey Droraon, I'm trying to learn more about baseball. When d
     6.64s  <ret> 발화 (turn1 첫 프레임)
     6.89s  agent 발화 시작: <ret> They wear those classic pinstripes whenever they are p
     7.14s  user  발화 끝
     7.40s  ⚡SPAN 주입 [d'=0.76s / d_lead=4.26s]: The New York Yankees wear their classic pinstripe uniforms for home ga
     8.60s  user  발화 시작: Yeah.
     9.05s  user  발화 끝
    11.15s  agent 발화 끝
    11.52s  user  발화 시작: Really? I thought they wore them for big games regardless of
    15.81s  agent 발화 시작: [curious] Oh, it's a common misconception, but the pinstripe
    15.96s  user  발화 끝
    21.27s  agent 발화 끝
    21.33s  user  발화 시작: I'm not so sure. I remember seeing them in pinstripes during
    25.87s  <ret> 발화 (turn6 첫 프레임)
    26.23s  agent 발화 시작: <ret> I just checked, and the rule is that they wear pinstri
    26.25s  user  발화 끝
    27.34s  ⚡SPAN 주입 [d'=1.47s / d_lead=4.12s]: The New York Yankees wear their classic pinstripe uniforms for home ga
    28.72s  user  발화 시작: Okay.
    29.54s  user  발화 끝
    30.22s  user  발화 시작: Wait, what about the World Series? Do they change then?
    30.34s  agent 발화 끝
    34.34s  agent 발화 시작: [happy] That's a great question! They generally stick to the
    34.38s  user  발화 끝
    40.22s  agent 발화 끝
    40.75s  user  발화 시작: This is confusing. Is there any other team that does that?
    42.94s  agent 발화 시작: Yeah, yeah.
    44.59s  <ret> 발화 (turn12 첫 프레임)
    44.78s  agent 발화 끝
    45.10s  user  발화 끝
    45.22s  agent 발화 시작: <ret> I couldn't find a specific list of other teams with th
    45.36s  ⚡SPAN 주입 [d'=0.76s / d_lead=4.53s]: (no information found)
    49.75s  agent 발화 끝
    49.94s  user  발화 시작: You're not very helpful with the details today!
    53.22s  agent 발화 시작: [sigh] I'm sorry about that. I'm here to support you, so let
    53.31s  user  발화 끝
    59.00s  agent 발화 끝
    59.94s  user  발화 시작: Fine. I'm actually moving to New York soon, so maybe you can
    63.75s  agent 발화 시작: Mhm.
    64.33s  agent 발화 끝
    65.27s  user  발화 끝
    65.33s  agent 발화 시작: [happy] That is so exciting! I'd love to help you settle int
    69.66s  user  발화 시작: Thanks. Can you tell me what the weather is like there right
    69.68s  agent 발화 끝
    71.84s  agent 발화 시작: Yeah.
    72.48s  agent 발화 끝
    73.10s  <ret> 발화 (turn20 첫 프레임)
    73.36s  user  발화 끝
    73.63s  agent 발화 시작: <ret> Right now in New York City, it is seventy-two degrees 
    73.83s  ⚡SPAN 주입 [d'=0.73s / d_lead=4.72s]: (tool result) Current weather in New York City: 72 degrees Fahrenheit,
    78.18s  user  발화 시작: Not too bad. What should be the first thing on my moving che
    78.35s  agent 발화 끝
    81.80s  agent 발화 시작: I'd suggest starting with your housing paperwork and then fi
    82.02s  user  발화 끝
    88.19s  agent 발화 끝
    89.21s  user  발화 시작: I'll just figure the groceries out…
    91.43s  user  발화 끝
    93.37s  user  발화 시작: …later. Do you know any good neighborhoods?
    95.80s  agent 발화 시작: Mhm.
    96.25s  agent 발화 끝
    97.85s  user  발화 끝
    98.03s  agent 발화 시작: Since you're just starting out, maybe we could look at some 
   102.18s  user  발화 시작: Actually, can you just find me a place in Brooklyn first?
   102.94s  agent 발화 끝
   103.95s  agent 발화 시작: Mhm.
   104.44s  agent 발화 끝
   105.19s  <ret> 발화 (turn29 첫 프레임)
   105.53s  agent 발화 시작: <ret> I found a one bedroom in Williamsburg for thirty-two h
   105.56s  user  발화 끝
   106.30s  ⚡SPAN 주입 [d'=1.10s / d_lead=7.60s]: (tool result) Available homes in Brooklyn: 1BR apartment in Williamsbu
   113.14s  agent 발화 끝
