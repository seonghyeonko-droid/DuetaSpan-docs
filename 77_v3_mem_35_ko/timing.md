# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "우연",
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
#       "date": "2026-05-25",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-29",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 우연님. 저는 여러분의 스트레스 해소와 마음 챙김을 돕는 에이전트, 셀라이아입니다.
     6.65s  user  발화 시작: 안녕하세요, 셀라이아. 리스본 여행 계획 중인데, 괜찮은 식당 추천해 주실 수 있을까요?
     6.76s  agent 발화 끝
    12.83s  <ret> 발화 (turn2 첫 프레임)
    12.99s  agent 발화 시작: <ret> 팔월에 가시는 걸로 기억하고 있어요.
    12.99s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.35s]: [2025-10-13] User is planning a trip to Lisbon in August.
    13.04s  user  발화 끝
    15.35s  agent 발화 끝
    15.36s  user  발화 시작: 네, 맞아요. 해산물 맛집으로 알려진 곳이 있을까요?
    19.95s  user  발화 끝
    20.09s  <ret> 발화 (turn4 첫 프레임)
    20.16s  agent 발화 시작: <ret> 죄송해요, 지금으로서는 리스본 해산물 맛집에 대한 정보가 없네요. 다른 종류의 식당은 어떠세요?
    20.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.56s]: (no information found)
    27.52s  user  발화 시작: 음… 그럼 분위기가 좋은 야외 테라스가 있는 곳은 없을까요?
    27.71s  agent 발화 끝
    31.93s  <ret> 발화 (turn6 첫 프레임)
    32.17s  agent 발화 시작: <ret> 아, 생일 저녁 식당을 찾으셨던 게 기억나요. 야외 테라스가 있는 곳을 원하셨죠?
    32.17s  ⚡SPAN 주입 [d'=1.84s / d_lead=6.12s]: [2025-08-29] Past chat — Planning a birthday dinner: party of six; loo
    32.19s  user  발화 끝
    38.29s  agent 발화 끝
