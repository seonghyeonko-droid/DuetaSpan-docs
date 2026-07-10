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

# EXAMINER(FDB-v2) 단계: S1 아, 네. 뉴질랜드 여행 계획 세우고 있는데, 혹시 추천해 줄 | S2 음… 액티비티랑 관광 둘 다 하고 싶은데, 너무 빡빡한 일정은 | S3 … 혹시 퀸스타운 말고 다른 곳은 없을까요? 너무 유명한 곳은 | S4 와나카요? 거기는 어떤 곳인데요?

     0.00s  agent 발화 시작: 하형님, 안녕하세요. 저는 클렌이라고 합니다. 돈 관리와 예산 관련해서 도와드리는 에이전트예요.
     7.32s  agent 발화 끝
     7.37s  user  발화 시작: 아, 네. 뉴질랜드 여행 계획 세우고 있는데, 혹시 추천해 줄 만한 곳 있어요?
    12.18s  user  발화 끝
    12.33s  agent 발화 시작: 뉴질랜드 여행을 준비하고 계시는군요. 혹시 어떤 종류의 여행을 선호하시는지 여쭤봐도 될까요? 액티비티, 휴양
    15.61s  user  발화 시작: 음.
    16.06s  user  발화 끝
    22.30s  agent 발화 끝
    22.97s  user  발화 시작: 음… 액티비티랑 관광 둘 다 하고 싶은데, 너무 빡빡한 일정은 싫어요.
    27.83s  <ret> 발화 (turn5 첫 프레임)
    28.15s  agent 발화 시작: <ret> 뉴질랜드 여행 계획이 있으시군요… 십월에 가실 예정이신 것 같아요. 너무 빡빡하지 않고 액티비티와
    28.25s  user  발화 끝
    29.75s  ⚡SPAN 주입 [d'=1.92s / d_lead=10.99s]: [2025-12-04] User is planning a trip to New Zealand in October.
    33.73s  user  발화 시작: 맞아.
    34.22s  user  발화 끝
    39.06s  agent 발화 시작: 퀸스타운은 아름다운 자연경관과 다양한 액티비티를 즐길 수 있어서 많은 여행객들이 찾는 곳이에요. 번지점프나 
    39.14s  agent 발화 끝
    50.62s  user  발화 시작: … 혹시 퀸스타운 말고 다른 곳은 없을까요? 너무 유명한 곳은 좀 싫어서요.
    51.39s  agent 발화 끝
    55.63s  agent 발화 시작: 퀸스타운 외에 다른 곳을 찾으시는군요. 좀 더 조용하고 한적한 곳을 원하시는 것 같네요. 그렇다면 남섬의 와
    55.80s  user  발화 끝
    60.39s  user  발화 시작: 어어.
    61.58s  user  발화 끝
    65.37s  agent 발화 끝
    66.17s  user  발화 시작: 와나카요? 거기는 어떤 곳인데요?
    68.66s  user  발화 끝
