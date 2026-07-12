# v3_noinfo_23_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Riley",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-06-24",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-06-21",
#       "category": "home",
#       "text": "User's home address is 65 Elm Street."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-07-10",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-13",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Oriol, do you happen to know Sarah Miller's phone number?
     3.02s  <ret> 발화 (turn1 첫 프레임)
     3.42s  agent 발화 시작: <ret> I’ve checked, and unfortunately, a phone number for Sa
     3.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.12s]: (no information found)
     3.42s  user  발화 끝
     8.54s  user  발화 시작: Oh, okay. That's a shame.
     8.54s  agent 발화 끝
    10.25s  agent 발화 시작: It’s understandable to want to reconnect; sometimes people p
    10.25s  user  발화 끝
    15.03s  user  발화 시작: Yeah.
    15.03s  agent 발화 끝
    15.37s  agent 발화 시작: Perhaps you could try reaching out through social media or a
    15.37s  user  발화 끝
    19.82s  user  발화 시작: Right.
    19.82s  agent 발화 끝
    20.16s  user  발화 시작: Hmm, maybe. What’s the weather like in Seoul right now?
    20.16s  user  발화 끝
    23.49s  <ret> 발화 (turn8 첫 프레임)
    23.57s  agent 발화 시작: <ret> The weather in Seoul is currently twenty-three point z
    23.57s  ⚡SPAN 주입 [d'=1.76s / d_lead=10.59s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    23.57s  user  발화 끝
    34.17s  agent 발화 끝
