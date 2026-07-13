# v3_mcp_01_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Marie",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-21",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "home",
#       "text": "User's home address is 504 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-17",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: What location is thirty-two point zero three three three lat
     6.95s  agent 발화 시작: Right.
     6.95s  user  발화 끝
     7.14s  <ret> 발화 (turn2 첫 프레임)
     7.29s  agent 발화 시작: <ret> That location is two two oh eight University Avenue, i
     7.29s  agent 발화 끝
     7.48s  ⚡SPAN 주입 [d'=0.35s / d_lead=9.03s]: (tool result) {"address": "2208 University Ave, San Diego, CA 92104", 
    16.32s  user  발화 시작: Uh-huh.
    16.32s  agent 발화 끝
    16.67s  user  발화 시작: Hmm, is that near any good coffee shops?
    16.67s  user  발화 끝
    19.45s  agent 발화 시작: Yeah.
    19.45s  user  발화 끝
    19.48s  <ret> 발화 (turn6 첫 프레임)
    19.74s  ⚡SPAN 주입 [d'=0.64s / d_lead=10.42s]: {"name": "Living Brew Coffee", "address": "2121 El Cajon Blvd Ste 109,
    19.80s  agent 발화 시작: <ret> Living Brew Coffee is only point six miles away, at tw
    19.80s  agent 발화 끝
    30.22s  user  발화 시작: Okay, good. Could you find me directions to that coffee shop
    30.22s  agent 발화 끝
    34.18s  <ret> 발화 (turn9 첫 프레임)
    34.39s  agent 발화 시작: Mhm.
    34.39s  user  발화 끝
    34.64s  ⚡SPAN 주입 [d'=0.46s / d_lead=10.07s]: (tool result) {"distance": 0.6, "duration": 12, "instructions": Walk w
    34.73s  agent 발화 시작: <ret> It’s a point six mile walk; it will take about twelve 
    34.73s  agent 발화 끝
    44.81s  agent 발화 끝
