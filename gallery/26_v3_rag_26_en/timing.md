# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Emilia",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "home",
#       "text": "User's home address is 249 Cedar Lane."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was looking at flags and I notic | S2 Oh, Germany! Right. I always get t | S3 Wow, that's neat! So it's not just | S4 Yeah, you're right. I feel a littl

     0.00s  user  발화 시작: I was looking at flags and I noticed some have black, red, a
     6.44s  user  발화 끝
     6.59s  agent 발화 시작: It is an interesting color scheme, and many countries utiliz
    15.16s  agent 발화 끝
    15.68s  user  발화 시작: Well, I was wondering if you knew which country’s flag uses 
    21.61s  <ret> 발화 (turn3 첫 프레임)
    21.84s  agent 발화 시작: <ret> The country whose flag prominently features black, red
    21.98s  user  발화 끝
    23.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: [source: Britannica] The national flag of Germany features three horiz
    25.66s  user  발화 시작: Right.
    26.11s  user  발화 끝
    30.05s  agent 발화 끝
    30.91s  user  발화 시작: Oh, Germany! Right. I always get those European flags mixed 
    37.91s  agent 발화 시작: Flags often carry historical and symbolic meaning, and Germa
    38.00s  user  발화 끝
    46.06s  agent 발화 끝
    47.48s  user  발화 시작: Tell me about it! I’m all ears. What do the colors represent
    52.13s  <ret> 발화 (turn8 첫 프레임)
    52.44s  agent 발화 시작: <ret> The colors of the German flag represent determination 
    52.53s  user  발화 끝
    54.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.30s]: [source: History.com] Black represents determination, red signifies co
    62.74s  agent 발화 끝
    63.17s  user  발화 시작: Wow, that's neat! So it's not just random colors then.
    67.20s  agent 발화 시작: Absolutely not! Colors are rarely chosen randomly for a nati
    67.33s  user  발화 끝
    76.71s  agent 발화 끝
    77.18s  user  발화 시작: That makes sense. I guess I should study up on flags more. T
    82.60s  user  발화 끝
    83.01s  agent 발화 시작: You’re very welcome! It’s wonderful to see your curiosity. K
    87.36s  user  발화 시작: Uh-huh.
    87.85s  user  발화 끝
    92.33s  agent 발화 끝
    92.40s  user  발화 시작: Yeah, you're right. I feel a little smarter already.
    95.13s  user  발화 끝
    95.28s  agent 발화 시작: [happy] That's wonderful to hear! A little knowledge can go 
   102.70s  agent 발화 끝
