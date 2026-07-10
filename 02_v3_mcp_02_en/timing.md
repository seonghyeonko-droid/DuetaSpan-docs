# v3_mcp_02_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "Stella",
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
#       "date": "2026-04-07",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "home",
#       "text": "User's home address is 670 Maple Drive."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hey, could you look up Zuni Cafe…
     2.58s  user  발화 끝
     3.54s  user  발화 시작: …for me? I need their phone number.
     5.69s  <ret> 발화 (turn2 첫 프레임)
     5.93s  agent 발화 시작: <ret> Zuni Café’s phone number is 415-552-2377, located on M
     5.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.91s]: {"name": "Zuni Café", "address": "1658 Market St, San Francisco, CA 94
     6.04s  user  발화 끝
    12.56s  user  발화 시작: Wow.
    13.24s  user  발화 끝
    17.85s  agent 발화 끝
    19.36s  user  발화 시작: Oh, that's great! Um, actually, I'm trying to decide if I sh
    25.76s  user  발화 끝
    25.77s  agent 발화 시작: Well, deciding where to focus your energy is a big part of f
    34.81s  agent 발화 끝
