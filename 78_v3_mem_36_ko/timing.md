# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "성민",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in August."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-08-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-14",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-26",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-05-27",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 네, 잘 보냈어요. 그런데 혹시 제가 뉴질랜드 여행 계획 세운 | S2 으음… 그럼 구월 초는 어때요? | S3 아, 그리고 혹시 제가 예전에 집 구하는 거 도와달라고 했었죠 | S4 이야, 잘 됐네요. 히아 씨, 정말 고마워요!

     0.00s  agent 발화 시작: 안녕하세요, 성민님! 저는 여러분을 도와드리는 히아입니다. 오늘 하루도 잘 보내셨나요?
     0.01s  <ret> 발화 (turn3 첫 프레임)
     0.02s  <ret> 발화 (turn7 첫 프레임)
     0.07s  user  발화 시작: 네.
     0.07s  agent 발화 끝
     0.08s  user  발화 시작: 네, 잘 보냈어요. 그런데 혹시 제가 뉴질랜드 여행 계획 세운 거 기억하세요?
     0.08s  user  발화 끝
     0.16s  <ret> 발화 (turn5 첫 프레임)
     0.17s  agent 발화 시작: <ret> 네, 성민님. 뉴질랜드 여행을 팔월에 계획하고 계시는군요.
     0.17s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: [2026-02-14] User is planning a trip to New Zealand in August.
     0.17s  user  발화 끝
     0.20s  <ret> 발화 (turn10 첫 프레임)
     0.22s  user  발화 시작: 아, 맞아요! 그때 항공권 예매하려고 했었는데… 혹시 지금 항공권 좀 알아봐 줄 수 있을까요?
     0.22s  agent 발화 끝
     0.32s  agent 발화 시작: <ret> 죄송해요, 성민님. 팔월 항공편은 지금 찾을 수 없네요.
     0.32s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) No flights found for August 2026.
     0.32s  user  발화 끝
     0.35s  <ret> 발화 (turn13 첫 프레임)
     0.38s  user  발화 시작: 으음… 그럼 구월 초는 어때요?
     0.38s  agent 발화 끝
     0.42s  agent 발화 시작: <ret> 구월 초 부산에서 오클랜드행 항공권은 천이백달러부터 있네요.
     0.42s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Flights available from Busan to Auckland starting at $12
     0.42s  user  발화 끝
     0.47s  user  발화 시작: 어머.
     0.47s  agent 발화 끝
     0.48s  user  발화 시작: 그쪽 좌석은 통로 쪽으로 부탁드려도 될까요?
     0.48s  user  발화 끝
     0.52s  agent 발화 시작: <ret> 네, 성민님. 통로 쪽 좌석을 선호하시는 것을 기억하고 있어요.
     0.52s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: [2025-08-21] User prefers an aisle seat when traveling.
     0.52s  user  발화 끝
     0.59s  user  발화 시작: 네.
     0.59s  agent 발화 끝
     0.60s  user  발화 시작: 아, 그리고 혹시 제가 예전에 집 구하는 거 도와달라고 했었죠?
     0.60s  user  발화 끝
     0.67s  agent 발화 시작: <ret> 네, 성민님. 시내에 반려동물과 함께 살 수 있는 이룸을 찾으셨었죠.
     0.67s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: [2026-04-26] Past chat — Apartment hunting downtown: wanted a pet-frie
     0.67s  user  발화 끝
     0.74s  user  발화 시작: 와.
     0.74s  agent 발화 끝
     0.75s  user  발화 시작: 맞아요. 혹시 지금 반려동물 허용되는 곳이 있는지 알아봐 주실 수 있나요?
     0.75s  user  발화 끝
     0.75s  <ret> 발화 (turn16 첫 프레임)
     0.83s  agent 발화 시작: <ret> 시내에 반려동물 허용되는 이룸 아파트가 삼채 있고, 월세는 천오백달러부터 시작하네요.
     0.83s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) 3 pet-friendly 2-bedroom apartments available downtown, 
     0.83s  user  발화 끝
     0.90s  user  발화 시작: 진짜요?
     0.90s  agent 발화 끝
     0.91s  user  발화 시작: 이야, 잘 됐네요. 히아 씨, 정말 고마워요!
     0.91s  user  발화 끝
     0.96s  agent 발화 시작: 천만에요, 성민님! 도움이 되어서 기쁘네요.
     0.96s  user  발화 끝
     1.00s  agent 발화 끝
