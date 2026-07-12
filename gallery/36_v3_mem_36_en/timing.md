# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Marie",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-27",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-11-08",
#       "category": "home",
#       "text": "User's home address is 995 Oak Avenue."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-06-12",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-06",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 um, I was just thinking about my t | S2 Oh, that’s right! I’d almost forgo | S3 Welll… I was thinking of something | S4 Hmm… maybe just powering up the sy

     0.00s  agent 발화 시작: Hi Marie, I'm Fami. It's lovely to connect with you. Is ther
     2.37s  user  발화 시작: Yeah.
     2.81s  user  발화 끝
     6.16s  agent 발화 끝
     6.39s  user  발화 시작: um, I was just thinking about my trip to Kyoto…
     9.04s  <ret> 발화 (turn3 첫 프레임)
     9.28s  agent 발화 시작: <ret> I recall you were planning a trip to Kyoto in October.
     9.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: [2026-06-06] Past chat — Booked a dentist appointment: asked for an ea
     9.35s  user  발화 끝
    14.31s  user  발화 시작: Yeah.
    14.75s  user  발화 끝
    16.65s  user  발화 시작: Actually, I was wondering if you remembered what I was hopin
    16.65s  agent 발화 끝
    19.98s  <ret> 발화 (turn6 첫 프레임)
    20.26s  user  발화 끝
    20.37s  agent 발화 시작: <ret> You mentioned you have a passion for vintage synthesiz
    20.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.51s]: [2025-12-27] User is into vintage synth collecting.
    27.38s  user  발화 시작: Oh, that’s right! I’d almost forgotten about that.
    27.88s  agent 발화 끝
    30.28s  agent 발화 시작: Sometimes our interests can get lost in the day-to-day. It’s
    30.34s  user  발화 끝
    33.24s  user  발화 시작: Yeah.
    33.74s  user  발화 끝
    37.14s  agent 발화 끝
    38.35s  user  발화 시작: I’m also trying to get back into playing music, but I’m feel
    42.34s  agent 발화 시작: It’s common to feel blocked creatively. We can explore that.
    42.51s  user  발화 끝
    46.27s  user  발화 시작: Mhm.
    46.91s  user  발화 끝
    49.47s  agent 발화 끝
    49.49s  user  발화 시작: Welll… I was thinking of something ambient, maybe with some 
    54.72s  agent 발화 시작: Ambient music is a beautiful space for expression. What spec
    54.81s  user  발화 끝
    61.85s  agent 발화 끝
    64.70s  user  발화 시작: I just don't know where to begin, honestly. It all feels ove
    68.96s  user  발화 끝
    69.23s  agent 발화 시작: Overwhelm can be paralyzing. Let’s break it down. What’s one
    77.21s  user  발화 시작: Hmm… maybe just powering up the synth?
    77.30s  agent 발화 끝
    80.16s  user  발화 끝
    80.23s  agent 발화 시작: That’s a wonderful starting point, Marie. Sometimes the simp
    90.24s  agent 발화 끝
