# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "하형",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 하형님. 저는 클렌이라고 해요. 돈 관리와 예산 짜는 걸 도와드리는 상담사입니다.
     6.52s  user  발화 시작: 어, 안녕하세요. 뉴질랜드 여행 계획 세우고 있는데, 혹시 추천해 줄 만한 곳 있을까요?
     6.67s  agent 발화 끝
    12.82s  <ret> 발화 (turn2 첫 프레임)
    12.97s  agent 발화 시작: <ret> 이천이십오년 십월에 뉴질랜드 여행을 계획하고 계시다는 것을 기억하고 있습니다.
    13.00s  user  발화 끝
    14.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: [2025-10-01] User is planning a trip to New Zealand in October.
    15.98s  user  발화 시작: 맞아.
    16.48s  user  발화 끝
    18.88s  agent 발화 시작: 뉴질랜드는 아름다운 곳이 정말 많죠. 혹시 특별히 선호하는 여행 스타일이 있으신가요? 액티비티를 좋아하시는지
    19.09s  agent 발화 끝
    35.21s  user  발화 시작: …혹시 퀸스타운 말고는 없을까요? 너무 뻔한 곳 말고.
    36.00s  agent 발화 끝
    39.17s  <ret> 발화 (turn6 첫 프레임)
    39.41s  agent 발화 시작: <ret> 밀포드 사운드와 와나카를 추천해 드립니다. 밀포드 사운드까지는 티아나우에서 백이십미터, 와나카까지
    39.51s  user  발화 끝
    41.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.10s]: (tool result) Milford Sound, (-44.654, 167.942) : Te Anau (120m), Mana
    51.51s  agent 발화 끝
