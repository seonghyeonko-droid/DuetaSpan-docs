# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Casey",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "home",
#       "text": "User's home address is 203 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-07-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-06-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데미 로바토의 새 앨범이 언제 나오나요? 이천십오년 기준으로요 | S2 잠깐만요, 그 앨범 이름이 뭐였죠? | S3 아, 배우 활동도 하는군요. 어떤 영화에 출연했나요? | S4 이천십오년 앨범 말고 다른 앨범은 언제 냈나요?

     0.00s  user  발화 시작: 데미 로바토의 새 앨범이 언제 나오나요? 이천십오년 기준으로요.
     4.58s  user  발화 끝
     4.69s  <ret> 발화 (turn1 첫 프레임)
     4.84s  agent 발화 시작: <ret> 데미 로바토의 새 앨범은 이천십오년 십월에 발매될 예정입니다.
     6.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: October 2015.
     9.08s  user  발화 시작: 음, 이천십오년 십월이군요.
     9.33s  agent 발화 끝
    11.66s  user  발화 끝
    11.68s  <ret> 발화 (turn3 첫 프레임)
    11.76s  agent 발화 시작: <ret> 네, 맞아요. 앨범 발매를 기다리시는 분들이 많을 것 같아요. 혹시 데미 로바토의 다른 앨범에 대
    13.68s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=9.55s]: The giraffe is the tallest mammal on Earth.
    21.31s  agent 발화 끝
    21.66s  user  발화 시작: 잠깐만요, 그 앨범 이름이 뭐였죠?
    24.56s  user  발화 끝
    25.07s  agent 발화 시작: 아… 그 앨범은…
    26.87s  <ret> 발화 (turn6 첫 프레임)
    27.26s  agent 발화 시작: <ret> 그 앨범의 이름은… 아, 죄송합니다. 앨범 이름에 대한 정보는 현재 가지고 있지 않네요. 이천십오
    27.34s  agent 발화 끝
    27.37s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.52s]: October 2015.
    31.09s  user  발화 시작: 음.
    31.73s  user  발화 끝
    37.22s  agent 발화 시작: 혹시 다른 가수의 앨범 출시일에 대해 궁금하신 점이 있으신가요? 아니면 데미 로바토의 다른 활동에 대해 알아
    37.42s  agent 발화 끝
    44.91s  user  발화 시작: 다른 활동은 뭐가 있을까요?
    45.00s  agent 발화 끝
    46.65s  user  발화 끝
    46.67s  agent 발화 시작: 데미 로바토는 가수 활동 외에도 배우로도 활동하고 있으며, 사회 문제에 대한 목소리를 내는 것으로도 유명합니
    53.79s  user  발화 시작: 아, 배우 활동도 하는군요. 어떤 영화에 출연했나요?
    54.41s  agent 발화 끝
    58.19s  agent 발화 시작: 데미 로바토는 '캠프 록'이라는 디즈니 채널 시리즈에 출연했으며, 여러 영화와 TV 쇼에 게스트로 출연한 적
    58.28s  user  발화 끝
    62.15s  user  발화 시작: 예.
    62.56s  user  발화 끝
    65.83s  agent 발화 끝
    66.33s  user  발화 시작: '캠프 록'이요? 그거 재밌었죠.
    68.91s  user  발화 끝
    69.19s  agent 발화 시작: 네, 많은 분들이 좋아했던 시리즈였죠. 데미 로바토의 연기 변신도 돋보였고요.
    71.75s  user  발화 시작: 음.
    72.24s  user  발화 끝
    74.75s  agent 발화 끝
    75.08s  user  발화 시작: 이천십오년 앨범 말고 다른 앨범은 언제 냈나요?
    78.64s  user  발화 끝
    78.94s  agent 발화 시작: 데미 로바토는 이천십삼년에 'Demi'라는 앨범을 발매했고, 이천십칠년에는 'Tell Me You Love 
    82.91s  user  발화 시작: 정말요?
    83.73s  user  발화 끝
    87.14s  agent 발화 끝
    87.35s  user  발화 시작: 이천십칠년 앨범도 꽤 됐네요. 요즘은 뭐 하고 있나요?
    91.23s  user  발화 끝
    91.42s  agent 발화 시작: 데미 로바토는 최근에 새로운 음악 작업과 함께 자신의 정신 건강에 대한 이야기를 솔직하게 공유하며 많은 사람
   100.14s  agent 발화 끝
