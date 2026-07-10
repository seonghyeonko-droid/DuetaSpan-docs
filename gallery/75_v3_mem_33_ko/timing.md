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

# EXAMINER(FDB-v2) 단계: S1 음… 오늘따라 시간이 왜 이렇게 빨리 가는 것 같지? 지금 몇 | S2 응, 맞아. 혹시 부산에서 괜찮은 스시집 알아봐 줄 수 있어? | S3 맞아, 맞아. 러스티. 아, 그런데 내가 땅콩 알레르기가 있잖 | S4 아, 그리고 내가 발효 식품 만드는 거 좋아하잖아.

     0.00s  agent 발화 시작: 유경 씨, 안녕하세요. 저는 디올로예요. 오늘 하루는 어떠세요?
     3.00s  user  발화 시작: 어.
     3.22s  user  발화 끝
     3.94s  user  발화 시작: 음… 오늘따라 시간이 왜 이렇게 빨리 가는 것 같지? 지금 몇 시야?
     4.30s  agent 발화 끝
     7.65s  <ret> 발화 (turn3 첫 프레임)
     7.72s  agent 발화 시작: <ret> 부산 시간으로는 지금 저녁 일곱시 사십이분이에요. 시간이 빠르다고 느끼시는 건 당연하죠.
     7.92s  user  발화 끝
     9.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: (tool result) It is currently 7:42 PM in Busan.
    11.59s  user  발화 시작: 응.
    11.94s  user  발화 끝
    14.11s  user  발화 시작: 어휴, 벌써 저녁이라니. 혹시 오늘 해가 지는 시간도 알 수 있어?
    14.16s  agent 발화 끝
    18.05s  <ret> 발화 (turn6 첫 프레임)
    18.29s  agent 발화 시작: <ret> 오늘 부산에서는 저녁 여덟시 십칠분에 해가 질 예정이에요. 짧은 여름밤이네요.
    18.46s  user  발화 끝
    20.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: (tool result) Sunset in Busan is at 8:17 PM today.
    24.78s  agent 발화 끝
    24.89s  user  발화 시작: 맞아, 진짜. 아, 근데 내가 얼마 전에 스시를 엄청 먹고 싶다고 했었지?
    29.89s  <ret> 발화 (turn8 첫 프레임)
    29.98s  user  발화 끝
    30.12s  agent 발화 시작: <ret> 네, 스시를 가장 좋아하신다고 말씀하셨었어요. 혹시 스시 맛집을 찾고 계신 건가요?
    31.01s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.79s]: [2026-05-07] User's favorite cuisine is sushi.
    32.71s  user  발화 시작: 어.
    32.92s  user  발화 끝
    35.82s  user  발화 시작: 응, 맞아. 혹시 부산에서 괜찮은 스시집 알아봐 줄 수 있어? 야외 좌석이 있으면 더 좋고.
    35.91s  agent 발화 끝
    40.86s  <ret> 발화 (turn11 첫 프레임)
    41.25s  agent 발화 시작: <ret> 하나 스시라는 곳이 있어요. 야외 좌석도 있고, 평점도 사 점 오점이고, 유경 씨 계신 곳에서 일
    41.42s  user  발화 끝
    42.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: (tool result) Hana Sushi - outdoor seating available, 4.5 stars, 1.2km
    50.80s  agent 발화 끝
    50.85s  user  발화 시작: 오, 괜찮겠다. 혹시 거기가 글루텐 프리 메뉴도 있는 거야?
    54.47s  <ret> 발화 (turn13 첫 프레임)
    54.85s  agent 발화 시작: <ret> 글루텐 프리 식단을 챙기시는 걸로 알고 있어요. 하나 스시에 글루텐 프리 메뉴가 있는지 알아봐 드
    54.87s  user  발화 끝
    56.31s  ⚡SPAN 주입 [d'=1.84s / d_lead=13.50s]: [2025-10-29] User is gluten-free.
    68.17s  user  발화 시작: 다행이다! 아, 그리고 우리 강아지 이름이 뭐였지? 까먹었네.
    68.35s  agent 발화 끝
    71.89s  <ret> 발화 (turn15 첫 프레임)
    72.20s  agent 발화 시작: <ret> 러스티라는 비글을 키우고 계시죠. 귀여운 강아지 이름은 쉽게 잊어버리기 쉽죠.
    72.33s  user  발화 끝
    73.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.35s]: [2025-08-08] User has a Beagle named Rusty.
    78.55s  agent 발화 끝
    79.54s  user  발화 시작: 맞아, 맞아. 러스티. 아, 그런데 내가 땅콩 알레르기가 있잖아.
    83.26s  <ret> 발화 (turn17 첫 프레임)
    83.57s  agent 발화 시작: <ret> 네, 땅콩 알레르기가 있으시다고 말씀하셨었어요. 혹시 스시집에 땅콩이 들어간 음식이 있는지 확인해
    83.71s  user  발화 끝
    85.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.69s]: [2025-06-20] User is allergic to peanuts.
    97.18s  user  발화 시작: 후, 다행이다. 역시 디올로가 있어서 편하다.
    97.25s  agent 발화 끝
   100.11s  <ret> 발화 (turn19 첫 프레임)
   100.14s  user  발화 끝
   100.19s  agent 발화 시작: <ret> 유경 씨가 편안하시면 저도 기뻐요. 혹시 예약도 도와드릴까요?
   102.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.07s]: (tool result) Hana Sushi states they do not use peanuts in any of thei
   104.26s  agent 발화 끝
   104.28s  user  발화 시작: 음… 예약은 나중에 직접 할게. 고마워.
   108.06s  user  발화 끝
   108.08s  agent 발화 시작: 네, 언제든지 편하게 말씀해 주세요.
   110.72s  user  발화 시작: 아, 그리고 내가 발효 식품 만드는 거 좋아하잖아.
   110.94s  agent 발화 끝
   113.67s  user  발화 끝
   113.73s  <ret> 발화 (turn23 첫 프레임)
   114.05s  agent 발화 시작: <ret> 네, 집에서 발효 식품을 만드는 것을 좋아하신다고요. 혹시 발효 식품 재료를 살 만한 곳을 찾고 
   115.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: [2026-03-07] User is into home fermentation.
   122.15s  agent 발화 끝
   122.33s  user  발화 시작: 응, 그런 곳 있으면 좋겠다.
   124.57s  <ret> 발화 (turn25 첫 프레임)
   124.88s  agent 발화 시작: <ret> 부산 발효 시장이라는 곳이 있어요. 발효 관련 재료를 다양하게 판매하고, 평점도 사 점 이점이고,
   124.92s  user  발화 끝
   126.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.24s]: (tool result) Busan Fermentation Market - wide selection, 4.2 stars, 2
   137.12s  agent 발화 끝
   137.13s  user  발화 시작: 오, 좋아 보여.
   138.51s  user  발화 끝
   138.55s  agent 발화 시작: 유경 씨가 즐거운 시간 보내시길 바라요.
   141.26s  agent 발화 끝
