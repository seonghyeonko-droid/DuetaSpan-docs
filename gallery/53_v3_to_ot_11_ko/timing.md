# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "재민",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-29",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-11-29",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2025-11-20",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 세상에서 돌아가는 일들에서 잭 스나이더를 연기한 사람은 누구였지?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.14s  agent 발화 시작: <ret> 세상에서 돌아가는 일들에서 잭 스나이더 역할을 맡은 사람은 마이클 프랭크 파크였습니다. 혹시 다른
     0.14s  ⚡SPAN 주입 [d'=0.28s / d_lead=0.28s]: Michael Frank Park.
     0.14s  user  발화 끝
     0.37s  <ret> 발화 (turn4 첫 프레임)
     0.41s  user  발화 시작: 응.
     0.41s  agent 발화 끝
     0.43s  user  발화 시작: … 그 배우, 다른 드라마에도 나왔어?
     0.43s  user  발화 끝
     0.53s  agent 발화 시작: <ret> 마이클 프랭크 파크는… —
     0.53s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Michael Frank Park.
     0.53s  user  발화 끝
     0.60s  user  발화 시작: 다른 드라마에도 나왔어?
     0.60s  agent 발화 끝
     0.66s  agent 발화 시작: 네, 마이클 프랭크 파크는 여러 드라마에 출연했습니다.
     0.66s  user  발화 끝
     0.78s  user  발화 시작: 어.
     0.78s  agent 발화 끝
     0.79s  agent 발화 시작: 그는 '로앤오더'나 '데드 우드' 같은 작품에서도 활약하셨어요. 혹시 특정 드라마를 찾으시는 건가요?
     0.79s  user  발화 끝
     1.00s  agent 발화 끝
