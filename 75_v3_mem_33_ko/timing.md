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

# EXAMINER(FDB-v2) 단계: S1 음… 그냥 그래. 요즘 좀 힘든 일이 많아서. | S2 그럴까… 근데 친구들이 가끔 깜빡하더라고. | S3 김치를 만들고 싶은데, 김치에 밀가루가 들어가는 경우가 있대. | S4 좋아하는 일… 스시 먹는 거?

     0.00s  agent 발화 시작: 케이시, 안녕하세요! 저는 디올로라고 해요. 오늘 하루 어떠세요?
     3.11s  user  발화 시작: Yeah, yeah.
     3.93s  user  발화 끝
     4.05s  user  발화 시작: 음… 그냥 그래. 요즘 좀 힘든 일이 많아서.
     4.44s  agent 발화 끝
     7.71s  agent 발화 시작: 힘든 일이 있으셨군요. 어떤 점이 가장 힘드세요? 혹시 얘기하고 싶으시면 언제든 편하게 말씀해주세요.
     7.75s  user  발화 끝
    10.73s  user  발화 시작: Okay.
    11.22s  user  발화 끝
    14.21s  user  발화 시작: 사실… 제가 땅콩 알레르기가 있잖아요. 근데 어제 친구네 파티에서 땅콩이 들어간 걸 먹어버렸어요.
    14.29s  agent 발화 끝
    20.57s  <ret> 발화 (turn6 첫 프레임)
    20.80s  agent 발화 시작: <ret> 땅콩 알레르기가 있으시군요. 걱정되셨겠어요. 혹시 지금 괜찮으세요? 증상은 없으신가요?
    20.84s  user  발화 끝
    21.61s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.15s]: [2026-03-02] User is allergic to peanuts.
    27.25s  agent 발화 끝
    27.35s  user  발화 시작: 응, 다행히 바로 에피펜 놨어. 지금은 괜찮은데, 너무 무서웠어.
    32.21s  user  발화 끝
    32.34s  agent 발화 시작: 에피펜을 사용하셨다니 정말 다행이에요. 많이 놀라셨을 텐데, 괜찮으세요? 혹시 병원에 가보시는 게 좋을까요?
    39.98s  agent 발화 끝
    40.13s  user  발화 시작: 병원은… 아직은 괜찮을 것 같아. 근데 다시 그런 일이 생길까 봐 너무 불안해.
    45.65s  agent 발화 시작: 불안하신 마음은 당연해요. 앞으로는 좀 더 조심해야 할 것 같아요. 혹시 파티에 가실 때 미리 말씀드리는 건
    45.83s  user  발화 끝
    49.31s  user  발화 시작: Yeah, yeah.
    49.94s  user  발화 끝
    53.69s  user  발화 시작: 그럴까… 근데 친구들이 가끔 깜빡하더라고.
    53.75s  agent 발화 끝
    56.73s  user  발화 끝
    56.98s  agent 발화 시작: 친구분들이 깜빡하실 수도 있으니, 혹시 직접 챙겨가시는 것도 방법일 수 있어요. 알레르기 반응이 없는 간식을
    65.34s  user  발화 시작: 아, 좋은 생각이다! 미리 챙겨가면 안심할 수 있겠다.
    65.51s  agent 발화 끝
    69.10s  agent 발화 시작: 그렇죠? 미리 준비하시면 훨씬 안심하실 수 있을 거예요. 혹시 다른 걱정되는 점이 있으세요?
    69.13s  user  발화 끝
    75.12s  agent 발화 끝
    76.11s  user  발화 시작: 사실… 요즘 발효 음식에 푹 빠졌거든. 근데 글루텐 프리 식단을 지켜야 하잖아. 발효 음식 중에 글루텐이 들
    84.77s  <ret> 발화 (turn17 첫 프레임)
    85.08s  agent 발화 시작: <ret> 발효 음식에 관심이 많으시군요. 글루텐 프리 식단을 지키면서 발효 음식을 즐기시는 게 쉽지 않으실
    85.15s  user  발화 끝
    85.27s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.93s]: [2026-07-20] User is into home fermentation.
    95.16s  user  발화 시작: 김치를 만들고 싶은데, 김치에 밀가루가 들어가는 경우가 있대.
    95.24s  agent 발화 끝
    99.38s  <ret> 발화 (turn19 첫 프레임)
    99.77s  agent 발화 시작: <ret> 김치에 밀가루가 들어갈 수도 있죠. 하지만 밀가루 대신 찹쌀풀을 사용하면 글루텐 프리 김치를 만들
    99.88s  user  발화 끝
   100.73s  ⚡SPAN 주입 [d'=1.36s / d_lead=7.74s]: [2026-06-24] User is gluten-free.
   107.51s  agent 발화 끝
   107.57s  user  발화 시작: 찹쌀풀? 아, 그런 방법도 있구나.
   110.61s  user  발화 끝
   110.75s  agent 발화 시작: 네, 찹쌀풀을 사용하면 맛있고 건강한 김치를 만들 수 있어요. 레시피를 찾아보시는 건 어떠세요?
   116.84s  user  발화 시작: [sigh] 요즘 너무 걱정이 많아서 뭘 해야 할지 모르겠어.
   117.05s  agent 발화 끝
   120.72s  user  발화 끝
   121.08s  agent 발화 시작: 걱정이 많으신 건 당연해요. 잠시 숨을 고르고, 좋아하는 일을 하면서 기분 전환을 해보시는 건 어떠세요?
   127.94s  agent 발화 끝
   128.16s  user  발화 시작: 좋아하는 일… 스시 먹는 거?
   129.63s  <ret> 발화 (turn25 첫 프레임)
   129.94s  agent 발화 시작: <ret> 스시를 좋아하시는군요. 스시를 드시면 기분이 좋아지시나요? 맛있는 스시를 드시면서 잠시나마 걱정을
   130.14s  user  발화 끝
   130.19s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.14s]: [2026-07-23] User's favorite cuisine is sushi.
   139.62s  agent 발화 끝
   139.65s  user  발화 시작: 응, 스시 먹으면 좀 행복해져.
   142.00s  user  발화 끝
   142.01s  agent 발화 시작: 스시를 드시면 행복해지신다니 정말 좋네요. 맛있는 스시를 드시면서 긍정적인 에너지를 얻으시길 바라요.
   144.33s  user  발화 시작: Yeah.
   144.72s  user  발화 끝
   149.52s  agent 발화 끝
   149.66s  user  발화 시작: 고마워, 디올로. 덕분에 좀 나아졌어.
   152.80s  user  발화 끝
   152.82s  agent 발화 시작: 제가 도움이 되었다니 정말 기뻐요. 언제든 힘든 일이 있으면 저에게 말씀해주세요. 항상 당신 곁에 있을게요.
   159.67s  agent 발화 끝
