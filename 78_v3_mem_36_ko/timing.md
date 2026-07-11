# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "도완",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-02-28",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-06-28",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-03-16",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-29",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 도완님. 저는 제아르입니다. 오늘 하루도 활기차게 시작하셨나요?
     0.08s  <ret> 발화 (turn2 첫 프레임)
     0.10s  user  발화 시작: 네, 안녕하세요. 제아르님. 혹시 제가 예전에 아이슬란드 여행 계획 세우는 거 말씀드렸었죠?
     0.10s  agent 발화 끝
     0.24s  <ret> 발화 (turn6 첫 프레임)
     0.24s  agent 발화 시작: <ret> 네, 오월에 아이슬란드 여행을 계획하고 계셨던 걸 기억하고 있어요.
     0.24s  ⚡SPAN 주입 [d'=0.11s / d_lead=0.11s]: [2026-02-28] User is planning a trip to Iceland in May.
     0.24s  user  발화 끝
     0.35s  user  발화 시작: 그 여행에 대해 좀 더 자세히 얘기해 볼까요?
     0.35s  agent 발화 끝
     0.45s  agent 발화 시작: 도완님. 어떤 점이 궁금하신가요? 여행 준비는 잘 되어가고 있으신가요?
     0.45s  user  발화 끝
     0.55s  user  발화 시작: 아이슬란드 여행하면서 혹시 꽃가루 알레르기 때문에 걱정될까요?
     0.55s  agent 발화 끝
     0.64s  agent 발화 시작: <ret> 꽃가루 알레르기가 있으시군요. 오월의 아이슬란드 꽃가루 농도를 확인해 드릴게요. 오월 일일 아이슬
     0.64s  ⚡SPAN 주입 [d'=0.36s / d_lead=0.36s]: [2025-07-24] User is allergic to pollen.
     0.64s  user  발화 끝
     1.00s  agent 발화 끝
