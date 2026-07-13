# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "다영",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-11-12",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-10-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-02-11",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 네. 안녕하세요, 가리온님. 요즘 좀 힘든 일이 많아서요 | S2 아니요, 헬스장은 괜찮아요. 혹시 제가 알레르기가 있었죠? | S3 아니요, 괜찮아요. 요즘 사진 찍는 취미가 생겼어요. | S4 아, 좋네요! 한번 가봐야겠어요. 감사합니다.

     0.00s  agent 발화 시작: 안녕하세요, 다영님. 저는 가리온입니다. 오늘 다영님의 하루를 좀 더 편안하게 만들어 드리기 위해 왔어요.
     6.55s  user  발화 시작: 아, 네. 안녕하세요, 가리온님. 요즘 좀 힘든 일이 많아서요.
     6.55s  agent 발화 끝
    10.77s  agent 발화 시작: 힘든 일이 있으셨다니 마음이 아프네요. 혹시 예전에 저희가 나눴던 이야기를 좀 떠올려 볼까요?
    10.77s  user  발화 끝
    16.85s  user  발화 시작: 그렇죠.
    16.85s  agent 발화 끝
    17.32s  user  발화 시작: 어떤 이야기요?
    17.32s  user  발화 끝
    17.96s  <ret> 발화 (turn5 첫 프레임)
    18.25s  agent 발화 시작: <ret> 예전에 직장 근처에 수영장이 있는 헬스장을 찾으셨던 걸 기억해요. 혹시 그때 찾으셨던 곳 중에 괜
    18.25s  user  발화 끝
    18.52s  ⚡SPAN 주입 [d'=0.56s / d_lead=7.96s]: [2026-04-15] Past chat — Comparing gym memberships: wants a pool; clos
    26.21s  user  발화 시작: 그렇죠.
    26.21s  agent 발화 끝
    26.68s  agent 발화 시작: 혹시 지금도 그런 헬스장을 찾고 계신가요?
    26.68s  user  발화 끝
    29.49s  user  발화 시작: 아니요, 헬스장은 괜찮아요. 혹시 제가 알레르기가 있었죠?
    29.49s  agent 발화 끝
    32.32s  <ret> 발화 (turn9 첫 프레임)
    32.62s  ⚡SPAN 주입 [d'=0.30s / d_lead=5.15s]: [2026-06-16] User is allergic to shellfish.
    32.76s  agent 발화 시작: <ret> 네, 다영님은 갑각류 알레르기가 있으셨죠. 식사하실 때 항상 주의하셔야 할 거예요.
    32.76s  user  발화 끝
    37.91s  user  발화 시작: 네.
    37.91s  agent 발화 끝
    38.38s  user  발화 시작: 아, 맞아요. 그건 꼭 기억해야 하는데.
    38.38s  user  발화 끝
    41.19s  agent 발화 시작: 건강이 최우선이니까요. 혹시 이 알레르기에 대해 더 자세히 알고 싶으신 부분이 있으신가요?
    41.19s  user  발화 끝
    46.81s  user  발화 시작: 네.
    46.81s  agent 발화 끝
    47.28s  user  발화 시작: 아니요, 괜찮아요. 요즘 사진 찍는 취미가 생겼어요.
    47.28s  user  발화 끝
    50.28s  <ret> 발화 (turn15 첫 프레임)
    50.55s  agent 발화 시작: <ret> 고산 야생화 사진에 관심이 생기셨군요. 아름다운 사진들을 찍으시길 바라요. 혹시 사진 촬영을 위한
    50.55s  user  발화 끝
    51.48s  ⚡SPAN 주입 [d'=1.20s / d_lead=7.96s]: [2026-01-22] User is into alpine wildflower photography.
    58.51s  user  발화 시작: 음… 부산 근처에 야생화가 많이 피는 곳을 알고 싶어요.
    58.51s  agent 발화 끝
    62.53s  <ret> 발화 (turn17 첫 프레임)
    62.72s  agent 발화 시작: <ret> 부산에는 해운대 공원, 태종대 공원, 이기대 해안 산책로에서 야생화를 많이 볼 수 있다고 하네요.
    62.72s  user  발화 끝
    62.84s  ⚡SPAN 주입 [d'=0.31s / d_lead=8.43s]: (tool result) Restaurants found: Haeundae Park (4.2 stars, 120 reviews
    71.15s  user  발화 시작: 아, 좋네요! 한번 가봐야겠어요. 감사합니다.
    71.15s  agent 발화 끝
    73.49s  user  발화 끝
