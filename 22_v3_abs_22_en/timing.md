# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Charlotte",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-22",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-11-15",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-14",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-04",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: What was the name of the project founded in the Philippines?
     4.22s  <ret> 발화 (turn1 첫 프레임)
     4.31s  agent 발화 시작: <ret> Hmm, that’s a tricky one! I’ve searched, and unfortuna
     4.31s  user  발화 끝
     4.93s  ⚡SPAN 주입 [d'=0.70s / d_lead=8.22s]: (no information found)
    12.53s  user  발화 시작: Oh, okay. Well, what’s the weather like in Manila right now?
    12.53s  agent 발화 끝
    16.83s  agent 발화 시작: Yeah.
    16.83s  user  발화 끝
    16.94s  <ret> 발화 (turn4 첫 프레임)
    17.22s  agent 발화 시작: <ret> The weather in Manila is currently 31.0 degrees Celsiu
    17.22s  agent 발화 끝
    18.14s  ⚡SPAN 주입 [d'=1.20s / d_lead=8.61s]: (tool result) 31.0°C, humidity 78%, wind 10.0 km/h, condition: Partly 
    25.84s  agent 발화 시작: Sounds warm and breezy! Perhaps a good day for some outdoor 
    25.84s  agent 발화 끝
    30.53s  user  발화 시작: Mm-hmm.
    30.53s  agent 발화 끝
    30.92s  user  발화 시작: It does! I’m trying to write a short story, but I’m stuck.
    30.92s  user  발화 끝
    35.62s  agent 발화 시작: Uh-huh.
    35.62s  user  발화 끝
    36.01s  agent 발화 시작: Oh, writer’s block, I understand! Sometimes just talking abo
    36.01s  agent 발화 끝
    46.58s  agent 발화 끝
