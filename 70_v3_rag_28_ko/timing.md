# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "정우",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 요즘 날씨가 너무 덥지 않아? 에어컨 없이는 도저히 안 될 것 같아.
     4.98s  <ret> 발화 (turn1 첫 프레임)
     5.23s  agent 발화 시작: <ret> 오늘 서울의 기온은 이십팔 점 오도이고, 습도는 칠십퍼센트, 바람은 시속 삼 점 이킬로미터입니다.
     5.23s  user  발화 끝
     5.28s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.97s]: 2026-07-10, Seoul, South Korea: Temperature: 28.5°C, Humidity: 70%, Wi
    12.20s  user  발화 시작: 진짜요?
    12.20s  agent 발화 끝
    12.64s  user  발화 시작: 흐음, 그렇군요. 그럼 이번 주말에는 어때? 혹시 비가 올까?
    12.64s  user  발화 끝
    16.56s  agent 발화 시작: 네.
    16.56s  user  발화 끝
    16.94s  <ret> 발화 (turn5 첫 프레임)
    16.99s  agent 발화 시작: <ret> 이번 주 토요일 서울에는 비가 올 것으로 예상됩니다. 기온은 삼십 점 일도까지 올라가고, 습도는 
    16.99s  agent 발화 끝
    17.24s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.97s]: (tool result) 2026-07-12, Seoul, South Korea: Temperature: 30.1°C, Hum
    23.96s  user  발화 시작: 진짜요?
    23.96s  agent 발화 끝
    24.40s  user  발화 시작: 아, 비 오면 좀 시원하겠네. 혹시… 요즘 인기 있는 노래 알아볼 수 있을까?
    24.40s  user  발화 끝
    30.06s  agent 발화 시작: 어떤 장르를 좋아하시나요? 요즘 차트에서 가장 인기 있는 노래를 찾아드릴게요.
    30.06s  user  발화 끝
    34.42s  agent 발화 끝
