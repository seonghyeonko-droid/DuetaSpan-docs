# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Milan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "employer",
#       "text": "User works at a law firm."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "plant",
#       "text": "User is growing a few succulents at home."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "floor",
#       "text": "User lives on the 5th floor."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Indian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-15",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-03-27",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-01-22",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-01-14",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m having a really tough time wit | S2 Hmm, okay. But what if they just…k | S3 Boundaries… easier said than done, | S4 That’s… interesting. I’ll try that

     0.00s  user  발화 시작: I’m having a really tough time with a coworker, always under
     5.36s  agent 발화 시작: Oh dear, that sounds incredibly frustrating. It's common to 
     5.36s  user  발화 끝
    11.86s  user  발화 시작: Uh-huh.
    11.86s  agent 발화 끝
    12.24s  user  발화 시작: It is. I feel like I can’t win. Is there a strategy for deal
    12.24s  user  발화 끝
    19.51s  agent 발화 시작: There absolutely is! Often, preemptive communication can hel
    19.51s  user  발화 끝
    26.78s  user  발화 시작: Hmm, okay. But what if they just…keep doing it?
    26.78s  agent 발화 끝
    30.08s  <ret> 발화 (turn6 첫 프레임)
    30.22s  agent 발화 시작: <ret> It's great you're thinking ahead! Assertiveness is key
    30.22s  user  발화 끝
    31.41s  ⚡SPAN 주입 [d'=1.33s / d_lead=8.42s]: Assertiveness involves clearly stating one's needs and boundaries whil
    38.64s  user  발화 시작: Yeah.
    38.64s  agent 발화 끝
    39.02s  agent 발화 시작: It’s about finding your voice and setting boundaries.
    39.02s  user  발화 끝
    42.08s  user  발화 시작: Yeah.
    42.08s  agent 발화 끝
    42.46s  user  발화 시작: Boundaries… easier said than done, right? I always end up ba
    42.46s  user  발화 끝
    47.05s  agent 발화 시작: [sigh] You're not alone there. Many people struggle with bou
    47.05s  user  발화 끝
    55.09s  user  발화 시작: Okay, but what about a specific situation? Like, they interr
    55.09s  agent 발화 끝
    59.13s  <ret> 발화 (turn13 첫 프레임)
    59.68s  agent 발화 시작: <ret> For constant interruptions, try the “broken record” te
    59.68s  user  발화 끝
    59.92s  ⚡SPAN 주입 [d'=0.80s / d_lead=8.03s]: The “broken record” technique involves calmly and repeatedly stating o
    67.71s  user  발화 시작: That’s… interesting. I’ll try that. What about if it escalat
    67.71s  agent 발화 끝
    71.54s  agent 발화 시작: Yeah, yeah.
    71.54s  user  발화 끝
    72.30s  agent 발화 시작: If it escalates, it’s time to involve HR or a manager. [happ
    72.30s  agent 발화 끝
    80.72s  agent 발화 끝
