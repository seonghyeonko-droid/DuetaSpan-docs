# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "주안",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2025-11-25",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 괌 근처에서 벌어진 전투로 사상자가…
     1.94s  user  발화 시작: …얼마나 나왔는지 알 수 있을까요?
     1.94s  user  발화 끝
     3.65s  <ret> 발화 (turn2 첫 프레임)
     3.89s  agent 발화 시작: <ret> 죄송합니다, 그에 대한 정보는 찾을 수 없었어요. 아직 알려진 바가 없는 것 같아요.
     3.89s  ⚡SPAN 주입 [d'=0.64s / d_lead=5.05s]: (no information found)
     3.89s  user  발화 끝
     8.94s  user  발화 시작: 응.
     8.94s  agent 발화 끝
     9.33s  user  발화 시작: 아, 그렇군요.
     9.33s  user  발화 끝
    10.11s  agent 발화 시작: 혹시 다른 궁금한 점이 있으신가요? 제가 도와드릴 수 있는 다른 일이 있을까요?
    10.11s  user  발화 끝
    14.77s  user  발화 시작: 응응.
    14.77s  agent 발화 끝
    15.16s  user  발화 끝
