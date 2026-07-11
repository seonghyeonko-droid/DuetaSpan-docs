# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Olivia",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-18",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "home",
#       "text": "User's home address is 139 Birch Road."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-06-28",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-01",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-17",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Olivia, I'm Los! It's so lovely to meet you.
     0.09s  user  발화 시작: Uh-huh.
     0.09s  agent 발화 끝
     0.10s  user  발화 시작: Oh, hello! That sounds…nice. Um, I was just thinking about m
     0.10s  user  발화 끝
     0.15s  <ret> 발화 (turn3 첫 프레임)
     0.23s  agent 발화 시작: <ret> You mentioned you're planning a trip to Switzerland in
     0.23s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: [2026-04-18] User is planning a trip to Switzerland in October.
     0.23s  user  발화 끝
     0.35s  user  발화 시작: Uh-huh.
     0.35s  agent 발화 끝
     0.36s  user  발화 시작: Yes! I was wondering…do you remember if I said anything abou
     0.36s  user  발화 끝
     0.43s  <ret> 발화 (turn6 첫 프레임)
     0.51s  agent 발화 시작: <ret> I have a note from a past chat about a dentist appoint
     0.51s  ⚡SPAN 주입 [d'=0.21s / d_lead=0.21s]: [2025-08-17] Past chat — Booked a dentist appointment: asked for an ea
     0.51s  user  발화 끝
     0.68s  <ret> 발화 (turn8 첫 프레임)
     0.72s  user  발화 시작: Oh, right. Never mind that then. What’s the weather like in 
     0.72s  agent 발화 끝
     0.84s  agent 발화 시작: <ret> Right now in London, it's 23.0°C with 74% humidity and
     0.84s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
     0.84s  user  발화 끝
     1.00s  agent 발화 끝
