# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "지슬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-11-12",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-11-01",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-08-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-29",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-20",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음… 혹시 지난 세션 F3가 토큰을 얼마나 소모했는지 알려줄 수 있어?
     5.24s  <ret> 발화 (turn1 첫 프레임)
     5.47s  user  발화 끝
     5.47s  agent 발화 시작: <ret> 세션 F3는 토큰을 천 사백칠십팔 개 소모했습니다. 혹시 다른 세션에 대해서도 알아볼까요?
     5.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: (tool result) Session F3 consumed 1478 tokens.
    12.61s  agent 발화 끝
    14.14s  user  발화 시작: 어… 잠깐만. 천 개 넘게 썼다고? 좀 많이 쓴 거 같은데.
    18.21s  user  발화 끝
    18.24s  agent 발화 시작: 토큰 사용량이 예상보다 많으셨군요. 혹시 어떤 작업을 주로 하셨는지 여쭤봐도 될까요? 작업 내용에 따라 토큰
    27.66s  agent 발화 끝
