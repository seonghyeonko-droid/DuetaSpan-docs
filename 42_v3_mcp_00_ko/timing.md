# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "노서",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-02",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-13",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 하키 명예의 전당 주소가 어떻게 돼요? | S2 거기는 분위기가 어때요? | S3 음, 그럼 다른 곳도… | S4 …찾아볼까요? 좀 더 조용한 곳으로.

     0.00s  user  발화 시작: 혹시 하키 명예의 전당 주소가 어떻게 돼요?
     3.28s  <ret> 발화 (turn1 첫 프레임)
     3.44s  agent 발화 시작: <ret> 하키 명예의 전당은 캐나다 온타리오주 토론토 프런트 스트리트 웨스트 백오십오번지에 있어요. 우편번
     3.44s  user  발화 끝
     3.93s  ⚡SPAN 주입 [d'=0.64s / d_lead=7.37s]: The Hockey Hall of Fame is located at 155 Front Street West, Toronto, 
    10.81s  user  발화 시작: 음.
    10.81s  agent 발화 끝
    11.30s  user  발화 시작: 그 근처에 괜찮은 식당 있어요?
    11.30s  user  발화 끝
    13.34s  <ret> 발화 (turn4 첫 프레임)
    13.76s  agent 발화 시작: <ret> 네, 근처에 '리얼 스포츠 바 앤 그릴'이라는 식당이 있는데 평점이 사 점 이점이고 가격대는 보통
    13.76s  user  발화 끝
    14.61s  ⚡SPAN 주입 [d'=1.27s / d_lead=7.37s]: (tool result) {"restaurants": [{"name": "Real Sports Bar & Grill", "ad
    21.13s  user  발화 시작: 거기는 분위기가 어때요?
    21.13s  agent 발화 끝
    22.60s  agent 발화 시작: 스포츠 경기를 보기에 아주 좋은 곳이라고 하네요. 팬들이 많이 찾는 곳이에요.
    22.60s  user  발화 끝
    28.00s  user  발화 시작: 네.
    28.00s  agent 발화 끝
    28.50s  user  발화 시작: 음, 그럼 다른 곳도…
    28.50s  user  발화 끝
    30.46s  user  발화 시작: …찾아볼까요? 좀 더 조용한 곳으로.
    30.46s  user  발화 끝
    32.92s  agent 발화 시작: [curious] 네, 그럼 좀 더 조용한 곳을 찾아볼게요. 어떤 종류의 음식을 좋아하세요?
    32.92s  user  발화 끝
    38.81s  agent 발화 끝
