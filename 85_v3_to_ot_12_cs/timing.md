# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Nora",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "home",
#       "text": "User's home address is 151 Oak Avenue."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-08-05",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-26",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 혹시… 누구였는지 말씀해 주실 수 있으세요? | S2 처음 방영했을 때 봤던 것 같아요… 어머님은 정말 좋아하셨어요 | S3 아, 와, 그 쇼는 완전히 잊고 있었네요! | S4 어디서 스트리밍하는지 궁금하네요…

     0.00s  user  발화 시작: 안녕하세요. 혹시… 누구였는지 말씀해 주실 수 있으세요?
     3.81s  user  발화 시작: “The House of the Rising Sun”에는 누가 출연했었나요?
     4.02s  user  발화 끝
     6.25s  <ret> 발화 (turn2 첫 프레임)
     6.56s  agent 발화 시작: <ret> “The House of the Rising Sun”에는 데이비드 얀센, 로리타 모레나, 애비 달
     6.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.25s]: The cast of "The House of the Rising Sun" includes David Janssen, Loli
     6.76s  user  발화 끝
    14.80s  agent 발화 끝
    15.32s  user  발화 시작: 음, 에이미 스마트 씨도 출연했었나요?
    17.52s  <ret> 발화 (turn4 첫 프레임)
    17.92s  agent 발화 시작: <ret> 네, 에이미 스마트 씨도 출연하셨어요! 제니 포터 역할을 맡으셨고, 그 역할에 정말 많은 것을 더
    17.92s  ⚡SPAN 주입 [d'=1.68s / d_lead=7.61s]: Amy Smart played Jenny Porter in "The House of the Rising Sun," a role
    18.00s  user  발화 끝
    25.52s  agent 발화 끝
    25.60s  user  발화 시작: 아, 그렇군요. 그 쇼는 언제 처음 방영됐나요?
    29.05s  <ret> 발화 (turn6 첫 프레임)
    29.36s  agent 발화 시작: <ret> 처음 방영된 건 천구백구십사년이었어요—꽤 오래전이네요! 당시에는 정말 인기 있는 쇼였어요.
    29.38s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.72s]: "The House of the Rising Sun" originally aired in 1994, captivating au
    29.53s  user  발화 끝
    35.94s  user  발화 시작: 처음 방영했을 때 봤던 것 같아요… 어머님은 정말 좋아하셨어요.
    36.08s  agent 발화 끝
    40.44s  user  발화 시작: 세탁은 다 하셨나요?
    40.62s  user  발화 끝
    41.69s  user  발화 시작: … 아무튼, 로리타 모레나 씨는 그 후에 뭐에 출연했나요?
    41.91s  user  발화 끝
    46.01s  <ret> 발화 (turn10 첫 프레임)
    46.17s  agent 발화 시작: <ret> “The House of the Rising Sun” 이후에 로리타 모레나 씨는 “Beverly 
    46.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.15s]: Lolita Morena appeared in several films and television shows after "Th
    46.37s  user  발화 끝
    56.32s  agent 발화 끝
    56.42s  user  발화 시작: 아, 와, 그 쇼는 완전히 잊고 있었네요!
    59.65s  user  발화 끝
    59.81s  agent 발화 시작: 그때 엄청난 인기를 끌었었죠, 안 그랬어요? 구십년대에는 정말 상징적인 쇼들이 많았어요!
    66.20s  agent 발화 끝
    66.68s  user  발화 시작: 네, 정말 그랬어요. 데이비드 얀센에 대한 정보를 좀 찾아 주시겠어요?
    71.31s  <ret> 발화 (turn14 첫 프레임)
    71.47s  agent 발화 시작: <ret> 데이비드 얀센은 특히 “The Fugitive”에서 리처드 킴블 박사 역할을 맡으면서 아주 유명한
    71.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.48s]: David Janssen was an American film and television actor best known for
    71.68s  user  발화 끝
    74.08s  user  발화 시작: 예.
    74.58s  user  발화 끝
    77.95s  agent 발화 끝
    78.12s  user  발화 시작: 아! The Fugitive! 할아버지께서 매주 꼭 챙겨 보셨어요.
    82.54s  agent 발화 시작: 정말 고전이죠! 많은 가족들이 함께 시청하면서, 그런 쇼들이 공동체 의식을 만들어 냈어요.
    82.78s  user  발화 끝
    85.93s  user  발화 시작: 음.
    86.56s  user  발화 끝
    90.75s  user  발화 시작: 어디서 스트리밍하는지 궁금하네요…
    90.84s  agent 발화 끝
    92.95s  <ret> 발화 (turn20 첫 프레임)
    93.33s  user  발화 끝
    93.34s  agent 발화 시작: <ret> 좋은 소식이 있어요! 지금 Amazon Prime Video, Tubi, 그리고 Pluto TV에
    93.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.66s]: (tool result) You can stream "The Fugitive" on Amazon Prime Video, Tub
    97.27s  user  발화 시작: 음.
    97.72s  user  발화 끝
   102.00s  agent 발화 끝
   103.05s  user  발화 시작: 와, 정말 좋은 정보네요!
   104.95s  agent 발화 시작: 정말 다행이에요! 제가 찾도록 도와드릴 수 있어서 기뻐요. 뭘 볼지 결정하는 데 드는 피로를 줄여주는 것 같
   105.17s  user  발화 끝
   113.02s  user  발화 시작: 고마워요, 카에이아.
   113.06s  agent 발화 끝
   114.34s  agent 발화 시작: 천만에요! 언제든지 엔터테인먼트 선택을 간소화하는 데 도움이 필요하시면 말씀해 주세요.
   114.63s  user  발화 끝
   120.74s  agent 발화 끝
