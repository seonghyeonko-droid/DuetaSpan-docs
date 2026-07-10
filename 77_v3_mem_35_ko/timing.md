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

# EXAMINER(FDB-v2) 단계: S1 아, 네. 뉴질랜드 여행 계획 세우고 있는데, 혹시 추천해 줄 | S2 음… 너무 빡빡한 일정은 싫고, 자연을 즐길 수 있는 곳이면  | S3 …혹시 퀸스타운 말고 다른 곳은 없을까요? 너무 관광객이 많은 | S4 아, 코로만델 반도, 이름이 예쁘네요. 좋아 보여요.

     0.00s  agent 발화 시작: 하형님, 안녕하세요. 저는 클렌이라고 합니다. 돈 관리와 예산 관련해서 도와드리는 역할을 하고 있어요.
     7.92s  user  발화 시작: 아, 네. 뉴질랜드 여행 계획 세우고 있는데, 혹시 추천해 줄 만한 곳 있어요?
     8.07s  agent 발화 끝
    13.75s  user  발화 끝
    13.98s  agent 발화 시작: 뉴질랜드 여행을 계획하고 계시는군요. 혹시 특별히 선호하시는 활동이나 여행 스타일이 있으신가요?
    16.38s  user  발화 시작: 음.
    16.88s  user  발화 끝
    21.35s  agent 발화 끝
    21.82s  user  발화 시작: 음… 너무 빡빡한 일정은 싫고, 자연을 즐길 수 있는 곳이면 좋겠어요.
    27.48s  <ret> 발화 (turn5 첫 프레임)
    27.61s  user  발화 끝
    27.64s  agent 발화 시작: <ret> 뉴질랜드는 아름다운 자연 경관으로 유명한 곳이 많아서… 십월에 뉴질랜드 여행을 계획하고 계시니, 
    29.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.92s]: [2025-12-04] User is planning a trip to New Zealand in October.
    33.88s  user  발화 시작: 맞아.
    34.42s  user  발화 끝
    39.77s  agent 발화 시작: …아름다운 호수와 산으로 둘러싸여 있어서 하이킹이나 액티비티를 즐기기에 아주 좋은 곳이에요. 퀸스타운은 다양
    39.88s  agent 발화 끝
    46.39s  user  발화 시작: 어어.
    47.03s  user  발화 끝
    52.91s  user  발화 시작: …혹시 퀸스타운 말고 다른 곳은 없을까요? 너무 관광객이 많은 것 같아서요.
    53.04s  agent 발화 끝
    58.89s  user  발화 끝
    59.00s  agent 발화 시작: 퀸스타운 외에 다른 곳을 원하시는군요. 그럼 북섬의 코로만델 반도를 추천해 드릴게요.
    65.61s  <ret> 발화 (turn11 첫 프레임)
    65.85s  agent 발화 시작: <ret> 코로만델 반도는 아름다운 해변과 울창한 숲으로 유명한 곳이에요. 이곳은 비교적 덜 알려져 있어서 
    65.95s  agent 발화 끝
    67.45s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.76s]: (no information found)
    77.65s  user  발화 시작: 응응.
    78.05s  user  발화 끝
    82.50s  agent 발화 끝
    82.73s  user  발화 시작: 아, 코로만델 반도, 이름이 예쁘네요. 좋아 보여요.
    86.61s  user  발화 끝
