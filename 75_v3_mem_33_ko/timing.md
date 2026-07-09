# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "Casey",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-07-20",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-06-24",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "home",
#       "text": "User's home address is 743 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-07-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음, 그냥 그래요. 지금 뉴욕 시간 몇 시예요? | S2 워크숍? 어디서 하나요? | S3 음… 저는 글루텐 프리 식단을 지키고 있는데, 혹시 거기 수업 | S4 아, 센트럴 파크는 가봤는데 너무 사람이 많았어요.

     0.00s  agent 발화 시작: 케이시님, 안녕하세요. 저는 디올로라고 해요. 오늘 하루 어떠신가요?
     4.30s  agent 발화 끝
     4.86s  user  발화 시작: 음, 그냥 그래요. 지금 뉴욕 시간 몇 시예요?
     8.55s  <ret> 발화 (turn2 첫 프레임)
     8.62s  agent 발화 시작: <ret> 케이시님, 뉴욕 시간은… 지금 뉴욕 시간은 오후 두 시 삼십칠 분이에요.
     8.65s  user  발화 끝
    10.23s  ⚡SPAN 주입 [d'=1.68s / d_lead=1.68s]: [2026-07-27] User's home address is 743 Cedar Lane.
    11.43s  user  발화 시작: 그치.
    11.96s  user  발화 끝
    14.79s  agent 발화 끝
    15.13s  user  발화 시작: 아, 그렇군요. 저 이번 주말에 뭐 할까요?
    18.11s  agent 발화 시작: 주말 계획이라… 혹시 특별히 하고 싶은 거 있으세요? 아니면 제가 몇 가지 아이디어를 드려볼까요?
    18.13s  user  발화 끝
    24.00s  agent 발화 끝
    24.18s  user  발화 시작: 그냥, 뭔가 새로운 걸 해보고 싶어요. 평소에 안 하던 거요.
    27.96s  agent 발화 시작: 새로운 경험이라… 요즘 관심 있는 분야가 있으신가요? 아니면 취미를 넓혀보는 것도 좋을 것 같아요.
    28.07s  user  발화 끝
    33.87s  user  발화 시작: 글쎄요… 얼마 전에 집에서 발효 식품 만드는 걸 시작했는데, 좀 더 깊이 파고 싶기도 해요.
    34.07s  agent 발화 끝
    39.84s  <ret> 발화 (turn9 첫 프레임)
    40.15s  agent 발화 시작: <ret> 발효 식품에 관심이 많으시군요. 집에서 발효하는 걸 즐기신다니, 발효 워크숍에 참여해 보시는 건 
    40.17s  user  발화 끝
    40.80s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.04s]: [2026-07-20] User is into home fermentation.
    43.37s  user  발화 시작: 어.
    43.87s  user  발화 끝
    47.29s  agent 발화 끝
    47.71s  user  발화 시작: 워크숍? 어디서 하나요?
    49.78s  <ret> 발화 (turn12 첫 프레임)
    49.86s  agent 발화 시작: <ret> 잠깐만 알아볼게요.
    49.88s  user  발화 끝
    51.06s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.47s]: (tool result) Found: “The Art of Fermentation” workshop, Saturday, 10 
    51.13s  agent 발화 시작: 토요일 오전 열 시에 브루클린 식물원에서 ‘발효의 예술’ 워크숍이 열리네요. 참가비는 팔만 오천 원이에요.
    51.32s  agent 발화 끝
    54.66s  user  발화 시작: 응.
    55.06s  user  발화 끝
    57.99s  agent 발화 끝
    58.11s  user  발화 시작: 가격이 좀 비싸네요. 다른 데는 없을까요?
    61.11s  user  발화 끝
    61.22s  <ret> 발화 (turn16 첫 프레임)
    61.29s  agent 발화 시작: <ret> 조금 더 저렴한 곳을 찾아볼까요?
    62.50s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.25s]: (tool result) Found: “Beginner’s Fermentation” class, Sunday, 2 PM, Mu
    63.34s  agent 발화 시작: 일요일 오후 두 시에 머레이 치즈에서 ‘초보자를 위한 발효’ 수업이 오만 원에 열리네요.
    63.54s  agent 발화 끝
    69.36s  agent 발화 끝
    69.47s  user  발화 시작: 머레이 치즈? 거긴 치즈 가게 아니었어요?
    72.02s  agent 발화 시작: 네, 치즈 가게인데, 발효 관련 수업도 진행하는 것 같아요. 다양한 종류의 발효 식품을 배울 수 있을 거예요
    72.20s  user  발화 끝
    79.75s  agent 발화 끝
    80.02s  user  발화 시작: 음… 저는 글루텐 프리 식단을 지키고 있는데, 혹시 거기 수업도 괜찮을까요?
    84.81s  <ret> 발화 (turn21 첫 프레임)
    85.12s  agent 발화 시작: <ret> 글루텐 프리 식단을 지키시는군요. 머레이 치즈에 문의해 보면 글루텐 프리 옵션이 있는지 확인할 수
    85.29s  user  발화 끝
    85.31s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.81s]: [2026-06-24] User is gluten-free.
    92.33s  user  발화 시작: 좋네요. 그럼, 혹시 이번 주말에 다른 계획은 없을까요?
    92.34s  agent 발화 끝
    97.05s  user  발화 끝
    97.19s  agent 발화 시작: 다른 계획이라… 혹시 애견과 함께 할 수 있는 활동을 찾고 계신가요?
   101.54s  <ret> 발화 (turn24 첫 프레임)
   101.85s  agent 발화 시작: <ret> 강아지를 키우시는군요. 비글 강아지 이름이 뭐였죠?
   102.06s  agent 발화 끝
   102.26s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.22s]: [2026-05-11] User has a Beagle named Rusty.
   105.31s  user  발화 시작: 러스티요. 러스티랑 같이 갈 수 있는 공원을 추천해 주세요.
   105.50s  agent 발화 끝
   109.21s  <ret> 발화 (turn26 첫 프레임)
   109.28s  agent 발화 시작: <ret> 러스티와 함께 갈 수 있는 공원이라…
   109.52s  user  발화 끝
   109.71s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.77s]: (tool result) Prospect Park, Central Park, Riverside Park are dog-frie
   111.88s  agent 발화 시작: 뉴욕에는 프록스펙트 파크, 센트럴 파크, 리버사이드 파크가 강아지 동반이 가능해요.
   112.05s  agent 발화 끝
   117.35s  agent 발화 끝
   117.89s  user  발화 시작: 아, 센트럴 파크는 가봤는데 너무 사람이 많았어요.
   120.95s  agent 발화 시작: 사람이 많은 곳은 피하시는 게 좋으시겠네요. 그럼 프록스펙트 파크나 리버사이드 파크는 어떠세요? 좀 더 한적
   121.08s  user  발화 끝
   128.43s  user  발화 시작: 리버사이드 파크가 좋을 것 같아요.
   128.50s  agent 발화 끝
   130.38s  agent 발화 시작: 리버사이드 파크는 허드슨 강변에 있어서 경치가 아주 아름다워요. 러스티도 좋아할 거예요.
   130.55s  user  발화 끝
   137.23s  agent 발화 끝
   137.93s  user  발화 시작: 네, 러스티는 산책을 정말 좋아하거든요. 감사합니다, 디올로.
   141.88s  agent 발화 시작: 천만에요, 케이시님. 언제든지 편하게 말씀해 주세요.
   142.10s  user  발화 끝
   145.72s  agent 발화 끝
