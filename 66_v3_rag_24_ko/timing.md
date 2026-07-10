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


     0.00s  user  발화 시작: 뒤플레시라는 이름이 어디서 왔는지 궁금해요.
     2.58s  <ret> 발화 (turn1 첫 프레임)
     2.88s  agent 발화 시작: <ret> 뒤플레시라는 성은 프랑스 위그노에서 유래했는데, '플레시의'라는 뜻이래요.
     3.10s  user  발화 끝
     3.94s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.28s]: [source: Wikipedia] The surname Du Plessis is of French Huguenot origi
     6.73s  user  발화 시작: 맞아요.
     7.36s  user  발화 끝
     8.16s  agent 발화 끝
     8.82s  user  발화 시작: 위그노가 뭔데요?
     9.54s  <ret> 발화 (turn4 첫 프레임)
     9.93s  agent 발화 시작: <ret> 위그노는 십육세기와 십칠세기 프랑스 개신교도들을 말하는데, 칼뱅주의 신자들이 많았다고 해요.
    10.15s  user  발화 끝
    11.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.32s]: [source: Britannica] Huguenots were French Protestants in the 16th and
    17.25s  agent 발화 끝
