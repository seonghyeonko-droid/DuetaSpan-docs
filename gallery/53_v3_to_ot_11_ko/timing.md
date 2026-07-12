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
     4.23s  <ret> 발화 (turn1 첫 프레임)
     4.47s  agent 발화 시작: <ret> 세상에서 돌아가는 일들에서 잭 스나이더 역할을 맡은 사람은 마이클 프랭크 파크였습니다. 혹시 다른
     4.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: Michael Frank Park.
     4.68s  user  발화 끝
     8.26s  user  발화 시작: 응.
     8.61s  user  발화 끝
    12.20s  agent 발화 끝
    12.49s  user  발화 시작: … 그 배우, 다른 드라마에도 나왔어?
    14.18s  <ret> 발화 (turn4 첫 프레임)
    14.47s  user  발화 끝
    14.50s  agent 발화 시작: <ret> 마이클 프랭크 파크는… —
    14.50s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.42s]: Michael Frank Park.
    15.35s  user  발화 시작: 다른 드라마에도 나왔어?
    15.92s  agent 발화 끝
    16.81s  agent 발화 시작: 네, 마이클 프랭크 파크는 여러 드라마에 출연했습니다.
    16.82s  user  발화 끝
    18.55s  user  발화 시작: 어.
    19.28s  user  발화 끝
    20.35s  agent 발화 시작: 그는 '로앤오더'나 '데드 우드' 같은 작품에서도 활약하셨어요. 혹시 특정 드라마를 찾으시는 건가요?
    20.36s  agent 발화 끝
    26.46s  agent 발화 끝
