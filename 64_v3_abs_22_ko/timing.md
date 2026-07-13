# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "가재",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-04",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 캠퍼스를 축소했던 곳이 오십년대나 육십년대에 있었어?
     3.10s  <ret> 발화 (turn1 첫 프레임)
     3.39s  agent 발화 시작: <ret> 죄송하지만, 그런 정보를 찾을 수 없었어요. [sigh] 혹시 다른 걸 찾아볼까요?
     3.39s  user  발화 끝
     4.20s  ⚡SPAN 주입 [d'=1.09s / d_lead=5.32s]: (no information found)
     8.71s  user  발화 시작: 아, 그래… 그럼 서울에서 가장 인기 있는 카페 좀 알려줘.
     8.71s  agent 발화 끝
    13.47s  <ret> 발화 (turn3 첫 프레임)
    13.54s  agent 발화 시작: <ret> 서울에서 가장 인기 있는 카페는 카페 어니언 안국점이에요. 종로구 안국동에 있고, 평점이 사 점 
    13.54s  user  발화 끝
    14.73s  ⚡SPAN 주입 [d'=1.26s / d_lead=7.25s]: (tool result) {"restaurants": [{"name": "Cafe Onion Anguk", "address":
    20.80s  user  발화 시작: 응.
    20.80s  agent 발화 끝
    21.28s  user  발화 시작: 오, 거긴 가봤어. 분위기가 좋았지.
    21.28s  user  발화 끝
    23.70s  agent 발화 시작: 네, 분위기가 좋다고 하시는 분들이 많더라고요. [happy] 다른 카페도 찾아볼까요?
    23.70s  user  발화 끝
    28.53s  agent 발화 끝
