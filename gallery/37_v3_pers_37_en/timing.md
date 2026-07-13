# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Andrea",
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
#       "date": "2026-04-05",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-08-10",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-01",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-17",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What exactly *does* a supportive a | S2 That sounds good in theory, but I  | S3 I guess I worry about what my boss | S4 Maybe. I keep thinking about all t

     0.00s  agent 발화 시작: Hello Andrea, it’s lovely to connect with you. I’m Selil, an
     8.91s  user  발화 시작: Yeah.
     8.91s  agent 발화 끝
     9.27s  user  발화 시작: What exactly *does* a supportive advisor do?
     9.27s  user  발화 끝
    11.76s  agent 발화 시작: I help people navigate their thoughts and feelings, Andrea. 
    11.76s  user  발화 끝
    20.32s  user  발화 시작: Yeah.
    20.32s  agent 발화 끝
    20.67s  user  발화 시작: Hmm. I’m feeling a bit overwhelmed with work lately, and it’
    20.67s  user  발화 끝
    26.38s  agent 발화 시작: Mm-hmm.
    26.38s  user  발화 끝
    26.73s  agent 발화 시작: That sounds incredibly draining, Andrea. When work spills ov
    26.73s  agent 발화 끝
    34.93s  user  발화 시작: It's just… everything. Deadlines, emails, meetings… it never
    34.93s  agent 발화 끝
    40.63s  agent 발화 시작: Nice.
    40.63s  user  발화 끝
    40.99s  agent 발화 시작: It’s understandable to feel that way when facing a relentles
    40.99s  agent 발화 끝
    48.83s  user  발화 시작: Uh-huh.
    48.83s  agent 발화 끝
    49.19s  agent 발화 시작: Prioritization can be a powerful tool, Andrea. It’s about id
    49.19s  user  발화 끝
    58.10s  user  발화 시작: That sounds good in theory, but I always feel guilty delegat
    58.10s  agent 발화 끝
    63.80s  agent 발화 시작: Okay.
    63.80s  user  발화 끝
    64.16s  agent 발화 시작: That's a very common feeling, Andrea. It suggests a strong s
    64.16s  agent 발화 끝
    73.07s  user  발화 시작: But what if I fall behind on everything if I try to take a b
    73.07s  agent 발화 끝
    78.41s  agent 발화 시작: Okay.
    78.41s  user  발화 끝
    78.77s  agent 발화 시작: That’s a valid concern, Andrea. It's difficult to believe th
    78.77s  agent 발화 끝
    87.68s  user  발화 시작: Yeah, totally.
    87.68s  agent 발화 끝
    88.39s  user  발화 시작: I guess I worry about what my boss will think. She's… very d
    88.39s  user  발화 끝
    93.03s  agent 발화 시작: It sounds like you're navigating a workplace culture that hi
    93.03s  user  발화 끝
   100.87s  user  발화 시작: It really is. I'm also trying to plan a trip to Melbourne ne
   100.87s  agent 발화 끝
   109.42s  agent 발화 시작: Planning a trip while already feeling overwhelmed sounds inc
   109.42s  user  발화 끝
   119.40s  user  발화 시작: Right.
   119.40s  agent 발화 끝
   119.76s  user  발화 시작: Maybe. I keep thinking about all the things I *should* be do
   119.76s  user  발화 끝
   125.82s  agent 발화 시작: Those "shoulds" can be very powerful, Andrea. They often ste
   125.82s  user  발화 끝
   136.87s  user  발화 시작: I… I don't know. It feels selfish, I guess.
   136.87s  agent 발화 끝
   140.08s  agent 발화 시작: Self-care isn’t selfish, Andrea; it’s essential. It’s like f
   140.08s  user  발화 끝
   151.13s  agent 발화 끝
