# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "유준",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-06",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-08-14",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-18",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-24",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-22",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-09",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 아이피 주소 구십삼 점 일 팔.이백십육 점 삼 사가 어느 도시인가요?
     4.44s  <ret> 발화 (turn1 첫 프레임)
     4.68s  agent 발화 시작: <ret> 그 아이피 주소는 독일 베를린에 위치해 있습니다. 혹시 다른 아이피 주소도 확인해 드릴까요?
     4.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.53s]: (tool result) City: Berlin, Country: Germany
     4.68s  user  발화 끝
    10.21s  user  발화 시작: 네.
    10.21s  agent 발화 끝
    10.63s  user  발화 시작: 아, 네, 그럼 백구십이 점 일 육.일 점 일은 어디에요?
    10.63s  user  발화 끝
    14.57s  <ret> 발화 (turn4 첫 프레임)
    14.89s  agent 발화 시작: <ret> 백구십이 점 일 육.일 점 일 아이피 주소는 미국 뉴욕에 있습니다.
    14.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.68s]: (tool result) City: New York, Country: United States
    14.89s  user  발화 끝
    19.56s  agent 발화 끝
