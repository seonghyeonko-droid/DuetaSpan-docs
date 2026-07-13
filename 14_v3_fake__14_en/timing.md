# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Jordan",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-03",
#       "category": "home",
#       "text": "User's home address is 591 Cedar Lane."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-10-14",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-18",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-09-11",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-08-02",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-14",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Oreaon, when did LeBron James  | S2 Was Dwyane Wade involved in convin | S3 What was his jersey number when he | S4 Wow, that sounds intense. Okay, ba

     0.00s  user  발화 시작: Hey Oreaon, when did LeBron James go back to play for the Ca
     4.55s  <ret> 발화 (turn1 첫 프레임)
     4.79s  agent 발화 시작: <ret> He signed with the Cavaliers on July eleventh, 2014, r
     4.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.85s]: LeBron James signed with the Cleveland Cavaliers on July 11, 2014, ret
     4.79s  user  발화 끝
    13.64s  user  발화 시작: That's right, it was a huge deal. Do you think he'll ever go
    13.64s  agent 발화 끝
    19.17s  agent 발화 시작: It's hard to predict the future, but anything is possible in
    19.17s  user  발화 끝
    23.60s  user  발화 시작: Yeah.
    23.60s  agent 발화 끝
    23.97s  user  발화 시작: What was the biggest reason he left the first time?
    23.97s  user  발화 끝
    27.49s  <ret> 발화 (turn6 첫 프레임)
    27.65s  agent 발화 시작: <ret> He left in 2010, because he felt the Cavaliers’ owners
    27.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.48s]: LeBron James left the Cleveland Cavaliers in 2010, largely due to a pe
    27.65s  user  발화 끝
    36.13s  user  발화 시작: Yeah.
    36.13s  agent 발화 끝
    36.50s  user  발화 시작: Was Dwyane Wade involved in convincing him to go to Miami?
    36.50s  user  발화 끝
    40.32s  <ret> 발화 (turn9 첫 프레임)
    40.56s  agent 발화 시작: <ret> Yes, Dwyane Wade and Chris Bosh were key in getting hi
    40.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: Dwyane Wade and Chris Bosh were both instrumental in recruiting LeBron
    40.56s  user  발화 끝
    48.30s  user  발화 시작: Mhm.
    48.30s  agent 발화 끝
    48.67s  user  발화 시작: So, it was a pretty coordinated effort then?
    48.67s  user  발화 끝
    51.62s  agent 발화 시작: It was a very deliberate and well-planned move by all three 
    51.62s  user  발화 끝
    58.62s  user  발화 시작: What was his jersey number when he first played for the Cavs
    58.62s  agent 발화 끝
    62.97s  <ret> 발화 (turn14 첫 프레임)
    63.05s  agent 발화 시작: <ret> He wore number 23 during his first time with Cleveland
    63.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.64s]: LeBron James wore jersey number 23 during his first stint with the Cle
    63.05s  user  발화 끝
    69.68s  user  발화 시작: And did he wear the same number when he came back? —
    69.68s  agent 발화 끝
    74.11s  user  발화 시작: … actually, before you finish, how did the fans react when h
    74.11s  user  발화 끝
    80.79s  <ret> 발화 (turn17 첫 프레임)
    81.11s  agent 발화 시작: <ret> Many fans felt betrayed and were very angry, even burn
    81.11s  ⚡SPAN 주입 [d'=1.76s / d_lead=10.69s]: When LeBron James announced his decision to leave the Cleveland Cavali
    81.11s  user  발화 끝
    91.81s  user  발화 시작: Wow, that sounds intense. Okay, back to the jersey number.
    91.81s  agent 발화 끝
    95.33s  <ret> 발화 (turn19 첫 프레임)
    95.49s  agent 발화 시작: <ret> He switched to number 6 when he returned in 2014, want
    95.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: When LeBron James returned to the Cleveland Cavaliers in 2014, he swit
    95.49s  user  발화 끝
   102.92s  <ret> 발화 (turn20 첫 프레임)
   103.24s  agent 발화 시작: <ret> It’s great we got to talk about LeBron’s career. Plann
   103.24s  ⚡SPAN 주입(IRRELEVANT) [d'=1.60s / d_lead=5.16s]: The current temperature in Rome, Italy is 28.5°C with clear skies and 
   103.24s  agent 발화 끝
   108.40s  user  발화 시작: Yeah.
   108.40s  agent 발화 끝
   108.77s  user  발화 시작: That's a good idea, actually. Maybe a trip to see a game!
   108.77s  user  발화 끝
   113.19s  agent 발화 시작: That sounds fantastic! I can definitely help you plan a trip
   113.19s  user  발화 끝
   120.56s  agent 발화 끝
