# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "은연",
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
#       "date": "2026-05-07",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 리브와 매디를 연기한 배우들 아세요? | S2 와, 한 분이 두 역할을 다 했다니. | S3 네, 정말요. 주말에는 꼭 공원에 데려가요. | S4 레스토랑은 어디가 좋을까요?

     0.00s  user  발화 시작: 혹시 리브와 매디를 연기한 배우들 아세요?
     2.23s  <ret> 발화 (turn1 첫 프레임)
     2.78s  agent 발화 시작: <ret> 리브와 매디에서 리브 역을 맡은 배우는 다브 카메론이라고 해요. [happy] 혹시 매디 역의 배
     2.78s  user  발화 끝
     3.26s  ⚡SPAN 주입 [d'=1.03s / d_lead=6.95s]: Dove Cameron.
     9.73s  user  발화 시작: 네, 매디 역도요.
     9.73s  agent 발화 끝
    11.07s  <ret> 발화 (turn3 첫 프레임)
    11.12s  agent 발화 시작: <ret> 매디 역도 다브 카메론이 맡았어요. [curious] 두 역할을 모두 소화했답니다. 정말 대단하죠
    11.12s  user  발화 끝
    12.57s  ⚡SPAN 주입 [d'=1.50s / d_lead=5.56s]: Dove Cameron.
    16.68s  user  발화 시작: 와, 한 분이 두 역할을 다 했다니.
    16.68s  agent 발화 끝
    19.73s  <ret> 발화 (turn5 첫 프레임)
    19.92s  agent 발화 시작: <ret> 반려동물 이야기가 나온 김에, 고양이의 평균 수명은 십이세에서 십오세 정도라고 해요. 하지만 이십
    19.92s  user  발화 끝
    20.03s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.87s]: The average lifespan of a domestic cat is 12–15 years, though some cat
    27.79s  user  발화 시작: 아, 고양이도 꽤 오래 사네요. 저희 강아지는 열살이에요.
    27.79s  agent 발화 끝
    31.50s  agent 발화 시작: 네.
    31.50s  user  발화 끝
    31.72s  <ret> 발화 (turn8 첫 프레임)
    31.96s  agent 발화 시작: <ret> 열살이라면 아직 건강하게 잘 지내고 있을 거예요. [happy] 강아지들은 사람과 교감하는 걸 정
    31.96s  agent 발화 끝
    32.94s  ⚡SPAN 주입(IRRELEVANT) [d'=1.22s / d_lead=6.49s]: The current price of Brent Crude oil is $85.20 per barrel.
    38.45s  agent 발화 시작: 강아지와 함께 산책하는 것도 즐거움일 거예요.
    38.45s  agent 발화 끝
    41.23s  user  발화 시작: 그렇죠.
    41.23s  agent 발화 끝
    41.69s  user  발화 시작: 네, 정말요. 주말에는 꼭 공원에 데려가요.
    41.69s  user  발화 끝
    44.47s  agent 발화 시작: 주말에 공원 나들이는 정말 좋은 계획이네요. [curious] 혹시 요즘 아이들과 함께 할 수 있는 활동을 
    44.47s  user  발화 끝
    52.34s  user  발화 시작: 음… 아이들이랑 같이 할 만한 거 찾아보고 있어요.
    52.34s  agent 발화 끝
    55.89s  <ret> 발화 (turn14 첫 프레임)
    56.05s  agent 발화 시작: <ret> 아이들과 함께 할 수 있는 활동은 정말 많아요. [happy] 예를 들어, 집에서 간단한 요리를 
    56.05s  user  발화 끝
    56.35s  ⚡SPAN 주입 [d'=0.46s / d_lead=9.73s]: (tool result) Restaurants found: Pizza Hut (Italian, 4.2 stars), McDon
    65.78s  agent 발화 시작: 아니면, 근처에 맛있는 레스토랑을 찾아보는 것도 좋겠네요. 피자헛, 맥도날드, 서브웨이가 있답니다.
    65.78s  agent 발화 끝
    70.87s  user  발화 시작: 예.
    70.87s  agent 발화 끝
    71.34s  user  발화 시작: 레스토랑은 어디가 좋을까요?
    71.34s  user  발화 끝
    72.73s  agent 발화 시작: 아이들이 좋아하는 메뉴가 있는 곳을 선택하는 게 좋겠어요. [curious] 피자헛은 아이들이 좋아하는 피자
    72.73s  user  발화 끝
    82.67s  <ret> 발화 (turn19 첫 프레임)
    82.92s  agent 발화 시작: <ret> 아이들의 의견도 물어보면 더욱 즐거운 시간을 보낼 수 있을 거예요. 세상에서 가장 높은 산은 에베
    82.92s  agent 발화 끝
    83.57s  ⚡SPAN 주입 [d'=0.90s / d_lead=4.63s]: The highest mountain in the world is Mount Everest, with a peak elevat
    93.57s  user  발화 시작: 에베레스트 산은 정말 높네요.
    93.57s  agent 발화 끝
    95.42s  agent 발화 시작: 네, 정말 대단하죠. [surprised] 아이들에게 에베레스트 산에 대한 이야기를 들려주는 것도 좋은 경험
    95.42s  user  발화 끝
   102.37s  agent 발화 끝
