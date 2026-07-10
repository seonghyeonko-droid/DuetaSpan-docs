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
#       "text": "User's home address is 743 Cedar Lane."
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

# EXAMINER(FDB-v2) 단계: S1 음… 좀 피곤하네요. 지금 부산 시간 몇 시예요? | S2 글쎄요… 맛있는 스시집을 추천해 줄 수 있어요? | S3 Rusty는 잘 지내요. 그런데 제가 글루텐 프리 식단을 하는 | S4 꼭 확인해야겠네요. 그럼 스시 Zen으로 예약해 줄 수 있어요

     0.00s  agent 발화 시작: 안녕하세요, 유경님. 저는 디올로입니다. 오늘 하루는 어떠신가요?
     4.08s  agent 발화 끝
     4.61s  user  발화 시작: 음… 좀 피곤하네요. 지금 부산 시간 몇 시예요?
     7.89s  <ret> 발화 (turn2 첫 프레임)
     7.97s  agent 발화 시작: <ret> 지금 부산 시간은 오후 세 시 삼십분입니다. 오늘 하루 잘 보내셨으면 좋겠어요.
     8.17s  user  발화 끝
     9.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.77s]: ["15:32"]
    10.19s  user  발화 시작: 그치.
    10.87s  user  발화 끝
    12.75s  agent 발화 끝
    12.88s  user  발화 시작: 고마워요. 혹시 제가 좋아하는 음식이 뭐였죠? 까먹었어요.
    16.64s  <ret> 발화 (turn5 첫 프레임)
    16.96s  agent 발화 시작: <ret> 유경님께서 가장 좋아하시는 음식은 스시였어요. 스시 좋아하시는 거, 기억하고 있었답니다.
    17.03s  user  발화 끝
    18.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: ["2026-05-07] User's favorite cuisine is sushi."]
    22.47s  agent 발화 끝
    22.99s  user  발화 시작: 아, 맞다! 스시! 이번 주말에 스시 먹으러 갈까요?
    26.35s  agent 발화 시작: 이번 주말에 스시 드시는 거 정말 좋으시겠네요. 혹시 특별히 가고 싶은 곳이 있으세요?
    26.46s  user  발화 끝
    30.60s  agent 발화 끝
    30.60s  user  발화 시작: 글쎄요… 맛있는 스시집을 추천해 줄 수 있어요?
    33.26s  <ret> 발화 (turn9 첫 프레임)
    33.66s  agent 발화 시작: <ret> 부산에서 스시 맛집을 찾으셨군요. 스시 Zen, 스시 코우지, 스시 하루가 괜찮은 곳으로 보여요.
    33.84s  user  발화 끝
    34.70s  ⚡SPAN 주입 [d'=1.44s / d_lead=6.49s]: ["'스시 맛집' 검색 결과: 1. 스시 Zen, 2. 스시 코우지, 3. 스시 하루"]
    37.02s  user  발화 시작: 응.
    37.46s  user  발화 끝
    40.14s  agent 발화 끝
    40.43s  user  발화 시작: 스시 Zen은 평점이 어때요?
    42.34s  <ret> 발화 (turn12 첫 프레임)
    42.73s  agent 발화 시작: <ret> 스시 Zen의 평점은 사 점 오점이에요. 손님들이 꽤 만족하시는 것 같네요.
    43.01s  user  발화 끝
    43.46s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.14s]: ["4.5"]
    46.59s  user  발화 시작: 응.
    47.04s  user  발화 끝
    47.66s  user  발화 시작: 흠… 혹시 제가 강아지 키우는 거 기억해요?
    47.87s  agent 발화 끝
    50.54s  <ret> 발화 (turn15 첫 프레임)
    50.86s  agent 발화 시작: <ret> 네, 유경님께서 비글 강아지 Rusty를 키우시는 것, 기억하고 있답니다. 귀여운 Rusty는 잘
    51.04s  user  발화 끝
    52.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.35s]: ["2025-08-08] User has a Beagle named Rusty."]
    57.21s  agent 발화 끝
    58.04s  user  발화 시작: Rusty는 잘 지내요. 그런데 제가 글루텐 프리 식단을 하는 것도 기억해요?
    62.10s  <ret> 발화 (turn17 첫 프레임)
    62.41s  agent 발화 시작: <ret> 네, 유경님께서 글루텐 프리 식단을 하시는 것도 알고 있어요. 스시집 선택할 때 참고해야겠네요.
    62.59s  user  발화 끝
    63.46s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.19s]: ["2025-10-29] User is gluten-free."]
    67.59s  agent 발화 끝
    68.12s  user  발화 시작: 맞아요. 글루텐 프리 메뉴가 있는지 확인해 봐야겠어요.
    71.45s  <ret> 발화 (turn19 첫 프레임)
    71.53s  agent 발화 시작: <ret> 다행히 스시 Zen은 글루텐 프리 메뉴를 제공하고 있어요. 안심하고 드실 수 있겠네요.
    71.64s  user  발화 끝
    73.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: ["Yes, 스시 Zen offers gluten-free options."]
    76.39s  agent 발화 끝
    76.52s  user  발화 시작: 와, 정말 고마워요. 혹시 제가 땅콩 알레르기가 있는 것도 기억해요?
    80.38s  <ret> 발화 (turn21 첫 프레임)
    80.77s  agent 발화 시작: <ret> 네, 유경님께서 땅콩 알레르기가 있으신 것도 기억하고 있답니다. 스시집에 땅콩 성분이 들어가지 않
    81.01s  user  발화 끝
    82.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.43s]: ["2025-06-20] User is allergic to peanuts."]
    89.20s  agent 발화 끝
    89.49s  user  발화 시작: 꼭 확인해야겠네요. 그럼 스시 Zen으로 예약해 줄 수 있어요?
    92.93s  <ret> 발화 (turn23 첫 프레임)
    93.10s  user  발화 끝
    93.16s  agent 발화 시작: <ret> 네, 이번 주말에 스시 Zen을 육분으로 예약 완료했습니다. 즐거운 시간 보내세요.
    94.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.45s]: ["Booking confirmed for 6 people at 스시 Zen this weekend."]
    97.61s  agent 발화 끝
    98.08s  user  발화 시작: 정말 고마워요, 디올로. 덕분에 걱정 덜었어요.
   101.45s  agent 발화 시작: 천만에요, 유경님. 제가 도와드릴 수 있어서 기쁩니다.
   101.69s  user  발화 끝
   104.60s  agent 발화 끝
   104.61s  user  발화 시작: 아니요, 괜찮아요. 좋은 하루 보내세요.
   107.17s  agent 발화 시작: 유경님도 좋은 하루 보내세요.
   107.34s  user  발화 끝
   108.73s  agent 발화 끝
