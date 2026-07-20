# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "유준",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-03",
#       "category": "sibling",
#       "text": "User has a younger sibling named Emma."
#     },
#     {
#       "date": "2026-05-08",
#       "category": "hobby",
#       "text": "User is into long-distance cycling."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "anniversary",
#       "text": "User's anniversary is March 11."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "employer",
#       "text": "User works at a school district."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "allergy",
#       "text": "User is allergic to tree nuts."
#     },
#     {
#       "date": "2026-02-25",
#       "category": "partner",
#       "text": "User's partner is named Minjun."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "floor",
#       "text": "User lives on the 3rd floor."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "phone",
#       "text": "User uses an Xperia 1."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-04-03",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-01-19",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     },
#     {
#       "date": "2025-12-05",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 지구 내부에서 직접 얻을 수 있는 에너지는 뭐라고 불러요?
     1.57s  agent 발화 시작: 네.
     2.34s  agent 발화 끝
     3.92s  <ret> 발화 (turn2 첫 프레임)
     4.08s  agent 발화 시작: <ret> 지구 내부에서 표면으로 흐르는 열의 흐름을 지열 플럭스라고 부릅니다. [happy] 혹시 다른 에
     4.12s  user  발화 끝
     5.42s  ⚡SPAN 주입 [d'=1.50s / d_lead=8.35s]: Geothermal heat flux is the flow of heat from the Earth's interior to 
    12.43s  agent 발화 끝
