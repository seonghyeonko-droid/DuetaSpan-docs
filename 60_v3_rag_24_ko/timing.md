# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "우서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "home",
#       "text": "User's home address is 609 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 뒤플레시 가문 이름이 어디에서 유래됐는지 궁금해요.
     3.86s  <ret> 발화 (turn1 첫 프레임)
     4.17s  agent 발화 시작: <ret> 뒤플레시 가문 이름의 유래에 대해 알아봐 드릴게요.
     4.35s  user  발화 끝
     4.98s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.81s]: [source: Wikipedia] The surname Du Plessis is of French origin, and is
     6.85s  agent 발화 시작: 뒤플레시 성은 프랑스어에서 유래되었는데, '뒤플레시'라는 옛 프랑스어에서 '플레시' 지역에서 왔다는 뜻이라고
     6.98s  agent 발화 끝
    12.30s  user  발화 시작: 네.
    12.70s  user  발화 끝
    14.27s  agent 발화 끝
    14.35s  user  발화 시작: 그럼 그 '플레시'는 정확히 어디인가요?
    17.22s  <ret> 발화 (turn5 첫 프레임)
    17.38s  agent 발화 시작: <ret> '플레시'는 프랑스 북부에 있는 지명으로, 특히 여러 개의 작은 마을과 영지를 가리키는 이름이었던
    17.53s  user  발화 끝
    18.58s  ⚡SPAN 주입 [d'=1.36s / d_lead=6.76s]: [source: Forebears] The Plessis is a common place name in Normandy and
    24.05s  agent 발화 시작: '플레시'는 프랑스 북부 노르망디 지역을 비롯한 여러 곳에 있는 작은 마을과 영지를 지칭하는 일반적인 지명이
    24.14s  agent 발화 끝
    30.90s  agent 발화 끝
