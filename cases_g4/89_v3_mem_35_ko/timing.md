# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "소현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "airline",
#       "text": "User usually flies with Korean Air."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "music",
#       "text": "User likes listening to K-ballads."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "savings",
#       "text": "User is saving for paying off student loans."
#     },
#     {
#       "date": "2026-02-25",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "bloodtype",
#       "text": "User's blood type is AB-."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "anniversary",
#       "text": "User's anniversary is April 3."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-02",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-03-12",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-02-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2025-12-17",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: [happy] 안녕하세요 소현 님, 저는 베아미라고 해요. 만나서 정말 반갑습니다.
     5.14s  agent 발화 끝
     5.62s  user  발화 시작: 나 다음 달에 제주도 여행 가려고 하는데, 비행기 표 좀 알아봐 줄래?
     9.93s  <ret> 발화 (turn2 첫 프레임)
     9.96s  agent 발화 시작: <ret> 네, 제주도 여행 준비하시는군요. 평소에 선호하시는 항공사가 있으셨죠? 예전에 대한항공을 주로 이
    10.10s  user  발화 끝
    11.23s  ⚡SPAN 주입 [d'=1.30s / d_lead=5.50s]: [2026-06-07] User usually flies with Korean Air.
    20.95s  agent 발화 끝
    21.43s  user  발화 시작: 응, 맞아. 그걸로 해줘.
    23.11s  <ret> 발화 (turn4 첫 프레임)
    23.27s  agent 발화 시작: <ret> [happy] 부산에서 출발하는 대한항공 열시 비행기가 있어요. 가격은 팔만 오천원입니다.
    23.41s  user  발화 끝
    24.15s  ⚡SPAN 주입 [d'=1.05s / d_lead=5.32s]: (tool result) Korean Air flight KE1234 from Busan to Jeju, departs 10:
    28.59s  agent 발화 끝
    28.70s  user  발화 시작: 오, 시간 괜찮네. 근데 거기 공항 근처에 조용한 숙소도 있을까?
    33.98s  user  발화 끝
