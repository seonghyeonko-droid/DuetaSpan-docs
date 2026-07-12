# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "진우",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-05-31",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 뉴올리언스 루이지애나에 있는 집을 네 명분으로 찾아줘.
     3.61s  <ret> 발화 (turn1 첫 프레임)
     3.69s  agent 발화 시작: <ret> 뉴올리언스 루이지애나에서 네 분이 머물 수 있는 집 삼채를 찾았어요. 숙박료는 밤에 백오십달러에서
     3.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.90s]: (tool result) Found 3 houses matching your criteria in New Orleans, Lo
     3.75s  user  발화 끝
    12.59s  agent 발화 끝
    12.70s  user  발화 시작: 음, 그 중에서 제일 싼 데 좀 더 자세히 알려줄래?
    15.89s  user  발화 끝
    16.17s  agent 발화 시작: 지금 확인해 보고요.
    16.67s  ⚡지연 SPAN 주입(선제발표 직전): The least expensive house is a 2-bedroom bungalow at 123 Bourbon Stree
    17.39s  agent 발화 시작: <ret> 잠깐만 기다려 주세요. 제일 저렴한 곳은 버번 스트리트 백이십삼번지에 있는 침실 두개짜리 방갈로인
    17.64s  agent 발화 끝
    26.22s  user  발화 시작: 네.
    26.57s  user  발화 끝
    31.44s  agent 발화 끝
