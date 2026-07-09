# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Hato",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-17",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "home",
#       "text": "User's home address is 922 Birch Road."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What mode of government does the a | S2 Right. So, how does that compare t | S3 But are those monarchs like, actua | S4 That makes sense. I'm trying to fi

     0.00s  user  발화 시작: What mode of government does the anarchists hate?
     2.36s  <ret> 발화 (turn1 첫 프레임)
     2.52s  agent 발화 시작: <ret> That’s a really interesting question! Unfortunately, I
     2.58s  user  발화 끝
     4.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: (no information found)
     5.55s  user  발화 시작: Uh-huh.
     6.05s  user  발화 끝
     7.70s  agent 발화 끝
     7.98s  user  발화 시작: Okay. What about the United States? What kind of government 
    12.18s  <ret> 발화 (turn4 첫 프레임)
    12.34s  agent 발화 시작: <ret> The United States operates as a constitutional federal
    12.47s  user  발화 끝
    14.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.96s]: [source: Britannica] The United States is a constitutional federal rep
    17.30s  agent 발화 끝
    17.87s  user  발화 시작: And what does “constitutional” mean, exactly?
    20.46s  agent 발화 시작: It means the government’s power is limited by a constitution
    20.46s  user  발화 끝
    28.52s  agent 발화 끝
    28.68s  user  발화 시작: Right. So, how does that compare to, say, a monarchy?
    31.82s  <ret> 발화 (turn8 첫 프레임)
    31.96s  agent 발화 시작: <ret> A monarchy is ruled by a single monarch who inherits t
    32.01s  user  발화 끝
    33.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: [source: National Geographic] In a monarchy, a single person—the monar
    38.26s  user  발화 시작: That sounds… pretty different. Do many countries still have 
    38.40s  agent 발화 끝
    42.93s  agent 발화 시작: Quite a few, actually. There are forty-four sovereign states
    42.93s  user  발화 끝
    47.01s  user  발화 시작: But are those monarchs like, actually powerful, or are they 
    47.70s  agent 발화 끝
    51.89s  agent 발화 시작: That varies quite a bit! Some—like Saudi Arabia—have signifi
    51.92s  user  발화 끝
    61.44s  agent 발화 끝
    62.13s  user  발화 시작: Oh, interesting. So the UK’s king doesn’t really *make* laws
    65.80s  agent 발화 시작: Not directly, no. The UK operates as a parliamentary democra
    65.88s  user  발화 끝
    74.33s  agent 발화 끝
    74.49s  user  발화 시작: That makes sense. I'm trying to figure out the best place fo
    81.21s  user  발화 끝
    81.66s  agent 발화 시작: A stable government is certainly important for peace of mind
    86.15s  user  발화 시작: Yeah, totally.
    86.97s  user  발화 끝
    90.98s  agent 발화 끝
    91.02s  user  발화 시작: Scandinavia… hmm. That sounds cold, though. Are there warm, 
    96.00s  agent 발화 시작: Absolutely! Costa Rica is known for its political stability 
    96.11s  user  발화 끝
   105.18s  agent 발화 끝
