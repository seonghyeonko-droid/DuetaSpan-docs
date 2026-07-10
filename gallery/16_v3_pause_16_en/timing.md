# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Hugo",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-10",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "home",
#       "text": "User's home address is 795 Maple Drive."
#     },
#     {
#       "date": "2025-10-05",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-11-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-10-30",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who sings that song… | S2 …grow up to be cowboys… | S3 Oh, Ed Bruce! I always thought it  | S4 Hmm, a cover, huh? What other song

     0.00s  user  발화 시작: Do you know who sings that song…
     1.94s  user  발화 끝
     3.58s  user  발화 시작: …mama don't let your babies…
     5.37s  user  발화 끝
     6.75s  user  발화 시작: …grow up to be cowboys…
     8.17s  <ret> 발화 (turn3 첫 프레임)
     8.49s  agent 발화 시작: <ret> The song you’re thinking of, “Mama Don’t Let Your Babi
     8.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: Ed Bruce originally released the song "Mammas Don't Let Your Babies Gr
     8.59s  user  발화 끝
    12.43s  user  발화 시작: Yeah.
    12.83s  user  발화 끝
    15.77s  user  발화 시작: Oh, Ed Bruce! I always thought it was Willie Nelson and Wayl
    16.23s  agent 발화 끝
    19.70s  agent 발화 시작: It’s a common mistake, actually. Willie Nelson and Waylon Je
    19.70s  user  발화 끝
    24.91s  user  발화 시작: Yeah, yeah.
    26.33s  user  발화 끝
    27.93s  user  발화 시작: Hmm, a cover, huh? What other songs did Ed Bruce write?
    28.00s  agent 발화 끝
    31.94s  <ret> 발화 (turn9 첫 프레임)
    32.18s  agent 발화 시작: <ret> Ed Bruce also wrote “Hello World,” a number one hit fo
    32.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.44s]: (tool result) Ed Bruce also penned the song "Hello World," which was a
    32.28s  user  발화 끝
    40.62s  agent 발화 끝
