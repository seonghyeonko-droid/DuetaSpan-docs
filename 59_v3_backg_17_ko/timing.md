# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "은원",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-05-21",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-25",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 베아라님. 새로운 도시에 와서 어떻게 정착하면 좋 | S2 맞아요. 그런데 혹시 모아나 영화에 나오는 모아나는 몇 살인가 | S3 그럼, 모아나 영화는 언제 개봉했나요? | S4 칠십육번 버스군요. 알려주셔서 감사합니다.

     0.00s  user  발화 시작: 안녕하세요, 베아라님. 새로운 도시에 와서 어떻게 정착하면 좋을까요?
     4.03s  agent 발화 시작: 안녕하세요! 새로운 곳에 오신 걸 환영해요. 천천히 주변을 둘러보면서 자신에게 맞는 리듬을 찾는 게 중요해요
     4.03s  user  발화 끝
    11.59s  user  발화 시작: 네, 맞아요. 지금은 좀 정신이 없네요.
    11.59s  agent 발화 끝
    14.61s  agent 발화 시작: 그럴 수 있어요. 새로운 환경에 적응하는 데는 시간이 필요하니까요. 혹시 관심 있는 분야가 있으신가요?
    14.61s  user  발화 끝
    21.67s  user  발화 시작: 영화 보는 걸 좋아해요.…
    21.67s  agent 발화 끝
    23.68s  user  발화 시작: …혹시 근처에 좋은 영화관이 있을까요?
    23.68s  user  발화 끝
    26.03s  <ret> 발화 (turn6 첫 프레임)
    26.20s  agent 발화 시작: <ret> 어, 근처에 레갈 에드워즈 어바인 스펙트럼 영화관이 있네요. 육십오 Fortune Dr, Irvi
    26.20s  user  발화 끝
    26.37s  ⚡SPAN 주입 [d'=0.33s / d_lead=10.58s]: (tool result) The Regal Edwards Irvine Spectrum is a popular movie the
    36.78s  user  발화 시작: 아, 거기 가봐야겠네요.
    36.78s  agent 발화 끝
    38.29s  agent 발화 시작: 좋은 선택이에요. 영화를 보면서 스트레스를 푸는 것도 좋은 방법이죠.
    38.29s  user  발화 끝
    42.83s  user  발화 시작: 맞아요. 그런데 혹시 모아나 영화에 나오는 모아나는 몇 살인가요?
    42.83s  agent 발화 끝
    47.16s  <ret> 발화 (turn10 첫 프레임)
    47.36s  agent 발화 시작: <ret> 모아나는 영화에서 열여섯살로 묘사돼요.
    47.36s  user  발화 끝
    47.46s  ⚡SPAN 주입 [d'=0.30s / d_lead=2.02s]: Moana is portrayed as a 16-year-old in the movie Moana.
    49.38s  user  발화 시작: 어머, 저기 봐, 강아지가 꼬리를 흔들고 있잖아!
    49.38s  agent 발화 끝
    52.90s  user  발화 시작: … 아, 그 영화에 나오는 돼지 캐릭터 이름이 뭐였죠?
    52.90s  user  발화 끝
    57.44s  agent 발화 시작: 그건…—
    57.44s  user  발화 끝
    57.94s  user  발화 시작: … 푸아였나?
    57.94s  agent 발화 끝
    58.95s  agent 발화 시작: 네, 맞아요. 푸아였어요. 기억력이 좋으시네요.
    58.95s  user  발화 끝
    61.47s  user  발화 시작: 그럼, 모아나 영화는 언제 개봉했나요?
    61.47s  agent 발화 끝
    63.66s  <ret> 발화 (turn17 첫 프레임)
    63.96s  ⚡SPAN 주입 [d'=0.30s / d_lead=3.02s]: The movie Moana was released on November 23, 2016.
    63.99s  agent 발화 시작: <ret> 모아나 영화는 이천십육년 십일월 이십삼일에 개봉했어요.
    63.99s  user  발화 끝
    67.01s  user  발화 시작: 아, 생각보다 오래됐네요.
    67.01s  agent 발화 끝
    68.52s  agent 발화 시작: 네, 하지만 지금도 많은 사람들에게 사랑받는 영화죠.
    68.52s  user  발화 끝
    72.05s  user  발화 시작: 네.
    72.05s  agent 발화 끝
    72.56s  agent 발화 시작: 혹시 다른 관심사가 있으신가요? 예를 들어, 맛집을 찾으시는 건 어떠세요?
    72.56s  user  발화 끝
    77.59s  user  발화 시작: 맛집은 언제든지 좋죠. 한식집을 추천해 주실 수 있나요?
    77.59s  agent 발화 끝
    81.30s  <ret> 발화 (turn23 첫 프레임)
    81.62s  agent 발화 시작: <ret> 한식집으로는 한밧 설렁탕이 괜찮겠네요. 일 사 팔 삼 오 Jeffrey Rd Ste E, Irvi
    81.62s  user  발화 끝
    82.33s  ⚡SPAN 주입 [d'=1.03s / d_lead=11.08s]: (tool result) Han Bat Shul Lung Tang is a Korean restaurant at 14835 J
    92.71s  user  발화 시작: 설렁탕! 좋아요. 거기는 가격이 어느 정도인가요?
    92.71s  agent 발화 끝
    95.49s  <ret> 발화 (turn25 첫 프레임)
    95.73s  agent 발화 시작: <ret> 한밧 설렁탕은 가격대가 보통이에요.
    95.73s  user  발화 끝
    96.53s  ⚡SPAN 주입 [d'=1.05s / d_lead=2.02s]: The price tier for Han Bat Shul Lung Tang is $$.
    97.75s  user  발화 시작: 아, 그렇군요. 그럼, 거기 가는 버스 노선을 알아봐 주실 수 있나요?
    97.75s  agent 발화 끝
   103.29s  agent 발화 시작: 맞아요.
   103.29s  user  발화 끝
   103.42s  <ret> 발화 (turn28 첫 프레임)
   103.79s  agent 발화 시작: <ret> 현재 위치에서 한밧 설렁탕까지 칠십육번 버스를 타면 돼요.
   103.79s  agent 발화 끝
   104.07s  ⚡SPAN 주입 [d'=0.66s / d_lead=4.03s]: (tool result) Bus number 76 will take you to Han Bat Shul Lung Tang fr
   107.83s  user  발화 시작: 칠십육번 버스군요. 알려주셔서 감사합니다.
   107.83s  agent 발화 끝
   109.84s  agent 발화 시작: 천만에요. 새로운 곳에서의 생활이 즐거워지도록 제가 도울 수 있어서 기뻐요.
   109.84s  user  발화 끝
   114.88s  user  발화 시작: 네네.
   114.88s  agent 발화 끝
   115.38s  user  발화 시작: [sigh] 새로운 곳에 오면 항상 적응하는 게 어렵네요.
   115.38s  user  발화 끝
   119.41s  agent 발화 시작: 맞아요. 하지만 분명히 좋은 점도 많을 거예요. 새로운 사람들과의 만남, 새로운 경험들…
   119.41s  user  발화 끝
   125.46s  user  발화 시작: 그럴 거라고 생각해요. 조금만 더 힘내 봐야겠어요.
   125.46s  agent 발화 끝
   128.99s  agent 발화 시작: 그렇죠. 긍정적인 마음을 유지하는 게 중요해요. [happy] 혹시 필요한 게 더 있으신가요?
   128.99s  user  발화 끝
   135.03s  user  발화 시작: 그렇죠.
   135.03s  agent 발화 끝
   135.54s  user  발화 시작: 오늘은 이 정도면 충분할 것 같아요. 감사합니다, 베아라님.
   135.54s  user  발화 끝
   139.57s  agent 발화 시작: 예.
   139.57s  user  발화 끝
   140.07s  agent 발화 시작: 천만에요. 언제든지 편하게 말씀해 주세요. 새로운 시작을 응원합니다!
   140.07s  agent 발화 끝
   144.10s  agent 발화 끝
