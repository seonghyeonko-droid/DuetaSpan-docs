# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Emma",
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
#       "date": "2026-05-31",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "home",
#       "text": "User's home address is 418 Elm Street."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’ve been trying to make more frie | S2 Hmm. Maybe. But what if I just don | S3 …Wait, what were you just saying a | S4 That’s…a really specific example.

     0.00s  user  발화 시작: I’ve been trying to make more friends, and it’s just…hard.
     3.27s  agent 발화 시작: It absolutely can be, and you're not alone in feeling that w
     3.37s  user  발화 끝
     5.39s  user  발화 시작: Mm-hmm.
     5.98s  user  발화 끝
    10.04s  user  발화 시작: Easy for you to say! I feel like everyone already *has* thei
    10.17s  agent 발화 끝
    14.39s  user  발화 끝
    14.46s  agent 발화 시작: It’s a common feeling, truly. Often, we overestimate how set
    16.71s  user  발화 시작: Mm-hmm.
    17.35s  user  발화 끝
    19.67s  user  발화 시작: Hmm. Maybe. But what if I just don’t know where to even *sta
    19.79s  agent 발화 끝
    23.81s  <ret> 발화 (turn7 첫 프레임)
    23.97s  agent 발화 시작: <ret> When thinking about where to start, consider your inte
    23.97s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.91s]: Camassia and Chelone are both native flowering plants of North America
    24.16s  user  발화 끝
    26.25s  user  발화 시작: …Wait, what were you just saying about flowers?
    26.88s  agent 발화 끝
    28.63s  agent 발화 시작: I was drawing an analogy to finding friends; look where your
    28.74s  user  발화 끝
    31.80s  user  발화 시작: Mm-hmm.
    32.29s  user  발화 끝
    33.54s  agent 발화 시작: It’s like Camassia and Chelone, both native to North America
    33.62s  agent 발화 끝
    39.33s  agent 발화 끝
    39.58s  user  발화 시작: That’s…a really specific example.
    41.74s  agent 발화 시작: Sometimes a little specificity can spark ideas, right? What 
    41.93s  user  발화 끝
    46.70s  agent 발화 끝
