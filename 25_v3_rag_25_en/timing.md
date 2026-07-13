# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Elena",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "home",
#       "text": "User's home address is 52 Pine Court."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-02-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was reading about old baseball t | S2 Nineteen thirteen, huh? That’s… ea | S3 …Wait, their *most recent* champio | S4 Wow, that *is* a long time. Okay, 

     0.00s  user  발화 시작: I was reading about old baseball teams, and I'm curious. Wha
     7.19s  <ret> 발화 (turn1 첫 프레임)
     7.32s  agent 발화 시작: <ret> It looks like the Boston Rustlers officially became th
     7.32s  user  발화 끝
     8.34s  ⚡SPAN 주입 [d'=1.15s / d_lead=13.91s]: The Boston Rustlers officially became the Boston Braves on August 23, 
    21.23s  user  발화 시작: Nineteen thirteen, huh? That’s… earlier than I thought. Did 
    21.23s  agent 발화 끝
    26.47s  <ret> 발화 (turn3 첫 프레임)
    27.08s  agent 발화 시작: <ret> Actually, they had a pretty great run! The Boston Brav
    27.08s  user  발화 끝
    27.35s  ⚡SPAN 주입 [d'=0.88s / d_lead=8.05s]: (tool result) The Boston Braves won the 1914 World Series, defeating t
    35.13s  user  발화 시작: …Wait, their *most recent* championship? So they haven’t won
    35.13s  agent 발화 끝
    39.52s  agent 발화 시작: You're right to ask! That's what the search result indicates
    39.52s  user  발화 끝
    49.04s  user  발화 시작: Wow, that *is* a long time. Okay, shifting gears a bit, what
    49.04s  agent 발화 끝
    55.70s  <ret> 발화 (turn7 첫 프레임)
    55.99s  agent 발화 시작: <ret> Before they were the Rustlers, they were actually call
    55.99s  user  발화 끝
    56.90s  ⚡SPAN 주입 [d'=1.20s / d_lead=13.17s]: Prior to being known as the Boston Rustlers, the team was called the B
    69.17s  agent 발화 끝
