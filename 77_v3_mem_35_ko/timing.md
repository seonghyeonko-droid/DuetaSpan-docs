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
#       "text": "User's home address is 517 Maple Drive."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
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


     0.00s  agent 발화 시작: 하형 씨, 안녕하세요. 저는 클렌이라고 해요. 돈 관리와 예산 짜는 걸 도와드리는 상담사입니다.
     6.58s  agent 발화 끝
     6.63s  user  발화 시작: 아, 안녕하세요. 뉴질랜드 여행 계획하고 있는데, 혹시 추천해 줄 만한 곳 있을까요?
    12.22s  <ret> 발화 (turn2 첫 프레임)
    12.37s  agent 발화 시작: <ret> 십월에 뉴질랜드 여행을 계획하고 계시는군요. 정말 멋진 곳이에요. 여행 스타일을 좀 더 알려주실 
    12.47s  user  발화 끝
    14.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.35s]: [2025-12-04] User is planning a trip to New Zealand in October.
    14.80s  user  발화 시작: 응.
    15.29s  user  발화 끝
    18.51s  user  발화 시작: 음… 저는 좀 조용한 곳을 좋아하고, 자연을 즐기는 걸 좋아해요. 너무 붐비는 관광지는 피하고 싶어요.
    18.72s  agent 발화 끝
    25.59s  agent 발화 시작: 조용하고 자연을 즐기는 스타일이시군요. 뉴질랜드 남섬의 퀸스타운 근처에 있는 와카티푸 호수 주변은 어떠세요?
    25.78s  user  발화 끝
    35.68s  user  발화 시작: 혹시 거기 가는 데 비행기표는 얼마나 해요?
    36.49s  agent 발화 끝
    37.99s  <ret> 발화 (turn7 첫 프레임)
    38.22s  agent 발화 시작: <ret> 비행기표 가격이 궁금하시군요. 부산에서 퀸스타운까지 가는 가장 저렴한 항공편을 찾아볼게요. 부산에
    38.45s  user  발화 끝
    39.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.15s]: (tool result) 최저가 ₩1,890,000부터 있습니다.
    44.35s  user  발화 시작: 아.
    44.66s  user  발화 끝
    50.30s  agent 발화 시작: 가격이 조금 부담스러울 수도 있겠네요. 다른 도시를 경유하면 좀 더 저렴해질 수도 있습니다.
    50.37s  agent 발화 끝
    56.46s  agent 발화 끝
