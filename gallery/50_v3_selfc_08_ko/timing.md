# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "노린",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-10",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 약국 좀 찾아줘, 샌프란시스코에서 삼킬로미터 이내로—아, 오킬로미터로 해 줘.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.18s  agent 발화 시작: <ret> 샌프란시스코에서 오킬로미터 이내에 Walgreens, CVS Pharmacy, Rite Aid 약
     0.18s  ⚡SPAN 주입 [d'=0.20s / d_lead=0.20s]: (tool result) pharmacies: Walgreens (34.0522,-118.2437), CVS Pharmacy 
     0.18s  user  발화 끝
     0.37s  user  발화 시작: 와.
     0.37s  agent 발화 끝
     0.39s  agent 발화 시작: 혹시 어떤 약국을 더 자세히 알아보고 싶으신가요?
     0.39s  user  발화 끝
     0.41s  <ret> 발화 (turn5 첫 프레임)
     0.53s  user  발화 시작: Walgreens가 제일 가까운 곳 같네. 그곳으로 가는 길 좀 알려줘.
     0.53s  agent 발화 끝
     0.73s  agent 발화 시작: <ret> 현재 위치에서 Walgreens까지 차로 일 점 이마일, 약 오분 정도 걸립니다. 마켓 스트리트에
     0.73s  ⚡SPAN 주입 [d'=0.27s / d_lead=0.27s]: (tool result) Directions: Drive 1.2 miles, approximately 5 minutes. Tu
     0.73s  user  발화 끝
     1.00s  agent 발화 끝
