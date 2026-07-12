# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "보재",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-18",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-06-28",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어, 안녕하세요. 모미님. | S2 아, 네. 맞아요. 그때 말씀드렸었죠. | S3 음… 맛집… 사실 제가 글루텐 프리 식단을 하고 있거든요. | S4 우메노야요? 한번 알아봐야겠네요.

     0.00s  agent 발화 시작: 안녕하세요, 보재님. 저는 모미라고 해요. 돈 관리와 예산 짜는 걸 도와드리는 에이전트입니다.
     7.18s  user  발화 시작: 어, 안녕하세요. 모미님.
     7.18s  agent 발화 끝
     8.81s  <ret> 발화 (turn2 첫 프레임)
     8.97s  agent 발화 시작: <ret> 혹시 요즘 여행 계획 세우고 계신가요? 전에 교토 여행을 생각하고 계셨다는 말씀이 기억나요.
     8.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.78s]: [2026-04-18] User is planning a trip to Kyoto in December.
     8.97s  user  발화 끝
    16.75s  agent 발화 시작: 네, 보재님, 이천이십육년 십이월에 교토 여행을 계획하고 계셨던 걸로 알고 있어요.
    16.75s  agent 발화 끝
    23.33s  user  발화 시작: 아, 네. 맞아요. 그때 말씀드렸었죠.
    23.33s  agent 발화 끝
    26.32s  agent 발화 시작: 교토 여행 준비는 잘 되어 가시나요? 혹시 맛집을 찾고 계신가요?
    26.32s  user  발화 끝
    32.30s  user  발화 시작: 음… 맛집… 사실 제가 글루텐 프리 식단을 하고 있거든요.
    32.30s  agent 발화 끝
    37.44s  <ret> 발화 (turn7 첫 프레임)
    37.68s  agent 발화 시작: <ret> 아, 글루텐 프리 식단을 하고 계시는군요. 교토에서 글루텐 프리 메뉴를 제공하는 맛집을 찾아드릴게
    37.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.78s]: [2025-09-17] User is gluten-free.
    37.68s  user  발화 끝
    45.46s  user  발화 시작: 음.
    45.46s  agent 발화 끝
    45.81s  <ret> 발화 (turn9 첫 프레임)
    46.05s  agent 발화 시작: <ret> 우메노야는 일본 전통 요리를 글루텐 프리로 제공하고, 주소는 일본 교토시 가미교구 기타마치 이 오
    46.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.57s]: Restaurant name: Umenoya, Cuisine: Japanese, Gluten-free options: Yes,
    46.05s  user  발화 끝
    55.62s  user  발화 시작: 우메노야요? 한번 알아봐야겠네요.
    55.62s  agent 발화 끝
    57.42s  agent 발화 시작: 네, 보재님. 혹시 다른 특별한 음식 선호도가 있으신가요? 아니면 다른 종류의 음식을 원하시는지 여쭤봐도 될
    57.42s  user  발화 끝
    66.39s  agent 발화 끝
