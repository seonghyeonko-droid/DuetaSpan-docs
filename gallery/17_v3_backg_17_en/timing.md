# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Hana",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-23",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-03-31",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-09-18",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-08-16",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-10-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, uh, I was wondering… how old  | S2 Did you remember to take the chick | S3 Is there an age limit for that? | S4 Maybe. Do they… like, prefer a hig

     0.00s  user  발화 시작: Hey, uh, I was wondering… how old do you have to be to legal
     5.10s  <ret> 발화 (turn1 첫 프레임)
     5.50s  agent 발화 시작: <ret> Well, that's a really important question! Generally, y
     5.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.48s]: In most states, a student can legally drop out of school between the a
     5.65s  user  발화 끝
    11.16s  user  발화 시작: Yeah.
    11.89s  user  발화 끝
    13.98s  agent 발화 끝
    14.04s  user  발화 시작: Sixteen, huh? That’s… younger than I thought.
    17.23s  user  발화 끝
    17.55s  agent 발화 시작: It can feel like a big step, and it’s smart to be prepared. 
    23.66s  agent 발화 끝
    23.85s  user  발화 시작: Did you remember to take the chicken out of the freezer?
    26.24s  user  발화 끝
    26.25s  user  발화 시작: Actually, I'm also curious about getting my GED.
    29.09s  <ret> 발화 (turn7 첫 프레임)
    29.23s  agent 발화 시작: <ret> That's a great idea! The GED is a high school equivale
    29.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.71s]: The General Educational Development (GED) test is a high school equiva
    29.34s  user  발화 끝
    35.16s  user  발화 시작: Yeah, yeah.
    36.54s  user  발화 끝
    37.94s  agent 발화 끝
    37.98s  user  발화 시작: Is there an age limit for that?
    39.31s  <ret> 발화 (turn10 첫 프레임)
    39.71s  agent 발화 시작: <ret> No, there isn't an upper age limit, but most states as
    39.71s  ⚡SPAN 주입 [d'=1.20s / d_lead=8.71s]: There is no upper age limit to take the GED test; however, most states
    39.74s  user  발화 끝
    45.19s  user  발화 시작: Okay.
    45.82s  user  발화 끝
    48.27s  user  발화 시작: Okay, good. So sixteen for both. What about… finding a job a
    48.42s  agent 발화 끝
    52.24s  agent 발화 시작: That's a wonderful next thought!
    52.30s  user  발화 끝
    53.72s  user  발화 시작: Maybe. Do they… like, prefer a high school diploma?
    54.08s  agent 발화 끝
    56.44s  <ret> 발화 (turn15 첫 프레임)
    56.83s  agent 발화 시작: <ret> Some employers do prefer a diploma, but a lot are happ
    56.84s  ⚡SPAN 주입 [d'=1.44s / d_lead=8.72s]: While some employers may prefer candidates with a high school diploma,
    57.01s  user  발화 끝
    60.82s  user  발화 시작: Yeah.
    61.32s  user  발화 끝
    65.23s  user  발화 시작: That's… reassuring, actually. Thanks, Jeliia.
    65.55s  agent 발화 끝
    68.14s  agent 발화 시작: You’re very welcome! It’s completely normal to feel unsure, 
    68.14s  user  발화 끝
    75.97s  agent 발화 끝
