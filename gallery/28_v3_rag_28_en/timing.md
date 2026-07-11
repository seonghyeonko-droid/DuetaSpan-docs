# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Nora",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "home",
#       "text": "User's home address is 819 Pine Court."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-22",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, what island was the movie… | S2 Okay, well, what’s the weather lik | S3 Blowholes, huh? That sounds intere | S4 Okay, so about two paʻanga to the 

     0.00s  user  발화 시작: Hey, what island was the movie…
     0.00s  <ret> 발화 (turn2 첫 프레임)
     0.00s  <ret> 발화 (turn7 첫 프레임)
     0.02s  user  발화 시작: …Moana based on? I always wondered.
     0.02s  user  발화 끝
     0.04s  agent 발화 시작: <ret> The movie Moana is largely inspired by Polynesian isla
     0.04s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Moana is largely inspired by the Polynesian islands, and specifically 
     0.04s  user  발화 끝
     0.11s  user  발화 시작: Right.
     0.11s  agent 발화 끝
     0.12s  user  발화 시작: Tonga? Huh. I thought it was Hawaii, honestly.
     0.12s  user  발화 끝
     0.12s  <ret> 발화 (turn11 첫 프레임)
     0.14s  agent 발화 시작: It's a common misconception, as many Polynesian cultures sha
     0.14s  user  발화 끝
     0.18s  user  발화 시작: Okay, well, what’s the weather like in Tonga right now?
     0.18s  agent 발화 끝
     0.18s  <ret> 발화 (turn19 첫 프레임)
     0.21s  agent 발화 시작: <ret> The temperature in Tonga is currently 24.0°C, with hum
     0.21s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) Temperature: 24.0°C, humidity: 78%, wind: 11.2 km/h, con
     0.21s  user  발화 끝
     0.28s  <ret> 발화 (turn21 첫 프레임)
     0.29s  user  발화 시작: That sounds…nice.
     0.29s  agent 발화 끝
     0.30s  agent 발화 시작: It really does. A lovely escape, I imagine.
     0.30s  user  발화 끝
     0.32s  user  발화 시작: I'm trying to plan a trip, actually. What are some attractio
     0.32s  agent 발화 끝
     0.36s  agent 발화 시작: <ret> Some attractions in Tonga include Ha'atafu Beach, the 
     0.36s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Ha'atafu Beach, Royal Palace, Mapu 'a Vaea Blowholes, To
     0.36s  user  발화 끝
     0.43s  user  발화 시작: Yeah.
     0.43s  agent 발화 끝
     0.43s  agent 발화 시작: They have a rich history and beautiful natural landscapes.
     0.43s  user  발화 끝
     0.46s  user  발화 시작: Yeah.
     0.46s  agent 발화 끝
     0.47s  user  발화 시작: Blowholes, huh? That sounds interesting. Is there anything e
     0.47s  user  발화 끝
     0.52s  agent 발화 시작: It’s good to be aware of local customs and traditions.
     0.52s  user  발화 끝
     0.52s  <ret> 발화 (turn29 첫 프레임)
     0.55s  user  발화 시작: Yeah.
     0.55s  agent 발화 끝
     0.55s  user  발화 시작: Like what? I don’t want to be rude.
     0.55s  user  발화 끝
     0.58s  agent 발화 시작: <ret> Tongan culture places a high value on respect, especia
     0.58s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Tongan culture places a high value on respect, especially for elders a
     0.58s  user  발화 끝
     0.65s  user  발화 시작: That's good to know. What's the currency there?
     0.65s  agent 발화 끝
     0.68s  agent 발화 시작: <ret> The currency of Tonga is the paʻanga, and one United S
     0.68s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: The currency of Tonga is the paʻanga, and one United States dollar is 
     0.68s  user  발화 끝
     0.74s  user  발화 시작: Really?
     0.74s  agent 발화 끝
     0.74s  user  발화 시작: Okay, so about two paʻanga to the dollar?
     0.74s  user  발화 끝
     0.77s  agent 발화 시작: Roughly, yes. It fluctuates, of course, but that’s a good ap
     0.77s  user  발화 끝
     0.82s  user  발화 시작: [sigh] This is a lot to take in.
     0.82s  agent 발화 끝
     0.84s  agent 발화 시작: Planning can feel overwhelming, but it’s worth it for a smoo
     0.84s  user  발화 끝
     0.88s  user  발화 시작: Right.
     0.88s  agent 발화 끝
     0.89s  user  발화 시작: I appreciate that. Maybe I should look at hotels now?
     0.89s  user  발화 끝
     0.92s  agent 발화 시작: <ret> The Shoreline Grill & Resort is available for around $
     0.92s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) The Shoreline Grill & Resort - $150/night, Hakauveli Bea
     0.92s  user  발화 끝
     1.00s  agent 발화 끝
