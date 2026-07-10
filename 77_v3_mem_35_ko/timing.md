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

# EXAMINER(FDB-v2) 단계: S1 아, 네. 요즘 뉴질랜드 여행 계획 세우고 있는데, 혹시 좋은 | S2 음… 너무 뻔한 곳 말고, 특별한 곳 있으면 좋겠어. | S3 … 사실, 난 사진 찍는 걸 엄청 좋아해. 풍경 사진 찍기 좋 | S4 아, 다행히 멀미는 잘 안 하는 편이야.

     0.00s  agent 발화 시작: 하형 씨, 안녕하세요. 저는 클렌이라고 해요. 돈 관리와 예산 관련해서 도와드리는 역할을 맡고 있습니다.
     6.86s  agent 발화 끝
     7.04s  user  발화 시작: 아, 네. 요즘 뉴질랜드 여행 계획 세우고 있는데, 혹시 좋은 여행지 추천해 줄 수 있어?
    12.29s  <ret> 발화 (turn2 첫 프레임)
    12.45s  agent 발화 시작: <ret> 뉴질랜드 여행을 계획하고 계시는군요. 십월에 가시는군요. 뉴질랜드는 아름다운 자연 경관으로 유명한
    12.64s  user  발화 끝
    13.01s  ⚡SPAN 주입 [d'=0.72s / d_lead=11.64s]: [2025-12-04] User is planning a trip to New Zealand in October.
    24.09s  agent 발화 끝
    24.35s  user  발화 시작: 음… 너무 뻔한 곳 말고, 특별한 곳 있으면 좋겠어.
    28.33s  agent 발화 시작: 특별한 곳을 원하시는군요. 하형 씨께서는 평소 어떤 스타일의 여행을 즐기시는 편이신가요? 액티비티를 좋아하시
    28.52s  user  발화 끝
    39.06s  user  발화 시작: … 사실, 난 사진 찍는 걸 엄청 좋아해. 풍경 사진 찍기 좋은 곳으로 추천해 줄 수 있어?
    39.79s  agent 발화 끝
    44.94s  agent 발화 시작: 풍경 사진을 좋아하시는군요. 그렇다면 남섬의 밀포드 사운드는 어떠세요? 피오르드 지형과 폭포의 조화가 정말 
    45.17s  user  발화 끝
    53.34s  user  발화 시작: 어.
    53.74s  user  발화 끝
    56.10s  agent 발화 시작: 밀포드 사운드는 다양한 액티비티도 즐길 수 있는데, 크루즈 여행이나 카약킹도 추천해 드려요. 하형 씨는 혹시
    56.11s  agent 발화 끝
    59.52s  user  발화 시작: 음.
    60.01s  user  발화 끝
    66.44s  agent 발화 끝
    68.31s  user  발화 시작: 아, 다행히 멀미는 잘 안 하는 편이야.
    70.89s  user  발화 끝
