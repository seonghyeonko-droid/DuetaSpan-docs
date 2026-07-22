# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "민찬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-21",
#       "category": "show",
#       "text": "User is currently watching a sci-fi series."
#     },
#     {
#       "date": "2026-05-15",
#       "category": "schedule",
#       "text": "User has a 9-to-6 weekday schedule."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "phone",
#       "text": "User uses a Pixel 8."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "hobby",
#       "text": "User is into woodworking."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "allergy",
#       "text": "User is allergic to dust mites."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "child",
#       "text": "User has a child named Haruto, age 8."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "work",
#       "text": "User works as a HR manager."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "partner",
#       "text": "User's partner is named Mina."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-10",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-02-03",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-01-22",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 잘 지내고 있어요. 그런데 제가 예전에 캠핑 계획 세울 때 어 | S2 맞아요, 그랬었죠. 이번에 다시 준비하려고 하는데 혹시 부산  | S3 낙동강 캠핑장이 가깝고 평점도 좋네요. 거기까지 얼마나 걸릴까 | S4 생각보다 가깝네요! 고마워요, 코엔.

     0.00s  agent 발화 시작: [happy] 안녕하세요 민찬 님, 저는 코엔이에요. 오늘 하루는 어떻게 보내고 계세요?
     4.56s  user  발화 시작: 잘 지내고 있어요. 그런데 제가 예전에 캠핑 계획 세울 때 어떤 텐트를 물어봤었죠?
     4.86s  agent 발화 끝
    10.68s  <ret> 발화 (turn2 첫 프레임)
    10.90s  agent 발화 시작: <ret> 아, 캠핑 계획 세우셨던 거 기억나요. 예전에 사인용 텐트랑 쿨러에 대해서 물어보셨어요.
    11.05s  user  발화 끝
    12.07s  ⚡SPAN 주입 [d'=1.39s / d_lead=3.01s]: [2026-01-22] Past chat — Planning a camping trip: a weekend at a lake 
    16.90s  user  발화 시작: 맞아요, 그랬었죠. 이번에 다시 준비하려고 하는데 혹시 부산 근처에 캠핑장 추천해 줄 수 있어요?
    16.92s  agent 발화 끝
    23.31s  <ret> 발화 (turn4 첫 프레임)
    23.33s  agent 발화 시작: <ret> 십이킬로미터 거리에 평점 사 점 오점인 낙동강 캠핑장이 있고, 이십오킬로미터 거리에는 기장 해안 
    23.48s  user  발화 끝
    24.13s  ⚡SPAN 주입 [d'=0.82s / d_lead=8.01s]: (tool result) [ { "name": "낙동강 캠핑장", "rating": 4.5, "distance": "12km"
    26.29s  user  발화 시작: 네.
    26.91s  user  발화 끝
    31.32s  agent 발화 시작: [curious] 두 곳 중에 더 끌리는 곳이 있으신가요?
    31.34s  agent 발화 끝
    33.71s  agent 발화 끝
    33.90s  user  발화 시작: 낙동강 캠핑장이 가깝고 평점도 좋네요. 거기까지 얼마나 걸릴까요?
    36.46s  agent 발화 시작: 네.
    36.86s  agent 발화 끝
    38.09s  <ret> 발화 (turn9 첫 프레임)
    38.28s  agent 발화 시작: <ret> 부산에서 낙동강 캠핑장까지는 약 이십분 정도 걸려요.
    38.43s  user  발화 끝
    38.77s  ⚡SPAN 주입 [d'=0.68s / d_lead=3.61s]: (tool result) {"distance": "12km", "duration": "20 mins"}
    41.89s  agent 발화 끝
    41.95s  user  발화 시작: 생각보다 가깝네요! 고마워요, 코엔.
    44.53s  user  발화 끝
