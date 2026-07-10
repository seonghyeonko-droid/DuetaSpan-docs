# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "유경",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 그냥 그래요. 지금 몇 시예요? | S2 아, 그건 아직이에요. 여섯 명이서 갈 만한 야외 테이블 있는 | S3 고마워요. 혹시 강아지 데려갈 수 있는 곳이면 더 좋고요. | S4 스시도 좋지만, 오늘은 다른 걸 먹고 싶어요. 발효 음식 좋아

     0.00s  agent 발화 시작: 안녕하세요, 유경님. 저는 디올로입니다. 오늘 하루는 어떠신가요?
     3.09s  user  발화 시작: 어.
     3.81s  user  발화 끝
     4.26s  agent 발화 끝
     5.25s  user  발화 시작: 음… 그냥 그래요. 지금 몇 시예요?
     7.85s  <ret> 발화 (turn3 첫 프레임)
     7.88s  user  발화 끝
     7.93s  agent 발화 시작: <ret> 지금 부산에서는 이천이십육년 칠월 십일 금요일 오후 세 시 십칠분이에요. 혹시 특별한 일 있으신가
     9.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: It is Friday, July 10, 2026 at 3:17 PM in Busan right now.
    12.14s  user  발화 시작: 응.
    12.77s  user  발화 끝
    14.78s  agent 발화 끝
    14.88s  user  발화 시작: 아, 그러네요. 저녁에 해가 질 때쯤에 어디 갈 만한 곳 없을까요?
    19.03s  <ret> 발화 (turn6 첫 프레임)
    19.27s  agent 발화 시작: <ret> 오늘 부산에서는 저녁 일곱시 삼십이분에 해가 질 예정이에요. 혹시 어떤 분위기를 원하시나요?
    19.32s  user  발화 끝
    21.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.61s]: Sunset is at 7:32 PM in Busan today.
    24.88s  agent 발화 끝
    25.19s  user  발화 시작: 글쎄요… 조용하고, 바다가 보이는 곳이면 좋겠어요.
    28.84s  user  발화 끝
    28.84s  agent 발화 시작: 바다가 보이는 조용한 곳을 찾으시는군요. 혹시 얼마 전에 이야기했던 생일 저녁 식사 장소를 아직 못 찾으셨나
    32.00s  user  발화 시작: 어.
    32.45s  user  발화 끝
    35.71s  agent 발화 끝
    37.01s  user  발화 시작: 아, 그건 아직이에요. 여섯 명이서 갈 만한 야외 테이블 있는 곳을 알아보고 있는데 쉽지 않네요.
    42.37s  <ret> 발화 (turn11 첫 프레임)
    42.53s  agent 발화 시작: <ret> 아, 지난번에 생일 저녁 식사 장소에 대해 이야기하셨었죠. 여섯 분이 앉을 수 있는 야외 테이블이
    42.66s  user  발화 끝
    44.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.35s]: [2025-07-19] Past chat — Planning a birthday dinner: party of six; loo
    48.88s  agent 발화 끝
    49.02s  user  발화 시작: 네, 맞아요. 혹시 기억하고 계셨군요?
    51.54s  agent 발화 시작: 유경님의 취향은 잘 기억하고 있습니다. 혹시 다른 조건도 있으신가요?
    51.61s  user  발화 끝
    55.35s  user  발화 시작: 음… 글루텐 프리 메뉴가 있으면 좋겠어요.
    55.38s  agent 발화 끝
    58.18s  <ret> 발화 (turn15 첫 프레임)
    58.26s  agent 발화 시작: <ret> 유경님께서는 글루텐 프리 식단을 챙기시는군요. 알겠습니다. 그 점을 고려해서 찾아볼게요.
    58.39s  user  발화 끝
    60.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.13s]: [2025-10-29] User is gluten-free.
    63.39s  agent 발화 끝
    64.03s  user  발화 시작: 고마워요. 혹시 강아지 데려갈 수 있는 곳이면 더 좋고요.
    67.34s  <ret> 발화 (turn17 첫 프레임)
    67.42s  agent 발화 시작: <ret> 아, Rusty와 함께 가고 싶으시군요. Rusty도 함께 할 수 있는 곳을 찾아볼게요.
    67.53s  user  발화 끝
    69.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: [2025-08-08] User has a Beagle named Rusty.
    71.77s  agent 발화 끝
    72.21s  user  발화 시작: 네, Rusty도 좋아해요.
    73.96s  user  발화 끝
    74.34s  agent 발화 시작: Rusty를 정말 아끼시는군요. 유경님은 정말 따뜻한 분이세요.
    78.13s  agent 발화 끝
    78.16s  user  발화 시작: [laugh] 에이, 그런 칭찬은 좀 쑥스럽네요.
    79.93s  <ret> 발화 (turn21 첫 프레임)
    80.25s  agent 발화 시작: <ret> 진심이에요. 혹시 특별히 선호하는 음식 종류가 있으신가요?
    80.38s  user  발화 끝
    81.61s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.42s]: [2026-05-07] User's favorite cuisine is sushi.
    83.67s  agent 발화 끝
    83.68s  agent 발화 시작: 유경님께서는 스시를 가장 좋아하시는군요. 스시를 즐길 수 있는 곳도 찾아볼까요?
    88.67s  agent 발화 끝
    89.11s  user  발화 시작: 스시도 좋지만, 오늘은 다른 걸 먹고 싶어요. 발효 음식 좋아하는데…
    93.70s  <ret> 발화 (turn24 첫 프레임)
    93.77s  agent 발화 시작: <ret> 발효 음식에 관심이 많으시군요. 발효 음식을 전문으로 하는 식당도 찾아볼 수 있습니다.
    94.01s  user  발화 끝
    95.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.19s]: [2026-03-07] User is into home fermentation.
    98.95s  agent 발화 끝
    99.89s  user  발화 시작: 오, 정말요? 그거 괜찮겠네요.
   101.95s  agent 발화 시작: 그럼, 발효 음식 전문점과 야외 테이블, 글루텐 프리 메뉴, 강아지 동반 가능 여부를 모두 고려해서 찾아보겠
   101.97s  user  발화 끝
   104.09s  user  발화 시작: 응.
   104.53s  user  발화 끝
   108.81s  agent 발화 끝
   109.33s  user  발화 시작: 네, 부탁드려요.
   110.54s  agent 발화 시작: 유경님, 잠시만 기다려 주세요. 최선을 다해 찾아보겠습니다.
   110.71s  user  발화 끝
   113.96s  agent 발화 끝
