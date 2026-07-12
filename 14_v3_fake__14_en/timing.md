# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Leo",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "home",
#       "text": "User's home address is 490 Cedar Lane."
#     },
#     {
#       "date": "2025-07-16",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-27",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-26",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-15",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who Natalie Portman pl | S2 Right. | S3 That's good to know. | S4 I guess so. What's a good way to t

     0.00s  user  발화 시작: Do you know who Natalie Portman plays in The Phantom Menace?
     4.15s  <ret> 발화 (turn1 첫 프레임)
     4.39s  agent 발화 시작: <ret> She plays Padmé Amidala, a young queen chosen to repre
     4.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.58s]: Natalie Portman portrays Padmé Amidala in Star Wars: Episode I – The P
     4.39s  user  발화 끝
    11.97s  user  발화 시작: Yeah.
    11.97s  agent 발화 끝
    12.36s  user  발화 시작: Oh, okay, that makes sense.
    12.36s  user  발화 끝
    14.36s  agent 발화 시작: It's wonderful when a performance really connects with a cha
    14.36s  user  발화 끝
    18.35s  user  발화 시작: Um, what about Hayden Christensen?
    18.35s  agent 발화 끝
    20.18s  <ret> 발화 (turn6 첫 프레임)
    20.34s  agent 발화 시작: <ret> He’s best known for playing Anakin Skywalker, who late
    20.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.58s]: Hayden Christensen is known for playing Anakin Skywalker in Star Wars:
    20.34s  user  발화 끝
    27.92s  user  발화 시작: Right.
    27.92s  agent 발화 끝
    28.32s  agent 발화 시작: It's interesting to see how those characters develop over th
    28.32s  user  발화 끝
    35.10s  user  발화 시작: I suppose so. Is there a…
    35.10s  agent 발화 끝
    37.49s  user  발화 시작: …new Star Wars movie coming out soon?
    37.49s  user  발화 끝
    39.97s  <ret> 발화 (turn11 첫 프레임)
    40.29s  agent 발화 시작: <ret> There’s *The Acolyte*, streaming on Disney+ since June
    40.29s  ⚡SPAN 주입 [d'=0.50s / d_lead=7.18s]: (tool result) Star Wars: The Acolyte (2024) - Streaming on Disney+, Ju
    40.29s  user  발화 끝
    47.46s  user  발화 시작: Right.
    47.46s  agent 발화 끝
    47.86s  user  발화 시작: That's good to know.
    47.86s  user  발화 끝
    49.06s  <ret> 발화 (turn14 첫 프레임)
    49.46s  agent 발화 시작: <ret> The weather can certainly affect your mood, can’t it?
    49.46s  ⚡SPAN 주입(IRRELEVANT) [d'=1.92s / d_lead=3.59s]: The current temperature in Reykjavik, Iceland is 8.2°C, with a humidit
    49.46s  user  발화 끝
    53.05s  user  발화 시작: It can, yeah. I'm trying to stick to a budget this month.
    53.05s  agent 발화 끝
    57.83s  agent 발화 시작: That's a very sensible goal. It's good to be mindful of your
    57.83s  user  발화 끝
    63.02s  user  발화 시작: It is, but it's hard.
    63.02s  agent 발화 끝
    65.01s  agent 발화 시작: It can be challenging, absolutely. Small steps can make a bi
    65.01s  user  발화 끝
    70.20s  user  발화 시작: Yeah.
    70.20s  agent 발화 끝
    70.60s  user  발화 시작: I guess so. What's a good way to track expenses?
    70.60s  user  발화 끝
    74.59s  agent 발화 시작: There are many apps available, or simply a notebook and pen.
    74.59s  user  발화 끝
    80.57s  user  발화 시작: Yeah.
    80.57s  agent 발화 끝
    80.97s  user  발화 시작: Hmm, maybe an app.
    80.97s  user  발화 끝
    82.56s  agent 발화 시작: An app can be really convenient, with automatic categorizati
    82.56s  user  발화 끝
    86.15s  user  발화 시작: Uh-huh.
    86.15s  agent 발화 끝
    86.55s  user  발화 시작: That sounds good. Thanks!
    86.55s  user  발화 끝
    88.15s  agent 발화 시작: You’re very welcome. I’m glad I could offer a little help wi
    88.15s  user  발화 끝
    93.33s  agent 발화 끝
