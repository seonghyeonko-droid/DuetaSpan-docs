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

# EXAMINER(FDB-v2) 단계: S1 음… 좀 피곤하네요. 지금 뉴욕 시간 몇 시예요? | S2 걔는 낮잠이 제일 좋지. 근데 제가 땅콩 알레르기가 있잖아요. | S3 네, 뭔가 좀 특별한 조합을 찾고 싶어서요. | S4 아, 진짜 그런가요?

     0.00s  agent 발화 시작: 케이시님, 안녕하세요. 저는 디올로라고 해요. 오늘 하루 어떠셨어요?
     3.11s  user  발화 시작: 어.
     3.75s  user  발화 끝
     4.07s  user  발화 시작: 음… 좀 피곤하네요. 지금 뉴욕 시간 몇 시예요?
     4.49s  agent 발화 끝
     7.22s  <ret> 발화 (turn3 첫 프레임)
     7.29s  agent 발화 시작: <ret> 뉴욕에 계시니… 지금 뉴욕 시간은 오후 세 시 삼십오 분이에요.
     7.44s  user  발화 끝
     8.18s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.06s]: [2026-07-27] Past chat — Planning a birthday dinner: party of six; loo
     9.67s  user  발화 시작: 그치.
    10.11s  user  발화 끝
    12.49s  user  발화 시작: 아, 그러네요. 저, 페퍼먼트 한 번 해보려고 하는데, 혹시 뭐 조언해 줄 만한 거 있을까요?
    12.57s  agent 발화 끝
    18.17s  agent 발화 시작: 발효 식품에 관심이 있으시군요! [happy] 집에서 발효를 하시는군요. 어떤 종류의 발효를 생각하고 계신가
    18.19s  user  발화 끝
    25.17s  agent 발화 끝
    25.28s  user  발화 시작: 그냥 김치 정도요. 근데 제가 글루텐 프리 식단을 하고 있거든요. 혹시 김치에도 글루텐이 들어갈 수 있어요?
    32.06s  <ret> 발화 (turn8 첫 프레임)
    32.37s  agent 발화 시작: <ret> 글루텐 프리 식단을 지키시는군요… 김치를 만들 때 밀가루 풀을 넣는 경우가 있는데, 글루텐 프리 
    32.42s  user  발화 끝
    33.10s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.82s]: [2026-06-24] User is gluten-free.
    41.92s  agent 발화 끝
    42.15s  user  발화 시작: 찹쌀 풀이요? 아, 그렇군요. 러스티는 잘 지내고 있나요?
    46.04s  <ret> 발화 (turn10 첫 프레임)
    46.28s  agent 발화 시작: <ret> 러스티는… 네, 러스티는 아주 잘 지내고 있어요. 산책도 다녀왔고, 지금은 낮잠을 자고 있을 거예
    46.45s  user  발화 끝
    46.53s  ⚡SPAN 주입 [d'=0.49s / d_lead=0.49s]: [2026-05-11] User has a Beagle named Rusty.
    49.40s  user  발화 시작: 어.
    49.85s  user  발화 끝
    53.14s  agent 발화 끝
    53.22s  user  발화 시작: 걔는 낮잠이 제일 좋지. 근데 제가 땅콩 알레르기가 있잖아요. 혹시 김치에 땅콩 성분이 들어갈 일은 없겠죠?
    61.41s  <ret> 발화 (turn13 첫 프레임)
    61.49s  agent 발화 시작: <ret> 땅콩 알레르기가 있으시니… 김치 자체에는 땅콩이 들어가지 않지만, 김치 양념에 땅콩 기름이나 땅콩
    61.52s  user  발화 끝
    62.70s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.58s]: [2026-03-02] User is allergic to peanuts.
    72.87s  user  발화 시작: 아, 성분표 확인해야겠네요. 혹시 오늘 저녁 메뉴 추천해 줄 수 있어요?
    73.09s  agent 발화 끝
    77.57s  agent 발화 시작: 어떤 종류의 음식을 좋아하세요? 혹시 스시를 좋아하시나요?
    77.60s  user  발화 끝
    81.67s  <ret> 발화 (turn16 첫 프레임)
    81.74s  agent 발화 시작: <ret> 스시를 좋아하신다고 하셨으니… 스시를 좋아하시면, 신선한 연어 스시나 참치 스시를 추천해 드려요.
    81.78s  agent 발화 끝
    83.27s  ⚡SPAN 주입 [d'=1.60s / d_lead=1.69s]: [2026-07-23] User's favorite cuisine is sushi.
    90.74s  agent 발화 끝
    90.78s  user  발화 시작: 스시 좋죠. 근데 제가 요즘 집에서 발효에 꽂혀서… 발효 식품이랑 같이 먹을 만한 스시 종류 있을까요?
    98.08s  agent 발화 시작: 발효 식품과 스시를 함께 드신다니, 좋은 조합이네요! [curious]
    98.24s  user  발화 끝
   101.50s  agent 발화 끝
   101.75s  user  발화 시작: 네, 뭔가 좀 특별한 조합을 찾고 싶어서요.
   104.40s  agent 발화 시작: 발효 식품의 풍미를 해치지 않으면서 스시와 잘 어울리는 것을 찾아봐야겠네요.
   104.52s  user  발화 끝
   109.08s  agent 발화 끝
   109.12s  user  발화 시작: 그렇죠? 뭐가 좋을까요?
   111.33s  user  발화 끝
   111.44s  agent 발화 시작: 흰 살 생선 스시나 새우 스시를 추천해 드려요. 맛이 너무 강하지 않아서 발효 식품의 맛을 살려줄 거예요.
   118.53s  agent 발화 끝
   118.66s  user  발화 시작: 음, 흰 살 생선 스시는 괜찮겠네요.
   121.22s  agent 발화 시작: 좋아요! 흰 살 생선 스시는 소화도 잘 되고, 발효 식품과 함께 드시면 더욱 건강하게 즐기실 수 있을 거예요
   121.43s  user  발화 끝
   128.68s  agent 발화 끝
   129.92s  user  발화 시작: 아, 진짜 그런가요?
   131.22s  agent 발화 시작: 네, 발효 식품은 장 건강에 좋고, 흰 살 생선은 단백질이 풍부해서 두 가지를 함께 드시면 균형 잡힌 식단을
   131.34s  user  발화 끝
   139.37s  user  발화 시작: 왠지 오늘 저녁은 스시랑 김치로 정해야겠어요.
   139.46s  agent 발화 끝
   142.82s  agent 발화 시작: 아주 좋은 선택이에요! [happy] 스시와 김치는 정말 환상의 조합이죠.
   143.02s  user  발화 끝
   144.31s  user  발화 시작: 응.
   144.81s  user  발화 끝
   147.81s  agent 발화 끝
   147.90s  user  발화 시작: 네, 정말 그런 것 같아요. 오늘 저한테 좋은 아이디어 많이 줘서 고마워요, 디올로.
   152.71s  user  발화 끝
   152.79s  agent 발화 시작: 천만에요, 케이시님. 언제든지 도움이 필요하시면 저를 찾아주세요. 저는 항상 케이시님의 곁에 있을게요.
   160.53s  agent 발화 끝
