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
     0.08s  agent 발화 시작: It absolutely can be, and you're not alone in feeling that w
     0.08s  user  발화 끝
     0.21s  user  발화 시작: Mm-hmm.
     0.21s  agent 발화 끝
     0.22s  user  발화 시작: Easy for you to say! I feel like everyone already *has* thei
     0.22s  user  발화 끝
     0.32s  agent 발화 시작: It’s a common feeling, truly. Often, we overestimate how set
     0.32s  user  발화 끝
     0.37s  <ret> 발화 (turn7 첫 프레임)
     0.42s  user  발화 시작: Mm-hmm.
     0.42s  agent 발화 끝
     0.42s  user  발화 시작: Hmm. Maybe. But what if I just don’t know where to even *sta
     0.42s  user  발화 끝
     0.53s  agent 발화 시작: <ret> When thinking about where to start, consider your inte
     0.53s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Camassia and Chelone are both native flowering plants of North America
     0.53s  user  발화 끝
     0.60s  user  발화 시작: …Wait, what were you just saying about flowers?
     0.60s  agent 발화 끝
     0.66s  agent 발화 시작: I was drawing an analogy to finding friends; look where your
     0.66s  user  발화 끝
     0.76s  user  발화 시작: Mm-hmm.
     0.76s  agent 발화 끝
     0.77s  agent 발화 시작: It’s like Camassia and Chelone, both native to North America
     0.77s  user  발화 끝
     0.87s  user  발화 시작: That’s…a really specific example.
     0.87s  agent 발화 끝
     0.90s  agent 발화 시작: Sometimes a little specificity can spark ideas, right? What 
     0.90s  user  발화 끝
     1.00s  agent 발화 끝
