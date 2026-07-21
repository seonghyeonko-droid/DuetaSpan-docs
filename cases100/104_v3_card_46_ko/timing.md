# v3_card_46_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_card_46",
#     "name": "은서",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-09",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 21°C."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "music",
#       "text": "User likes listening to classical piano."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "learning",
#       "text": "User is learning to play guitar."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "child",
#       "text": "User has a child named Sofia, age 8."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Peruvian."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-16",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2026-06-15",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-04-19",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-01-30",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 너무 피곤해서 아무것도 하기 싫어. | S2 카페 레이어드? 이름이 예쁘네. 디저트 종류는 많아? | S3 부싼에서 괜찮은 마사지샵 추천해 줄 수 있어? | S4 아, 맞다! 병원비가 얼마였지?

     0.00s  user  발화 시작: 오늘 너무 피곤해서 아무것도 하기 싫어.
     2.08s  user  발화 끝
     2.41s  agent 발화 시작: 힘든 하루였군요. 잠시 쉬면서 재충전하는 시간을 가지세요.
     5.92s  user  발화 시작: 응.
     6.23s  user  발화 끝
     7.39s  user  발화 시작: 다음 주 화요일에 병원 검진이 있는데, 오전 여덟시 십오분에 예약했어.
     7.50s  agent 발화 끝
    11.93s  user  발화 끝
    11.99s  agent 발화 시작: 네, 기억해 둘게요.
    13.74s  agent 발화 끝
    13.75s  user  발화 시작: 그리고 십일월 이십칠일 검진 비용은 구만 오천원이야.
    17.11s  agent 발화 시작: 네, 기억해 둘게요.
    17.13s  user  발화 끝
    18.71s  agent 발화 끝
    19.15s  user  발화 시작: 모 파라가 런던 마라톤에서 몇 등 했는지 궁금해.
    21.93s  <ret> 발화 (turn8 첫 프레임)
    22.05s  agent 발화 시작: <ret> 이천십팔년 런던 마라톤에서 삼위를 했습니다. 기록은 두시간 육분 이십일초였습니다.
    22.20s  user  발화 끝
    22.82s  ⚡SPAN 주입 [d'=0.89s / d_lead=6.35s]: Mo Farah finished third in the 2018 London Marathon, completing the ra
    28.31s  user  발화 시작: 와, 삼위면 정말 잘한 거네.
    28.40s  agent 발화 끝
    30.15s  agent 발화 시작: 네, 정말 대단한 기록이죠.
    30.29s  user  발화 끝
    32.48s  user  발화 시작: 요즘 운동을 다시 시작하려고 하는데, 부싼에서 괜찮은 헬스장 추천해 줄 수 있어?
    32.50s  agent 발화 끝
    37.76s  <ret> 발화 (turn12 첫 프레임)
    37.86s  user  발화 끝
    37.96s  agent 발화 시작: <ret> 해운대에 있는 하영 피트니스 부산이 인기가 많습니다. 다양한 피트니스 수업과 장비를 갖추고 있습니
    38.36s  ⚡SPAN 주입 [d'=0.60s / d_lead=7.55s]: Hayoung Fitness Busan is a popular gym located in Haeundae, Busan, off
    45.42s  user  발화 시작: 해운대는 좀 멀리 떨어져 있는데, 서면 근처에 있는 곳은 없을까?
    45.51s  agent 발화 끝
    48.98s  <ret> 발화 (turn14 첫 프레임)
    49.54s  agent 발화 시작: <ret> 서면에 있는 비 케이 피트니스 서면이 좋은 평판을 얻고 있습니다. 개인 트레이닝 서비스와 현대적인
    49.68s  user  발화 끝
    50.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.86s]: BK Fitness Seomyeon is a well-regarded gym in Seomyeon, Busan, known f
    58.40s  agent 발화 끝
    58.57s  user  발화 시작: 아, 비 케이 피트니스 서면이 좋겠네. 가격은 어느 정도 해?
    61.74s  <ret> 발화 (turn16 첫 프레임)
    61.90s  agent 발화 시작: <ret> 비 케이 피트니스 서면의 월 회비는 팔만원부터 시작하며, 다양한 패키지 옵션을 제공합니다.
    62.12s  user  발화 끝
    62.87s  ⚡SPAN 주입 [d'=1.13s / d_lead=6.30s]: BK Fitness Seomyeon offers monthly memberships starting at 80,000 won,
    68.19s  agent 발화 끝
    68.33s  user  발화 시작: 팔만원이면 괜찮은 가격이네. 혹시 거기 근처에 맛있는 카페도 있어?
    72.58s  <ret> 발화 (turn18 첫 프레임)
    73.15s  agent 발화 시작: <ret> 서면에 있는 카페 레이어드가 케이크와 커피가 맛있기로 유명합니다.
    73.38s  user  발화 끝
    73.56s  ⚡SPAN 주입 [d'=0.98s / d_lead=4.63s]: Cafe Layered Seomyeon is a popular cafe near BK Fitness Seomyeon, know
    77.78s  agent 발화 끝
    78.25s  user  발화 시작: 카페 레이어드? 이름이 예쁘네. 디저트 종류는 많아?
    82.23s  user  발화 끝
    82.65s  agent 발화 시작: 네, 다양한 종류의 케이크와 디저트를 맛볼 수 있습니다.
    85.49s  user  발화 시작: 음.
    85.98s  user  발화 끝
    86.46s  user  발화 시작: 오늘 저녁에는 뭘 먹을까? 갑자기 고민이 되네.
    86.48s  agent 발화 끝
    89.15s  agent 발화 시작: 저녁 메뉴를 고르는 게 고민이시군요.
    89.37s  user  발화 끝
    91.79s  agent 발화 끝
    91.92s  user  발화 시작: 파스타가 먹고 싶은데, 서면 근처에 괜찮은 파스타집 있어?
    95.35s  <ret> 발화 (turn25 첫 프레임)
    95.53s  agent 발화 시작: <ret> 서면에 있는 파스타 앤 비노가 파스타와 와인 전문 이탈리아 레스토랑으로 평이 좋습니다.
    95.75s  user  발화 끝
    96.78s  ⚡SPAN 주입 [d'=1.44s / d_lead=6.30s]: Pasta & Vino Seomyeon is a highly-rated Italian restaurant in Seomyeon
   101.83s  agent 발화 끝
   101.97s  user  발화 시작: 파스타 앤 비노? 분위기는 어때?
   103.90s  agent 발화 시작: 아늑하고 로맨틱한 분위기라고 합니다.
   104.10s  user  발화 끝
   106.54s  agent 발화 끝
   106.55s  user  발화 시작: 혹시 이번 주말에 부산 근교로 당일치기 여행 갈 만한 곳 있어?
   109.94s  <ret> 발화 (turn29 첫 프레임)
   110.38s  agent 발화 시작: <ret> 영도의 태종대 공원이 아름다운 해안 경치와 산책로를 제공하며 인기 있는 여행지입니다.
   110.52s  user  발화 끝
   110.82s  ⚡SPAN 주입 [d'=0.88s / d_lead=6.07s]: Taejongdae Park in Yeongdo, Busan, offers scenic coastal views and wal
   116.45s  agent 발화 끝
   116.47s  user  발화 시작: 태종대는 가본 적 있는데, 다른 곳 없을까?
   119.37s  <ret> 발화 (turn31 첫 프레임)
   119.89s  agent 발화 시작: <ret> 태종대를 가보셨군요. 경주시는 역사 유적지와 사찰로 유명하며, 불국사와 석굴암이 있습니다.
   120.03s  user  발화 끝
   120.48s  ⚡SPAN 주입 [d'=1.10s / d_lead=7.70s]: Gyeongju, a city near Busan, is famous for its historical sites and te
   122.19s  user  발화 시작: 음.
   122.78s  user  발화 끝
   127.58s  user  발화 시작: 경주는 너무 멀리 떨어져 있잖아. 좀 더 가까운 곳 없을까?
   127.59s  agent 발화 끝
   132.26s  <ret> 발화 (turn34 첫 프레임)
   132.30s  agent 발화 시작: <ret> 경주는 조금 멀리 떨어져 있군요. 부산의 다대포 해변은 아름다운 일몰을 감상할 수 있고 피크닉과 
   132.44s  user  발화 끝
   133.68s  ⚡SPAN 주입 [d'=1.42s / d_lead=9.78s]: Dadaepo Beach in Busan offers a beautiful sunset view and is a popular
   136.96s  user  발화 시작: 어.
   137.60s  user  발화 끝
   142.08s  agent 발화 끝
   142.10s  user  발화 시작: 다대포 해변은 가봤는데, 너무 사람이 많았어.
   145.62s  agent 발화 시작: 다대포 해변은 사람이 많은 편이긴 하죠.
   145.76s  user  발화 끝
   147.65s  user  발화 시작: 응.
   148.05s  user  발화 끝
   148.62s  agent 발화 끝
   149.57s  user  발화 시작: 요즘 스트레스가 너무 심해서, 마사지라도 받으러 가야 할까 봐.
   152.04s  agent 발화 시작: 음.
   152.49s  agent 발화 끝
   153.79s  agent 발화 시작: 스트레스가 심하시군요. 마사지를 받으시는 것도 좋은 방법입니다.
   153.92s  user  발화 끝
   159.25s  agent 발화 끝
   160.65s  user  발화 시작: 부싼에서 괜찮은 마사지샵 추천해 줄 수 있어?
   163.14s  <ret> 발화 (turn43 첫 프레임)
   163.41s  agent 발화 시작: <ret> 태국 전통 마사지 부산이 정통 태국 마사지 서비스를 제공하는 곳으로 유명합니다.
   163.60s  user  발화 끝
   163.89s  ⚡SPAN 주입 [d'=0.75s / d_lead=5.70s]: Thai Traditional Massage Busan is a well-known massage shop in Busan, 
   167.54s  user  발화 시작: 응.
   167.85s  user  발화 끝
   169.11s  agent 발화 끝
   169.73s  user  발화 시작: 태국 마사지? 괜찮은가?
   171.87s  agent 발화 시작: 네, 태국 마사지는 근육 이완과 스트레스 해소에 효과적이라고 합니다.
   172.13s  user  발화 끝
   174.29s  user  발화 시작: 그래.
   174.90s  user  발화 끝
   176.88s  user  발화 시작: 아, 맞다! 다음 주 화요일에 병원 가는 날이었지. 몇 시였더라?
   176.97s  agent 발화 끝
   181.00s  user  발화 끝
   181.22s  agent 발화 시작: 다음 주 화요일 오전 여덟시 십오분에 예약하셨습니다.
   185.05s  user  발화 시작: 아, 그렇지! 여덟시 십오분이네. 고마워.
   185.19s  agent 발화 끝
   187.64s  user  발화 끝
   188.09s  agent 발화 시작: 천만에요.
   188.91s  agent 발화 끝
   189.57s  user  발화 시작: 요즘 날씨가 너무 덥다.
   190.99s  agent 발화 시작: 네, 정말 덥네요.
   191.19s  user  발화 끝
   192.00s  🃏 CARD 주입 (2400f, 누적 54턴 요약, 114f): appointment time: 오전 여덟시 십오분; appointment date: 다음 주 화요일; medical cost: 구만 오천원; daytrip pr
   192.74s  agent 발화 끝
   193.38s  user  발화 시작: 오늘 날씨는 어때?
   194.71s  <ret> 발화 (turn55 첫 프레임)
   194.96s  agent 발화 시작: <ret> 오늘 부산 날씨는 이십팔 점 오도이고, 습도는 칠십퍼센트, 바람은 시속 사 점 이킬로미터이며, 부
   195.13s  user  발화 끝
   196.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.77s]: (tool result) Busan: 28.5°C, humidity 70%, wind 4.2 km/h, partly cloud
   199.14s  user  발화 시작: 그래.
   199.91s  user  발화 끝
   203.72s  agent 발화 끝
   203.73s  user  발화 시작: 이십팔 점 오도면 꽤 덥네.
   205.86s  user  발화 끝
   206.28s  agent 발화 시작: 네, 정말 더운 날씨입니다.
   208.59s  agent 발화 끝
   209.38s  user  발화 시작: 혹시 이번 주말에 비가 올까?
   210.69s  <ret> 발화 (turn60 첫 프레임)
   210.87s  agent 발화 시작: <ret> 이번 주말 부산 날씨는 토요일에 맑고 이십구도, 일요일에 부분적으로 흐리고 삼십도입니다. 비는 오
   211.11s  user  발화 끝
   212.22s  ⚡SPAN 주입 [d'=1.53s / d_lead=8.99s]: (tool result) Busan: Saturday - Sunny, 29°C. Sunday - Partly cloudy, 3
   215.07s  user  발화 시작: 응응.
   215.71s  user  발화 끝
   219.81s  user  발화 시작: 다행이다. 비가 오면 계획이 틀어지는데.
   219.86s  agent 발화 끝
   222.59s  user  발화 끝
   222.69s  agent 발화 시작: 네, 맑은 날씨에 즐거운 주말 보내세요.
   225.78s  agent 발화 끝
   226.89s  user  발화 시작: 아, 맞다! 병원비가 얼마였지?
   229.48s  user  발화 끝
   229.85s  agent 발화 시작: 병원비는 구만 오천원이라고 말씀하셨습니다.
   233.14s  user  발화 시작: 아, 맞아. 구만 오천원이네.
   233.23s  agent 발화 끝
   234.83s  agent 발화 시작: 네, 맞습니다.
   234.93s  user  발화 끝
   236.29s  agent 발화 끝
   236.45s  user  발화 시작: 오늘 저녁에 영화 보러 갈까 하는데, 서면 근처에 상영하는 영화 있어?
   240.49s  <ret> 발화 (turn69 첫 프레임)
   240.80s  agent 발화 시작: <ret> 서면 근처에서 영화를 보시려는군요. 롯데시네마 서면에서 '메그 이: 심해의 괴수'가 상영 중입니다
   240.99s  user  발화 끝
   241.57s  ⚡SPAN 주입 [d'=1.08s / d_lead=7.09s]: Meg 2: The Trench is currently showing at Lotte Cinema Seomyeon in Bus
   247.90s  agent 발화 끝
   248.27s  user  발화 시작: 메그 이? 재미있을까?
   249.76s  agent 발화 시작: 네, 액션 영화를 좋아하신다면 재미있게 보실 수 있을 겁니다.
   249.87s  user  발화 끝
   254.39s  agent 발화 끝
   255.56s  user  발화 시작: 아, 그래? 그럼 한번 볼까.
   257.18s  agent 발화 시작: 네, 즐거운 시간 보내세요.
   257.25s  user  발화 끝
   259.34s  agent 발화 끝
   260.13s  user  발화 시작: 오늘 하루가 정말 길게 느껴지네.
   262.21s  user  발화 끝
   262.60s  agent 발화 시작: 힘든 하루였군요.
   264.03s  agent 발화 끝
   264.70s  user  발화 시작: 그래도 이렇게 이야기 나누니까 좀 나아지는 것 같아.
   267.79s  user  발화 끝
   268.05s  agent 발화 시작: 네, 제가 도움이 되었다니 기쁩니다.
   270.87s  agent 발화 끝
   270.94s  user  발화 시작: 이제 그만해야 할 것 같아.
   272.35s  agent 발화 시작: 네, 편안한 밤 보내세요.
   272.55s  user  발화 끝
   274.20s  agent 발화 끝
