# v3_card_46_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_card_46",
#     "name": "라서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "car",
#       "text": "User drives a 2022 Volkswagen Golf."
#     },
#     {
#       "date": "2026-05-13",
#       "category": "medication",
#       "text": "User takes a vitamin D supplement."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "child",
#       "text": "User has a child named Rin, age 15."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "airline",
#       "text": "User usually flies with Emirates."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "commute",
#       "text": "User works from home."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "wake",
#       "text": "User usually wakes up close to 9am after night shifts."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "learning",
#       "text": "User is studying for a driving test."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "allergy",
#       "text": "User is allergic to eggs."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-29",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-04-11",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 다음 주에 건강검진 예약을 좀 하려고 하는데, 사월 이일 오후 | S2 아, 운석이군요. 이름이 어렵네요. | S3 재료는 얼마나 필요한가요? | S4 네, 서울 근교에 괜찮은 곳 있으면 추천해 주세요.

     0.00s  user  발화 시작: 다음 주에 건강검진 예약을 좀 하려고 하는데, 사월 이일 오후 여섯시 십오분에 가능한지 알아봐 주시겠어요?
     6.95s  user  발화 끝
     7.36s  agent 발화 시작: 네, 알겠습니다. 건강검진 예약 확인을 도와드릴게요.
    12.08s  agent 발화 끝
    12.49s  user  발화 시작: 그리고 검진 비용은 이만 오천원이었던 것 같아요.
    15.18s  agent 발화 시작: 네, 이만 오천원이라고 말씀하셨네요. 확인해 드릴게요.
    15.25s  user  발화 끝
    19.66s  agent 발화 끝
    20.05s  user  발화 시작: 요즘 회사 일이 너무 바빠서 스트레스가 장난 아니에요. 주말에도 계속 일이 밀려 있어서…
    25.71s  user  발화 끝
    25.75s  agent 발화 시작: [sigh] 회사 일이 많이 힘드시군요. 주말까지 일하시는 건 정말 힘드실 텐데요. 혹시 스트레스 해소를 위
    29.29s  user  발화 시작: 아.
    29.96s  user  발화 끝
    35.07s  agent 발화 끝
    35.82s  user  발화 시작: 글쎄요… 딱히 하는 건 없어요. 그냥 친구들 만나서 커피라도 마시면서 얘기하는 정도예요.
    41.37s  user  발화 끝
    41.40s  agent 발화 시작: 친구분들과의 만남은 좋은 방법이죠. 잠깐의 휴식과 대화가 스트레스 해소에 도움이 될 수 있어요.
    44.79s  user  발화 시작: 네.
    45.43s  user  발화 끝
    48.75s  user  발화 시작: 맞아요. 근데 요즘 친구들도 다들 바빠서 자주 만나기도 어려워졌어요.
    48.87s  agent 발화 끝
    52.73s  agent 발화 시작: [curious] 그러시군요. 주변에 편하게 쉴 수 있는 공간이 있다면 좋겠지만… 혹시 서울에서 조용한 카페
    52.92s  user  발화 끝
    61.52s  user  발화 시작: 음… 서울에서 조용한 카페요? 좋은 생각이에요. 한번 알아봐 주세요.
    61.53s  agent 발화 끝
    64.63s  agent 발화 시작: 예.
    65.13s  agent 발화 끝
    66.05s  user  발화 끝
    66.09s  <ret> 발화 (turn14 첫 프레임)
    66.16s  agent 발화 시작: <ret> 서울에서 조용한 카페를 찾으신다면, 서울숲 근처에 예쁜 카페들이 많이 있어요. 서울숲은 생태, 문
    66.85s  ⚡SPAN 주입 [d'=0.77s / d_lead=10.53s]: Seoul Forest is a large park in Seongdong-gu, Seoul, South Korea, offe
    69.45s  user  발화 시작: 네.
    69.94s  user  발화 끝
    76.69s  agent 발화 끝
    77.97s  user  발화 시작: 서울숲 근처요? 거기는 처음 가보는데… 어떤 분위기인가요?
    82.25s  agent 발화 시작: 서울숲은 자연과 어우러진 분위기가 아주 좋아요. 산책로도 잘 되어 있고, 다양한 식물들을 구경할 수 있어요.
    82.26s  user  발화 끝
    90.55s  agent 발화 끝
    91.40s  user  발화 시작: 듣기만 해도 힐링이 되는 것 같아요. 주말에 꼭 한번 가봐야겠어요.
    95.56s  user  발화 끝
    95.58s  agent 발화 시작: [happy] 그럼 주말에 서울숲에 방문하셔서 편안한 시간을 보내시길 바랍니다.
    97.89s  user  발화 시작: 아.
    98.52s  user  발화 끝
   100.00s  user  발화 시작: 아, 그런데 혹시 유성운석이 지구 표면에 떨어지면 뭐라고 부르는지 아세요?
   100.12s  agent 발화 끝
   104.12s  <ret> 발화 (turn22 첫 프레임)
   104.28s  agent 발화 시작: <ret> 유성운석이 지구 표면에 떨어지면 뭐라고 부르는지 궁금하시군요.
   104.53s  user  발화 끝
   106.04s  ⚡SPAN 주입 [d'=1.91s / d_lead=4.63s]: A meteoroid that survives its passage through the Earth's atmosphere a
   108.78s  agent 발화 시작: 유성운석이 지구 대기를 통과해 지구 표면에 충돌하면 운석이라고 부릅니다.
   108.91s  agent 발화 끝
   111.42s  user  발화 시작: 네.
   112.05s  user  발화 끝
   114.19s  agent 발화 끝
   115.08s  user  발화 시작: 아, 운석이군요. 이름이 어렵네요.
   117.56s  agent 발화 시작: 이름이 조금 어렵긴 하죠. 하지만 운석은 우주에서 온 특별한 존재니까요.
   117.66s  user  발화 끝
   122.93s  agent 발화 끝
   123.60s  user  발화 시작: 그러네요. 우주에서 온 특별한 존재라… 신기하네요.
   127.16s  user  발화 끝
   127.22s  agent 발화 시작: [surprised] 우주에 대한 호기심은 끝이 없죠. 혹시 우주 관련 다큐멘터리나 영화를 좋아하시나요?
   132.98s  user  발화 시작: 네, 우주 다큐멘터리 정말 좋아해요. 특히 코스모스는 정말 인상 깊었어요.
   133.01s  agent 발화 끝
   137.84s  user  발화 끝
   137.86s  agent 발화 시작: 코스모스는 정말 유명하죠. 저도 한 번 봐야겠네요.
   140.28s  user  발화 시작: 네.
   140.73s  user  발화 끝
   141.80s  agent 발화 끝
   142.57s  user  발화 시작: 강추합니다! 시간 되시면 꼭 보세요.
   144.85s  agent 발화 시작: 네, 시간 나면 꼭 보겠습니다. 혹시 다른 관심 분야가 있으신가요?
   145.02s  user  발화 끝
   149.66s  user  발화 시작: 음… 요즘은 요리에 관심이 좀 생겼어요.
   149.72s  agent 발화 끝
   153.08s  user  발화 끝
   153.13s  agent 발화 시작: 요리에 관심이 생기셨군요. 어떤 요리를 만들어 보고 싶으신가요?
   158.28s  user  발화 시작: 특별히 정해둔 건 없는데… 간단한 파스타나 샐러드 같은 거요.
   158.31s  agent 발화 끝
   162.28s  agent 발화 시작: 간단한 파스타나 샐러드는 집에서도 쉽게 만들 수 있죠. 레시피를 찾아드릴까요?
   162.44s  user  발화 끝
   167.91s  user  발화 시작: 네, 파스타 레시피 좀 찾아주세요.
   168.07s  agent 발화 끝
   169.77s  <ret> 발화 (turn39 첫 프레임)
   170.20s  agent 발화 시작: <ret> 간단한 파스타 레시피로는 스파게티 알리오 올리오가 있어요. 마늘, 올리브 오일, 페페론치노, 파슬
   170.31s  user  발화 끝
   170.64s  ⚡SPAN 주입 [d'=0.88s / d_lead=11.69s]: Spaghetti aglio e olio is a classic Italian pasta dish made with garli
   181.89s  agent 발화 끝
   182.01s  user  발화 시작: 스파게티 알리오 올리오요? 맛있겠네요.
   185.25s  user  발화 끝
   185.34s  agent 발화 시작: 정말 맛있죠. 간단하면서도 풍미가 좋아서 많은 사람들이 좋아하는 요리입니다.
   191.82s  user  발화 시작: 재료는 얼마나 필요한가요?
   191.87s  agent 발화 끝
   192.00s  🃏 CARD 주입 (2400f, 누적 43턴 요약, 128f): appointment time: 사월 이일 오후 여섯시 십오분; exam cost: 이만 오천원; preference documentary title: 코스모스;
   193.71s  user  발화 끝
   193.74s  agent 발화 시작: 스파게티 일 공 공 지, 마늘 사쪽, 올리브 오일 사분의 일컵, 페페론치노 두개, 파슬리 약간이 필요합니다.
   199.30s  user  발화 시작: 네.
   199.79s  user  발화 끝
   202.50s  agent 발화 끝
   203.48s  user  발화 시작: 간단하네요. 주말에 한번 만들어 봐야겠어요.
   206.21s  agent 발화 시작: [happy] 그럼 주말에 맛있는 스파게티 알리오 올리오를 만들어 드세요.
   206.25s  user  발화 끝
   209.80s  user  발화 시작: 아, 그런데 갑자기 생각났는데… 혹시 제가 전에 말씀드렸던 건강검진 예약 시간 기억하세요?
   210.00s  agent 발화 끝
   216.38s  agent 발화 시작: 건강검진 예약 시간을 다시 여쭤보셨네요.
   216.46s  user  발화 끝
   219.20s  agent 발화 시작: 사월 이일 오후 여섯시 십오분이라고 말씀하셨습니다.
   219.28s  agent 발화 끝
   222.90s  agent 발화 끝
   223.79s  user  발화 시작: 아, 맞아요. 감사합니다.
   225.40s  user  발화 끝
   225.41s  agent 발화 시작: 천만에요.
   226.46s  agent 발화 끝
   228.10s  user  발화 시작: 요즘 날씨가 너무 좋아서 기분이 좋아져요.
   230.73s  <ret> 발화 (turn53 첫 프레임)
   230.88s  agent 발화 시작: <ret> 오늘 서울 날씨는 맑고 최고 기온은 이십이도, 최저 기온은 십이도입니다.
   231.01s  user  발화 끝
   231.84s  ⚡SPAN 주입 [d'=1.10s / d_lead=5.47s]: The weather in Seoul, South Korea today is sunny with a high of 22°C a
   232.85s  user  발화 시작: 네.
   233.49s  user  발화 끝
   236.35s  agent 발화 끝
   236.89s  user  발화 시작: 이십이도라니, 정말 따뜻하네요.
   239.18s  agent 발화 시작: 네, 정말 따뜻하죠. 야외 활동하기 좋은 날씨입니다.
   239.28s  user  발화 끝
   241.54s  user  발화 시작: 네.
   242.09s  user  발화 끝
   243.80s  user  발화 시작: 주말에는 어디로 놀러 갈까 고민 중인데…
   243.81s  agent 발화 끝
   246.61s  user  발화 끝
   246.97s  agent 발화 시작: 주말에 어디로 놀러 가실지 고민이시군요. 혹시 특별히 가고 싶은 곳이 있으신가요?
   253.00s  agent 발화 끝
   253.75s  user  발화 시작: 음… 아직 딱히 정해둔 곳은 없어요. 그냥 가까운 곳으로 가고 싶어요.
   258.31s  agent 발화 시작: 가까운 곳으로 가고 싶으시군요. 서울 근교에 예쁜 곳들이 많으니 한번 알아봐 드릴까요?
   258.46s  user  발화 끝
   261.68s  user  발화 시작: 예.
   262.22s  user  발화 끝
   264.63s  user  발화 시작: 네, 서울 근교에 괜찮은 곳 있으면 추천해 주세요.
   264.65s  agent 발화 끝
   267.59s  <ret> 발화 (turn64 첫 프레임)
   267.76s  agent 발화 시작: <ret> 서울 근교에는 남이섬이 유명한 관광지입니다. 아름다운 경치와 나무가 빽빽한 길로 유명합니다.
   267.78s  user  발화 끝
   268.27s  ⚡SPAN 주입 [d'=0.68s / d_lead=7.18s]: Nami Island is a popular tourist destination near Seoul, South Korea, 
   270.74s  user  발화 시작: 네.
   271.37s  user  발화 끝
   274.94s  agent 발화 끝
   275.14s  user  발화 시작: 남이섬이요? 거기는 가본 적이 없는데…
   277.73s  user  발화 끝
   278.23s  agent 발화 시작: 남이섬은 처음 가시는 분들도 많이 찾는 곳이에요. 아름다운 자연을 만끽할 수 있습니다.
   282.34s  user  발화 시작: 아.
   282.84s  user  발화 끝
   284.99s  user  발화 시작: 한번 가보고 싶네요. 주말에 남이섬에 가는 방법 좀 알아봐 주세요.
   285.00s  agent 발화 끝
   287.75s  agent 발화 시작: 네.
   288.25s  agent 발화 끝
   288.84s  <ret> 발화 (turn71 첫 프레임)
   288.85s  agent 발화 시작: <ret> 서울에서 남이섬에 가려면 지하철을 타고 가평역으로 가서 페리나 아이 티 엑스-청춘 열차를 타고 섬
   289.01s  user  발화 끝
   289.95s  ⚡SPAN 주입 [d'=1.10s / d_lead=8.53s]: To get to Nami Island from Seoul, take the subway to Gapyeong Station 
   294.74s  user  발화 시작: 예.
   295.09s  user  발화 끝
   297.38s  agent 발화 끝
   297.77s  user  발화 시작: 페리나 아이 티 엑스-청춘 열차요? 어떤 게 더 편할까요?
   302.13s  agent 발화 시작: 아이 티 엑스-청춘 열차가 조금 더 빠르고 편안합니다.
   302.27s  user  발화 끝
   306.07s  agent 발화 끝
   306.19s  user  발화 시작: 아, 그렇군요. 아이 티 엑스-청춘 열차를 타는 게 좋겠네요.
   309.89s  user  발화 끝
   310.00s  agent 발화 시작: 네, 아이 티 엑스-청춘 열차를 타시면 더 편하게 남이섬에 갈 수 있습니다.
   315.27s  agent 발화 끝
   316.11s  user  발화 시작: 혹시 제가 예전에 말씀드렸던 검진 비용이 얼마였죠?
   319.35s  user  발화 끝
   319.70s  agent 발화 시작: 검진 비용을 다시 여쭤보셨네요.
   321.93s  agent 발화 시작: 이만 오천원이라고 말씀하셨습니다.
   321.96s  agent 발화 끝
   324.46s  agent 발화 끝
   324.54s  user  발화 시작: 아, 맞아요. 감사합니다.
   326.08s  agent 발화 시작: 천만에요.
   326.14s  user  발화 끝
   327.09s  agent 발화 끝
   327.28s  user  발화 시작: 음… 오늘은 딱히 더 궁금한 건 없어요.
   330.28s  agent 발화 시작: 네, 알겠습니다. 그럼 좋은 하루 보내세요.
   330.37s  user  발화 끝
   334.02s  agent 발화 끝
