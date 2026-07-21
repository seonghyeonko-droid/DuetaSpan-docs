# v3_card_48_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_card_48",
#     "name": "하찬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "streaming",
#       "text": "User subscribes to Netflix and Spotify."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "pet",
#       "text": "User has a Ragdoll cat named Miso."
#     },
#     {
#       "date": "2026-04-23",
#       "category": "bloodtype",
#       "text": "User's blood type is B+."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "plant",
#       "text": "User is growing a monstera at home."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "dish",
#       "text": "User's go-to comfort dish is margherita pizza."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "work",
#       "text": "User works as a HR manager."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "hobby",
#       "text": "User is into calligraphy."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "dislike",
#       "text": "User can't stand liver."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-13",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-04-07",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2026-03-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-02-12",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 의사 선생님 진료 예약이 삼월 이십육일 오후 두시 십오분 | S2 아, 인사이드 아웃 이요? 재밌을 것 같은데요. | S3 네, 노력해야죠. | S4 감사합니다.

     0.00s  user  발화 시작: 오늘 의사 선생님 진료 예약이 삼월 이십육일 오후 두시 십오분으로 되어 있어요. 비용은 십만 오천원이에요.
     7.68s  agent 발화 시작: 네, 기억해 둘게요. 다른 계획은 없으세요?
     7.70s  user  발화 끝
    12.17s  agent 발화 끝
    13.63s  user  발화 시작: 요즘 'Yeh Un Dino Ki Baat Hai'에 나오는 나이나 역할 배우가 누구인지 궁금해요.
    17.28s  agent 발화 시작: 네.
    18.05s  agent 발화 끝
    19.18s  user  발화 끝
    19.34s  agent 발화 시작: 아, 그 드라마에 관심이 있으시군요. 어떤 점이 궁금하신가요?
    21.21s  user  발화 시작: 네네.
    21.79s  user  발화 끝
    25.57s  agent 발화 끝
    25.68s  user  발화 시작: 배우 이름을 알고 싶어요.
    26.98s  <ret> 발화 (turn7 첫 프레임)
    27.31s  agent 발화 시작: <ret> 그 드라마에서 나이나 역할을 맡은 배우는 아시 싱이라고 합니다. 인도의 텔레비전 배우입니다.
    27.38s  user  발화 끝
    27.99s  ⚡SPAN 주입 [d'=1.01s / d_lead=8.39s]: Ashi Singh is an Indian television actress who is known for playing th
    35.69s  agent 발화 끝
    36.18s  user  발화 시작: 아, 아시 싱이군요. 네, 기억해 두겠습니다.
    39.89s  user  발화 끝
    39.98s  agent 발화 시작: 드라마를 즐겁게 시청하시길 바랍니다. 혹시 다른 드라마도 즐겨 보시나요?
    44.03s  user  발화 시작: 그렇죠.
    44.80s  user  발화 끝
    46.24s  user  발화 시작: 가끔 보는데, 요즘은 특별히 보고 있는 건 없어요.
    46.28s  agent 발화 끝
    50.12s  user  발화 끝
    50.58s  agent 발화 시작: 그렇군요. 요즘 날씨가 많이 따뜻해졌는데, 산책이라도 가보시는 건 어떠세요?
    57.66s  agent 발화 끝
    58.01s  user  발화 시작: 날씨가 좋으면 산책도 좋죠. 부산 해운대 근처에 괜찮은 카페 아세요?
    63.30s  <ret> 발화 (turn14 첫 프레임)
    63.37s  agent 발화 시작: <ret> 해운대 해변 근처에 카페 베네가 있습니다. 주소는 해운대해변로 이백칠십구번지이고, 오전 열시부터 
    63.43s  user  발화 끝
    64.51s  ⚡SPAN 주입 [d'=1.22s / d_lead=12.66s]: Cafe Bene Haeundae Beach is located at 279, Haeundaehaebyeon-ro, Haeun
    76.03s  agent 발화 끝
    76.90s  user  발화 시작: 아, 카페 베네요. 가끔 가봤어요. 좀 더 조용한 곳 없을까요?
    81.55s  agent 발화 시작: 조용한 곳을 찾으시는군요. 해운대 근처에 분위기 좋은 작은 카페들이 몇 군데 있어요.
    81.57s  user  발화 끝
    85.12s  user  발화 시작: 네네.
    85.85s  user  발화 끝
    89.23s  user  발화 시작: 추천해 주실 수 있나요?
    89.33s  agent 발화 끝
    90.57s  <ret> 발화 (turn19 첫 프레임)
    90.84s  agent 발화 시작: <ret> 해운대구에 있는 모리 하나 커피라는 작은 카페가 조용하고 커피도 맛있다고 합니다. 오전 열한시부터
    90.95s  user  발화 끝
    91.52s  ⚡SPAN 주입 [d'=0.96s / d_lead=10.43s]: Mori Hana Coffee is a small cafe located in Haeundae-gu, Busan. It is 
    97.61s  user  발화 시작: 네.
    98.00s  user  발화 끝
   101.21s  user  발화 시작: 모리 하나 커피요? 한번 가봐야겠네요.
   101.28s  agent 발화 끝
   103.89s  user  발화 끝
   103.97s  agent 발화 시작: 꼭 한번 가보세요. 마음에 드실 거예요.
   106.12s  user  발화 시작: 네.
   106.63s  user  발화 끝
   107.75s  agent 발화 끝
   109.32s  user  발화 시작: 부산에서 데이트하기 좋은 레스토랑도 추천해 주실 수 있나요?
   113.08s  <ret> 발화 (turn25 첫 프레임)
   113.63s  agent 발화 시작: <ret> 해운대구에 있는 라 보엠이라는 프랑스 레스토랑이 로맨틱한 분위기와 맛있는 프랑스 요리로 유명합니다
   113.80s  user  발화 끝
   114.35s  ⚡SPAN 주입 [d'=1.27s / d_lead=11.13s]: La Boheme is a French restaurant located in Haeundae-gu, Busan. It is 
   117.69s  user  발화 시작: 음.
   118.14s  user  발화 끝
   124.75s  user  발화 시작: 라 보엠이요. 분위기가 좋으면 좋을 것 같아요.
   124.76s  agent 발화 끝
   128.07s  agent 발화 시작: 분위기가 정말 좋아요. 기념일에 가기에도 좋을 것 같아요.
   128.20s  user  발화 끝
   133.67s  agent 발화 끝
   133.69s  user  발화 시작: 요즘 영화관에서 상영하는 영화 중에 볼 만한 게 있을까요?
   137.89s  <ret> 발화 (turn30 첫 프레임)
   137.98s  agent 발화 시작: <ret> 현재 부산 해운대 롯데시네마에서 '인사이드 아웃 이'가 상영 중입니다. 오전 열시부터 밤 열시까지
   138.10s  user  발화 끝
   139.67s  ⚡SPAN 주입 [d'=1.78s / d_lead=11.59s]: "Inside Out 2" is currently showing at Lotte Cinema Haeundae in Busan.
   149.47s  user  발화 시작: 아, 인사이드 아웃 이요? 재밌을 것 같은데요.
   149.58s  agent 발화 끝
   152.63s  user  발화 끝
   152.75s  agent 발화 시작: 평점이 높아서 많은 사람들이 재미있다고 하네요.
   157.23s  agent 발화 끝
   157.45s  user  발화 시작: 오늘 저녁 메뉴는 뭘로 할까요?
   159.87s  user  발화 끝
   159.94s  agent 발화 시작: 저녁 메뉴 고민이시군요. 혹시 특별히 드시고 싶은 음식이 있으세요?
   166.79s  agent 발화 끝
   167.22s  user  발화 시작: 글쎄요, 딱히 생각나는 건 없어요.
   169.81s  user  발화 끝
   169.85s  agent 발화 시작: 그렇군요. 근처에 맛있는 파스타집이 있는데, 한번 가보시는 건 어떠세요?
   176.66s  agent 발화 끝
   177.15s  user  발화 시작: 파스타도 좋죠. 부산역 근처에 괜찮은 파스타집 아세요?
   180.98s  <ret> 발화 (turn38 첫 프레임)
   181.51s  user  발화 끝
   181.53s  agent 발화 시작: <ret> 부산역 근처에 파스타 미아라는 이탈리아 레스토랑이 있는데, 맛있는 파스타와 피자로 유명합니다. 평
   182.37s  ⚡SPAN 주입 [d'=1.39s / d_lead=11.40s]: Pasta Mia is an Italian restaurant located near Busan Station. It is k
   192.00s  🃏 CARD 주입 (2400f, 누적 39턴 요약, 95f): appointment time: 삼월 이십육일 오후 두시 십오분 (3분 전); appointment cost: 십만 오천원 (3분 전)
   192.93s  agent 발화 끝
   193.01s  user  발화 시작: 파스타 미아요. 한번 가봐야겠네요.
   195.70s  agent 발화 시작: 꼭 한번 가보세요. 마음에 드실 거예요.
   195.79s  user  발화 끝
   197.85s  user  발화 시작: 네.
   198.29s  user  발화 끝
   199.48s  agent 발화 끝
   199.68s  user  발화 시작: 오늘 의사 선생님 진료가 몇 시였죠?
   202.01s  user  발화 끝
   202.41s  agent 발화 시작: 오늘 의사 선생님 진료는 오후 두시 십오분이었습니다.
   204.73s  user  발화 시작: 그렇죠.
   205.32s  user  발화 끝
   207.47s  agent 발화 끝
   207.95s  user  발화 시작: 아, 맞다. 오후 두시 십오분이었죠.
   210.52s  agent 발화 시작: 네, 맞습니다. 진료 잘 받으시길 바랍니다.
   210.57s  user  발화 끝
   214.85s  user  발화 시작: 감사합니다. 요즘 스트레스가 좀 심한데, 마음을 다스리는 데 도움이 되는 게 있을까요?
   214.98s  agent 발화 끝
   220.70s  user  발화 끝
   221.01s  agent 발화 시작: 스트레스가 심하시군요. 마음을 다스리는 데 도움이 되는 여러 가지 방법이 있습니다.
   229.21s  user  발화 시작: 어떤 방법들이 있나요?
   229.35s  agent 발화 끝
   230.97s  agent 발화 시작: 명상이나 요가를 해보시는 건 어떠세요?
   231.04s  user  발화 끝
   234.52s  user  발화 시작: 명상도 좋죠.
   234.62s  agent 발화 끝
   235.74s  user  발화 끝
   236.03s  agent 발화 시작: 아니면, 좋아하는 음악을 듣거나 책을 읽는 것도 도움이 될 수 있습니다.
   238.71s  user  발화 시작: 예.
   239.23s  user  발화 끝
   241.63s  agent 발화 끝
   241.85s  user  발화 시작: 음악 듣는 것도 좋아해요.
   243.72s  agent 발화 시작: 긍정적인 생각을 하려고 노력하는 것도 중요합니다.
   243.78s  user  발화 끝
   248.03s  agent 발화 끝
   248.29s  user  발화 시작: 네, 노력해야죠.
   249.48s  agent 발화 시작: 힘든 일이 있으면 언제든지 저에게 말씀해주세요.
   249.57s  user  발화 끝
   254.68s  agent 발화 끝
   254.81s  user  발화 시작: 감사합니다.
   255.65s  agent 발화 시작: 도움이 되어 기쁩니다.
   255.70s  user  발화 끝
   257.53s  user  발화 시작: 부산에서 주말에 갈 만한 곳 추천해 주실 수 있나요?
   257.91s  agent 발화 끝
   260.47s  <ret> 발화 (turn61 첫 프레임)
   261.06s  agent 발화 시작: <ret> 영도구에 있는 태종대 공원은 아름다운 바다 전망을 자랑하는 관광 명소입니다.
   261.19s  user  발화 끝
   262.04s  ⚡SPAN 주입 [d'=1.57s / d_lead=7.18s]: Taejongdae Park is a scenic park located in Yeongdo-gu, Busan. It offe
   265.19s  user  발화 시작: 예.
   265.58s  user  발화 끝
   268.24s  agent 발화 끝
   269.30s  user  발화 시작: 태종대 공원이요. 가본 적은 없는데, 한번 가봐야겠네요.
   273.72s  agent 발화 시작: 꼭 한번 가보세요. 정말 아름다운 곳입니다.
   273.82s  user  발화 끝
   275.88s  user  발화 시작: 네.
   276.45s  user  발화 끝
   278.05s  user  발화 시작: 오늘 저녁에 영화를 볼까 하는데, 어떤 영화가 좋을까요?
   278.15s  agent 발화 끝
   281.62s  <ret> 발화 (turn67 첫 프레임)
   281.76s  agent 발화 시작: <ret> 현재 씨 지 브이 부산 해운대에서 '배드 보이즈: 라이드 오어 다이'가 상영 중입니다. 오전 열한
   281.93s  user  발화 끝
   282.67s  ⚡SPAN 주입 [d'=1.04s / d_lead=12.38s]: "Bad Boys: Ride or Die" is currently showing at CGV Busan Haeundae. Sh
   294.14s  agent 발화 끝
   294.14s  user  발화 시작: 배드 보이즈요? 액션 영화 좋아해요.
   297.09s  user  발화 끝
   297.24s  agent 발화 시작: 액션 영화를 좋아하시는군요. 재미있게 보실 수 있을 거예요.
   301.07s  user  발화 시작: 네네.
   301.85s  user  발화 끝
   303.10s  agent 발화 끝
   303.83s  user  발화 시작: 오늘 의사 선생님 진료비가 얼마였죠?
   306.86s  agent 발화 시작: 오늘 의사 선생님 진료비는 십만 오천원이었습니다.
   306.90s  user  발화 끝
   311.53s  agent 발화 끝
   311.70s  user  발화 시작: 아, 맞다. 십만 오천원이 맞았죠.
   314.81s  agent 발화 시작: 네, 맞습니다. 건강 관리에 유의하세요.
   314.82s  user  발화 끝
   319.74s  agent 발화 끝
   320.96s  user  발화 시작: 감사합니다. 요즘 너무 피곤한데, 잠을 잘 자는 방법이 있을까요?
   325.47s  user  발화 끝
   325.98s  agent 발화 시작: 잠을 잘 자는 방법에 대해 궁금하시군요.
   329.77s  agent 발화 끝
   330.19s  user  발화 시작: 네, 잠을 잘 자고 싶어요.
   332.38s  agent 발화 시작: 잠들기 전에 따뜻한 물로 샤워를 하거나, 따뜻한 우유를 마시는 것도 도움이 될 수 있습니다.
   332.40s  user  발화 끝
   341.10s  agent 발화 끝
   341.15s  user  발화 시작: 따뜻한 우유도 좋죠.
   342.73s  user  발화 끝
   343.14s  agent 발화 시작: 잠자리에 들기 전에 스마트폰이나 컴퓨터 사용을 자제하는 것도 중요합니다.
   349.16s  user  발화 시작: 네, 노력해야죠.
   349.25s  agent 발화 끝
   350.72s  user  발화 끝
   351.18s  agent 발화 시작: 편안한 잠자리를 만드시길 바랍니다.
   354.67s  agent 발화 끝
   354.82s  user  발화 시작: 감사합니다.
   355.69s  agent 발화 시작: 도움이 되어 기쁩니다.
   355.76s  user  발화 끝
   357.81s  agent 발화 끝
   358.18s  user  발화 시작: 부산에서 분위기 좋은 호텔 추천해 주실 수 있나요?
   361.44s  <ret> 발화 (turn86 첫 프레임)
   361.71s  agent 발화 시작: <ret> 해운대구에 있는 파크 하얏트 부산은 아름다운 바다 전망과 세계적인 수준의 시설을 갖춘 고급 호텔입
   361.80s  user  발화 끝
   362.87s  ⚡SPAN 주입 [d'=1.42s / d_lead=9.49s]: Park Hyatt Busan is a luxury hotel located in Haeundae-gu, Busan. It o
   368.03s  user  발화 시작: 네.
   368.71s  user  발화 끝
   371.20s  agent 발화 끝
   371.51s  user  발화 시작: 파크 하얏트 부산이요. 비쌀 것 같은데요.
   374.69s  agent 발화 시작: 고급 호텔이라 가격은 비싼 편입니다.
   374.75s  user  발화 끝
   378.18s  user  발화 시작: 좀 더 저렴한 호텔은 없을까요?
   378.21s  agent 발화 끝
   380.14s  <ret> 발화 (turn91 첫 프레임)
   380.49s  user  발화 끝
   380.55s  agent 발화 시작: <ret> 해운대구에 있는 호텔 엘씨티는 편안한 숙박 시설과 해변까지 편리하게 접근할 수 있는 중간 가격대의
   381.91s  ⚡SPAN 주입 [d'=1.77s / d_lead=9.18s]: Hotel LCT is a mid-range hotel located in Haeundae-gu, Busan. It offer
   384.00s  🃏 CARD 주입 (4800f, 누적 92턴 요약, 75f): appointment time: 오후 두시 십오분 (6분 전); appointment cost: 십만 오천원 (6분 전)
   389.73s  agent 발화 끝
   390.80s  user  발화 시작: 호텔 엘씨티요. 괜찮겠네요.
   393.43s  user  발화 끝
   393.65s  agent 발화 시작: 가격도 합리적이고, 위치도 좋아서 괜찮습니다.
   398.40s  agent 발화 끝
   398.45s  user  발화 시작: 부산에서 맛있는 커피를 마실 수 있는 곳은 어디일까요?
   400.29s  agent 발화 시작: 네.
   401.06s  agent 발화 끝
   402.39s  user  발화 끝
   402.46s  <ret> 발화 (turn96 첫 프레임)
   402.46s  agent 발화 시작: <ret> 부산에 있는 앤트러사이트 커피 로스터스는 고품질 커피와 세련된 인테리어로 유명한 인기 있는 커피숍
   403.64s  ⚡SPAN 주입 [d'=1.18s / d_lead=8.52s]: Anthracite Coffee Roasters is a popular coffee shop located in Busan. 
   408.73s  user  발화 시작: 네.
   409.40s  user  발화 끝
   410.99s  agent 발화 끝
   411.94s  user  발화 시작: 앤트러사이트 커피 로스터스요. 한번 가봐야겠네요.
   416.10s  agent 발화 시작: 꼭 한번 가보세요. 커피 맛이 정말 좋습니다.
   416.13s  user  발화 끝
   419.86s  user  발화 시작: 네.
   420.30s  user  발화 끝
   421.13s  user  발화 시작: 오늘 저녁 메뉴는 뭘로 할까요? —
   421.18s  agent 발화 끝
   423.65s  user  발화 끝
   423.67s  user  발화 시작: … 혹시 근처에 맛있는 곱창집 아세요?
   426.27s  <ret> 발화 (turn103 첫 프레임)
   426.56s  agent 발화 시작: <ret> 네, 해운대 근처에 맛있는 곱창집이 몇 군데 있습니다.
   426.59s  user  발화 끝
   427.65s  ⚡SPAN 주입 [d'=1.38s / d_lead=5.37s]: Gopchang Story Haeundae is a popular Korean BBQ restaurant specializin
   431.93s  agent 발화 끝
   431.98s  agent 발화 시작: 해운대구에 있는 곱창스토리 해운대점이 곱창 전문점으로 인기가 많습니다.
   438.63s  user  발화 시작: 곱창스토리 해운대점이요. 한번 가봐야겠네요.
   438.69s  agent 발화 끝
   442.33s  agent 발화 시작: 꼭 한번 가보세요. 곱창 맛이 정말 좋습니다.
   442.48s  user  발화 끝
   447.40s  user  발화 시작: 감사합니다.
   447.49s  agent 발화 끝
   448.36s  user  발화 끝
   448.43s  agent 발화 시작: 도움이 되어 기쁩니다. 오늘 하루도 즐겁게 보내세요.
   453.64s  agent 발화 끝
