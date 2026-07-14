# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Charlotte",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-06-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "home",
#       "text": "User's home address is 848 Pine Court."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-21",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Tuna, I'm trying to remember w | S2 That’s it! But wait – didn't he do | S3 …do you know what else he’s been i | S4 Wow, that’s a lot! He’s really ver

     0.00s  user  발화 시작: Hey Tuna, I'm trying to remember who voiced Kuzco in *The Em
     6.85s  agent 발화 시작: It’s wonderful you’re revisiting a favorite character! Somet
     6.85s  user  발화 끝
    12.07s  user  발화 시작: Yeah, I just can’t quite place the name.
    12.07s  agent 발화 끝
    14.18s  <ret> 발화 (turn3 첫 프레임)
    14.62s  ⚡SPAN 주입 [d'=1.24s / d_lead=8.81s]: J. P. Manoux voiced Kuzco in *The Emperor's New School*, reprising the
    14.68s  agent 발화 시작: <ret> The voice you're searching for is J. P. Manoux — he ac
    14.68s  user  발화 끝
    23.49s  user  발화 시작: Mhm.
    23.49s  agent 발화 끝
    23.82s  user  발화 시작: That’s it! But wait – didn't he do other voice work too? I f
    23.82s  user  발화 끝
    30.02s  agent 발화 시작: It’s great you remembered! Many actors have a wide range of 
    30.02s  user  발화 끝
    34.26s  user  발화 시작: …do you know what else he’s been in? I'm curious now.
    34.26s  agent 발화 끝
    37.24s  <ret> 발화 (turn8 첫 프레임)
    37.85s  agent 발화 시작: <ret> J. P. Manoux is actually quite prolific, with roles in
    37.85s  user  발화 끝
    38.45s  ⚡SPAN 주입 [d'=1.31s / d_lead=6.53s]: (tool result) J. P. Manoux is an American voice actor known for his wo
    44.38s  user  발화 시작: Okay.
    44.38s  agent 발화 끝
    44.71s  user  발화 시작: Wow, that’s a lot! He’s really versatile. Thanks, Tuna!
    44.71s  user  발화 끝
    47.64s  user  발화 끝
