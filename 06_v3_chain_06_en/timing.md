# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "Casey",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "home",
#       "text": "User's home address is 441 Birch Road."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2025-11-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-10",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-12",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m having trouble sleeping lately | S2 …you suggest some restaurants near | S3 …actually, before we talk about sl | S4 Sushi Spot sounds nice. What are t

     0.00s  user  발화 시작: I’m having trouble sleeping lately. Could…
     0.02s  <ret> 발화 (turn2 첫 프레임)
     0.05s  user  발화 시작: …you suggest some restaurants near me?
     0.05s  user  발화 끝
     0.10s  agent 발화 시작: <ret> Oh, I'm so sorry to hear that sleep is being difficult
     0.10s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: (no information found)
     0.10s  user  발화 끝
     0.12s  <ret> 발화 (turn4 첫 프레임)
     0.26s  user  발화 시작: …actually, before we talk about sleep, can you find those re
     0.26s  agent 발화 끝
     0.36s  agent 발화 시작: <ret> I found twelve restaurants within three kilometers of 
     0.36s  ⚡SPAN 주입 [d'=0.26s / d_lead=0.26s]: (tool result) Restaurants found: 12. "Pizza Palace", 0.5km, Italian; "
     0.36s  user  발화 끝
     0.60s  <ret> 발화 (turn6 첫 프레임)
     0.62s  user  발화 시작: Sushi Spot sounds nice. What are their hours?
     0.62s  agent 발화 끝
     0.68s  agent 발화 시작: <ret> Sushi Spot is open every day from eleven thirty AM to 
     0.68s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: Sushi Spot is open from 11:30 AM to 10:00 PM daily.
     0.68s  user  발화 끝
     0.85s  agent 발화 시작: I hope you enjoy your meal, and we can return to your sleep 
     0.85s  agent 발화 끝
     1.00s  agent 발화 끝
