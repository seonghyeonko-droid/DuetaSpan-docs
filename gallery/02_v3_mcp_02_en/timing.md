# v3_mcp_02_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "Rosa",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-16",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2025-07-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-02",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-21",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-03",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need to accept the terms and conditions on that website. C
    10.19s  <ret> 발화 (turn1 첫 프레임)
    10.43s  agent 발화 시작: <ret> I’ve just clicked the accept button within the iframe,
    10.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: (tool result) {"status": "success", "message": "Button 'accept' clicke
    10.43s  user  발화 끝
    16.08s  user  발화 시작: Uh-huh.
    16.08s  agent 발화 끝
    16.51s  user  발화 시작: Oh, great! That’s a relief. Um…
    16.51s  user  발화 끝
    19.12s  user  발화 시작: …what’s the weather like in Seoul right now?
    19.12s  user  발화 끝
    22.44s  <ret> 발화 (turn5 첫 프레임)
    22.60s  agent 발화 시작: <ret> The weather in Seoul is currently 28.5 degrees Celsius
    22.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.00s]: (tool result) {"temperature": 28.5, "humidity": 78, "wind speed": 6.2,
    22.60s  user  발화 끝
    32.60s  agent 발화 끝
