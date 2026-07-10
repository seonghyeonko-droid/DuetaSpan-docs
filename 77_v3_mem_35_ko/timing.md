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


     0.00s  agent 발화 시작: 하형 씨, 안녕하세요. 저는 클렌이라고 합니다. 돈과 예산 관리를 도와드리는 전문가예요.
     6.89s  user  발화 시작: 안녕하세요. 뉴질랜드 여행 계획 중인데, 여행 준비를 어떻게 시작해야 할지 모르겠어요.
     7.05s  agent 발화 끝
    12.91s  <ret> 발화 (turn2 첫 프레임)
    12.92s  user  발화 끝
    13.06s  agent 발화 시작: <ret> 뉴질랜드 여행 계획을 세우시는군요. 십월에 가시는 걸로 기억하는데, 혹시 특별히 가보고 싶은 곳이
    14.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.89s]: [2025-12-04] User is planning a trip to New Zealand in October.
    21.93s  user  발화 시작: 음… 아직 구체적인 계획은 없어요. 그냥 자연 경관이 좋은 곳으로 가고 싶어요.
    21.96s  agent 발화 끝
    27.58s  user  발화 끝
    27.75s  agent 발화 시작: 자연 경관이 아름다운 곳을 찾으시는군요. 뉴질랜드 남섬의 퀸스타운은 아름다운 산과 호수로 유명한 곳인데—
    35.59s  user  발화 시작: …혹시 퀸스타운 말고 다른 곳은 없을까요? 좀 더 조용한 곳을 선호해요.
    36.42s  agent 발화 끝
    41.11s  agent 발화 시작: 퀸스타운 외에 조용한 곳을 찾으시는군요. 그렇다면 남섬의 밀포드 사운드를 추천해 드릴게요. 피오르드 지형으로
    41.24s  user  발화 끝
    49.31s  user  발화 시작: 어.
    49.80s  user  발화 끝
    51.68s  <ret> 발화 (turn8 첫 프레임)
    51.91s  agent 발화 시작: <ret> 밀포드 사운드는 트레킹 코스도 잘 되어 있어서 하이킹을 즐기시는 분들에게도 인기가 많은 곳입니다.
    52.06s  agent 발화 끝
    53.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: 밀포드 사운드는 피오르드 지형으로 이루어져 있어 정말 아름다운 곳이에요.
    67.41s  <ret> 발화 (turn9 첫 프레임)
    67.65s  agent 발화 시작: <ret> 부산에서 퀸스타운까지 가는 가장 빠른 항공편은 이천이십육년 십월 일일에 출발하는 큐에프 백이십삼편
    67.69s  agent 발화 끝
    69.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.36s]: [QF123, 2026-10-01, 14:30, ₩1,800,000]
    79.01s  agent 발화 끝
