# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "민정",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-12",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-10-07",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-31",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-05-09",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 공군력이 어디서 출발하는지 궁금해.
     2.09s  <ret> 발화 (turn1 첫 프레임)
     2.33s  agent 발화 시작: <ret> 공군력은 메릴랜드 주에 있는 앤드루스 공군 기지에서 출발해요. 그곳은 프린스 조지스 카운티에 위치
     2.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.16s]: Andrews Air Force Base is a United States Air Force base located in Pr
     2.33s  user  발화 끝
    10.49s  agent 발화 끝
