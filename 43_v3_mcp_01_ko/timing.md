# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "연온",
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
#       "date": "2026-05-21",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-12",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-29",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 지금 내 위치가 어디인지 알려줄 수 있어?
     4.05s  agent 발화 시작: 그렇죠.
     4.05s  user  발화 끝
     4.39s  <ret> 발화 (turn2 첫 프레임)
     4.55s  agent 발화 시작: <ret> 현재 위치는 대한민국 서울입니다. 정확히는 위도 삼십칠 점 오 육도, 경도 백이십육 점 구 칠도 
     4.55s  agent 발화 끝
     5.78s  ⚡SPAN 주입 [d'=1.38s / d_lead=8.09s]: (tool result) {"latitude": 37.5665, "longitude": 126.9780, "formatted 
    12.65s  user  발화 시작: 서울이긴 한데, 좀 더 자세히 알려줄 수 있어? 예를 들어…
    12.65s  agent 발화 끝
    17.70s  user  발화 시작: …지금 근처에 유명한 카페가 있는지?
    17.70s  user  발화 끝
    19.69s  <ret> 발화 (turn5 첫 프레임)
    20.23s  agent 발화 시작: <ret> 근처에 커피빈 명동점이 있고, 평점은 사 점 이점이며, 총 천이백삼십사명의 사용자가 평가했어요.
    20.23s  user  발화 끝
    20.30s  ⚡SPAN 주입 [d'=0.61s / d_lead=6.07s]: (tool result) {"results": [{"name": "커피빈 명동점", "vicinity": "명동2가, 서울",
    26.30s  agent 발화 끝
