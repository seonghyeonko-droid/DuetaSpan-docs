# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "보준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "mid 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-23",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-06-16",
#       "category": "medication",
#       "text": "User takes insulin."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "dish",
#       "text": "User's go-to comfort dish is seafood pasta."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "sibling",
#       "text": "User has a younger sibling named Noah."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "show",
#       "text": "User is currently watching a cooking competition show."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "child",
#       "text": "User has a child named Noah, age 10."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-18",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-03-03",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어, 안녕하세요. 지금 몇 시예요? | S2 아, 그러네요. | S3 음… 요즘 좀 스트레스가 많아서, 좋아하는 음식을 먹고 싶어요 | S4 …혹시 집 근처에 맛있는 파스타 집 있나요?

     0.00s  agent 발화 시작: 안녕하세요, 보준님. 저는 핼입니다. 목표 설정과 실천을 도와드리는 에이전트예요.
     4.95s  agent 발화 끝
     5.28s  user  발화 시작: 어, 안녕하세요. 지금 몇 시예요?
     6.93s  <ret> 발화 (turn2 첫 프레임)
     7.35s  agent 발화 시작: <ret> 지금은 서울 시간으로 이천이십육년 칠월 십일 오전 열시 십칠분입니다.
     7.54s  user  발화 끝
     7.92s  ⚡SPAN 주입 [d'=0.99s / d_lead=4.62s]: (tool result) It is Friday, July 10, 2026 at 10:17 AM in Asia/Seoul ri
    11.97s  agent 발화 끝
    12.13s  user  발화 시작: 아, 그러네요.
    13.03s  agent 발화 시작: 혹시 오늘 특별한 계획 있으신가요? 아니면, 제가 도와드릴 일이 있을까요?
    13.23s  user  발화 끝
    15.28s  user  발화 시작: 응.
    15.68s  user  발화 끝
    17.20s  user  발화 시작: 음… 요즘 좀 스트레스가 많아서, 좋아하는 음식을 먹고 싶어요. 해산물 파스타가 먹고 싶네요.
    17.28s  agent 발화 끝
    20.01s  agent 발화 시작: 네.
    20.55s  agent 발화 끝
    23.66s  <ret> 발화 (turn8 첫 프레임)
    24.13s  agent 발화 시작: <ret> 해산물 파스타를 좋아하시는군요. 기록을 보니, 보준님께서는 해산물 파스타를 가장 좋아하는 음식으로
    24.33s  user  발화 끝
    24.66s  ⚡SPAN 주입 [d'=0.99s / d_lead=7.23s]: [2026-04-09] User's go-to comfort dish is seafood pasta.
    30.70s  user  발화 시작: …혹시 집 근처에 맛있는 파스타 집 있나요?
    31.36s  agent 발화 끝
    33.84s  user  발화 끝
    33.99s  agent 발화 시작: 네, 물론입니다. 보준님 계신 곳 근처에 괜찮은 파스타집들이 꽤 있어요.
    38.48s  agent 발화 끝
