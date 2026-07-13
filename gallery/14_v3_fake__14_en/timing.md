# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Avery",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-02",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "home",
#       "text": "User's home address is 374 Oak Avenue."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I was reading the Odyssey, and I got curious. How old was Te
     6.30s  <ret> 발화 (turn1 첫 프레임)
     6.54s  agent 발화 시작: <ret> Telemachus is actually twenty years old when the Odyss
     6.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.62s]: Telemachus is twenty years old at the beginning of Homer’s Odyssey, ha
     6.54s  user  발화 끝
    16.17s  user  발화 시작: That’s good to know. It feels like he’s younger, somehow.
    16.17s  agent 발화 끝
    19.77s  <ret> 발화 (turn3 첫 프레임)
    20.01s  agent 발화 시작: <ret> I understand that feeling. It's easy to focus on his e
    20.01s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=9.62s]: The current temperature in Reykjavik, Iceland is 8.2°C, with a humidit
    20.01s  user  발화 끝
    29.64s  agent 발화 시작: It's wonderful you're exploring such classic literature. Som
    29.64s  agent 발화 끝
    38.49s  user  발화 시작: I think so. Maybe I’ll reread it with that in mind.
    38.49s  agent 발화 끝
    42.72s  agent 발화 시작: That sounds like a lovely idea! Re-reading with a fresh pers
    42.72s  user  발화 끝
    51.58s  agent 발화 끝
