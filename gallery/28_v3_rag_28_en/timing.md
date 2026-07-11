# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Ruby",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-11-25",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-12",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’ve been feeling a bit lost latel | S2 Hmm, that makes sense. I used to l | S3 That's… actually really close! | S4 …it just feels awkward.

     0.00s  user  발화 시작: I’ve been feeling a bit lost lately, like I don’t really con
     0.02s  <ret> 발화 (turn5 첫 프레임)
     0.04s  agent 발화 시작: It's completely natural to feel that way sometimes. Building
     0.04s  user  발화 끝
     0.10s  user  발화 시작: Well, it's just… everyone seems to have their groups, and I’
     0.10s  agent 발화 끝
     0.14s  <ret> 발화 (turn12 첫 프레임)
     0.14s  agent 발화 시작: It sounds like you’re experiencing a sense of exclusion, and
     0.14s  user  발화 끝
     0.21s  user  발화 시작: I guess I want friends who share my interests, but I don't e
     0.21s  agent 발화 끝
     0.26s  agent 발화 시작: <ret> Discovering friends with shared passions often happens
     0.26s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: Common interests are often found through hobbies, volunteering, or joi
     0.26s  user  발화 끝
     0.31s  user  발화 시작: Hmm, that makes sense. I used to love astronomy…
     0.31s  agent 발화 끝
     0.34s  agent 발화 시작: Oh, astronomy is wonderful! It's a fantastic way to feel con
     0.34s  user  발화 끝
     0.40s  user  발화 시작: Uh-huh.
     0.40s  agent 발화 끝
     0.40s  user  발화 시작: Yeah, but it's been years since I looked through a telescope
     0.40s  user  발화 끝
     0.44s  agent 발화 시작: It’s alright to feel a little rusty after a break. Rediscove
     0.44s  user  발화 끝
     0.51s  user  발화 시작: Maybe… I wonder if there are any astronomy clubs nearby?
     0.51s  agent 발화 끝
     0.54s  agent 발화 시작: <ret> The Seoul Astronomical Society meets every second Satu
     0.54s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) The Seoul Astronomical Society meets every second Saturd
     0.54s  user  발화 끝
     0.60s  user  발화 시작: Yeah.
     0.60s  agent 발화 끝
     0.61s  user  발화 시작: That's… actually really close!
     0.61s  user  발화 끝
     0.62s  agent 발화 시작: [happy] Isn’t it wonderful when opportunities present themse
     0.62s  user  발화 끝
     0.67s  user  발화 시작: I guess so. But what if I go…
     0.67s  agent 발화 끝
     0.70s  user  발화 시작: …and everyone already knows each other?
     0.70s  user  발화 끝
     0.71s  agent 발화 시작: That’s a very valid concern. It can be intimidating joining 
     0.71s  user  발화 끝
     0.76s  user  발화 시작: …it just feels awkward.
     0.76s  agent 발화 끝
     0.77s  agent 발화 시작: It *is* awkward, and it’s okay to acknowledge that feeling. 
     0.77s  user  발화 끝
     0.79s  <ret> 발화 (turn23 첫 프레임)
     0.84s  user  발화 시작: Mm-hmm.
     0.84s  agent 발화 끝
     0.84s  user  발화 시작: That’s a good idea, actually. What’s the weather like this w
     0.84s  user  발화 끝
     0.87s  agent 발화 시작: <ret> The current conditions in Seoul are 24.0°C, with 65% h
     0.87s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) Current conditions in Seoul: 24.0°C, humidity 65%, wind 
     0.87s  user  발화 끝
     0.94s  user  발화 시작: Yeah.
     0.94s  agent 발화 끝
     0.94s  user  발화 시작: Perfect! Thanks, Larimi.
     0.94s  user  발화 끝
     0.95s  agent 발화 시작: You're very welcome. Remember, taking that first step can be
     0.95s  user  발화 끝
     1.00s  agent 발화 끝
