# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Julian",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "work",
#       "text": "User works as a sales manager."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "phone",
#       "text": "User uses an iPhone 13."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "pet",
#       "text": "User has a Shiba Inu named Kongi."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "bloodtype",
#       "text": "User's blood type is O-."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-02-15",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-02-02",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I've been thinking a lot about the | S2 I'm trying to process a… | S3 …lot of change right now, actually | S4 I think I just need to take things

     0.00s  user  발화 시작: I've been thinking a lot about the Civil Rights Movement lat
     6.15s  <ret> 발화 (turn1 첫 프레임)
     6.75s  agent 발화 시작: <ret> That's a powerful thought, and a very important place.
     6.84s  user  발화 끝
     7.77s  ⚡SPAN 주입 [d'=1.62s / d_lead=12.80s]: The National Civil Rights Museum opened on September 28, 1991, in Memp
    12.80s  user  발화 시작: Mhm.
    13.25s  user  발화 끝
    19.55s  agent 발화 끝
    20.13s  user  발화 시작: Wow, 1991. That’s more recent than I thought.
    24.01s  <ret> 발화 (turn4 첫 프레임)
    24.49s  user  발화 끝
    24.55s  agent 발화 시작: <ret> It is a relatively recent opening, isn’t it? [curious]
    24.67s  ⚡SPAN 주입 [d'=0.66s / d_lead=6.16s]: The average high temperature in Seoul on September 28th is 22.2°C, wit
    28.00s  user  발화 시작: Mm-hmm.
    28.58s  user  발화 끝
    30.71s  agent 발화 끝
    30.72s  user  발화 시작: I'm trying to process a…
    32.57s  user  발화 끝
    34.08s  user  발화 시작: …lot of change right now, actually.
    36.49s  agent 발화 시작: Change can be really overwhelming. It's okay to let those fe
    36.52s  user  발화 끝
    43.54s  user  발화 시작: That’s a nice image, actually. It feels…heavy.
    43.57s  agent 발화 끝
    46.64s  user  발화 끝
    46.66s  agent 발화 시작: It *is* heavy, and it's alright to acknowledge that weight. 
    52.01s  user  발화 시작: Yeah, yeah.
    53.15s  user  발화 끝
    53.85s  user  발화 시작: I think I just need to take things one day at a time.
    53.98s  agent 발화 끝
    56.76s  user  발화 끝
    56.97s  agent 발화 시작: [happy] Exactly. Gentle daily structure can be a real anchor
    65.12s  agent 발화 끝
