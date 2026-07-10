# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "노별",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-09-04",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-07-06",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-07",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 김민지 씨 전화번호 알아요?
     1.64s  <ret> 발화 (turn1 첫 프레임)
     2.03s  agent 발화 시작: <ret> 죄송해요, 김민지 씨 연락처는 찾을 수 없었어요. 개인 정보라서 공개되지 않는 것 같아요.
     2.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.83s]: (no information found)
     2.12s  user  발화 끝
     7.80s  user  발화 시작: 음…
     7.87s  agent 발화 끝
     8.33s  <ret> 발화 (turn3 첫 프레임)
     8.56s  agent 발화 시작: <ret> 혹시 다른 분을 찾으시는 건가요?
     8.56s  user  발화 끝
     8.57s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.07s]: 저는 Huia예요, 막힌 부분이나 자신감이 부족할 때 도움을 드리는 가이드예요.
    10.58s  agent 발화 시작: 혹시 창작 활동에 어려움을 겪고 계신가요? 지금부터 새로운 영감을 찾도록 도와드릴게요. 어떤 분야에 관심이 
    10.63s  agent 발화 끝
    14.95s  user  발화 시작: 그치.
    15.40s  user  발화 끝
    18.69s  agent 발화 끝
    18.72s  agent 발화 시작: 어떤 아이디어가 떠오르지 않을 때, 잠시 생각을 멈추고 주변을 둘러보는 건 어떠세요?
    24.55s  agent 발화 끝
