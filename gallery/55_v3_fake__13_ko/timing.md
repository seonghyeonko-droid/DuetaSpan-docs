# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "준별",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2026-05-26",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-14",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-15",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-11-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 영국에서 월드컵이 마지막으로 열린 건 언제였지?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.10s  agent 발화 시작: <ret> 영국에서 월드컵이 열린 마지막 해는 천구백육십육년이었답니다. 그때가 유일하게 영국에서 열린 월드컵
     0.10s  ⚡SPAN 주입 [d'=0.18s / d_lead=0.18s]: The 1966 FIFA World Cup was hosted in England, and it remains the only
     0.10s  user  발화 끝
     0.16s  <ret> 발화 (turn3 첫 프레임)
     0.28s  user  발화 시작: 아, 그렇구나.
     0.28s  agent 발화 끝
     0.32s  agent 발화 시작: <ret> 혹시 다른 궁금한 점이 있으세요? 제가 또 도와드릴 수 있어요.
     0.32s  ⚡SPAN 주입(IRRELEVANT) [d'=0.17s / d_lead=0.17s]: The average high temperature in Reykjavik, Iceland in July is 13.1°C, 
     0.32s  user  발화 끝
     0.48s  user  발화 시작: 응.
     0.48s  agent 발화 끝
     0.50s  agent 발화 시작: 공부에 지칠 때면 잠깐 쉬면서 좋아하는 음악을 듣는 것도 좋은 방법이에요.
     0.50s  user  발화 끝
     0.68s  user  발화 시작: 그래.
     0.68s  agent 발화 끝
     0.70s  user  발화 시작: 좋은 생각인데. 혹시 오늘 날씨 어때?
     0.70s  user  발화 끝
     0.72s  <ret> 발화 (turn8 첫 프레임)
     0.80s  agent 발화 시작: <ret> 지금은 기온이 이십삼도이고, 습도는 칠십사퍼센트, 바람은 시속 오 점 오킬로미터로 불고 있어요.
     0.80s  ⚡SPAN 주입 [d'=0.20s / d_lead=0.20s]: (tool result) Current conditions are 23.0°C, humidity 74%, wind 5.5 km
     0.80s  user  발화 끝
     1.00s  agent 발화 끝
