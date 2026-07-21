# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "준린",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "airline",
#       "text": "User usually flies with Cathay Pacific."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "emergency",
#       "text": "User's emergency contact is Clara."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "music",
#       "text": "User likes listening to K-ballads."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "employer",
#       "text": "User works at a consulting firm."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "sibling",
#       "text": "User has a younger sibling named Noah."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-25",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-04-28",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-04-25",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     },
#     {
#       "date": "2026-01-21",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 비미님. 요즘 좀 지쳐서요. 맛있는 거 먹으면서  | S2 음… 푸짐하게 먹고 싶어요. 해산물이 당기네요. | S3 오, 괜찮네요. 혹시 거기가 주차는 가능한가요? | S4 다행이다. 알려주셔서 감사합니다, 비미님!

     0.00s  agent 발화 시작: 안녕하세요, 준린님. 저는 비미입니다. 번아웃과 회복을 돕는 상담사 역할을 하고 있어요. 오늘 하루는 어떠셨
     7.41s  agent 발화 끝
     7.84s  user  발화 시작: 안녕하세요, 비미님. 요즘 좀 지쳐서요. 맛있는 거 먹으면서 기분 전환하고 싶은데, 혹시 부산에서 괜찮은 식
    11.99s  agent 발화 시작: 음.
    12.61s  agent 발화 끝
    16.77s  <ret> 발화 (turn3 첫 프레임)
    17.07s  user  발화 끝
    17.37s  agent 발화 시작: <ret> 음, 부산에서 어떤 종류의 음식을 좋아하시는지 알면 더 좋을 것 같아요. 아, 커피는 블랙 드립 
    18.10s  ⚡SPAN 주입 [d'=1.34s / d_lead=4.54s]: [2026-06-12] User's usual coffee order is black drip coffee.
    28.89s  user  발화 시작: 음… 푸짐하게 먹고 싶어요. 해산물이 당기네요.
    28.91s  agent 발화 끝
    32.05s  <ret> 발화 (turn5 첫 프레임)
    32.18s  agent 발화 시작: <ret> 개미집이라는 해산물 전문점이 있어요. 부산 동구 초량동에 있고, 가격대는 보통 정도입니다. 평점은
    32.27s  user  발화 끝
    33.37s  ⚡SPAN 주입 [d'=1.32s / d_lead=12.06s]: (tool result) {"restaurant name": "개미집", "address": "49-1 Choryang 2(i
    44.24s  agent 발화 끝
    44.37s  user  발화 시작: 오, 괜찮네요. 혹시 거기가 주차는 가능한가요?
    47.46s  <ret> 발화 (turn7 첫 프레임)
    47.85s  agent 발화 시작: <ret> 네, 주차는 가능하다고 합니다. 개미집 주차장이 마련되어 있어요.
    47.93s  user  발화 끝
    48.65s  ⚡SPAN 주입 [d'=1.19s / d_lead=4.72s]: {"restaurant_name": "개미집", "address": "49-1 Choryang 2(i)-dong, Dong-g
    52.54s  user  발화 시작: 다행이다. 알려주셔서 감사합니다, 비미님!
    52.57s  agent 발화 끝
    55.07s  user  발화 끝
